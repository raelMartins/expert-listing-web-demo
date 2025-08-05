'use client';

import {useState, useRef, useEffect} from 'react';
import {Box, Flex, IconButton, useBreakpointValue} from '@chakra-ui/react';
import {motion} from 'framer-motion';
import {ChevronLeftIcon, ChevronRightIcon} from '@chakra-ui/icons';
import Image from 'next/image';

// Create motion components from Chakra UI components
const MotionBox = motion(Box);
const MotionFlex = motion(Flex);

interface ImageProps {
  src: string;
  alt: string;
}

interface ImageSliderProps {
  images: ImageProps[];
  autoplay?: boolean;
}

const ImageSlider = ({images, autoplay = false}: ImageSliderProps) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = images.length;
  const sliderRef = useRef<HTMLDivElement>(null);

  const handleNext = () => {
    setCurrentSlide(prev => (prev + 1) % totalSlides);
  };

  const handlePrev = () => {
    setCurrentSlide(prev => (prev - 1 + totalSlides) % totalSlides);
  };

  const handleDotClick = (index: number) => {
    setCurrentSlide(index);
  };

  // Autoplay functionality
  useEffect(() => {
    if (!autoplay) return;

    const interval = setInterval(() => {
      handleNext();
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [autoplay, currentSlide, totalSlides]);

  // Responsive styling using Chakra's breakpoints
  const sliderWidth = useBreakpointValue({base: '100%', md: '800px', lg: '1000px'});
  const sliderHeight = useBreakpointValue({base: '300px', md: '450px', lg: '600px'});
  const borderRadius = useBreakpointValue({base: 'md', md: 'lg', lg: 'xl'});

  return (
    <Box
      width={sliderWidth}
      height={sliderHeight}
      mx="auto"
      position="relative"
      overflow="hidden"
      ref={sliderRef}
      borderRadius={borderRadius}
      sx={{
        // Hide scrollbar but allow swiping on touch devices
        '&::-webkit-scrollbar': {
          display: 'none',
        },
        '-ms-overflow-style': 'none',
        'scrollbar-width': 'none',
      }}
    >
      <MotionFlex
        drag="x"
        dragConstraints={{left: 0, right: 0}}
        dragElastic={0.5}
        onDragEnd={(_, info) => {
          const swipePower = info.velocity.x;
          if (Math.abs(swipePower) > 100) {
            if (swipePower < 0) {
              handleNext();
            } else {
              handlePrev();
            }
          }
        }}
        animate={{x: `-${currentSlide * 100}%`}}
        transition={{type: 'spring', stiffness: 300, damping: 30}}
        style={{width: `${totalSlides * 100}%`}}
      >
        {images.map((image, index) => (
          <MotionBox
            display={`flex`}
            justifyContent={`center`}
            alignItems={`center`}
            key={index}
            minW={{base: '300px', md: '800px', lg: '1000px'}}
            height={{base: '300px', md: '450px', lg: '600px'}}
            position="relative"
            overflow="hidden" // Ensures image stays within bounds
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              style={{
                objectFit: 'cover',
              }}
              // You can add a blurDataURL or placeholder if needed for better performance
            />
          </MotionBox>
        ))}
      </MotionFlex>

      {/* Navigation Buttons */}
      <IconButton
        aria-label="Previous slide"
        icon={<ChevronLeftIcon w={6} h={6} />}
        onClick={handlePrev}
        position="absolute"
        left="10px"
        top="50%"
        transform="translateY(-50%)"
        zIndex="2"
        bg="whiteAlpha.500"
        borderRadius="full"
        _hover={{bg: 'whiteAlpha.700'}}
      />
      <IconButton
        aria-label="Next slide"
        icon={<ChevronRightIcon w={6} h={6} />}
        onClick={handleNext}
        position="absolute"
        right="10px"
        top="50%"
        transform="translateY(-50%)"
        zIndex="2"
        bg="whiteAlpha.500"
        borderRadius="full"
        _hover={{bg: 'whiteAlpha.700'}}
      />

      {/* Dots for pagination */}
      <Flex
        position="absolute"
        bottom="10px"
        left="50%"
        transform="translateX(-50%)"
        zIndex="2"
        alignItems="center"
        justifyContent="center"
        bg="rgba(0, 0, 0, 0.3)"
        p="2"
        borderRadius="full"
      >
        {Array.from({length: totalSlides}).map((_, index) => (
          <Box
            key={index}
            as="button"
            aria-label={`Go to slide ${index + 1}`}
            onClick={() => handleDotClick(index)}
            mx="4px"
            w="10px"
            h="10px"
            borderRadius="full"
            bg={index === currentSlide ? 'white' : 'whiteAlpha.500'}
            cursor="pointer"
            transition="background-color 0.2s ease"
          />
        ))}
      </Flex>
    </Box>
  );
};

export default ImageSlider;
