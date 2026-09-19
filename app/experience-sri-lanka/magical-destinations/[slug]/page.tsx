import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { DestinationDetail } from '../../../../src/views/DestinationDetail';
import { DESTINATIONS, getDestination } from '../../../../src/data/destinations';
export function generateStaticParams(){return DESTINATIONS.map(item=>({slug:item.id}));}
export function generateMetadata({params}:{params:{slug:string}}):Metadata{const item=getDestination(params.slug);if(!item)return{};return{title:`${item.name}, Sri Lanka | Magical Paradise`,description:item.summary,alternates:{canonical:`/experience-sri-lanka/magical-destinations/${item.id}`}};}
export default function Page({params}:{params:{slug:string}}){if(!getDestination(params.slug))notFound();return <DestinationDetail destinationId={params.slug}/>;}
