import React from 'react';
import {
  ActivityIcon,
  AwardIcon,
  BabyIcon,
  ChefHatIcon,
  CompassIcon,
  DrumIcon,
  FlameIcon,
  FlowerIcon,
  Flower2Icon,
  HeadphonesIcon,
  HeartIcon,
  LeafIcon,
  MountainSnowIcon,
  NetworkIcon,
  PaletteIcon,
  PlaneIcon,
  PresentationIcon,
  ShirtIcon,
  ShoppingBagIcon,
  SnowflakeIcon,
  SparklesIcon,
  TrophyIcon,
  UsersIcon,
  UtensilsIcon } from
'lucide-react';

const ICONS = {
  activity: ActivityIcon,
  award: AwardIcon,
  baby: BabyIcon,
  bag: ShoppingBagIcon,
  chef: ChefHatIcon,
  compass: CompassIcon,
  drum: DrumIcon,
  flame: FlameIcon,
  flower: FlowerIcon,
  headset: HeadphonesIcon,
  heart: HeartIcon,
  leaf: LeafIcon,
  lotus: Flower2Icon,
  mountain: MountainSnowIcon,
  network: NetworkIcon,
  palette: PaletteIcon,
  plane: PlaneIcon,
  presentation: PresentationIcon,
  shirt: ShirtIcon,
  snowflake: SnowflakeIcon,
  sparkles: SparklesIcon,
  trophy: TrophyIcon,
  users: UsersIcon,
  utensils: UtensilsIcon
} as const;

export type IconName = keyof typeof ICONS;

type IconProps = {
  name: string;
  className?: string;
  strokeWidth?: number;
};

export function Icon({ name, className = 'w-5 h-5', strokeWidth = 1.5 }: IconProps) {
  const Component = ICONS[name as IconName] ?? SparklesIcon;
  return <Component className={className} strokeWidth={strokeWidth} aria-hidden="true" />;
}