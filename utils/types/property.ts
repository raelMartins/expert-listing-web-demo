import {ReactNode} from 'react';

export type DurationType = 'month' | 'year' | 'quarter' | 'night' | 'week';
export type PropertyOccupationType = 'rent' | 'buy' | 'shortlet';
export type AmenityType = {
  type: string;
  value: string;
  icon?: ReactNode;
  image?: string;
  featured?: boolean;
};

export interface PropertyType {
  id: number | string;
  featured_image: {src: string; alt?: string}[] | {src: string; alt?: string};
  images: {src: string; alt?: string; featured?: boolean}[];
  property_name: string;
  price: number | string;
  description: string;
  address: string;
  location?: {lng: number; lat: number};
  year_built?: string;
  property_size?: string | number;
  property_type?: string;
  bedrooms?: number;
  bathrooms?: number;
  amenities: AmenityType[];
  has_units?: boolean;
  stay_duration?: DurationType | DurationType[];
  property_occupation_type: PropertyOccupationType | PropertyOccupationType[];
  developer?: {
    name: string;
    company_logo: string | null;
    website: string | null;
    email: string | null;
    phone: string | null;
    whatsapp_url: string | null;
  };
  social_media?: {
    instagram?: string | null;
    twitter?: string | null;
    facebook?: string | null;
  };
  date_created: Date;
}
