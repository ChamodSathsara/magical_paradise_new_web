import type { Metadata } from 'next';
import { TouristMap } from '../../../src/views/TouristMap';
export const metadata:Metadata={title:'Sri Lanka Tourist Map | Magical Paradise',description:'Explore Sri Lanka’s key destinations, cultural regions, wildlife areas, beaches and hill country through our island travel map.',alternates:{canonical:'/experience-sri-lanka/tourist-map'}};
export default function Page(){return <TouristMap/>;}
