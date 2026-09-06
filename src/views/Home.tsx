import React from 'react';
import { Hero } from '../components/home/Hero';
import { Story } from '../components/sections/Story';
import { PopularDestinations } from '../components/home/PopularDestinations';
import { Services } from '../components/sections/Services';
import { ExperiencesPreview } from '../components/home/ExperiencesPreview';
import { PackagesPreview } from '../components/home/PackagesPreview';
import { HotelsPreview } from '../components/home/HotelsPreview';
import { IslandMap } from '../components/home/IslandMap';
import { MaldivesPromo } from '../components/sections/MaldivesPromo';
import { CorporatePromo } from '../components/sections/CorporatePromo';
import { Testimonials } from '../components/sections/Testimonials';
import { Gallery } from '../components/home/Gallery';
import { CtaStrip } from '../components/sections/CtaStrip';
import { TrustCredentials } from '../components/sections/TrustCredentials';

export function Home() {
  return (
    <>
      <Hero />
      <TrustCredentials />
      <Story />
      <PopularDestinations />
      <Services />
      <ExperiencesPreview />
      <PackagesPreview />
      <HotelsPreview />
      <IslandMap />
      <MaldivesPromo />
      <CorporatePromo />
      <Testimonials />
      <Gallery />
      <CtaStrip />
    </>);

}
