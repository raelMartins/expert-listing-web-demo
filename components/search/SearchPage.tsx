'use client';

import {Box, Center, Flex, HStack, Stack, StackDivider, Text} from '@chakra-ui/react';
import {ExpertListingLogo} from '../assets';
import {NavbarMenu} from '../layout/Navbar/NavbarMenu';
import {useState} from 'react';
import {ListingFilter} from '../home/ListingFilter';
import {dummy_properties} from '@/utils/data/property';
import {PropertyGrid} from '../property/PropertyGrid';
import {ExpandableMap} from '../map';
import Link from 'next/link';
import {Footer} from '../layout/Footer';
import {IoFilterOutline} from 'react-icons/io5';
import {HiOutlineAdjustmentsVertical} from 'react-icons/hi2';
import {Pagination} from '../layout/Pagination';

export const SearchPageComponent = ({}) => {
  const [expandNavbar, setExpandNavbar] = useState(false);

  return (
    <Box color={`text.1`} background={`background.2`}>
      <Flex color={`#fff`} position={`fixed`} zIndex={`2`} top={`0px`} width={`100%`} left={`0px`}>
        {expandNavbar && (
          <Box
            position={`fixed`}
            zIndex={`-1`}
            top={`0`}
            left={`0`}
            right={`0`}
            bottom={`0`}
            bg={`rgba(0,0,0,.3)`}
            cursor={`pointer`}
            transition={`.5s`}
            onClick={() => setExpandNavbar(false)}
          />
        )}

        <HStack
          maxW={`2000px`}
          w={`100%`}
          margin={`0px auto`}
          gap={`30px`}
          p={{base: `20px`, md: `32px 80px`}}
          transition={`.5s`}
          bg={`#105B48`}
          pb={{base: `20px`, md: expandNavbar ? `200px` : `32px`}}
        >
          <Box as={Link} href={`/`}>
            <ExpertListingLogo height={`17px`} position={`relative`} zIndex={`500`} />
          </Box>
          <Box flex={`1`}>
            <Box
              p={{base: `0px 20px`, md: `0px 80px`}}
              position={`absolute`}
              top={expandNavbar ? `100px` : `16px`}
              left={`0px`}
              right={`0px`}
              w={`100%`}
              mx={`auto`}
              zIndex={`0`}
              transition={`.5s`}
              color={`text.2`}
            >
              <ListingFilter
                stickyNav={true}
                expandNavbar={expandNavbar}
                setExpandNavbar={setExpandNavbar}
              />
            </Box>
          </Box>
          <NavbarMenu position={`relative`} zIndex={`10`} />
        </HStack>
      </Flex>

      <Stack
        p={{base: `100px 20px`, md: `100px 80px`}}
        pb={{base: `40px`, md: `40px`}}
        gap={`24px`}
      >
        <HStack justify={`space-between`}>
          <Text
            fontFamily={`var(--font_manrope)`}
            fontWeight={`600`}
            fontSize={`28px`}
            lineHeight={`150%`}
            letterSpacing={`0%`}
          >
            Villas for Sale in Victoria Island{' '}
            <Box as={`span`} color={`text.3`}>
              (145 properties)
            </Box>
          </Text>
          <HStack
            fontFamily={`var(--font_manrope)`}
            align={`stretch`}
            boxShadow={`3px 4px 8px 0px #0000000F`}
            bg={`background.2`}
            gap={`0px`}
            borderRadius={`full`}
            overflow={`hidden`}
            width={`max-content`}
            cursor={`pointer`}
            border={`1px solid`}
            borderColor={`border_color.1`}
            divider={
              <StackDivider margin={`0px !important`} borderColor={`border_color.1 !important`} />
            }
          >
            <Center p={`13px 30px`} cursor={`pointer`} _hover={{bg: `background.1`}}>
              <HStack>
                <IoFilterOutline />
                <Text minW={`max-content`}>Sort By</Text>
              </HStack>
            </Center>
            <Center p={`12px 32px`} cursor={`pointer`} _hover={{bg: `background.1`}}>
              <HStack>
                <HiOutlineAdjustmentsVertical />
                <Text minW={`max-content`}>Filters</Text>
              </HStack>
            </Center>
          </HStack>
        </HStack>
        <Flex gap={`24px`} w={`100%`} align={`flex-start`}>
          <Stack flex={`5`} gap={`40px`}>
            <PropertyGrid properties={dummy_properties} columns={{base: 1, md: 2, lg: 2}} />
            <Pagination />
          </Stack>
          <Stack flex={`2`} position={`sticky`} top={`100px`}>
            <ExpandableMap width={`434px`} height={`660px`} hideTabsHeader />
          </Stack>
        </Flex>
      </Stack>
      <Footer />
    </Box>
  );
};
