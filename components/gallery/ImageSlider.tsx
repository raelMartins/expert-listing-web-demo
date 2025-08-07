'use client';

import React, {MouseEventHandler, useEffect, useRef, useState} from 'react';
import {Box, Flex, Center, BoxProps, FlexProps, VStack, HStack} from '@chakra-ui/react';
import Image from 'next/image';
import {IoChevronBack, IoChevronForward} from 'react-icons/io5';

interface ImageSliderProps extends BoxProps {
  images: {src: string; alt?: string | undefined}[];
  property_id?: string | number;
  arrowPositionStyle?: FlexProps;
}

export const ImageSlider = ({images, height, property_id, width, ...rest}: ImageSliderProps) => {
  const galleryRef = useRef();
  const [imageIndex, setImageIndex] = useState(1);

  useEffect(() => {
    if (images?.length === 1) return;
  }, []);

  const next_slide: MouseEventHandler<HTMLDivElement> = e => {
    e.stopPropagation();
    const slider = document.getElementById(`image_slider-${property_id}`);
    if (slider) {
      if (imageIndex == images?.length) {
        setImageIndex(1);

        slider.scrollTo(0, 0);
      } else {
        setImageIndex(imageIndex + 1);
        slider?.scrollBy(slider?.clientWidth || 1000, 0);
      }
    }
  };
  const previous_slide: MouseEventHandler<HTMLDivElement> = e => {
    e.stopPropagation();
    const slider = document.getElementById(`image_slider-${property_id}`);
    if (slider) {
      if (imageIndex == 1) {
        setImageIndex(images?.length);

        slider?.scrollTo(slider?.clientWidth * images?.length, 0);
      } else {
        setImageIndex(imageIndex - 1);
        slider?.scrollBy(-slider?.clientWidth || 1000, 0);
      }
    }
  };
  const select_slide = (index: number) => {
    const slider = document.getElementById(`image_slider-${property_id}`);
    if (slider) {
      setImageIndex(index);
      if (index == 1) {
        slider?.scrollTo(0, 0);
      } else {
        slider?.scrollTo((index - 1) * slider?.clientWidth || 1000, 0);
      }
    }
  };

  return (
    <>
      <Center bg={`red`} width={`100%`} {...rest}>
        <Box
          w={width || '100%'}
          overflowX={`hidden`}
          overflowY={`hidden`}
          height={height || {base: `520px`, md: '596px'}}
          position={'relative'}
          css={{
            '::-webkit-scrollbar': {
              display: 'none',
            },
          }}
          id={`image_slider-${property_id}`}
          scrollBehavior={`smooth`}
          scrollSnapType={`x mandatory`}
          bg={`rgba(0,0,0,.8)`}
          ref={galleryRef}
          {...rest}
        >
          <Flex w={`${images?.length}00%`} position={'relative'}>
            {images?.map((slideImage, i) => (
              <Box
                key={i}
                w="full"
                h={height || {base: `520px`, md: '596px'}}
                position={`relative`}
                scrollSnapAlign={`start`}
                cursor={'pointer'}
                bg={`background.1`}
              >
                <Image
                  fill
                  style={{objectFit: `cover`}}
                  src={slideImage?.src}
                  alt={`Image`}
                  priority
                />
              </Box>
            ))}
          </Flex>
        </Box>
        <VStack
          justifyContent={`center`}
          zIndex={`1`}
          position={`absolute`}
          top={`0px`}
          bottom={`0px`}
          left={`0px`}
          p={`16px`}
        >
          <Center
            boxSize={`32px`}
            bg={`background.1`}
            color={`text.1`}
            opacity={`.75`}
            onClick={previous_slide}
            transition={`.5s`}
            borderRadius={`full`}
            overflow={`hidden`}
          >
            <IoChevronBack fontSize={`20px`} cursor={`pointer`} />
          </Center>
        </VStack>
        <VStack
          justifyContent={`center`}
          zIndex={`1`}
          position={`absolute`}
          top={`0px`}
          bottom={`0px`}
          right={`0px`}
          p={`16px`}
        >
          <Center
            boxSize={`32px`}
            bg={`background.1`}
            color={`text.1`}
            opacity={`.75`}
            onClick={next_slide}
            transition={`.5s`}
            borderRadius={`full`}
            overflow={`hidden`}
          >
            <IoChevronForward fontSize={`20px`} cursor={`pointer`} />
          </Center>
        </VStack>

        {images?.length > 1 && (
          <HStack
            justify={`center`}
            width={`100%`}
            gap={`4px`}
            position="absolute"
            bottom={`10px`}
            left={`0px`}
            right={`0px`}
            zIndex={`1`}
            w={`100%`}
          >
            {images?.map((image, i) => (
              <Box
                key={i}
                boxSize={`10px`}
                borderRadius={`full`}
                cursor={`pointer`}
                bg={imageIndex === i + 1 ? `Grey.15` : `Grey.4`}
                onClick={e => {
                  e.stopPropagation();
                  select_slide(i + 1);
                }}
                transition={`.3s`}
                opacity={imageIndex === i + 1 ? `1` : `.7`}
              />
            ))}
          </HStack>
        )}
      </Center>
    </>
  );
};
