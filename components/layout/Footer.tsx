'use client';

import {Box, Center, Flex, HStack, Stack, Text, VStack} from '@chakra-ui/react';
import {
  ExpertListingLogo,
  FacebookOutlineIcon,
  InstagramOutlineIcon,
  LinkedInOutlineIcon,
  TwitterOutlineIcon,
} from '../assets';
import Link from 'next/link';

export const Footer = ({}) => {
  return (
    <Box bg={`#0F1010`} color={`#ffffff`} p={`80px 80px 32px`}>
      <Stack gap={`28px`}>
        <Flex
          direction={{base: `column`, md: `row`}}
          justify={`space-between`}
          fontWeight={`400`}
          fontSize={`19px`}
          lineHeight={`130%`}
          letterSpacing={`0%`}
          gap={`20px`}
          align={{base: `center`, md: `flex-start`}}
        >
          <ExpertListingLogo height={`33px`} width={`250px`} />
          <HStack
            flexDir={{base: `column`, md: `row`}}
            align={{base: `center`, md: `stretch`}}
            gap={{base: `22px`, md: `80px`}}
          >
            <VStack align={{base: `center`, md: `stretch`}} gap={`22px`}>
              <Link href={`/`}>Rent</Link>
              <Link href={`/`}>Buy</Link>
              <Link href={`/`}>Shortlet</Link>
            </VStack>
            <VStack align={{base: `center`, md: `stretch`}} gap={`22px`}>
              <Link href={`/`} target="_blank" rel="norefferer noopener">
                Privacy Policy
              </Link>
              <Link href={`/`} target="_blank" rel="norefferer noopener">
                Terms & Conditions
              </Link>
            </VStack>
          </HStack>
        </Flex>
        <Flex
          align={{base: `center`, md: `baseline`}}
          gap={`20px`}
          justify={`space-between`}
          borderTop={`1px solid`}
          borderColor={`rgba(255, 255, 255, .10)`}
          pt={`24px`}
          flexDir={{base: `column`, md: `row`}}
        >
          <HStack gap={`12px`}>
            <Center
              as={Link}
              href={`/`}
              target="_blank"
              rel="norefferer noopener"
              border={`0.5px solid`}
              borderColor={`rgba(255, 255, 255, .12)`}
              borderRadius={`50%`}
              bg={`rgba(255, 255, 255, .08)`}
              boxSize={`48px`}
              minW={`48px`}
              p={`10px`}
              cursor={`pointer`}
              transition={`.3s`}
              transform={`translate(0px)`}
              _hover={{transform: `translate(5px, -5px) scale(1.1)`}}
            >
              <InstagramOutlineIcon />
            </Center>
            <Center
              as={Link}
              href={`/`}
              target="_blank"
              rel="norefferer noopener"
              border={`0.5px solid`}
              borderColor={`rgba(255, 255, 255, .12)`}
              borderRadius={`50%`}
              bg={`rgba(255, 255, 255, .08)`}
              boxSize={`48px`}
              minW={`48px`}
              p={`10px`}
              cursor={`pointer`}
              transition={`.3s`}
              transform={`translate(0px)`}
              _hover={{transform: `translate(5px, -5px) scale(1.1)`}}
            >
              <LinkedInOutlineIcon />
            </Center>{' '}
            <Center
              as={Link}
              href={`/`}
              target="_blank"
              rel="norefferer noopener"
              border={`0.5px solid`}
              borderColor={`rgba(255, 255, 255, .12)`}
              borderRadius={`50%`}
              bg={`rgba(255, 255, 255, .08)`}
              boxSize={`48px`}
              minW={`48px`}
              p={`10px`}
              cursor={`pointer`}
              transition={`.3s`}
              transform={`translate(0px)`}
              _hover={{transform: `translate(5px, -5px) scale(1.1)`}}
            >
              <FacebookOutlineIcon />
            </Center>{' '}
            <Center
              as={Link}
              href={`/`}
              target="_blank"
              rel="norefferer noopener"
              border={`0.5px solid`}
              borderColor={`rgba(255, 255, 255, .12)`}
              borderRadius={`50%`}
              bg={`rgba(255, 255, 255, .08)`}
              boxSize={`48px`}
              minW={`48px`}
              p={`10px`}
              cursor={`pointer`}
              transition={`.3s`}
              transform={`translate(0px)`}
              _hover={{transform: `translate(5px, -5px) scale(1.1)`}}
            >
              <TwitterOutlineIcon />
            </Center>
          </HStack>
          <Text
            fontWeight={`400`}
            fontSize={`16px`}
            lineHeight={`140%`}
            letterSpacing={`1%`}
            textAlign={`right`}
          >
            © 2008 - {new Date().getFullYear()} Expert Listing
          </Text>
        </Flex>
      </Stack>
    </Box>
  );
};
