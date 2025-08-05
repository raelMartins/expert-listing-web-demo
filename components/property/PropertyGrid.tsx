'use client';

import React from 'react';
import {SimpleGrid} from '@chakra-ui/react';
import {motion, AnimatePresence} from 'framer-motion';
import {PropertyCard} from './card';
import {PropertyOccupationType, PropertyType} from '@/utils/types/property';
import {ai_properties} from '@/utils/data/ai_generated_properties';
// import {purchase_properties, rental_properties} from '@/utils/data/property';

const MotionGrid = motion(SimpleGrid);

interface PropertyGridProps {
  properties: PropertyType[];
  listingsType?: PropertyOccupationType;
  columns?: {base: number; md: number; lg: number};
  showAll?: boolean;
}

export const PropertyGrid = ({properties, listingsType, columns, showAll}: PropertyGridProps) => {
  // Animation variants for the enter/exit transition
  const itemVariants = {
    initial: {
      opacity: 0,
      scale: 0.8,
    },
    animate: {
      opacity: 1,
      scale: 1,
      transition: {
        type: 'spring',
        stiffness: 260,
        damping: 20,
      },
    },
    exit: {
      opacity: 0,
      scale: 0.8,
    },
  };

  // const propertiesArray = shuffleArray(properties);
  const propertiesArray = ai_properties || properties;
  const filteredItems = !listingsType
    ? propertiesArray
    : // :
      propertiesArray?.filter(
        item =>
          item.property_occupation_type == listingsType ||
          item.property_occupation_type?.includes(listingsType)
      );
  // listingsType === `buy`
  // ? purchase_properties
  // : listingsType === `rent`
  // ? rental_properties
  // : propertiesArray;

  return (
    <AnimatePresence>
      <MotionGrid columns={columns || {base: 1, md: 2, lg: 3}} gap={`40px 24px`}>
        {filteredItems?.slice(0, showAll ? filteredItems?.length : 6).map(data => (
          <PropertyCard key={data.id} data={data} animationVariants={itemVariants} />
        ))}
      </MotionGrid>
    </AnimatePresence>
  );
};
