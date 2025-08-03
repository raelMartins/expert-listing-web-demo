import {dummy_properties} from '@/utils/data/property';
import {formatToCurrency} from '@/utils/formatting/amount';
import {PropertyType} from '@/utils/types/property';
import {shuffleArray} from '@/utils/utility_functions';
import {Box, Center, Flex, Stack, Text} from '@chakra-ui/react';
import Image from 'next/image';
import {FeaturedAmenities} from './card/FeaturedAmenities';

export const AvailableUnits = ({property}: {property: PropertyType}) => {
  const units = shuffleArray(dummy_properties?.filter(el => el.id !== property?.id)).slice(0, 2);
  return (
    <Stack gap={`24px`}>
      {units?.map(unit => (
        <Flex
          key={unit.id}
          gap={`16px`}
          direction={{base: `column`, md: `row`}}
          align={`center`}
          borderRadius={`24px`}
          minH={`240px`}
          border={`1px solid`}
          borderColor={`border_color.1`}
        >
          <Center
            position={`relative`}
            aspectRatio={{base: `4 / 3`, md: `auto`}}
            w={{base: `100%`, md: `320px`}}
            borderRadius={`16px 0px 0px 16px`}
            overflow={`hidden`}
            h={{base: `auto`, md: `100%`}}
          >
            <Image
              src={unit?.featured_image?.src}
              alt={unit?.featured_image?.alt || ``}
              fill
              style={{objectFit: `cover`}}
            />
          </Center>
          <Stack flex={`1`} gap={`12px`}>
            <Text fontWeight={`700`} fontSize={`24px`} lineHeight={`100%`} letterSpacing={`0%`}>
              {formatToCurrency({amount: unit?.price || 0})}
              <Box
                as={`span`}
                color={`text.3`}
                fontWeight={`400`}
                fontSize={`18px`}
              >{`/${unit?.stay_duration}`}</Box>
            </Text>
            <Text fontWeight={`400`} fontSize={`16px`} lineHeight={`100%`} letterSpacing={`0%`}>
              {unit?.property_name}
            </Text>
            <FeaturedAmenities property={unit} />
          </Stack>
        </Flex>
      ))}
    </Stack>
  );
};
