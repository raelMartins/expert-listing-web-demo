'use client';

import {Box, Flex, HStack, Stack, Text} from '@chakra-ui/react';
import {ExpertListingLogo} from '../assets';
import {NavbarMenu} from '../layout/Navbar/NavbarMenu';
import {useState} from 'react';
import {ListingFilter} from '../home/ListingFilter';
import {dummy_properties} from '@/utils/data/property';
import {PropertyGrid} from '../property/PropertyGrid';
import {ExpandableMap} from '../map';
import Link from 'next/link';

export const SearchPageComponent = ({}) => {
  const [expandNavbar, setExpandNavbar] = useState(false);

  return (
    <Box
      color={`text.1`}
      background={`background.2`}
      p={{base: `20px`, md: `24px 80px`}}
      minH={`700px`}
    >
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

      <Stack py={`100px`} gap={`24px`}>
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
        <Flex gap={`24px`} w={`100%`}>
          <Stack flex={`5`}>
            <PropertyGrid properties={dummy_properties} columns={{base: 1, md: 2, lg: 2}} />
          </Stack>
          <Stack flex={`2`}>
            <ExpandableMap width={`434px`} height={`660px`} hideTabsHeader />
          </Stack>
        </Flex>
      </Stack>
    </Box>
  );
};
