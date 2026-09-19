import type {Metadata} from 'next';
import {notFound} from 'next/navigation';
import {DayTourDetail} from '../../../src/views/DayTourDetail';
import {DAY_TOURS,getDayTour} from '../../../src/data/dayTours';
export function generateStaticParams(){return DAY_TOURS.map(({slug})=>({slug}));}
export function generateMetadata({params}:{params:{slug:string}}):Metadata{const tour=getDayTour(params.slug);if(!tour)return{};return{title:`${tour.title} | Magical Paradise`,description:tour.shortDescription,alternates:{canonical:`/day-tours/${tour.slug}`}};}
export default function Page({params}:{params:{slug:string}}){const tour=getDayTour(params.slug);if(!tour)notFound();return <DayTourDetail tour={tour}/>;}
