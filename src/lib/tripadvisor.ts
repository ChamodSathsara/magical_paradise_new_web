import { TESTIMONIALS } from '../data/site';

export type DisplayReview = {
  id: string;
  quote: string;
  title?: string;
  name: string;
  location: string;
  tripType: string;
  rating: number;
  publishedDate?: string;
  url?: string;
  live: boolean;
};

const asRecord = (value: unknown): Record<string, unknown> => value && typeof value === 'object' ? value as Record<string, unknown> : {};
const asText = (...values: unknown[]) => values.find(value => typeof value === 'string' && value.trim()) as string | undefined;

function fallbackReviews(): DisplayReview[] {
  return TESTIMONIALS.map((review, index) => ({ id: `fallback-${index}`, ...review, rating: 5, live: false }));
}

export async function getTripadvisorReviews(): Promise<DisplayReview[]> {
  const apiKey = process.env.TRIPADVISOR_API_KEY;
  const locationId = process.env.TRIPADVISOR_LOCATION_ID || '17721017';
  if (!apiKey) return fallbackReviews();

  try {
    const response = await fetch(`https://terra.tripadvisor.com/api/locations/${locationId}/reviews?language=en`, {
      headers: { 'x-api-key': apiKey, accept: 'application/json' },
      next: { revalidate: 60 * 60 * 24 * 7, tags: ['tripadvisor-reviews'] },
    });
    if (!response.ok) throw new Error(`Tripadvisor API returned ${response.status}`);
    const payload = asRecord(await response.json());
    const rows = Array.isArray(payload.data) ? payload.data : Array.isArray(payload.reviews) ? payload.reviews : [];
    const reviews = rows.slice(0, 6).map((raw, index): DisplayReview | null => {
      const item = asRecord(raw);
      const reviewer = asRecord(item.reviewer || item.user);
      const quote = asText(item.text, item.body, item.review_text);
      if (!quote) return null;
      const ratingValue = Number(item.rating ?? item.overall_rating ?? 5);
      return {
        id: String(item.id ?? item.review_id ?? `tripadvisor-${index}`),
        quote,
        title: asText(item.title, item.headline),
        name: asText(reviewer.display_name, reviewer.username, reviewer.name, item.author_name) || 'Tripadvisor traveler',
        location: asText(reviewer.location, reviewer.hometown, item.user_location) || 'Verified traveler',
        tripType: asText(item.trip_type, item.travel_type) || 'Sri Lanka journey',
        rating: Number.isFinite(ratingValue) ? Math.min(5, Math.max(1, ratingValue)) : 5,
        publishedDate: asText(item.published_date, item.created_at, item.review_date),
        url: asText(item.url, item.web_url),
        live: true,
      };
    }).filter((review): review is DisplayReview => Boolean(review));
    return reviews.length ? reviews : fallbackReviews();
  } catch (error) {
    console.error('Unable to refresh Tripadvisor reviews:', error);
    return fallbackReviews();
  }
}
