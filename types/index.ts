import { AnimationProps } from 'framer-motion';

export interface TimelineEventProps {
  active?: boolean;
  children: React.ReactNode;
  last?: boolean;
}

export interface ExternalLinkProps {
  href: string;
  className?: string;
  children: React.ReactNode;
}

export interface NavItemHeaderAnimation {
  name: string;
  x: number;
  y: number;
  w: string;
}

export interface NavItemProps {
  href: string;
  text: string;
}

export interface AnimationContainerProps extends AnimationProps {
  children: React.ReactNode;
  whileHover?: any;
  onClick?: any;
  className?: string;
  customDelay?: number;
  style?: Object;
  vertical?: boolean;
  horizontal?: boolean;
}

export interface CardProjectProps {
  id?: string;
  title: string;
  des: string;
  // category: string[];
  category: string; // FIX THIS
  link: string;
}

export interface ApiContentParams {
  locale: string;
  populate?: string;
  title?: string;
  slug?: string;
}

interface Data {
  id: number;
  attributes: Attributes;
}

export interface Attributes {
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  locale: string;
  banner: Banner;
  simpleSection: SimpleSection;
  processSection: ProcessSectionItem[];
  benefitSection: BenefitSection;
  galleryWithCenterTitleSection: GalleryWithCenterTitleSectionItem;
  formSubscribeSection: FormSubscribeSection;
  meta: Meta;
  localizations: Localizations;
}

export interface Banner {
  backgroundImage: string;
  title: string;
  description: string;
  buttonTitle: string;
  buttonLink: string;
}

export interface SimpleSection {
  id: number;
  title: string;
}

export interface ProcessSectionItem {
  id: number;
  image: string;
  title: string;
  description: string;
}

export interface BenefitSection {
  image?: { imageUrl: string }[];
  title: string;
  description: string;
}

export interface GalleryWithCenterTitleSectionItem {
  id: number;
  image?: { imageUrl: string; id: string }[];
  description: string;
  authorName: string;
  authorTitle: string;
}

export interface FormSubscribeSection {
  id: number;
  title: string;
  buttonTitle: string;
  buttonLink: string;
}

export interface Meta {
  id: number;
  title: string;
  description: string;
  keywords: string;
  type: string;
}

export interface Localizations {
  data: any[];
}

export interface RootObject {
  data: Data;
  meta: any;
}

export interface MetaData {
  id: number;
  title: string;
  description: string;
  keywords: string;
  type: string;
}
