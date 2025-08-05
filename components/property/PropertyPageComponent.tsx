'use client';

import {
  Box,
  Center,
  Flex,
  Heading,
  HStack,
  SimpleGrid,
  Stack,
  StackDivider,
  Text,
} from '@chakra-ui/react';
import {PropertyType} from '@/utils/types/property';
import {Gallery} from '../gallery';
import {Footer} from '../layout/Footer';
import {SnaggingServiceCard} from '../home/SnaggingServiceCard';
import {PropertyGrid} from './PropertyGrid';
import {dummy_properties} from '@/utils/data/property';
import {formatToCurrency} from '@/utils/formatting/amount';
import {LocationIcon} from '../assets/home/filter';
import {AmenityIcon} from './AmenityIcon';
import {ExpandableMap} from '../map';
import Image from 'next/image';
import {PhoneCallIcon, WhatsappIcon} from '../assets/property';
import {SharePropertyComponent} from './share';
import {AvailableUnits} from './AvailableUnits';
import {IoChevronForward} from 'react-icons/io5';
import {Navbar} from '../layout/Navbar/Navbar';

export const PropertyPageComponent = ({property}: {property: PropertyType}) => {
  const otherProperties = dummy_properties?.filter(item => item?.id !== property?.id);

  const property_stats = [
    {title: `Property Type`, value: property?.property_type},
    {title: `Year Built`, value: property?.year_built},
    {title: `Size`, value: property?.property_size},
    {title: `Bedrooms`, value: property?.bedrooms},
    {title: `Bathrooms`, value: property?.bathrooms},
  ];

  return (
    <Box color={`text.1`} background={`background.2`}>
      <Navbar />
      <Stack gap={`0px`} px={{base: `20px`, md: `80px`}}>
        <HStack fontSize={`16px`} color={`Green.1`} fontWeight={`500`} mb={`20px`}>
          <Text>Buy</Text>
          <IoChevronForward />
          <Text color={`text.2`}>{property?.property_name}</Text>
        </HStack>
        <Gallery images={property.images} />
        <Flex gap={`20px`} my={`40px`} align={`flex-start`}>
          <Stack
            flex={`3`}
            gap={`24px`}
            divider={<StackDivider borderColor={`border_color.1 !important`} margin={`0px`} />}
          >
            <HStack align={`flex-start`} justify={`space-between`}>
              <Stack gap={`8px`}>
                <Text fontWeight={`500`} fontSize={`40px`} lineHeight={`130%`} letterSpacing={`0%`}>
                  {formatToCurrency({amount: property.price})}
                </Text>
                <HStack
                  gap={`8px`}
                  fontWeight={`400`}
                  fontSize={`13px`}
                  lineHeight={`150%`}
                  letterSpacing={`2%`}
                  color={`text.3`}
                >
                  <LocationIcon baseColor={`text.3`} />
                  <Text>{property?.address}</Text>
                </HStack>
              </Stack>
              <SharePropertyComponent property={property} />
            </HStack>
            {property?.location && (
              <Stack gap={`20px`}>
                <Text fontWeight={`500`} fontSize={`23px`} lineHeight={`130%`} letterSpacing={`0%`}>
                  Local Information
                </Text>
                <ExpandableMap location={property.location} />
              </Stack>
            )}
            <Stack gap={`20px`}>
              <Text fontWeight={`500`} fontSize={`23px`} lineHeight={`130%`} letterSpacing={`0%`}>
                Description
              </Text>
              <Text fontWeight={`400`} fontSize={`16px`} lineHeight={`140%`} letterSpacing={`1%`}>
                {property?.description}
              </Text>
            </Stack>
            <SimpleGrid columns={3} gap={`40px 20px`} w={`80%`} lineHeight={`100%`}>
              {property_stats?.map((stat, i) =>
                !stat.value ? null : (
                  <Stack key={i} gap={`16px`}>
                    <Text
                      color={`text.3`}
                      fontWeight={`400`}
                      fontSize={`13px`}
                      letterSpacing={`2%`}
                    >
                      {stat.title}
                    </Text>
                    <Text fontWeight={`500`} fontSize={`23px`} letterSpacing={`0%`}>
                      {stat.value}
                    </Text>
                  </Stack>
                )
              )}
            </SimpleGrid>
            {property?.amenities?.length && (
              <Stack gap={`20px`}>
                <Text fontWeight={`500`} fontSize={`23px`} lineHeight={`130%`} letterSpacing={`0%`}>
                  Property Features
                </Text>
                <SimpleGrid columns={2} gap={`16px 20px`} w={`80%`}>
                  {property?.amenities?.map(el => (
                    <HStack key={el.value} gap={`8px`}>
                      <AmenityIcon type={el.type} />
                      <Text
                        fontWeight={`400`}
                        fontSize={`16px`}
                        lineHeight={`140%`}
                        letterSpacing={`1%`}
                      >
                        {el.value}
                      </Text>
                    </HStack>
                  ))}
                </SimpleGrid>
              </Stack>
            )}
            {property?.has_units && (
              <Stack gap={`20px`}>
                <Text fontWeight={`500`} fontSize={`23px`} lineHeight={`130%`} letterSpacing={`0%`}>
                  Available Units
                </Text>
                <AvailableUnits property={property} />
              </Stack>
            )}
          </Stack>
          <Stack flex={`2`} position={`sticky`} top={`100px`}>
            {property?.developer && (
              <Flex
                padding={`24px`}
                gap={`20px`}
                borderRadius={`24px`}
                border={`1px solid`}
                borderColor={`border_color.1`}
                cursor={`pointer`}
              >
                <HStack flex={`1`} gap={`8px`} w={`100%`}>
                  {property?.developer?.company_logo && (
                    <Center
                      boxSize={`60px`}
                      minW={`60px`}
                      borderRadius={`50%`}
                      position={`relative`}
                      overflow={`hidden`}
                      border={`1px solid`}
                      borderColor={`border_color.1`}
                      as={`a`}
                      href={property.developer.website ? property.developer.website : ``}
                      target="_blank"
                      rel="norefferer noopener"
                    >
                      <Image
                        src={property.developer.company_logo}
                        alt={property.developer.name}
                        fill
                        style={{objectFit: `cover`}}
                      />
                    </Center>
                  )}
                  <Stack lineHeight={`100%`} gap={`12px`} flex={`1`}>
                    <Text
                      as={`a`}
                      href={property.developer.website ? property.developer.website : ``}
                      target="_blank"
                      rel="norefferer noopener"
                      fontWeight={`500`}
                      fontSize={`19px`}
                      letterSpacing={`0%`}
                    >
                      {property?.developer?.name}
                    </Text>
                    <Text
                      as={`a`}
                      href={`mailto:property?.developer?.email`}
                      color={`Green.1`}
                      fontWeight={`400`}
                      fontSize={`13px`}
                      letterSpacing={`2%`}
                    >
                      {property?.developer?.email}
                    </Text>
                  </Stack>
                </HStack>
                <HStack gap={`8px`}>
                  {property.developer.phone && (
                    <Center
                      as={`a`}
                      href={`tel:${property.developer.phone}`}
                      target="_blank"
                      rel="norefferer noopener"
                      boxSize={`52px`}
                      minW={`52px`}
                      borderRadius={`50%`}
                      border={`1px solid`}
                      borderColor={`border_color.1`}
                      cursor={`pointer`}
                    >
                      <PhoneCallIcon />
                    </Center>
                  )}
                  {property.developer.whatsapp_url && (
                    <Center
                      as={`a`}
                      href={property.developer.whatsapp_url}
                      target="_blank"
                      rel="norefferer noopener"
                      boxSize={`52px`}
                      minW={`52px`}
                      borderRadius={`50%`}
                      border={`1px solid`}
                      borderColor={`border_color.1`}
                      cursor={`pointer`}
                    >
                      <WhatsappIcon />
                    </Center>
                  )}
                </HStack>
              </Flex>
            )}
          </Stack>
        </Flex>
        <Stack py={{base: `20px`, md: `32px`}} gap={`40px`}>
          <Heading
            fontWeight={`500`}
            fontSize={`40px`}
            lineHeight={`130%`}
            letterSpacing={`0%`}
            textAlign={`center`}
          >
            Similar homes you may like
          </Heading>
          <PropertyGrid properties={otherProperties} />
        </Stack>

        <Stack py={{base: `20px`, md: `80px`}}>
          <SnaggingServiceCard />
        </Stack>
      </Stack>
      <Footer />
    </Box>
  );
};
