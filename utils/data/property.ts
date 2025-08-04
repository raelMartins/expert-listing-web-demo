import {AmenityType, PropertyType} from '../types/property';
import {shuffleArray} from '../utility_functions';

export const dummy_amenities: AmenityType[] = [
  {type: `kitchen`, value: `Fully equipped kitchen`},
  {type: `pool`, value: `Private swimming pool`},
  {type: `garden`, value: `Garden & patio`},
  {type: `garage`, value: `2-car garage`},
  {type: `smart_home`, value: `Smart home system`},
  {type: `home_office`, value: `Home office space`},
  {type: `security`, value: `24/7 security`},
  {type: `view`, value: `Ocean view`},
];

export const dummy_property_images = [
  {
    src: '/images/listings/listing-overview-image-1.png',
    alt: 'A vibrant abstract painting',
  },
  {
    src: '/images/listings/listing-overview-image-2.png',
    alt: 'A serene landscape with mountains',
  },
  {
    src: '/images/listings/listing-overview-image-3.png',
    alt: 'A bustling city street at night',
  },
  {
    src: '/images/listings/listing-overview-image-4.png',
    alt: 'A retro-style computer monitor',
  },
  {
    src: '/images/listings/listing-overview-image-5.jpg',
    alt: 'A minimalist white room interior',
  },
  {
    src: '/images/listings/listing-overview-image-6.jpg',
    alt: 'A close-up of a coffee cup',
  },
  {
    src: '/images/listings/listing-overview-image-7.jpg',
    alt: 'A close-up of a coffee cup',
  },
  {
    src: '/images/listings/listing-overview-image-8.jpg',
    alt: 'A close-up of a coffee cup',
  },
  {
    src: '/images/listings/listing-overview-image-9.jpg',
    alt: 'A close-up of a coffee cup',
  },
  {
    src: '/images/listings/listing-overview-image-10.jpg',
    alt: 'A close-up of a coffee cup',
  },
];

