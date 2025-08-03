import {Box, Button, Center, Flex, Heading, HStack, Stack, Text} from '@chakra-ui/react';
import Image from 'next/image';
import {
  CertifiedInspectorsIcon,
  EasyBookingIcon,
  PropertyInspectionIcon,
  TransparentPricingIcon,
} from '../assets/snagging';
import {ExpertListingIcon} from '../assets';

export const SnaggingServiceCard = ({}) => {
  return (
    <Flex
      h={`480px`}
      color={`Grey.15`}
      align={`stretch`}
      borderRadius={`40px`}
      w={`100%`}
      overflow={`hidden`}
    >
      <Box
        flex={`1`}
        bg={`Green.2`}
        p={{base: `20px`, md: `40px`}}
        position={`relative`}
        overflow={`hidden`}
      >
        <ExpertListingIcon
          position={`absolute`}
          top={`-150px`}
          right={`-150px`}
          boxSize={`385px`}
          transform={`rotate(55deg)`}
          baseColor="Green.1"
          opacity={`.3`}
        />
        <ExpertListingIcon
          position={`absolute`}
          bottom={`-175px`}
          left={`-175px`}
          boxSize={`385px`}
          transform={`rotate(120deg)`}
          baseColor="Green.1"
          opacity={`.3`}
        />
        <Stack position={`relative`} zIndex={`1`} h={`100%`} maxW={{base: `100%`, md: `80%`}}>
          <Heading fontWeight={`700`} fontSize={`48px`} lineHeight={`130%`} letterSpacing={`0%`}>
            Spot the Problems. Before They Become Your Problem.
          </Heading>
          <Text
            flex={`1`}
            font-weight={`400`}
            font-size={`19px`}
            line-height={`130%`}
            letter-spacing={`0%`}
          >
            For a small fee, our snagging service gives you a detailed inspection of your new home
            helping you save time, money, and stress.
          </Text>
          <Button
            variant={`glass`}
            bg={`rgba(255, 255, 255, .03)`}
            p={`17.5px 35px`}
            borderColor={`rgba(255, 255, 255, .3)`}
          >
            Book Snagging Service
          </Button>
        </Stack>
      </Box>
      <Center flex={`1`} position={`relative`} h={`100%`} p={{base: `20px`, md: `40px`}}>
        <Image src={`/images/snag_service.png`} alt={``} fill style={{objectFit: `cover`}} />
        <Stack
          position={`absolute`}
          zIndex={`1`}
          top={`0px`}
          right={`0px`}
          bottom={`0px`}
          p={`55px`}
          justify={`center`}
          fontWeight={`400`}
          fontSize={`14px`}
          lineHeight={`130%`}
          letterSpacing={`0%`}
          color={`Grey.15`}
          gap={`24px`}
        >
          <HStack
            p={`12px`}
            borderRadius={`16px`}
            w={`175px`}
            background={`linear-gradient(90.51deg, rgba(0, 0, 0, 0.48) 0%, rgba(0, 0, 0, 0.32) 100%)`}
            cursor={`pointer`}
            gap={`10px`}
            backdropFilter={`blur(80px)`}
            boxShadow={`1px 4px 15px 0px #00000014`}
            transition={`.6s`}
            transform={`translate(-60px)`}
            _hover={{transform: `translate(-50px, 10px) scale(1.1)`}}
          >
            <PropertyInspectionIcon />
            <Text>Detailed property inspection reports</Text>
          </HStack>
          <HStack
            p={`12px`}
            borderRadius={`16px`}
            w={`195px`}
            background={`linear-gradient(90.51deg, rgba(0, 0, 0, 0.48) 0%, rgba(0, 0, 0, 0.32) 100%)`}
            cursor={`pointer`}
            gap={`10px`}
            backdropFilter={`blur(80px)`}
            boxShadow={`1px 4px 15px 0px #00000014`}
            transition={`.6s`}
            transform={`translate(0px)`}
            _hover={{transform: `translate(-10px, 10px) scale(1.1)`}}
          >
            <TransparentPricingIcon />
            <Text>Transparent pricing with no hidden fees</Text>
          </HStack>
          <HStack
            p={`12px`}
            borderRadius={`16px`}
            w={`195px`}
            background={`linear-gradient(90.51deg, rgba(0, 0, 0, 0.48) 0%, rgba(0, 0, 0, 0.32) 100%)`}
            cursor={`pointer`}
            gap={`10px`}
            backdropFilter={`blur(80px)`}
            boxShadow={`1px 4px 15px 0px #00000014`}
            transition={`.6s`}
            transform={`translate(0px)`}
            _hover={{transform: `translate(-10px, -10px) scale(1.1)`}}
          >
            <CertifiedInspectorsIcon />
            <Text>Expert engineers and certified inspectors</Text>
          </HStack>
          <HStack
            p={`12px`}
            borderRadius={`16px`}
            w={`175px`}
            background={`linear-gradient(90.51deg, rgba(0, 0, 0, 0.48) 0%, rgba(0, 0, 0, 0.32) 100%)`}
            cursor={`pointer`}
            gap={`10px`}
            backdropFilter={`blur(80px)`}
            boxShadow={`1px 4px 15px 0px #00000014`}
            transition={`.6s`}
            transform={`translate(-60px)`}
            _hover={{transform: `translate(-50px, -10px) scale(1.1)`}}
          >
            <EasyBookingIcon />
            <Text>Easy booking and fast turnaround</Text>
          </HStack>
        </Stack>
      </Center>
    </Flex>
  );
};
