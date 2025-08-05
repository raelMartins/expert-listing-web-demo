import {PropertyType} from '../types/property';

export const ai_properties: PropertyType[] = [
  {
    id: 1,
    featured_image: {
      src: '/images/listings/listing_image-5.png',
      alt: 'Exterior view of a modern apartment building',
    },
    images: [
      {
        src: '/images/listings/listing-overview-image-11.jpg',
        alt: 'Modern apartment living room',
      },
      {
        src: '/images/listings/listing-overview-image-4.png',
        alt: 'Modern kitchen',
      },
      {
        src: '/images/listings/listing-overview-image-15.jpg',
        alt: 'Apartment balcony view',
      },
      {
        src: '/images/listings/listing-overview-image-7.jpg',
        alt: 'Apartment gym',
      },
      {
        src: '/images/listings/listing-overview-image-2.png',
        alt: 'Rooftop terrace',
      },
      {
        src: '/images/listings/listing-overview-image-1.png',
        alt: 'Apartment bedroom',
      },
    ],
    property_name: 'The Skyline Residences',
    price: 2500,
    description:
      'A stunning one-bedroom apartment in the heart of the city. Features an open-plan living area, a modern kitchen, and a private balcony.',
    address: '123 Urban Avenue, Metropolis, 10001',
    location: {
      lng: -74.0059,
      lat: 40.7128,
    },
    year_built: '2020',
    property_size: '750 sq ft',
    property_type: 'Apartment',
    bedrooms: 1,
    bathrooms: 1,
    amenities: [
      {
        type: 'kitchen',
        value: 'Fully equipped kitchen',
      },
      {
        type: 'security',
        value: '24/7 security',
      },
    ],
    has_units: true,
    stay_duration: 'month',
    property_occupation_type: 'rent',
    developer: {
      name: 'CityScape Developments',
      company_logo: '/images/expert_listing_icon.svg',
      website: 'https://www.cityscapedevelopments.com',
      email: 'info@cityscapedevelopments.com',
      phone: '+2349077558286',
      whatsapp_url: 'https://wa.me/2349077558286',
    },
    date_created: new Date('2025-08-01T10:00:00Z'),
  },
  {
    id: 2,
    featured_image: {
      src: '/images/listings/listing_image-9.jpg',
      alt: 'Spacious suburban family home',
    },
    images: [
      {
        src: '/images/listings/listing-overview-image-13.jpg',
        alt: 'Modern kitchen',
      },
      {
        src: '/images/listings/listing-overview-image-7.jpg',
        alt: 'Backyard patio',
      },
      {
        src: '/images/listings/listing-overview-image-2.png',
        alt: 'Large living room',
      },
      {
        src: '/images/listings/listing-overview-image-17.jpg',
        alt: 'Master bedroom',
      },
      {
        src: '/images/listings/listing-overview-image-9.jpg',
        alt: 'Family room',
      },
    ],
    property_name: 'The Oakwood Residence',
    price: 850000,
    description:
      'A beautiful family home located in a quiet, friendly neighborhood with a large backyard and a patio area.',
    address: '456 Peaceful Lane, Suburbia, 20002',
    property_size: 2800,
    property_type: 'House',
    bedrooms: 4,
    bathrooms: 3,
    amenities: [
      {
        type: 'garden',
        value: 'Garden & patio',
      },
      {
        type: 'garage',
        value: '2-car garage',
      },
    ],
    has_units: false,
    property_occupation_type: 'buy',
    developer: {
      name: 'Suburban Homes Inc.',
      company_logo: '/images/expert_listing_icon.svg',
      website: 'https://www.suburbanhomes.com',
      email: 'contact@suburbanhomes.com',
      phone: '+2349077558286',
      whatsapp_url: 'https://wa.me/2349077558286',
    },
    date_created: new Date('2025-07-25T15:30:00Z'),
  },
  {
    id: 3,
    featured_image: {
      src: '/images/listings/listing_image-2.png',
      alt: 'Interior of a studio apartment',
    },
    images: [
      {
        src: '/images/listings/listing-overview-image-1.png',
        alt: 'Studio apartment bedroom area',
      },
      {
        src: '/images/listings/listing-overview-image-16.jpg',
        alt: 'Studio kitchen',
      },
      {
        src: '/images/listings/listing-overview-image-9.jpg',
        alt: 'Bathroom',
      },
    ],
    property_name: 'Studio on Main',
    price: 1500,
    description:
      'A charming and affordable studio apartment in a prime downtown location, perfect for students or young professionals.',
    address: '789 Main Street, Downtown, 30003',
    year_built: '1995',
    property_size: '450 sq ft',
    property_type: 'Studio',
    bedrooms: 0,
    bathrooms: 1,
    amenities: [
      {
        type: 'kitchen',
        value: 'Fully equipped kitchen',
      },
    ],
    has_units: true,
    stay_duration: 'month',
    property_occupation_type: ['rent', 'shortlet'],
    developer: {
      name: 'Urban Living',
      company_logo: '/images/expert_listing_icon.svg',
      website: 'https://www.urbanliving.com',
      email: 'info@urbanliving.com',
      phone: '+2349077558286',
      whatsapp_url: 'https://wa.me/2349077558286',
    },
    date_created: new Date('2025-08-02T11:45:00Z'),
  },
  {
    id: 4,
    featured_image: {
      src: '/images/listings/listing_image-7.jpg',
      alt: 'Exterior of a beachfront villa',
    },
    images: [
      {
        src: '/images/listings/listing-overview-image-5.jpg',
        alt: 'Villa living room with ocean views',
      },
      {
        src: '/images/listings/listing-overview-image-14.jpg',
        alt: 'Infinity pool',
      },
      {
        src: '/images/listings/listing-overview-image-17.jpg',
        alt: 'Villa bedroom',
      },
      {
        src: '/images/listings/listing-overview-image-3.png',
        alt: 'Villa kitchen',
      },
      {
        src: '/images/listings/listing-overview-image-8.jpg',
        alt: 'Patio area',
      },
      {
        src: '/images/listings/listing-overview-image-1.png',
        alt: 'Villa exterior',
      },
      {
        src: '/images/listings/listing-overview-image-16.jpg',
        alt: 'Villa bathroom',
      },
      {
        src: '/images/listings/listing-overview-image-11.jpg',
        alt: 'Outdoor dining area',
      },
    ],
    property_name: 'Oceanview Villa',
    price: 500,
    description:
      'An exquisite beachfront villa ideal for a short-term luxury getaway. Enjoy stunning ocean views and a private infinity pool.',
    address: '12 Oceanfront Way, Seaside, 40004',
    property_type: 'Villa',
    bedrooms: 5,
    bathrooms: 4,
    amenities: [
      {
        type: 'pool',
        value: 'Private swimming pool',
      },
      {
        type: 'view',
        value: 'Ocean view',
      },
    ],
    has_units: false,
    stay_duration: 'night',
    property_occupation_type: 'shortlet',
    developer: {
      name: 'Luxury Stays Co.',
      company_logo: '/images/expert_listing_icon.svg',
      website: 'https://www.luxurystays.com',
      email: 'booking@luxurystays.com',
      phone: '+2349077558286',
      whatsapp_url: 'https://wa.me/2349077558286',
    },
    date_created: new Date('2025-08-01T18:00:00Z'),
  },
  {
    id: 5,
    featured_image: {
      src: '/images/listings/listing_image-3.png',
      alt: 'Interior of an industrial-style loft',
    },
    images: [
      {
        src: '/images/listings/listing-overview-image-8.jpg',
        alt: 'Loft bedroom area',
      },
      {
        src: '/images/listings/listing-overview-image-6.jpg',
        alt: 'Loft living area',
      },
      {
        src: '/images/listings/listing-overview-image-12.jpg',
        alt: 'Loft kitchen',
      },
      {
        src: '/images/listings/listing-overview-image-1.png',
        alt: 'Loft exterior',
      },
    ],
    property_name: 'The Foundry Loft',
    price: 2800,
    description:
      'A stylish industrial-style loft in a renovated factory building. Features high ceilings, exposed brick, and large windows.',
    address: '300 Commerce St, Art District, 50005',
    property_size: 1200,
    property_type: 'Loft',
    bedrooms: 1,
    bathrooms: 1,
    amenities: [
      {
        type: 'home_office',
        value: 'Home office space',
      },
    ],
    has_units: false,
    stay_duration: ['month', 'year'],
    property_occupation_type: 'rent',
    developer: {
      name: 'Heritage Properties',
      company_logo: '/images/expert_listing_icon.svg',
      website: 'https://www.heritageproperties.com',
      email: 'info@heritageproperties.com',
      phone: '+2349077558286',
      whatsapp_url: 'https://wa.me/2349077558286',
    },
    date_created: new Date('2025-07-29T09:10:00Z'),
  },
  {
    id: 6,
    featured_image: {
      src: '/images/listings/listing_image-1.png',
      alt: 'Exterior of a cozy bungalow',
    },
    images: [
      {
        src: '/images/listings/listing-overview-image-10.jpg',
        alt: 'Bungalow living room',
      },
      {
        src: '/images/listings/listing-overview-image-3.png',
        alt: 'Bungalow kitchen',
      },
      {
        src: '/images/listings/listing-overview-image-16.jpg',
        alt: 'Bungalow bedroom',
      },
    ],
    property_name: 'The Green Meadow Bungalow',
    price: 350000,
    description:
      'A charming and affordable bungalow with a large yard, perfect for a starter family.',
    address: '15 Maple Grove, Green Meadows, 60006',
    year_built: '1985',
    property_size: '1,000 sq ft',
    property_type: 'Bungalow',
    bedrooms: 2,
    bathrooms: 1,
    amenities: [
      {
        type: 'garden',
        value: 'Garden & patio',
      },
    ],
    has_units: false,
    property_occupation_type: 'buy',
    developer: {
      name: 'Rural Estates',
      company_logo: '/images/expert_listing_icon.svg',
      website: 'https://www.ruralestates.com',
      email: 'info@ruralestates.com',
      phone: '+2349077558286',
      whatsapp_url: 'https://wa.me/2349077558286',
    },
    date_created: new Date('2025-07-20T14:00:00Z'),
  },
  {
    id: 7,
    featured_image: {
      src: '/images/listings/listing_image-4.png',
      alt: 'Exterior of a modern villa',
    },
    images: [
      {
        src: '/images/listings/listing-overview-image-11.jpg',
        alt: 'Villa kitchen',
      },
      {
        src: '/images/listings/listing-overview-image-9.jpg',
        alt: 'Infinity pool',
      },
      {
        src: '/images/listings/listing-overview-image-17.jpg',
        alt: 'Villa living room',
      },
      {
        src: '/images/listings/listing-overview-image-2.png',
        alt: 'Master bedroom with a view',
      },
      {
        src: '/images/listings/listing-overview-image-5.jpg',
        alt: 'Guest bedroom',
      },
      {
        src: '/images/listings/listing-overview-image-14.jpg',
        alt: 'Outdoor patio',
      },
    ],
    property_name: 'The Horizon Villa',
    price: 1200000,
    description:
      'An architectural masterpiece with panoramic views and state-of-the-art smart home features.',
    address: '888 Summit Drive, Hilltop, 70007',
    location: {
      lng: -118.2437,
      lat: 34.0522,
    },
    year_built: '2024',
    property_size: 4500,
    property_type: 'Villa',
    bedrooms: 6,
    bathrooms: 5,
    amenities: [
      {
        type: 'pool',
        value: 'Private swimming pool',
      },
      {
        type: 'smart_home',
        value: 'Smart home system',
      },
    ],
    has_units: false,
    property_occupation_type: ['buy', 'shortlet'],
    developer: {
      name: 'Elite Properties',
      company_logo: '/images/expert_listing_icon.svg',
      website: 'https://www.eliteproperties.com',
      email: 'sales@eliteproperties.com',
      phone: '+2349077558286',
      whatsapp_url: 'https://wa.me/2349077558286',
    },
    date_created: new Date('2025-08-03T12:00:00Z'),
  },
  {
    id: 8,
    featured_image: {
      src: '/images/listings/listing_image-6.png',
      alt: 'Exterior of a Victorian townhouse',
    },
    images: [
      {
        src: '/images/listings/listing-overview-image-1.png',
        alt: 'Townhouse living room with fireplace',
      },
      {
        src: '/images/listings/listing-overview-image-14.jpg',
        alt: 'Townhouse bedroom',
      },
      {
        src: '/images/listings/listing-overview-image-8.jpg',
        alt: 'Private courtyard',
      },
    ],
    property_name: 'The Heritage Townhouse',
    price: 3200,
    description:
      'Historic charm meets modern comfort in this beautifully preserved townhouse. Features original details with updated amenities.',
    address: "22 Queen's Road, Historic District, 80008",
    year_built: '1905',
    property_size: 2200,
    property_type: 'Townhouse',
    bedrooms: 3,
    bathrooms: 2,
    amenities: [
      {
        type: 'garden',
        value: 'Garden & patio',
      },
      {
        type: 'security',
        value: '24/7 security',
      },
    ],
    has_units: false,
    stay_duration: 'month',
    property_occupation_type: 'rent',
    developer: {
      name: 'Legacy Renovations',
      company_logo: '/images/expert_listing_icon.svg',
      website: 'https://www.legacyrenovations.com',
      email: 'info@legacyrenovations.com',
      phone: '+2349077558286',
      whatsapp_url: 'https://wa.me/2349077558286',
    },
    date_created: new Date('2025-08-02T16:00:00Z'),
  },
  {
    id: 9,
    featured_image: {
      src: '/images/listings/listing_image-8.jpg',
      alt: 'Exterior of a modern condo building',
    },
    images: [
      {
        src: '/images/listings/listing-overview-image-17.jpg',
        alt: 'Condo bedroom with city view',
      },
      {
        src: '/images/listings/listing-overview-image-2.png',
        alt: 'Condo kitchen',
      },
      {
        src: '/images/listings/listing-overview-image-10.jpg',
        alt: 'Condo bathroom',
      },
      {
        src: '/images/listings/listing-overview-image-1.png',
        alt: 'Condo living area',
      },
      {
        src: '/images/listings/listing-overview-image-11.jpg',
        alt: 'Condo exterior',
      },
      {
        src: '/images/listings/listing-overview-image-16.jpg',
        alt: 'Building lobby',
      },
      {
        src: '/images/listings/listing-overview-image-5.jpg',
        alt: 'Balcony view',
      },
    ],
    property_name: 'The Minimalist Condos',
    price: 450000,
    description:
      'This new-build condo offers a sleek design and a compact, efficient living space. Located close to public transportation.',
    address: '111 Transit Ave, Midtown, 90009',
    property_size: 850,
    property_type: 'Condo',
    bedrooms: 2,
    bathrooms: 2,
    amenities: [
      {
        type: 'smart_home',
        value: 'Smart home system',
      },
    ],
    has_units: true,
    property_occupation_type: 'buy',
    developer: {
      name: 'Future Homes Inc.',
      company_logo: '/images/expert_listing_icon.svg',
      website: 'https://www.futurehomes.com',
      email: 'info@futurehomes.com',
      phone: '+2349077558286',
      whatsapp_url: 'https://wa.me/2349077558286',
    },
    date_created: new Date('2025-07-28T09:00:00Z'),
  },
  {
    id: 10,
    featured_image: {
      src: '/images/listings/listing_image-1.png',
      alt: 'Exterior of a rustic cabin',
    },
    images: [
      {
        src: '/images/listings/listing-overview-image-3.png',
        alt: 'Cabin interior with fireplace',
      },
      {
        src: '/images/listings/listing-overview-image-11.jpg',
        alt: 'Cabin exterior view',
      },
      {
        src: '/images/listings/listing-overview-image-7.jpg',
        alt: 'Cabin deck',
      },
    ],
    property_name: 'The Forest Retreat',
    price: 300,
    description:
      'A cozy, quiet cabin in the heart of the forest. Perfect for a secluded weekend getaway with a rustic, homey feel.',
    address: '10 Pine Trail, Wilderness, 10010',
    property_type: 'Cabin',
    bedrooms: 2,
    bathrooms: 1,
    amenities: [
      {
        type: 'home_office',
        value: 'Home office space',
      },
    ],
    has_units: false,
    stay_duration: 'night',
    property_occupation_type: 'shortlet',
    developer: {
      name: 'Nature Escapes',
      company_logo: '/images/expert_listing_icon.svg',
      website: 'https://www.natureescapes.com',
      email: 'info@natureescapes.com',
      phone: '+2349077558286',
      whatsapp_url: 'https://wa.me/2349077558286',
    },
    date_created: new Date('2025-08-01T14:30:00Z'),
  },
  {
    id: 11,
    featured_image: {
      src: '/images/listings/listing_image-4.png',
      alt: 'Exterior of a large family house',
    },
    images: [
      {
        src: '/images/listings/listing-overview-image-1.png',
        alt: 'Formal living room',
      },
      {
        src: '/images/listings/listing-overview-image-13.jpg',
        alt: 'Backyard',
      },
      {
        src: '/images/listings/listing-overview-image-5.jpg',
        alt: 'Master bedroom',
      },
    ],
    property_name: 'The Evergreen Estate',
    price: 950000,
    description:
      'A classic, elegant home with ample space for a large family. Features a formal dining room and a beautiful backyard.',
    address: '789 Evergreen Way, Oakdale, 11011',
    property_size: 3500,
    property_type: 'House',
    bedrooms: 5,
    bathrooms: 4,
    amenities: [
      {
        type: 'kitchen',
        value: 'Fully equipped kitchen',
      },
    ],
    has_units: false,
    property_occupation_type: 'buy',
    developer: {
      name: 'Evergreen Properties',
      company_logo: '/images/expert_listing_icon.svg',
      website: 'https://www.evergreenproperties.com',
      email: 'info@evergreenproperties.com',
      phone: '+2349077558286',
      whatsapp_url: 'https://wa.me/2349077558286',
    },
    date_created: new Date('2025-07-22T10:00:00Z'),
  },
  {
    id: 12,
    featured_image: {
      src: '/images/listings/listing_image-8.jpg',
      alt: 'Exterior of a modern apartment building',
    },
    images: [
      {
        src: '/images/listings/listing-overview-image-12.jpg',
        alt: 'Apartment bedroom',
      },
      {
        src: '/images/listings/listing-overview-image-9.jpg',
        alt: 'Apartment living room',
      },
      {
        src: '/images/listings/listing-overview-image-17.jpg',
        alt: 'Apartment kitchen',
      },
      {
        src: '/images/listings/listing-overview-image-3.png',
        alt: 'Building gym',
      },
      {
        src: '/images/listings/listing-overview-image-6.jpg',
        alt: 'Park view balcony',
      },
      {
        src: '/images/listings/listing-overview-image-14.jpg',
        alt: 'Building lobby',
      },
      {
        src: '/images/listings/listing-overview-image-1.png',
        alt: 'Apartment pool',
      },
    ],
    property_name: 'Parkside Lofts',
    price: 2200,
    description:
      'A sleek, two-bedroom apartment with a view of the nearby park. A great location for those who enjoy the outdoors.',
    address: '250 Parkside Blvd, City Center, 12012',
    property_size: '1,100 sq ft',
    property_type: 'Apartment',
    bedrooms: 2,
    bathrooms: 2,
    amenities: [
      {
        type: 'security',
        value: '24/7 security',
      },
    ],
    has_units: true,
    stay_duration: 'month',
    property_occupation_type: 'rent',
    developer: {
      name: 'Parkside Developments',
      company_logo: '/images/expert_listing_icon.svg',
      website: 'https://www.parksidedevelopments.com',
      email: 'info@parksidedevelopments.com',
      phone: '+2349077558286',
      whatsapp_url: 'https://wa.me/2349077558286',
    },
    date_created: new Date('2025-08-04T09:30:00Z'),
  },
  {
    id: 13,
    featured_image: {
      src: '/images/listings/listing_image-6.png',
      alt: 'Living room of a contemporary house',
    },
    images: [
      {
        src: '/images/listings/listing-overview-image-15.jpg',
        alt: 'Kitchen of the house',
      },
      {
        src: '/images/listings/listing-overview-image-14.jpg',
        alt: 'House exterior',
      },
      {
        src: '/images/listings/listing-overview-image-1.png',
        alt: 'House backyard',
      },
    ],
    property_name: 'The Contemporary Manor',
    price: 1500000,
    description:
      'A stunning example of modern architecture with an open floor plan, perfect for entertaining.',
    address: '150 Architect Way, Design District, 13013',
    property_size: 4000,
    property_type: 'House',
    bedrooms: 5,
    bathrooms: 4,
    amenities: [
      {
        type: 'kitchen',
        value: 'Fully equipped kitchen',
      },
      {
        type: 'garden',
        value: 'Garden & patio',
      },
    ],
    has_units: false,
    property_occupation_type: ['buy', 'rent'],
    developer: {
      name: 'Architechs Group',
      company_logo: '/images/expert_listing_icon.svg',
      website: 'https://www.architechsgroup.com',
      email: 'info@architechsgroup.com',
      phone: '+2349077558286',
      whatsapp_url: 'https://wa.me/2349077558286',
    },
    date_created: new Date('2025-08-01T11:00:00Z'),
  },
  {
    id: 14,
    featured_image: {
      src: '/images/listings/listing_image-2.png',
      alt: 'Exterior of a modern office building',
    },
    images: [
      {
        src: '/images/listings/listing-overview-image-16.jpg',
        alt: 'Office lobby',
      },
      {
        src: '/images/listings/listing-overview-image-12.jpg',
        alt: 'Open-plan office space',
      },
      {
        src: '/images/listings/listing-overview-image-17.jpg',
        alt: 'Office conference room',
      },
      {
        src: '/images/listings/listing-overview-image-5.jpg',
        alt: 'Office break room',
      },
      {
        src: '/images/listings/listing-overview-image-9.jpg',
        alt: 'Building exterior',
      },
      {
        src: '/images/listings/listing-overview-image-2.png',
        alt: 'Front desk',
      },
    ],
    property_name: 'The Innovation Tower',
    price: 'Negotiable',
    description:
      'A premier commercial space with flexible floor plans and a strategic location in the business district.',
    address: '789 Business Blvd, Tech City, 14014',
    property_size: '10,000 sq ft',
    property_type: 'Commercial',
    bedrooms: 0,
    bathrooms: 0,
    amenities: [
      {
        type: 'security',
        value: '24/7 security',
      },
      {
        type: 'home_office',
        value: 'Home office space',
      },
    ],
    has_units: true,
    property_occupation_type: ['rent', 'buy'],
    developer: {
      name: 'Global Properties Inc.',
      company_logo: '/images/expert_listing_icon.svg',
      website: 'https://www.globalproperties.com',
      email: 'contact@globalproperties.com',
      phone: '+2349077558286',
      whatsapp_url: 'https://wa.me/2349077558286',
    },
    date_created: new Date('2025-06-15T08:45:00Z'),
  },
  {
    id: 15,
    featured_image: {
      src: '/images/listings/listing_image-7.jpg',
      alt: 'Interior of a small house living room',
    },
    images: [
      {
        src: '/images/listings/listing-overview-image-1.png',
        alt: 'Exterior of a cozy house',
      },
      {
        src: '/images/listings/listing-overview-image-8.jpg',
        alt: 'Small bedroom',
      },
      {
        src: '/images/listings/listing-overview-image-13.jpg',
        alt: 'Small kitchen',
      },
      {
        src: '/images/listings/listing-overview-image-4.png',
        alt: 'Backyard garden',
      },
      {
        src: '/images/listings/listing-overview-image-16.jpg',
        alt: 'Bathroom',
      },
    ],
    property_name: 'The Cozy Nook',
    price: 250000,
    description:
      'A quaint two-bedroom home, perfect for those seeking a simple and comfortable living space.',
    address: '90 Elm Street, Small Town, 15015',
    property_size: '800 sq ft',
    property_type: 'House',
    bedrooms: 2,
    bathrooms: 1,
    amenities: [
      {
        type: 'garden',
        value: 'Garden & patio',
      },
    ],
    has_units: false,
    property_occupation_type: 'buy',
    developer: {
      name: 'Community Builders',
      company_logo: '/images/expert_listing_icon.svg',
      website: 'https://www.communitybuilders.com',
      email: 'info@communitybuilders.com',
      phone: '+2349077558286',
      whatsapp_url: 'https://wa.me/2349077558286',
    },
    date_created: new Date('2025-07-20T12:00:00Z'),
  },
  {
    id: 16,
    featured_image: {
      src: '/images/listings/listing_image-5.png',
      alt: 'Exterior of a modern house',
    },
    images: [
      {
        src: '/images/listings/listing-overview-image-14.jpg',
        alt: 'Kitchen of the modern house',
      },
      {
        src: '/images/listings/listing-overview-image-17.jpg',
        alt: 'Living room',
      },
      {
        src: '/images/listings/listing-overview-image-2.png',
        alt: 'Backyard',
      },
      {
        src: '/images/listings/listing-overview-image-13.jpg',
        alt: 'Master bedroom',
      },
      {
        src: '/images/listings/listing-overview-image-6.jpg',
        alt: 'Home office',
      },
    ],
    property_name: 'The Modern Family Home',
    price: 750000,
    description:
      'This new-build home offers a large open-concept living area and a spacious backyard for entertaining.',
    address: '123 New Start Rd, Newberry, 16016',
    year_built: '2024',
    property_size: 3000,
    property_type: 'House',
    bedrooms: 4,
    bathrooms: 3,
    amenities: [
      {
        type: 'smart_home',
        value: 'Smart home system',
      },
      {
        type: 'garage',
        value: '2-car garage',
      },
    ],
    has_units: false,
    property_occupation_type: 'buy',
    developer: {
      name: 'New Horizons Builders',
      company_logo: '/images/expert_listing_icon.svg',
      website: 'https://www.newhorizonsbuilders.com',
      email: 'info@newhorizonsbuilders.com',
      phone: '+2349077558286',
      whatsapp_url: 'https://wa.me/2349077558286',
    },
    date_created: new Date('2025-07-18T16:00:00Z'),
  },
  {
    id: 17,
    featured_image: {
      src: '/images/listings/listing_image-9.jpg',
      alt: 'Interior of a modern studio apartment',
    },
    images: [
      {
        src: '/images/listings/listing-overview-image-3.png',
        alt: 'Studio apartment kitchen',
      },
      {
        src: '/images/listings/listing-overview-image-15.jpg',
        alt: 'Studio living area',
      },
      {
        src: '/images/listings/listing-overview-image-6.jpg',
        alt: 'Studio bathroom',
      },
      {
        src: '/images/listings/listing-overview-image-1.png',
        alt: 'Building exterior',
      },
      {
        src: '/images/listings/listing-overview-image-11.jpg',
        alt: 'Rooftop deck',
      },
      {
        src: '/images/listings/listing-overview-image-8.jpg',
        alt: 'Building lobby',
      },
      {
        src: '/images/listings/listing-overview-image-12.jpg',
        alt: 'Gym',
      },
      {
        src: '/images/listings/listing-overview-image-16.jpg',
        alt: 'Lounge area',
      },
    ],
    property_name: 'The Urban Studio',
    price: 1800,
    description:
      'A sleek and compact studio apartment in the heart of the city, perfect for a single professional.',
    address: '456 City View, Metropolis, 17017',
    property_size: 500,
    property_type: 'Studio',
    bedrooms: 0,
    bathrooms: 1,
    amenities: [
      {
        type: 'security',
        value: '24/7 security',
      },
    ],
    has_units: true,
    stay_duration: 'month',
    property_occupation_type: 'rent',
    developer: {
      name: 'Urban Core Developers',
      company_logo: '/images/expert_listing_icon.svg',
      website: 'https://www.urbancore.com',
      email: 'info@urbancore.com',
      phone: '+2349077558286',
      whatsapp_url: 'https://wa.me/2349077558286',
    },
    date_created: new Date('2025-08-04T10:00:00Z'),
  },
  {
    id: 18,
    featured_image: {
      src: '/images/listings/listing_image-4.png',
      alt: 'Interior of a rustic cabin',
    },
    images: [
      {
        src: '/images/listings/listing-overview-image-10.jpg',
        alt: 'Exterior of the cabin',
      },
      {
        src: '/images/listings/listing-overview-image-1.png',
        alt: 'Lakeside view',
      },
      {
        src: '/images/listings/listing-overview-image-17.jpg',
        alt: 'Cabin living room',
      },
    ],
    property_name: 'The Lakeside Cabin',
    price: 250,
    description:
      'A tranquil shortlet property with a beautiful view of the lake, ideal for a peaceful retreat.',
    address: '20 Lakefront Lane, Lakeside, 18018',
    property_type: 'Cabin',
    bedrooms: 2,
    bathrooms: 1,
    amenities: [
      {
        type: 'garden',
        value: 'Garden & patio',
      },
      {
        type: 'pool',
        value: 'Private swimming pool',
      },
    ],
    has_units: false,
    stay_duration: ['night', 'week'],
    property_occupation_type: 'shortlet',
    developer: {
      name: 'Lakefront Getaways',
      company_logo: '/images/expert_listing_icon.svg',
      website: 'https://www.lakefrontgetaways.com',
      email: 'info@lakefrontgetaways.com',
      phone: '+2349077558286',
      whatsapp_url: 'https://wa.me/2349077558286',
    },
    date_created: new Date('2025-08-02T15:00:00Z'),
  },
  {
    id: 19,
    featured_image: {
      src: '/images/listings/listing_image-3.png',
      alt: 'Interior of a loft bedroom',
    },
    images: [
      {
        src: '/images/listings/listing-overview-image-12.jpg',
        alt: 'Loft living area',
      },
      {
        src: '/images/listings/listing-overview-image-5.jpg',
        alt: 'Loft bedroom',
      },
      {
        src: '/images/listings/listing-overview-image-8.jpg',
        alt: 'Loft kitchen area',
      },
      {
        src: '/images/listings/listing-overview-image-1.png',
        alt: 'Loft bathroom',
      },
      {
        src: '/images/listings/listing-overview-image-15.jpg',
        alt: 'Rooftop terrace',
      },
      {
        src: '/images/listings/listing-overview-image-7.jpg',
        alt: 'Building exterior',
      },
    ],
    property_name: 'The Downtown Loft',
    price: 3000,
    description:
      "A stylish and modern loft apartment located in the heart of the city's vibrant downtown area.",
    address: '500 Grand Street, Downtown, 19019',
    property_size: 1500,
    property_type: 'Loft',
    bedrooms: 1,
    bathrooms: 1,
    amenities: [
      {
        type: 'home_office',
        value: 'Home office space',
      },
      {
        type: 'kitchen',
        value: 'Fully equipped kitchen',
      },
    ],
    has_units: false,
    stay_duration: 'month',
    property_occupation_type: 'rent',
    developer: {
      name: 'Urban Living Solutions',
      company_logo: '/images/expert_listing_icon.svg',
      website: 'https://www.urbanlivingsolutions.com',
      email: 'info@urbanlivingsolutions.com',
      phone: '+2349077558286',
      whatsapp_url: 'https://wa.me/2349077558286',
    },
    date_created: new Date('2025-08-03T10:30:00Z'),
  },
  {
    id: 20,
    featured_image: {
      src: '/images/listings/listing_image-1.png',
      alt: 'Kitchen of a modern house',
    },
    images: [
      {
        src: '/images/listings/listing-overview-image-16.jpg',
        alt: 'Exterior of the modern house',
      },
      {
        src: '/images/listings/listing-overview-image-11.jpg',
        alt: 'Living room with large windows',
      },
      {
        src: '/images/listings/listing-overview-image-1.png',
        alt: 'Backyard with a deck',
      },
      {
        src: '/images/listings/listing-overview-image-9.jpg',
        alt: 'Master bedroom',
      },
      {
        src: '/images/listings/listing-overview-image-5.jpg',
        alt: 'Front view',
      },
      {
        src: '/images/listings/listing-overview-image-13.jpg',
        alt: 'Guest bedroom',
      },
    ],
    property_name: 'The Modern Vista',
    price: 1100000,
    description:
      'A brand new, custom-built home with a large kitchen, perfect for cooking enthusiasts and family gatherings.',
    address: '600 Hilltop Vista, Summit Hills, 20020',
    year_built: '2025',
    property_size: 3800,
    property_type: 'House',
    bedrooms: 5,
    bathrooms: 4,
    amenities: [
      {
        type: 'kitchen',
        value: 'Fully equipped kitchen',
      },
      {
        type: 'smart_home',
        value: 'Smart home system',
      },
    ],
    has_units: false,
    property_occupation_type: 'buy',
    developer: {
      name: 'Luxury Builders',
      company_logo: '/images/expert_listing_icon.svg',
      website: 'https://www.luxurybuilders.com',
      email: 'contact@luxurybuilders.com',
      phone: '+2349077558286',
      whatsapp_url: 'https://wa.me/2349077558286',
    },
    social_media: {
      instagram: 'https://www.instagram.com/luxurybuilders',
      twitter: null,
      facebook: 'https://www.facebook.com/luxurybuilders',
    },
    date_created: new Date('2025-08-04T12:30:00Z'),
  },
  {
    id: 21,
    featured_image: {
      src: '/images/listings/listing_image-6.png',
      alt: 'Interior of a modern condo',
    },
    images: [
      {
        src: '/images/listings/listing-overview-image-13.jpg',
        alt: 'Condo living area',
      },
      {
        src: '/images/listings/listing-overview-image-9.jpg',
        alt: 'Condo bedroom',
      },
      {
        src: '/images/listings/listing-overview-image-1.png',
        alt: 'Condo balcony',
      },
      {
        src: '/images/listings/listing-overview-image-11.jpg',
        alt: 'Building pool',
      },
      {
        src: '/images/listings/listing-overview-image-16.jpg',
        alt: 'City view',
      },
      {
        src: '/images/listings/listing-overview-image-5.jpg',
        alt: 'Condo kitchen',
      },
      {
        src: '/images/listings/listing-overview-image-3.png',
        alt: 'Gym area',
      },
    ],
    property_name: 'The City View Condo',
    price: 3000,
    description: 'A modern two-bedroom condo with spectacular city views and a private balcony.',
    address: '250 Metropolis Street, City Center, 10001',
    property_size: '1,200 sq ft',
    property_type: 'Condo',
    bedrooms: 2,
    bathrooms: 2,
    amenities: [
      {
        type: 'pool',
        value: 'Private swimming pool',
      },
      {
        type: 'view',
        value: 'Ocean view',
      },
    ],
    has_units: true,
    stay_duration: 'month',
    property_occupation_type: 'rent',
    developer: {
      name: 'City Core Developers',
      company_logo: '/images/expert_listing_icon.svg',
      website: 'https://www.citycoredevelopers.com',
      email: 'info@citycoredevelopers.com',
      phone: '+2349077558286',
      whatsapp_url: 'https://wa.me/2349077558286',
    },
    date_created: new Date('2025-08-05T09:00:00Z'),
  },
  {
    id: 22,
    featured_image: {
      src: '/images/listings/listing_image-1.png',
      alt: 'Exterior of a cozy two-story house',
    },
    images: [
      {
        src: '/images/listings/listing-overview-image-11.jpg',
        alt: 'House kitchen',
      },
      {
        src: '/images/listings/listing-overview-image-5.jpg',
        alt: 'House bedroom',
      },
      {
        src: '/images/listings/listing-overview-image-1.png',
        alt: 'House living room',
      },
    ],
    property_name: 'The Family Retreat',
    price: 650000,
    description:
      'A charming two-story house perfect for a growing family in a safe, friendly neighborhood.',
    address: '789 Oak Tree Drive, Suburbia, 20002',
    property_size: 2500,
    property_type: 'House',
    bedrooms: 4,
    bathrooms: 3,
    amenities: [
      {
        type: 'garden',
        value: 'Garden & patio',
      },
      {
        type: 'garage',
        value: '2-car garage',
      },
    ],
    has_units: false,
    property_occupation_type: 'buy',
    developer: {
      name: 'Homebuilders Inc.',
      company_logo: '/images/expert_listing_icon.svg',
      website: 'https://www.homebuildersinc.com',
      email: 'info@homebuildersinc.com',
      phone: '+2349077558286',
      whatsapp_url: 'https://wa.me/2349077558286',
    },
    date_created: new Date('2025-08-05T10:30:00Z'),
  },
  {
    id: 23,
    featured_image: {
      src: '/images/listings/listing_image-9.jpg',
      alt: 'Modern short-term rental apartment',
    },
    images: [
      {
        src: '/images/listings/listing-overview-image-10.jpg',
        alt: 'Apartment living area',
      },
      {
        src: '/images/listings/listing-overview-image-4.png',
        alt: 'Apartment bedroom',
      },
      {
        src: '/images/listings/listing-overview-image-7.jpg',
        alt: 'Apartment kitchen',
      },
      {
        src: '/images/listings/listing-overview-image-13.jpg',
        alt: 'Apartment balcony',
      },
      {
        src: '/images/listings/listing-overview-image-1.png',
        alt: 'Building exterior',
      },
      {
        src: '/images/listings/listing-overview-image-17.jpg',
        alt: 'Bathroom',
      },
    ],
    property_name: "The Traveler's Rest",
    price: 150,
    description:
      'A fully furnished studio apartment for short-term stays, with all the necessary amenities for a comfortable trip.',
    address: '100 Guest Street, Tourist Town, 30003',
    property_size: 600,
    property_type: 'Shortlet Apartment',
    bedrooms: 1,
    bathrooms: 1,
    amenities: [
      {
        type: 'kitchen',
        value: 'Fully equipped kitchen',
      },
      {
        type: 'security',
        value: '24/7 security',
      },
    ],
    has_units: true,
    stay_duration: 'night',
    property_occupation_type: 'shortlet',
    developer: {
      name: 'Global Shortlets',
      company_logo: '/images/expert_listing_icon.svg',
      website: 'https://www.globalshortlets.com',
      email: 'info@globalshortlets.com',
      phone: '+2349077558286',
      whatsapp_url: 'https://wa.me/2349077558286',
    },
    date_created: new Date('2025-08-05T11:00:00Z'),
  },
  {
    id: 24,
    featured_image: {
      src: '/images/listings/listing_image-3.png',
      alt: 'A luxurious penthouse with a panoramic view',
    },
    images: [
      {
        src: '/images/listings/listing-overview-image-12.jpg',
        alt: 'Penthouse living room',
      },
      {
        src: '/images/listings/listing-overview-image-8.jpg',
        alt: 'Penthouse bedroom',
      },
      {
        src: '/images/listings/listing-overview-image-15.jpg',
        alt: 'Penthouse kitchen',
      },
      {
        src: '/images/listings/listing-overview-image-1.png',
        alt: 'Penthouse terrace with pool',
      },
      {
        src: '/images/listings/listing-overview-image-14.jpg',
        alt: 'Cityscape view from balcony',
      },
      {
        src: '/images/listings/listing-overview-image-9.jpg',
        alt: 'Dining area',
      },
      {
        src: '/images/listings/listing-overview-image-17.jpg',
        alt: 'Master bathroom',
      },
      {
        src: '/images/listings/listing-overview-image-3.png',
        alt: 'Exterior of building',
      },
    ],
    property_name: 'The Penthouse Paradise',
    price: 'Negotiable',
    description:
      'A stunning penthouse with floor-to-ceiling windows, offering unparalleled views of the ocean and cityscape.',
    address: '500 High Street, Capital City, 40004',
    property_size: 5000,
    property_type: 'Penthouse',
    bedrooms: 4,
    bathrooms: 5,
    amenities: [
      {
        type: 'pool',
        value: 'Private swimming pool',
      },
      {
        type: 'view',
        value: 'Ocean view',
      },
    ],
    has_units: false,
    stay_duration: 'year',
    property_occupation_type: ['buy', 'rent'],
    developer: {
      name: 'Luxury Developments Ltd.',
      company_logo: '/images/expert_listing_icon.svg',
      website: 'https://www.luxurydevelopments.com',
      email: 'sales@luxurydevelopments.com',
      phone: '+2349077558286',
      whatsapp_url: 'https://wa.me/2349077558286',
    },
    date_created: new Date('2025-08-05T12:00:00Z'),
  },
  {
    id: 25,
    featured_image: {
      src: '/images/listings/listing_image-7.jpg',
      alt: 'Historic brick building with modern office spaces',
    },
    images: [
      {
        src: '/images/listings/listing-overview-image-14.jpg',
        alt: 'Modern office space',
      },
      {
        src: '/images/listings/listing-overview-image-10.jpg',
        alt: 'Office kitchen',
      },
      {
        src: '/images/listings/listing-overview-image-6.jpg',
        alt: 'Office lobby',
      },
    ],
    property_name: 'The Old Mill',
    price: 'Negotiable',
    description:
      'A historic building converted into creative office spaces, perfect for startups and small businesses.',
    address: '400 Commerce Street, Industrial Park, 50005',
    property_size: 3000,
    property_type: 'Office Space',
    bedrooms: 0,
    bathrooms: 0,
    amenities: [
      {
        type: 'security',
        value: '24/7 security',
      },
      {
        type: 'home_office',
        value: 'Home office space',
      },
    ],
    has_units: false,
    stay_duration: 'month',
    property_occupation_type: 'rent',
    developer: {
      name: 'Heritage Restorations',
      company_logo: '/images/expert_listing_icon.svg',
      website: 'https://www.heritagerestorations.com',
      email: 'info@heritagerestorations.com',
      phone: '+2349077558286',
      whatsapp_url: 'https://wa.me/2349077558286',
    },
    date_created: new Date('2025-08-05T13:00:00Z'),
  },
  {
    id: 26,
    featured_image: {
      src: '/images/listings/listing_image-2.png',
      alt: 'A modern townhouse in a gated community',
    },
    images: [
      {
        src: '/images/listings/listing-overview-image-17.jpg',
        alt: 'Townhouse living room',
      },
      {
        src: '/images/listings/listing-overview-image-13.jpg',
        alt: 'Townhouse kitchen',
      },
      {
        src: '/images/listings/listing-overview-image-9.jpg',
        alt: 'Townhouse bedroom',
      },
      {
        src: '/images/listings/listing-overview-image-1.png',
        alt: 'Private backyard',
      },
      {
        src: '/images/listings/listing-overview-image-15.jpg',
        alt: 'Community pool',
      },
    ],
    property_name: 'The Gated Community Townhouse',
    price: 550000,
    description:
      'A brand new townhouse with a private backyard, located in a secure and peaceful gated community.',
    address: '600 Safe Haven Road, Suburbia, 20002',
    property_size: 1800,
    property_type: 'Townhouse',
    bedrooms: 3,
    bathrooms: 2,
    amenities: [
      {
        type: 'garage',
        value: '2-car garage',
      },
      {
        type: 'security',
        value: '24/7 security',
      },
    ],
    has_units: false,
    property_occupation_type: 'buy',
    developer: {
      name: 'Secure Living Developments',
      company_logo: '/images/expert_listing_icon.svg',
      website: 'https://www.securelivingdevelopments.com',
      email: 'info@securelivingdevelopments.com',
      phone: '+2349077558286',
      whatsapp_url: 'https://wa.me/2349077558286',
    },
    date_created: new Date('2025-08-05T14:00:00Z'),
  },
  {
    id: 27,
    featured_image: {
      src: '/images/listings/listing_image-8.jpg',
      alt: 'A beachside shortlet apartment',
    },
    images: [
      {
        src: '/images/listings/listing-overview-image-1.png',
        alt: 'Apartment balcony with ocean view',
      },
      {
        src: '/images/listings/listing-overview-image-15.jpg',
        alt: 'Apartment living area',
      },
      {
        src: '/images/listings/listing-overview-image-4.png',
        alt: 'Apartment bedroom',
      },
      {
        src: '/images/listings/listing-overview-image-7.jpg',
        alt: 'Apartment kitchen',
      },
    ],
    property_name: 'The Seaside Shortlet',
    price: 200,
    description:
      'A charming shortlet apartment with a balcony overlooking the sea, perfect for a relaxing vacation.',
    address: '200 Beachfront Road, Seaside, 40004',
    property_size: '700 sq ft',
    property_type: 'Shortlet Apartment',
    bedrooms: 1,
    bathrooms: 1,
    amenities: [
      {
        type: 'view',
        value: 'Ocean view',
      },
      {
        type: 'pool',
        value: 'Private swimming pool',
      },
    ],
    has_units: true,
    stay_duration: 'night',
    property_occupation_type: 'shortlet',
    developer: {
      name: 'Seaside Escapes Ltd.',
      company_logo: '/images/expert_listing_icon.svg',
      website: 'https://www.seasideescapes.com',
      email: 'info@seasideescapes.com',
      phone: '+2349077558286',
      whatsapp_url: 'https://wa.me/2349077558286',
    },
    date_created: new Date('2025-08-05T15:00:00Z'),
  },
  {
    id: 28,
    featured_image: {
      src: '/images/listings/listing_image-5.png',
      alt: 'A modern family home with a spacious backyard',
    },
    images: [
      {
        src: '/images/listings/listing-overview-image-10.jpg',
        alt: 'Backyard with a pool',
      },
      {
        src: '/images/listings/listing-overview-image-6.jpg',
        alt: 'Living room with large windows',
      },
      {
        src: '/images/listings/listing-overview-image-13.jpg',
        alt: 'House kitchen',
      },
    ],
    property_name: 'The Lakeside Home',
    price: 900000,
    description:
      'A beautiful lakeside home with a spacious backyard and a private dock for your boat. Ideal for outdoor enthusiasts.',
    address: '800 Lakeview Drive, Lakeside, 18018',
    property_size: 3500,
    property_type: 'House',
    bedrooms: 4,
    bathrooms: 3,
    amenities: [
      {
        type: 'pool',
        value: 'Private swimming pool',
      },
      {
        type: 'garden',
        value: 'Garden & patio',
      },
    ],
    has_units: false,
    property_occupation_type: 'buy',
    developer: {
      name: 'Lakeside Homes Inc.',
      company_logo: '/images/expert_listing_icon.svg',
      website: 'https://www.lakesidehomes.com',
      email: 'info@lakesidehomes.com',
      phone: '+2349077558286',
      whatsapp_url: 'https://wa.me/2349077558286',
    },
    date_created: new Date('2025-08-05T16:00:00Z'),
  },
  {
    id: 29,
    featured_image: {
      src: '/images/listings/listing_image-3.png',
      alt: 'A vintage home with modern updates',
    },
    images: [
      {
        src: '/images/listings/listing-overview-image-17.jpg',
        alt: 'Living room with hardwood floors',
      },
      {
        src: '/images/listings/listing-overview-image-16.jpg',
        alt: 'Updated kitchen',
      },
      {
        src: '/images/listings/listing-overview-image-2.png',
        alt: 'Bedroom',
      },
    ],
    property_name: 'The Vintage House',
    price: 4000,
    description:
      'A classic home with updated interiors and a large, cozy living room. Perfect for a family who values charm and comfort.',
    address: '900 Vintage Road, Old Town, 90009',
    property_size: 2000,
    property_type: 'House',
    bedrooms: 3,
    bathrooms: 2,
    amenities: [
      {
        type: 'garden',
        value: 'Garden & patio',
      },
      {
        type: 'garage',
        value: '2-car garage',
      },
    ],
    has_units: false,
    stay_duration: 'month',
    property_occupation_type: 'rent',
    developer: {
      name: 'Retro Properties',
      company_logo: '/images/expert_listing_icon.svg',
      website: 'https://www.retroproperties.com',
      email: 'info@retroproperties.com',
      phone: '+2349077558286',
      whatsapp_url: 'https://wa.me/2349077558286',
    },
    date_created: new Date('2025-08-05T17:00:00Z'),
  },
  {
    id: 30,
    featured_image: {
      src: '/images/listings/listing_image-6.png',
      alt: 'A modern apartment with a private balcony',
    },
    images: [
      {
        src: '/images/listings/listing-overview-image-11.jpg',
        alt: 'Apartment living area',
      },
      {
        src: '/images/listings/listing-overview-image-17.jpg',
        alt: 'Apartment bedroom',
      },
      {
        src: '/images/listings/listing-overview-image-15.jpg',
        alt: 'Apartment kitchen',
      },
      {
        src: '/images/listings/listing-overview-image-9.jpg',
        alt: 'Balcony view',
      },
      {
        src: '/images/listings/listing-overview-image-5.jpg',
        alt: 'Building pool',
      },
      {
        src: '/images/listings/listing-overview-image-13.jpg',
        alt: 'Building gym',
      },
      {
        src: '/images/listings/listing-overview-image-1.png',
        alt: 'Building exterior',
      },
      {
        src: '/images/listings/listing-overview-image-2.png',
        alt: 'Building lobby',
      },
      {
        src: '/images/listings/listing-overview-image-10.jpg',
        alt: 'Another apartment view',
      },
      {
        src: '/images/listings/listing-overview-image-14.jpg',
        alt: 'Apartment bathroom',
      },
    ],
    property_name: 'The Modern Apartment',
    price: 2800,
    description:
      'A modern apartment with a private balcony, located in a building with a pool and gym.',
    address: '400 Modern Way, Urban City, 10001',
    property_size: 950,
    property_type: 'Apartment',
    bedrooms: 2,
    bathrooms: 2,
    amenities: [
      {
        type: 'pool',
        value: 'Private swimming pool',
      },
      {
        type: 'security',
        value: '24/7 security',
      },
    ],
    has_units: false,
    stay_duration: 'month',
    property_occupation_type: 'rent',
    developer: {
      name: 'Urban Living Inc.',
      company_logo: '/images/expert_listing_icon.svg',
      website: 'https://www.urbanlivinginc.com',
      email: 'info@urbanlivinginc.com',
      phone: '+2349077558286',
      whatsapp_url: 'https://wa.me/2349077558286',
    },
    date_created: new Date('2025-08-05T18:00:00Z'),
  },
];
