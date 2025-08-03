import {BathsIcon, BedsIcon, PropertySizeIcon} from '@/components/assets/property/amenities';
import {PropertyType} from '@/utils/types/property';
import {Flex, HStack, Text} from '@chakra-ui/react';

export const FeaturedAmenities = ({property}: {property: PropertyType}) => {
  return (
    <Flex
      align={`center`}
      color={`text.3`}
      fontWeight={`400`}
      fontSize={`13px`}
      lineHeight={`100%`}
      letterSpacing={`2%`}
      gap={`8px`}
    >
      {property?.bedrooms && (
        <HStack
          p={`9px 12px`}
          gap={`8px`}
          borderRadius={`8px`}
          border={`1px solid`}
          borderColor={`#E7E7E7`}
        >
          <BedsIcon baseColor={`text.3`} />
          <Text>
            {property?.bedrooms} Bed{property?.bedrooms == 1 ? '' : 's'}
          </Text>
        </HStack>
      )}
      {property?.bathrooms && (
        <HStack
          p={`9px 12px`}
          gap={`8px`}
          borderRadius={`8px`}
          border={`1px solid`}
          borderColor={`#E7E7E7`}
        >
          <BathsIcon baseColor={`text.3`} />
          <Text>
            {property?.bathrooms} Bath{property?.bathrooms == 1 ? '' : 's'}
          </Text>
        </HStack>
      )}
      {property?.property_size && (
        <HStack
          p={`9px 12px`}
          gap={`8px`}
          borderRadius={`8px`}
          border={`1px solid`}
          borderColor={`#E7E7E7`}
        >
          <PropertySizeIcon baseColor={`text.3`} />
          <Text>{property?.property_size}</Text>
        </HStack>
      )}
      {property?.amenities?.map(item =>
        !item?.featured ? null : (
          <HStack
            key={item.value}
            p={`9px 12px`}
            gap={`8px`}
            borderRadius={`8px`}
            border={`1px solid`}
            borderColor={`#E7E7E7`}
          >
            {item.icon}
            <Text>{item.value}</Text>
          </HStack>
        )
      )}
    </Flex>
  );
};
