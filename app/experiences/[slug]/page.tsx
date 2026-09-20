import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { ExperienceDetail } from '../../../src/views/ExperienceDetail';
import { EXPERIENCES, getExperience } from '../../../src/data/experiences';

export function generateStaticParams() { return EXPERIENCES.map(({slug})=>({slug})); }
export function generateMetadata({params}:{params:{slug:string}}):Metadata { const x=getExperience(params.slug); if(!x)return {}; return {title:`${x.title} in Sri Lanka | Magical Paradise`,description:x.shortDescription,alternates:{canonical:`/experiences/${x.slug}`},openGraph:{title:`${x.title} in Sri Lanka | Magical Paradise`,description:x.shortDescription,url:`/experiences/${x.slug}`,type:'article'}}; }
export default function Page({params}:{params:{slug:string}}) { const experience=getExperience(params.slug); if(!experience)notFound(); return <ExperienceDetail experience={experience}/>; }
