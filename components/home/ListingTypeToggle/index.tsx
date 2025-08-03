'use client';

import {PropertyOccupationType} from '@/utils/types/property';
import {Box, Center, HStack, Text} from '@chakra-ui/react';
import {motion} from 'framer-motion';
import {Dispatch} from 'react';

interface ListingTypeToggle {
  setType: Dispatch<PropertyOccupationType>;
  type: string;
}

export const ListingTypeToggle = ({type, setType}: ListingTypeToggle) => {
  return (
    <Box bg={`brand_color`} p={`4px`} borderRadius={`full`}>
      <HStack
        gap={`0px`}
        color={`#0b1933`}
        as={motion.div}
        position={`relative`}
        w={`200px`}
        h={`40px`}
        borderRadius={`full`}
        fontWeight={`600`}
        fontSize={`16px`}
        lineHeight={`150%`}
        letterSpacing={`0%`}
        cursor={`pointer`}
        userSelect={`none`}
      >
        <motion.div
          style={{
            position: `absolute`,
            top: `0px`,
            left: type === `rent` ? `auto` : `0px`,
            right: type === `buy` ? `auto` : `0px`,
            height: `100%`,
            width: `100px`,
            borderRadius: `999px`,
            background: `#FFFFFF`,
          }}
          layout
        ></motion.div>

        <Center h={`100%`} flex={`1`} onClick={() => setType(`buy`)}>
          <Text position={`relative`} zIndex={`1`}>
            Buy
          </Text>
        </Center>
        <Center h={`100%`} flex={`1`} onClick={() => setType(`rent`)}>
          <Text position={`relative`} zIndex={`1`}>
            Rent
          </Text>
        </Center>
      </HStack>
    </Box>
  );
};
