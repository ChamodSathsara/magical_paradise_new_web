export type FaqCategory = {
  category: string;
  items: {question: string;answer: string;}[];
};

export const FAQS: FaqCategory[] = [
{
  category: 'Planning & Booking',
  items: [
  {
    question: 'How far in advance should I book my trip?',
    answer:
    'We recommend booking three to six months ahead for travel during the December–April peak season, especially for honeymoon villas and hill-country heritage properties. For shoulder seasons, six to eight weeks is usually comfortable. Last-minute requests are always welcome — we hold allocations with many of our partner hotels.'
  },
  {
    question: 'Can I customise any of the listed packages?',
    answer:
    'Every package on this site is a starting point. We routinely adjust the pace, swap hotels, add or remove destinations, and extend trips with a Maldives stay. Tell us your dates, interests and budget and we will send a tailored itinerary within 24 hours.'
  },
  {
    question: 'What is the best time of year to visit Sri Lanka?',
    answer:
    'Sri Lanka has two monsoons, so there is always a good coast. December to April is ideal for the south and west coasts, the Cultural Triangle and hill country. May to September suits the east coast — Arugam Bay, Trincomalee and Nilaveli — as well as Wilpattu and Anuradhapura.'
  },
  {
    question: 'Do you cater to solo travellers, families, and large groups?',
    answer:
    'Yes. We design trips for solo travellers (with particular attention to safety and comfort), multi-generational families with young children, and groups of up to 60 guests for corporate retreats and celebrations.'
  }]

},
{
  category: 'Payments',
  items: [
  {
    question: 'What payment methods do you accept?',
    answer:
    'We accept international bank transfers and all major credit cards (Visa, Mastercard, Amex) through a secure payment gateway. Prices can be quoted in USD, EUR, GBP or LKR.'
  },
  {
    question: 'Do I need to pay a deposit, and how much?',
    answer:
    'A 25% deposit confirms your booking and secures hotel allocations. The balance is due 30 days before arrival. Peak-season villa bookings may require a larger deposit, which we always confirm in writing first.'
  },
  {
    question: 'Is my payment protected if my trip is cancelled?',
    answer:
    'Our cancellation tiers are set out in full in our Booking, Payment & Cancellation Policy. We strongly recommend comprehensive travel insurance, and in cases of force majeure we will always work with you to reschedule rather than forfeit.'
  }]

},
{
  category: 'Travel Documents',
  items: [
  {
    question: 'Do I need a visa to enter Sri Lanka?',
    answer:
    'Most nationalities require an Electronic Travel Authorization (ETA) before arrival. It is applied for online and typically approved within 24–48 hours. Our team can guide you through the process step by step.'
  },
  {
    question: 'What is the Sri Lanka Electronic Travel Authorization (ETA)?',
    answer:
    'The ETA is an online pre-approval for short visits, usually valid for a 30-day double-entry stay. Apply through the official Department of Immigration & Emigration portal and carry a printed copy of your approval notice.'
  },
  {
    question: 'What are the passport validity requirements?',
    answer:
    'Your passport must be valid for at least six months from your date of arrival, with at least two blank pages for entry stamps.'
  }]

},
{
  category: 'During Your Trip',
  items: [
  {
    question: 'Will I have a dedicated driver/guide for my whole trip?',
    answer:
    'Yes. One chauffeur guide accompanies you for the full itinerary, which means continuity, local insight and someone who quickly learns your preferences. National park safaris use specialist park jeeps and trackers.'
  },
  {
    question: 'What happens if there is a medical emergency during the tour?',
    answer:
    'Our operations desk is staffed 24/7. Your guide carries a first aid kit and we maintain direct lines to private hospitals in Colombo, Kandy and Galle, with rapid transfer arranged where needed.'
  },
  {
    question: 'Is Wi-Fi and mobile data easily available across Sri Lanka?',
    answer:
    'Wi-Fi is standard in hotels island-wide, and 4G coverage is strong outside remote park interiors. We can arrange a local SIM card on arrival at the airport.'
  },
  {
    question: 'What should I pack for a Sri Lanka holiday?',
    answer:
    'Light breathable clothing, modest cover-ups for temple visits, sturdy walking shoes, sun protection, insect repellent, and one warm layer for the hill country where nights fall to 10–14°C.'
  }]

},
{
  category: 'Sustainability & Safety',
  items: [
  {
    question: 'What safety measures are in place for solo female travellers?',
    answer:
    'Solo female guests travel with vetted, long-standing chauffeur guides, stay in properties we know personally, and receive a direct line to a named coordinator for the duration of the trip.'
  },
  {
    question: 'How does Magical Paradise support local communities?',
    answer:
    'We employ local guides and drivers on fair, year-round terms, favour family-run and community-owned accommodation where quality allows, and build artisan village visits into itineraries so spending reaches makers directly.'
  },
  {
    question: 'Are your wildlife safaris ethical and eco-friendly?',
    answer:
    'We operate a strict no-crowding, no-baiting, no-off-track policy, cap jeep numbers at sightings, and refuse any activity involving elephant riding or captive wildlife interaction.'
  }]

},
{
  category: 'Maldives Extension',
  items: [
  {
    question: 'Can I add a Maldives stay to any Sri Lanka package?',
    answer:
    'Yes — every Sri Lanka itinerary can be extended with a 3, 5 or 7-night Maldives stay. Twin-centre holidays are among our most requested formats.'
  },
  {
    question: 'How do I get from Sri Lanka to the Maldives?',
    answer:
    'Direct flights from Colombo to Malé take approximately 90 minutes. From Malé, your resort is reached by speedboat, domestic flight or seaplane, all of which we arrange as part of your package.'
  }]

}];