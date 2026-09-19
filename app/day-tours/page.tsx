import type {Metadata} from 'next';
import {DayTours} from '../../src/views/DayTours';
export const metadata:Metadata={title:'Day Tours in Sri Lanka | Magical Paradise',description:'Explore curated Sri Lanka day tours including wildlife safaris, cultural journeys, coastal escapes, scenic flights, Colombo experiences, Negombo tours and signature island adventures.',alternates:{canonical:'/day-tours'}};
export default function Page(){return <DayTours/>;}
