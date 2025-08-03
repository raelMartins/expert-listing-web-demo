'use client';

import React, {useState} from 'react';
import {Box, SimpleGrid, GridItem, BoxProps, Button} from '@chakra-ui/react';
import {motion, AnimatePresence} from 'framer-motion';
import {FiCamera} from 'react-icons/fi';

// Define the type for an image object
type Image = {
  layoutId?: number;
  src: string;
  alt?: string;
};

// Define the props for the ExpandedView component
type ExpandedViewProps = {
  selectedImageId: number;
  onDismiss: () => void;
  images: Image[];
};

// Define the props for the Gallery component
type GalleryProps = {
  images: Image[];
  fullGallery?: boolean;
};

// Define the props for the ExpandedView component
interface ExpandedBoxProps extends BoxProps {
  src: string;
  alt: string;
}

// Create a motion-enabled Chakra components for the backdrop
const ExpandedBox: React.FC<ExpandedBoxProps> = Box;
const MotionBox = motion.create(ExpandedBox);
const MotionGrid = motion.create(SimpleGrid);
const MotionGridItem = motion.create(GridItem);
const MotionButton = motion.create(Button);

const ExpandedView: React.FC<ExpandedViewProps> = ({selectedImageId, onDismiss, images}) => {
  const image = images.find(img => img.layoutId === selectedImageId);

  if (!image) return null;

  return (
    <Box
      position="fixed"
      inset={0}
      zIndex={50}
      display="flex"
      alignItems="center"
      justifyContent="center"
      onClick={onDismiss}
    >
      {/* Overlay backdrop with a fade transition */}
      <MotionBox
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        exit={{opacity: 0}}
        transition={{duration: 0.2}}
        position="absolute"
        inset={0}
        cursor="pointer"
        bg="blackAlpha.800"
      />

      {/* The expanded image, linked to the gallery thumbnail via layoutId */}
      <MotionBox
        as="img"
        src={image.src}
        alt={image.alt}
        layoutId={`image-${selectedImageId}`}
        zIndex={50}
        maxH="90vh"
        maxW="90vw"
        rounded="lg"
        boxShadow="2xl"
      />
    </Box>
  );
};

export const Gallery: React.FC<GalleryProps> = ({images, fullGallery}) => {
  const [selectedImageId, setSelectedImageId] = useState<number | null>(null);
  const [expandGallery, setExpandGallery] = useState(fullGallery || false);

  const imagesArray = images.map((item: any, i: number) => {
    return {...item, layoutId: i + 1};
  });

  return (
    <MotionBox>
      <MotionGrid
        columns={{base: expandGallery ? 18 : 30}}
        gap={`20px`}
        width="full"
        templateRows={
          imagesArray.length < 3
            ? `515px`
            : !expandGallery
            ? `325px 170px`
            : `repeat(${Math.ceil(imagesArray.length / 3)}, 325px)`
        }
      >
        {imagesArray.map((image, i) => {
          const imgLength = imagesArray.length;
          //prettier-ignore
          const columnSpan =
            imgLength == 1 ? 30 : imgLength == 2 ? 15: 
            expandGallery ? 6 : i == 0 ? 18 : i == 1 ? 12 : 6;

          //prettier-ignore
          const rowSpan = expandGallery || imgLength < 3 ? 1 : i == 0 ? 2 : 1;

          return (
            <MotionGridItem
              key={image.layoutId}
              colSpan={columnSpan}
              rowSpan={rowSpan}
              position={`relative`}
              display={!expandGallery && i > 3 ? `none` : `block`}
            >
              <MotionBox
                key={image.layoutId}
                onClick={() => setSelectedImageId(image.layoutId)}
                cursor="pointer"
                overflow="hidden"
                borderRadius={`16px`}
                boxShadow="lg"
                // The magic happens here: layoutId links the thumbnail to the expanded image
                layoutId={`image-${image.layoutId}`}
                h={`100%`}
                zIndex={i > 3 ? `0` : `1`}
              >
                <Box
                  as="img"
                  src={image.src}
                  alt={image.alt}
                  height="full"
                  width="full"
                  objectFit="cover"
                />

                {
                  //prettier-ignore
                  ((expandGallery && i + 1 === imagesArray?.length)//show this on the last button if gallery expanded
                   || (!expandGallery && i == 3)) //show this on the 4th button if gallery collapsed
                   && !fullGallery && imagesArray?.length > 4 //show this if there are at least 5 images and it isnt expanded by default
                ? (
                  <MotionButton
                    variant={`glass`}
                    zIndex={`1`}
                    position={`absolute`}
                    right={`10px`}
                    bottom={`10px`}
                    onClick={e => {
                      e.stopPropagation();
                      setExpandGallery(!expandGallery);
                    }}
                    leftIcon={<FiCamera fontSize={`18px`} />}
                  >
                    {expandGallery ? `Collapse Gallery` : `See all ${imagesArray?.length} photos`}
                  </MotionButton>
                ) : null
                }
              </MotionBox>
            </MotionGridItem>
          );
        })}
      </MotionGrid>

      {/* AnimatePresence handles the mounting and unmounting of the ExpandedView */}
      <AnimatePresence>
        {selectedImageId && (
          <ExpandedView
            selectedImageId={selectedImageId}
            onDismiss={() => setSelectedImageId(null)}
            images={imagesArray}
          />
        )}
      </AnimatePresence>
    </MotionBox>
  );
};
