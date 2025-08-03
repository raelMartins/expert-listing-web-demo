import {ShareIcon, WhatsappIcon} from '@/components/assets/property';
//prettier-ignore
import {
  Box, Button, Center, Divider, Flex,
  HStack, SimpleGrid, Stack, Text,
} from '@chakra-ui/react';
import {CloseIcon} from '@chakra-ui/icons';
import {AnimatePresence, motion} from 'framer-motion';
import {Dispatch, useState} from 'react';
import {FacebookOutlineIcon, TwitterOutlineIcon} from '@/components/assets';
import Image from 'next/image';
import {PropertyType} from '@/utils/types/property';
import {FeaturedAmenities} from '../card/FeaturedAmenities';
import {formatToCurrency} from '@/utils/formatting/amount';
import {LocationIcon} from '@/components/assets/home/filter';
import {IoMailOutline} from 'react-icons/io5';
import {FaFacebookMessenger} from 'react-icons/fa6';
import {PiDotsThreeCircleLight} from 'react-icons/pi';

const MotionBox = motion.create(Box);
const MotionButton = motion.create(Button);

const ExpandedShareView = ({
  setExpand,
  property,
}: {
  setExpand: Dispatch<boolean>;
  property: PropertyType;
}) => {
  const share_methods = [
    {icon: <TwitterOutlineIcon boxSize={`20px`} baseColor={`text.2`} />, text: `Copy Link`},
    {icon: <IoMailOutline fontSize={`20px`} />, text: `Email`},
    {icon: <TwitterOutlineIcon boxSize={`20px`} baseColor={`text.2`} />, text: `Twitter/X`},
    {icon: <FacebookOutlineIcon boxSize={`20px`} baseColor={`text.2`} />, text: `Facebook`},
    {icon: <WhatsappIcon boxSize={`20px`} baseColor={`Green.2`} />, text: `WhatsApp`},
    {icon: <FaFacebookMessenger fontSize={`20px`} />, text: `Messenger`},
    {icon: <PiDotsThreeCircleLight fontSize={`20px`} />, text: `More Variants`},
  ];
  return (
    <Box
      position="fixed"
      inset={0}
      zIndex={50}
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      {/* Overlay backdrop with a fade transition */}
      <MotionBox
        initial={{opacity: 0}}
        animate={{opacity: 0.7}}
        exit={{opacity: 0}}
        transition={{duration: 0.2}}
        position="absolute"
        inset={0}
        cursor="pointer"
        bg="#000000"
        onClick={() => setExpand(false)}
      />

      <MotionBox
        layoutId={`share-property-component`}
        zIndex={50}
        maxH="90vh"
        overflowY={`auto`}
        maxW={{base: `90vw`, md: `700px`}}
        width={`100%`}
        boxShadow="2xl"
        borderRadius={`24px`}
        padding={`32px`}
        bg={`background.1`}
      >
        <Stack gap={`32px`} className="var(--font_manrope)">
          <HStack
            justify={`space-between`}
            fontWeight={`500`}
            fontSize={`36px`}
            lineHeight={`120%`}
            letterSpacing={`0%`}
          >
            <Text fontFamily="var(--font_outfit)">Share This Property</Text>
            <CloseIcon fontSize={`16px`} cursor={`pointer`} onClick={() => setExpand(false)} />
          </HStack>
          <Divider margin={`0px !important`} border={`1px dashed`} borderColor={`border_color.1`} />
          <Flex gap={`16px`} direction={{base: `column`, md: `row`}}>
            <Center
              position={`relative`}
              aspectRatio={{base: `4 / 3`, md: `auto`}}
              w={{base: `100%`, md: `230px`}}
              borderRadius={`16px`}
              overflow={`hidden`}
            >
              <Image
                src={property?.featured_image?.src}
                alt={property?.featured_image?.alt || ``}
                fill
                style={{objectFit: `cover`}}
              />
            </Center>
            <Stack flex={`1`} gap={`12px`}>
              <Text fontWeight={`700`} fontSize={`24px`} lineHeight={`100%`} letterSpacing={`0%`}>
                {formatToCurrency({amount: property?.price || 0})}
                <Box
                  as={`span`}
                  color={`text.3`}
                  fontWeight={`400`}
                  fontSize={`18px`}
                >{`/${property?.stay_duration}`}</Box>
              </Text>
              <Text fontWeight={`400`} fontSize={`16px`} lineHeight={`100%`} letterSpacing={`0%`}>
                {property?.property_name}
              </Text>
              <HStack color={`Green.1`} gap={`8px`}>
                <LocationIcon baseColor="Green.1" boxSize={`16px`} />
                <Text fontWeight={`400`} fontSize={`14px`} lineHeight={`120%`} letterSpacing={`0%`}>
                  {property?.address}
                </Text>
              </HStack>
              <FeaturedAmenities property={property} />
            </Stack>
          </Flex>
          <SimpleGrid columns={2} gap={`16px 8px`}>
            {share_methods?.map((method, i) => (
              <HStack
                key={i}
                p={`16px 18px`}
                gap={`16px`}
                borderRadius={`16px`}
                border={`1px solid`}
                borderColor={`border_color.1`}
                color={`text.2`}
                cursor={`pointer`}
                transition={'.3s'}
                _hover={{background: `background.3`}}
              >
                {method.icon}
                <Text
                  className="var(--font_manrope)"
                  fontWeight={`500`}
                  fontSize={`16px`}
                  lineHeight={`100%`}
                  letterSpacing={`0%`}
                >
                  {method.text}
                </Text>
              </HStack>
            ))}
          </SimpleGrid>
        </Stack>
      </MotionBox>
    </Box>
  );
};

export const SharePropertyComponent = ({property}: {property: PropertyType}) => {
  const [expand, setExpand] = useState(false);
  return (
    <>
      <MotionButton
        variant={`secondary`}
        layoutId="share-property-component"
        leftIcon={<ShareIcon />}
        onClick={() => setExpand(true)}
        width={`100px`}
      >
        Share
      </MotionButton>
      <AnimatePresence>
        {expand && <ExpandedShareView setExpand={setExpand} property={property} />}
      </AnimatePresence>
    </>
  );
};
