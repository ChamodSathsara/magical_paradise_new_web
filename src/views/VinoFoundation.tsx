import Image from 'next/image';
import Link from 'next/link';
import { HeartIcon } from 'lucide-react';
import { PageHero } from '../components/ui/PageHero';
import { Reveal } from '../components/ui/Reveal';
import { SectionHeading } from '../components/ui/SectionHeading';

const PORTRAITS = ['her.jpg', 'her2.jpg', 'her3.jpg', 'her4.jpg'];
const PROJECT_IMAGES = [
  '2408852f-e87c-4499-a3f7-22b850828253.jpg', '30e010b1-2b6c-4f87-81a5-d45d39aae23c.jpg',
  '3aaa188a-cac8-4da0-93ad-bc14a5dedf10.jpg', '8de9dae7-2ef0-4497-8b69-866058baec8a.jpg',
  'b8af5c40-7ce3-4d08-bf66-277210cc8cd0.jpg', 'c15d1956-f6e5-4a1c-826d-779c4b57ce48.jpg',
  'ea1a6cfb-957c-4ec6-8973-1ea791b42998.jpg', 'fde84b0e-681a-4cc6-bbd3-09d72e9f4537.jpg',
];

export function VinoFoundation() {
  return <>
    <PageHero eyebrow="Philanthropy" title="Vino Foundation" subtitle="Where journeys create impact." image="/vinoFoundation/projectImg/2408852f-e87c-4499-a3f7-22b850828253.jpg" imageAlt="Sri Lanka landscape representing journeys that create impact" />
    <section className="bg-ivory py-20 lg:py-28"><div className="mx-auto max-w-4xl px-6 text-center"><Reveal>
      <HeartIcon className="mx-auto h-10 w-10 text-gold-dark" strokeWidth={1.3}/><h2 className="mt-5 font-serif text-4xl text-jungle sm:text-5xl">A legacy of kindness</h2>
      <div className="mt-7 space-y-5 text-[15px] leading-8 text-jungle-muted sm:text-base"><p>At Magical Paradise, we believe true success is measured not only by the experiences we create for travelers, but also by the positive impact we leave behind.</p><p>In loving memory of <strong className="text-jungle">Janeandra Vinodi Jayawardene—our dearest sister, Vinodi</strong>—whose compassion and kindness continue to inspire us, we established the Vino Foundation: the heart of our community and humanitarian initiatives.</p><p>Through the Foundation, we support underprivileged communities across Sri Lanka through education, healthcare and sustainable livelihood programs—spreading kindness and uplifting lives, one act of goodness at a time.</p></div>
    </Reveal></div></section>
    <section className="bg-sand py-20 lg:py-28"><div className="mx-auto max-w-content px-6"><SectionHeading eyebrow="In Loving Memory" title="Vinodi — The Heart Behind Vino Foundation"/><div className="mt-12 grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
      <Reveal><div className="grid grid-cols-2 gap-4">{PORTRAITS.map((name,i)=><div key={name} className="relative aspect-square overflow-hidden rounded-lg shadow-card"><Image src={`/vinoFoundation/vinodisImg/${name}`} alt={`Vinodi Jayawardene portrait ${i+1}`} fill sizes="220px" className="object-cover"/></div>)}</div></Reveal>
      <Reveal delay={.08}><div className="space-y-4 text-[15px] leading-8 text-jungle-muted"><p>Vinodi was not only family—she was the guiding light behind the journey of Magical Paradise. A beloved first cousin and elder sister to Amami and Kalika, and a sister by heart to Ramona, she was a mentor, confidante and problem-solver who believed in us before we fully believed in ourselves.</p><p>An accomplished educator and lecturer, she inspired young minds through kindness, warmth and compassionate leadership. From the beginning, her guidance helped us build Magical Paradise with purpose, and she proudly stood with us at our early international milestone, Arabian Travel Market Dubai 2023.</p><p>Vinodi faced life’s greatest challenges with remarkable courage. After overcoming cancer once, she sadly left us following a second battle on 30 November 2024. Her legacy lives on through our philanthropic arm.</p><p className="font-medium text-jungle">A part of every journey we create is dedicated to supporting communities across Sri Lanka. Guests are warmly invited to contribute or engage during their travels.</p></div></Reveal>
    </div></div></section>
    <section className="bg-ivory py-20 lg:py-28"><div className="mx-auto max-w-content px-6"><SectionHeading eyebrow="Our First Step · February 2025" title="Project 01 — Narangamuwa, Laggala" subtitle="We distributed stationery to bright students from Grade 1 to 5, supporting the journey in education that Vinodi believed in so deeply."/><p className="mx-auto mt-6 max-w-3xl text-center font-serif text-2xl italic text-jungle">This was more than a project. It was a promise—to continue her legacy of kindness, learning and giving back.</p><div className="mt-12 grid auto-rows-[230px] gap-4 sm:grid-cols-2 lg:grid-cols-4">{PROJECT_IMAGES.map((name,i)=><Reveal key={name} className={i===0||i===5?'sm:col-span-2':''}><div className="relative h-full overflow-hidden rounded-lg"><Image src={`/vinoFoundation/projectImg/${name}`} alt={`Vino Foundation Project 01 highlight ${i+1}`} fill sizes="(min-width:1024px) 25vw, 50vw" className="object-cover"/></div></Reveal>)}</div></div></section>
    <section className="bg-jungle-deep py-20 text-center text-ivory"><Reveal className="mx-auto max-w-3xl px-6"><p className="font-serif text-4xl italic text-gold-light">“Where journeys create impact.”</p><Link href="/contact" className="mt-8 inline-flex rounded-full bg-gold px-8 py-4 text-xs font-semibold uppercase tracking-[.16em] text-jungle-deep">Support the Vino Foundation</Link></Reveal></section>
  </>;
}
