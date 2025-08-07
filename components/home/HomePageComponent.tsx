'use client';

import {Box, Center, Flex, Heading, HStack, Stack, Text, VStack} from '@chakra-ui/react';
import Image from 'next/image';
import {Footer} from '../layout/Footer';
import {ExpertListingLogo} from '../assets';
import {NavbarMenu} from '../layout/Navbar/NavbarMenu';
import {ListingTypeToggle} from './ListingTypeToggle';
import {useEffect, useState} from 'react';
import {ListingFilter} from './ListingFilter';
import {PropertyGrid} from '../property/PropertyGrid';
import {dummy_properties} from '@/utils/data/property';
import {PropertyOccupationType} from '@/utils/types/property';
import {SnaggingServiceCard} from './SnaggingServiceCard';

export function HomePageComponent() {
  const [listingsType, setListingsType] = useState<PropertyOccupationType>('buy');
  const [stickyNav, setStickyNav] = useState(false);
  const [expandNavbar, setExpandNavbar] = useState(true);
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    // Get a reference to the element (replace 'myElement' with your element's ID or selector)
    const myElement = document.getElementById('listings-filter');

    if (myElement) {
      // Get the DOMRect object for the element
      const rect = myElement.getBoundingClientRect();

      // The 'top' property gives the distance from the viewport top
      // const scrollThreshold: number = rect.top - 100;
      const scrollThreshold: number = rect.top;

      window.scrollTo(0, 0);

      window.addEventListener(`scroll`, () => {
        console.log({
          distanceFromViewportTop: scrollThreshold,
          scrollPosition: window.scrollY,
        });
        setExpandNavbar(false);

        if (window.scrollY > scrollThreshold) {
          setStickyNav(true);
        } else {
          setStickyNav(false);
        }
      });
    } else {
      console.log('Element not found.');
    }
  }, []);

  const handleImageLoad = () => {
    setImageLoaded(true);
    console.log('Image Loaded');
  };

  return (
    <Box
      color={`text.1`}
      background={`background.2`}
      visibility={!imageLoaded ? `hidden` : `visible`}
    >
      <Box minH={`768px`} position={`relative`} w={`100%`} overflow={`hidden`}>
        <Flex
          color={`#fff`}
          position={`fixed`}
          zIndex={`2`}
          top={`0px`}
          width={`100%`}
          left={`0px`}
        >
          {expandNavbar && stickyNav ? (
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
          ) : null}
          <HStack
            maxW={`2000px`}
            w={`100%`}
            margin={`0px auto`}
            gap={`30px`}
            p={{base: `20px`, md: `32px 80px`}}
            transition={`.5s`}
            // bg={`transparent`}
            background={
              stickyNav
                ? `#105B48`
                : `linear-gradient(360deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 100%)`
            }
            pb={{base: `20px`, md: expandNavbar ? `200px` : `32px`}}
          >
            <ExpertListingLogo height={`17px`} />
            <Box flex={`1`}></Box>
            <NavbarMenu />
          </HStack>
        </Flex>

        <Center
          flexDir={`column`}
          position={`absolute`}
          top={`0px`}
          h={`433px`}
          w={`100%`}
          background={`linear-gradient(360deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 100%)`}
          color={`#ffffff`}
          zIndex={`1`}
          p={{base: `20px`, md: `32px 80px`}}
        >
          <VStack gap={`40px`} pt={`124px`} position={`relative`} zIndex={`1`} textAlign={`center`}>
            <Stack gap={`24px`}>
              <Heading
                fontWeight={`700`}
                fontSize={`60px`}
                lineHeight={`120%`}
                letterSpacing={`-1%`}
              >
                Your Home is Waiting for You
              </Heading>
              <Text fontWeight={`400`} fontSize={`19px`} lineHeight={`130%`} letterSpacing={`0%`}>
                Real estate made simple — every listing checked, every agent verified.
              </Text>
            </Stack>
            <ListingTypeToggle type={listingsType} setType={setListingsType} />
          </VStack>
        </Center>
        <Image
          src={`/images/home_hero.png`}
          alt="Hero"
          fill
          style={{objectFit: `cover`}}
          priority
          onLoad={handleImageLoad}
        />
        <Center
          flexDir={`column`}
          h={`300px`}
          w={`100%`}
          background={`linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #000000 100%)`}
          position={`absolute`}
          bottom={`0px`}
          // zIndex={`1`}
        >
          <Box
            px={expandNavbar || !stickyNav ? {base: `20px`, md: `80px`} : `0px`}
            position={stickyNav ? `fixed` : `relative`}
            top={!stickyNav ? `0px` : expandNavbar ? `100px` : `16px`}
            w={expandNavbar || !stickyNav ? `100%` : `35%`}
            zIndex={`100`}
            transition={`.5s`}
            // display={{base: `none`, xl: `block`}}
          >
            <ListingFilter
              stickyNav={stickyNav}
              expandNavbar={expandNavbar}
              setExpandNavbar={setExpandNavbar}
            />
          </Box>
        </Center>
      </Box>
      <Box p={{base: `20px`, md: `24px 80px`}} minH={`700px`} transition={`.5s`}>
        <PropertyGrid listingsType={listingsType} properties={dummy_properties} />
      </Box>
      <Box p={{base: `20px`, md: `80px`}} transition={`.5s`}>
        <SnaggingServiceCard />
      </Box>
      <Footer />
    </Box>
  );
}
