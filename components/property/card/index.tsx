'use client';

import {VerifiedIcon} from '@/components/assets';
import {LocationIcon} from '@/components/assets/home/filter';
import {formatToCurrency} from '@/utils/formatting/amount';
import {dateOrTimeAgo} from '@/utils/formatting/date';
import {PropertyType} from '@/utils/types/property';
import {Box, Center, Flex, HStack, Stack, Text, VStack} from '@chakra-ui/react';
import {motion} from 'framer-motion';
import Image from 'next/image';
import {useRouter} from 'next/navigation';
import {FeaturedAmenities} from './FeaturedAmenities';
import {ImageSlider} from '@/components/gallery/ImageSlider';

const MotionBox = motion(Stack);

export const PropertyCard = ({
  data,
  animationVariants,
}: {
  data: PropertyType;
  animationVariants: any;
}) => {
  const router = useRouter();
  const handleClick = () => {
    router.push(`/property/${data.id}`);
  };
  return (
    <MotionBox
      onClick={handleClick}
      w={`100%`}
      gap={`16px`}
      cursor={`pointer`}
      layoutId={`card-${data.id}`} // Define the animation properties
      variants={animationVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      layout // This enables smooth layout transitions when other items are removed
    >
      <Center
        position={`relative`}
        aspectRatio={`411 / 275`}
        width={`100%`}
        borderRadius={`16px`}
        overflow={`hidden`}
      >
        <HStack
          position={`absolute`}
          top={`0px`}
          left={`0px`}
          w={`100%`}
          h={`62px`}
          background={`linear-gradient(180deg, rgba(0, 0, 0, 0.7) 0%, rgba(0, 0, 0, 0) 100%)`}
          zIndex={`1`}
          p={`24px 24px 12px`}
          color={`#ffffff`}
        >
          <Box
            p={`7.5px 8px`}
            fontWeight={`500`}
            fontSize={`13px`}
            lineHeight={`100%`}
            letterSpacing={`2%`}
            background={`#0000007A`}
            borderRadius={`full`}
          >
            Listed {dateOrTimeAgo(data?.date_created?.toUTCString())}
          </Box>
        </HStack>
        {Array.isArray(data?.featured_image) ? (
          <Center w={`100%`} h={`100%`}>
            <ImageSlider
              images={data?.featured_image}
              height={{base: `480px`, md: `300px`}}
              property_id={data.id}
            />
          </Center>
        ) : (
          <Image
            src={data?.featured_image.src}
            alt={data?.featured_image.src}
            fill
            style={{objectFit: `cover`}}
          />
        )}
      </Center>
      <Flex direction={`column`} gap={`16px`}>
        <Stack gap={`8px`}>
          <Text fontWeight={`700`} fontSize={`24px`} lineHeight={`140%`} letterSpacing={`0%`}>
            {formatToCurrency({amount: data?.price || 0})}
            {data?.stay_duration && (
              <Box
                as={`span`}
                color={`#52525B`}
                fontWeight={`400`}
                fontSize={`18px`}
              >{`/${data?.stay_duration}`}</Box>
            )}
          </Text>
          <HStack color={`text.3`} gap={`10px`}>
            <LocationIcon baseColor="text.3" boxSize={`16px`} />
            <Text fontWeight={`400`} fontSize={`16px`} lineHeight={`120%`} letterSpacing={`0%`}>
              {data?.address}
            </Text>
          </HStack>
        </Stack>
        <FeaturedAmenities property={data} />
        {data?.developer && (
          <HStack gap={`6px`}>
            <VStack
              borderRadius={`50%`}
              position={`relative`}
              border={`1px solid`}
              borderColor={`brand_color`}
              boxSize={`34px`}
              justify={`center`}
              align={`center`}
            >
              <Center
                borderRadius={`50%`}
                boxSize={`30px`}
                position={`relative`}
                overflow={`hidden`}
              >
                <Image
                  src={data?.developer?.company_logo || '/images/expert_listing_icon.svg'}
                  alt={data?.developer?.name || ''}
                  fill
                  style={{objectFit: `cover`}}
                />
              </Center>
              <VerifiedIcon position={`absolute`} bottom={`-2px`} right={`-2px`} />
            </VStack>
            <Text
              color={`text.3`}
              fontWeight={`400`}
              fontSize={`16px`}
              lineHeight={`140%`}
              letterSpacing={`1%`}
            >
              Direct to Developer
            </Text>
          </HStack>
        )}
      </Flex>
    </MotionBox>
  );
};
