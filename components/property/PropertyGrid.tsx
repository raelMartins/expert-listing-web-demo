'use client';

import React from 'react';
import {SimpleGrid} from '@chakra-ui/react';
import {motion, AnimatePresence} from 'framer-motion';
import {PropertyCard} from './card';
import {PropertyOccupationType, PropertyType} from '@/utils/types/property';

const MotionGrid = motion(SimpleGrid);

interface PropertyGridProps {
  properties: PropertyType[];
  listingsType?: PropertyOccupationType;
  columns?: {base: number; md: number; lg: number};
}

export const PropertyGrid = ({properties, listingsType, columns}: PropertyGridProps) => {
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
  const propertiesArray = properties;
  const filteredItems = !listingsType
    ? propertiesArray
    : propertiesArray?.filter(
        item =>
          item.property_occupation_type == listingsType ||
          item.property_occupation_type?.includes(listingsType)
      );

  return (
    <AnimatePresence>
      <MotionGrid columns={columns || {base: 1, md: 2, lg: 3}} gap={`40px 24px`}>
        {filteredItems.map(data => (
          <PropertyCard key={data.id} data={data} animationVariants={itemVariants} />
        ))}
      </MotionGrid>
    </AnimatePresence>
  );
};
