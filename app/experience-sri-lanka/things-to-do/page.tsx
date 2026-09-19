import type { Metadata } from 'next';
import { Experiences } from '../../../src/views/Experiences';
export const metadata:Metadata={title:'Things to Do in Sri Lanka | Magical Paradise',description:'Discover curated cultural, wildlife, adventure, wellness, culinary and uniquely Sri Lankan experiences with Magical Paradise.',alternates:{canonical:'/experience-sri-lanka/things-to-do'}};
export default function Page(){return <Experiences/>;}