export const dummy_properties: PropertyType[] = [
  {
    id: 1,
    featured_image: {src: '/images/listings/listing_image-1.png', alt: ``},
    images: shuffleArray(dummy_property_images)?.slice(0, 3),
    property_name: `Villa Elysian`,
    price: 1000000,
    description: `Discover luxury and comfort in this beautifully designed 4-bedroom villa, nestled in a quiet and secure neighborhood of Victoria Island. With high ceilings, floor-to-ceiling windows, and a seamless indoor-outdoor flow, this home offers the perfect blend of elegance and functionality.
    The villa features a spacious living area, modern kitchen with island, ensuite bedrooms, private garden, and smart home integration. Ideal for families or professionals looking for upscale coastal living.`,
    address: `Lekki, Lagos`,
    location: {lat: 6.467571, lng: 3.701776},
    year_built: `2023`,
    property_size: `300sqm`,
    property_type: `Villa`,
    bedrooms: 5,
    bathrooms: 3,
    amenities: shuffleArray(dummy_amenities)?.slice(0, 6),
    stay_duration: `month`,
    property_occupation_type: [`rent`],
    developer: {
      name: `Royal Palm Properties`,
      company_logo: '/images/expert_listing_icon.svg',
      website: `https://google.com`,
      email: `royal@palm.com`,
      phone: `+2349077558286`,
      whatsapp_url: `https://wa.me/2349077558286`,
    },
    social_media: {
      instagram: null,
      twitter: null,
      facebook: null,
    },
    date_created: new Date(),
  },
  {
    id: 2,
    featured_image: {src: '/images/listings/listing_image-2.png', alt: ``},
    images: [],
    property_name: `Palmview Retreat `,
    price: 1500000,
    description: `Discover luxury and comfort in this beautifully designed 4-bedroom villa, nestled in a quiet and secure neighborhood of Victoria Island. With high ceilings, floor-to-ceiling windows, and a seamless indoor-outdoor flow, this home offers the perfect blend of elegance and functionality.
    The villa features a spacious living area, modern kitchen with island, ensuite bedrooms, private garden, and smart home integration. Ideal for families or professionals looking for upscale coastal living.`,
    address: `Maryland, USA`,
    location: {lat: 6.467571, lng: 3.701776},
    year_built: `2020`,
    property_size: `500sqm`,
    property_type: `Condo`,
    bedrooms: 2,
    bathrooms: 2,
    amenities: shuffleArray(dummy_amenities)?.slice(0, 4),
    has_units: true,
    stay_duration: `year`,
    property_occupation_type: [`rent`, 'buy', `shortlet`],
    social_media: {
      instagram: null,
      twitter: null,
      facebook: null,
    },
    date_created: new Date(),
  },
  {
    id: 3,
    featured_image: {src: '/images/listings/listing_image-3.png', alt: ``},
    images: [],
    property_name: `Cabo Resort`,
    price: 3000000,
    description: `Discover luxury and comfort in this beautifully designed 4-bedroom villa, nestled in a quiet and secure neighborhood of Victoria Island. With high ceilings, floor-to-ceiling windows, and a seamless indoor-outdoor flow, this home offers the perfect blend of elegance and functionality.
    The villa features a spacious living area, modern kitchen with island, ensuite bedrooms, private garden, and smart home integration. Ideal for families or professionals looking for upscale coastal living.`,
    address: `Cabo`,
    location: {lat: 6.467571, lng: 3.701776},
    year_built: `2017`,
    property_size: `1000sqm`,
    property_type: `Resort`,
    bedrooms: 8,
    bathrooms: 12,
    amenities: shuffleArray(dummy_amenities)?.slice(0, 8),
    has_units: true,

    stay_duration: 'night',
    property_occupation_type: [`rent`, 'shortlet'],
    social_media: {
      instagram: null,
      twitter: null,
      facebook: null,
    },
    date_created: new Date(),
  },
  {
    id: 4,
    featured_image: {src: '/images/listings/listing_image-4.png', alt: ``},
    images: shuffleArray(dummy_property_images)?.slice(0, 4),
    property_name: `Harpers Bazaar`,
    price: 2000000,
    description: `Discover luxury and comfort in this beautifully designed 4-bedroom villa, nestled in a quiet and secure neighborhood of Victoria Island. With high ceilings, floor-to-ceiling windows, and a seamless indoor-outdoor flow, this home offers the perfect blend of elegance and functionality.
    The villa features a spacious living area, modern kitchen with island, ensuite bedrooms, private garden, and smart home integration. Ideal for families or professionals looking for upscale coastal living.`,
    address: `Maldives`,
    location: {lat: 6.467571, lng: 3.701776},
    year_built: `2024`,
    property_size: `250sqm`,
    property_type: `Loft`,
    bedrooms: 2,
    bathrooms: 2,
    amenities: shuffleArray(dummy_amenities)?.slice(0, 7),
    has_units: true,
    stay_duration: `year`,
    property_occupation_type: [`rent`, `buy`],
    social_media: {
      instagram: null,
      twitter: null,
      facebook: null,
    },
    date_created: new Date(),
  },
  {
    id: 5,
    featured_image: {src: '/images/listings/listing_image-5.png', alt: ``},
    images: [],
    property_name: `Elysium`,
    price: 750000,
    description: `Discover luxury and comfort in this beautifully designed 4-bedroom villa, nestled in a quiet and secure neighborhood of Victoria Island. With high ceilings, floor-to-ceiling windows, and a seamless indoor-outdoor flow, this home offers the perfect blend of elegance and functionality.
    The villa features a spacious living area, modern kitchen with island, ensuite bedrooms, private garden, and smart home integration. Ideal for families or professionals looking for upscale coastal living.`,
    address: `Lekki, Lagos`,
    location: {lat: 6.467571, lng: 3.701776},
    year_built: `2027`,
    property_size: `325sqm`,
    property_type: `Villa`,
    bedrooms: 3,
    bathrooms: 4,
    amenities: [],
    stay_duration: `month`,
    property_occupation_type: [`rent`, `buy`, `shortlet`],
    developer: {
      name: `Rivian`,
      company_logo: '/images/expert_listing_icon.svg',
      website: null,
      email: null,
      phone: null,
      whatsapp_url: null,
    },
    social_media: {
      instagram: null,
      twitter: null,
      facebook: null,
    },
    date_created: new Date(),
  },
  {
    id: 6,
    featured_image: {src: '/images/listings/listing_image-6.png', alt: ``},
    images: shuffleArray(dummy_property_images)?.slice(0, 1),
    property_name: `Areva`,
    price: 1300000,
    description: `Discover luxury and comfort in this beautifully designed 4-bedroom villa, nestled in a quiet and secure neighborhood of Victoria Island. With high ceilings, floor-to-ceiling windows, and a seamless indoor-outdoor flow, this home offers the perfect blend of elegance and functionality.
    The villa features a spacious living area, modern kitchen with island, ensuite bedrooms, private garden, and smart home integration. Ideal for families or professionals looking for upscale coastal living.`,
    address: `Wuse, Abuja`,
    location: {lat: 6.467571, lng: 3.701776},
    year_built: `2022`,
    property_size: `300sqm`,
    property_type: `Apartment`,
    bedrooms: 1,
    bathrooms: 1,
    amenities: shuffleArray(dummy_amenities)?.slice(0, 5),
    stay_duration: `month`,
    property_occupation_type: [`buy`],
    developer: {
      name: `Royal Palm Properties`,
      company_logo: '/images/expert_listing_icon.svg',
      website: `https://google.com`,
      email: `royal@palm.com`,
      phone: `+2349077558286`,
      whatsapp_url: `https://wa.me/2349077558286`,
    },
    social_media: {
      instagram: null,
      twitter: null,
      facebook: null,
    },
    date_created: new Date(),
  },
];

export const rental_properties = shuffleArray(
  dummy_properties?.filter(
    item =>
      item.property_occupation_type == `rent` || item.property_occupation_type?.includes('rent')
  )
);

export const purchase_properties = shuffleArray(
  dummy_properties?.filter(
    item => item.property_occupation_type == `buy` || item.property_occupation_type?.includes('buy')
  )
);

export const shortlet_properties = shuffleArray(
  dummy_properties?.filter(
    item =>
      item.property_occupation_type == `shortlet` ||
      item.property_occupation_type?.includes('shortlet')
  )
);
