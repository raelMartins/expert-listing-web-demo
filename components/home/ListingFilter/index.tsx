'use client';

import {LocationIcon, PriceIcon, PropertyTypeIcon} from '@/components/assets/home/filter';
import {Box, BoxProps, Center, Divider, HStack, Stack, Text} from '@chakra-ui/react';
import {Dispatch, useEffect, useState} from 'react';
import {FilterInput} from './FilterInput';
import {FiChevronDown, FiSearch} from 'react-icons/fi';
import {BedsIcon} from '@/components/assets/property/amenities';
import {useRouter} from 'next/navigation';

export const ListingFilter = ({
  stickyNav,
  expandNavbar,

  setExpandNavbar,
}: {
  stickyNav: boolean;
  expandNavbar: boolean;

  setExpandNavbar: Dispatch<boolean>;
}) => {
  const router = useRouter();
  const [isExpanded, setIsExpanded] = useState(true);

  const filterStackStyle: BoxProps = {
    flex: isExpanded ? `1` : `auto`,
    gap: isExpanded ? `12px` : `0px`,
    transition: `.5s`,
    cursor: `pointer`,
    fontWeight: `400`,
    fontSize: isExpanded ? `19px` : `16px`,
    lineHeight: `130%`,
    letterSpacing: `0%`,
  };

  const filterLabelStyle: BoxProps = {
    height: !isExpanded ? `0px` : `15px`,
    overflow: `hidden`,
    transition: `.5s`,
    color: `text.3`,
    fontWeight: `400`,
    fontSize: `13px`,
    lineHeight: `150%`,
    letterSpacing: `2%`,
  };

  const handleClick = () => {
    if (stickyNav) {
      setIsExpanded(!isExpanded);
      setExpandNavbar(!isExpanded);
    }
  };

  useEffect(() => {
    if (stickyNav) {
      setIsExpanded(false);
      setExpandNavbar(false);
    } else {
      setIsExpanded(true);
      setExpandNavbar(true);
    }
  }, [stickyNav]);

  useEffect(() => {
    if (stickyNav) {
      if (expandNavbar) {
        setIsExpanded(true);
      } else {
        setIsExpanded(false);
      }
    }
  }, [expandNavbar]);

  return (
    <Box
      id={`listings-filter`}
      maxWidth={isExpanded ? `100%` : `565px`}
      w={`100%`}
      margin={`0px auto`}
      background={`#ffffff`}
      padding={isExpanded ? `28px 24px` : `10.5px 14px`}
      position={`relative`}
      zIndex={`4`}
      borderRadius={isExpanded ? `24px` : `10.5px`}
      transition={`.5s`}
    >
      {!isExpanded && (
        <Box
          onClick={handleClick}
          position={`absolute`}
          top={`0px`}
          right={`0px`}
          bottom={`0px`}
          left={`0px`}
          cursor={`pointer`}
        />
      )}
      <HStack
        gap={isExpanded ? `16px` : `14px`}
        transition={`.2s`}
        color={`text`}
        overflowX={`hidden`}
        divider={
          <Divider
            orientation="vertical"
            borderColor={`border_color.2 !important`}
            margin={`0px !important`}
            minH={`60px`}
            display={isExpanded ? `block` : `none`}
          />
        }
      >
        <Stack {...filterStackStyle}>
          <Text {...filterLabelStyle}>Location</Text>
          <FilterInput isExpanded={isExpanded}>
            <HStack gap={`8px`}>
              <LocationIcon />
              <Text flex={`1`} minW={`max-content`}>
                {!isExpanded ? `Location` : `Lagos`}
              </Text>
              <FiChevronDown />
            </HStack>
          </FilterInput>
        </Stack>
        <Stack {...filterStackStyle}>
          <Text {...filterLabelStyle}>Property type</Text>
          <FilterInput isExpanded={isExpanded}>
            <HStack gap={`8px`}>
              <PropertyTypeIcon />
              <Text flex={`1`} minW={`max-content`}>
                {!isExpanded ? `Property` : `Apartment`}
              </Text>
              <FiChevronDown />
            </HStack>
          </FilterInput>
        </Stack>
        <Stack {...filterStackStyle}>
          <Text {...filterLabelStyle}>Beds & Baths</Text>

          <FilterInput isExpanded={isExpanded}>
            <HStack gap={`8px`}>
              <BedsIcon boxSize={`24px`} baseColor="text.2" />
              <Text flex={`1`} minW={`max-content`}>
                {!isExpanded ? `Beds` : `1 Bed / 1 Bath`}
              </Text>
              <FiChevronDown />
            </HStack>
          </FilterInput>
        </Stack>
        <Stack {...filterStackStyle}>
          <Text {...filterLabelStyle}>Price</Text>
          <FilterInput isExpanded={isExpanded}>
            <HStack gap={`8px`}>
              <PriceIcon />
              <Text flex={`1`} minW={`max-content`}>
                {!isExpanded ? `Price` : `Min price`}
              </Text>
              <FiChevronDown />
            </HStack>
          </FilterInput>
        </Stack>
        {isExpanded && (
          <Stack {...filterStackStyle}>
            <Text {...filterLabelStyle}>{` `}</Text>
            <FilterInput isExpanded={isExpanded}>
              <HStack gap={`8px`}>
                <PriceIcon />
                <Text flex={`1`} minW={`max-content`}>
                  Max price
                </Text>
                <FiChevronDown />
              </HStack>
            </FilterInput>
          </Stack>
        )}

        <Center
          transition={`.5s`}
          cursor={`pointer`}
          boxSize={isExpanded ? `55px` : `35px`}
          minW={isExpanded ? `55px` : `35px`}
          bg={`brand_color`}
          borderRadius={`50%`}
          onClick={() => {
            handleClick();
            router.push(`/search`);
          }}
        >
          <FiSearch fontSize={isExpanded ? `24px` : `18px`} />
        </Center>
      </HStack>
    </Box>
  );
};
