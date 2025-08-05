'use client';

import {ChakraProps, HStack, Text, TextProps} from '@chakra-ui/react';
import Link from 'next/link';
import {usePathname} from 'next/navigation';

export const NavbarMenu = ({...rest}: ChakraProps) => {
  const pathname = usePathname();
  console.log(pathname);

  const underlineAnimation: TextProps = {
    display: `inline-block`,
    position: `relative`,
    cursor: `pointer`,
    _after: {
      content: '""',
      position: `absolute`,
      width: `100%`,
      transform: `scaleX(0)`,
      height: `2px`,
      bottom: `-6px`,
      left: `0`,
      marginTop: `6px`,
      borderRadius: `2px 2px 0px 0px`,
      backgroundColor: `brand_color`,
      transition: `transform 0.25s ease-out`,
      transformOrigin: `bottom center`,
    },
    _hover: {
      _after: {
        transform: `scaleX(1)`,
        transformOrigin: `bottom center`,
      },
    },
  };

  const activeLink = {
    ...underlineAnimation._after,
    transform: `scaleX(1)`,
    transformOrigin: `bottom center`,
  };

  return (
    <HStack
      maxW={`max-content`}
      gap={`32px`}
      fontWeight={`400`}
      fontSize={`16px`}
      lineHeight={`140%`}
      letterSpacing={`1%`}
      textAlign={`center`}
      color={`inherit`}
      {...rest}
    >
      <Text
        as={Link}
        href={`#`}
        {...underlineAnimation}
        fontWeight={pathname == `/rent` ? `600` : `400`}
        _after={pathname == `/rent` ? activeLink : underlineAnimation._after}
      >
        Rent
      </Text>
      <Text
        as={Link}
        href={`#`}
        {...underlineAnimation}
        fontWeight={pathname == `/buy` ? `600` : `400`}
        _after={pathname == `/buy` ? activeLink : underlineAnimation._after}
      >
        Buy
      </Text>
      <Text
        as={Link}
        href={`#`}
        {...underlineAnimation}
        fontWeight={pathname == `/shortlet` ? `600` : `400`}
        _after={pathname == `/shortlet` ? activeLink : underlineAnimation._after}
      >
        Shortlet
      </Text>
      <Text
        as={Link}
        href={`#`}
        {...underlineAnimation}
        fontWeight={pathname == `/shortlet` ? `600` : `400`}
        _after={pathname == `/shortlet` ? activeLink : underlineAnimation._after}
      >
        Snagging
      </Text>
    </HStack>
  );
};
