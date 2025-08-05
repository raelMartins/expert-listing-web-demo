import {ExpertListingLogo} from '@/components/assets';
import {Box, Flex, FlexProps, HStack} from '@chakra-ui/react';
import Link from 'next/link';
import {NavbarMenu} from './NavbarMenu';

interface NavbarProps extends FlexProps {
  stickyNav?: boolean;
}

export const Navbar = ({
  color = `text.2`,
  background = `background.2`,
  stickyNav = true,
}: NavbarProps) => {
  return (
    <>
      <Flex
        position={stickyNav ? `fixed` : `static`}
        zIndex={`2`}
        top={`0px`}
        width={`100%`}
        left={`0px`}
      >
        <HStack
          maxW={`2000px`}
          w={`100%`}
          margin={`0px auto`}
          gap={`30px`}
          p={{base: `20px`, md: `32px 80px`}}
          transition={`.5s`}
          bg={`#105B48`}
          color={color}
          background={background}
          pb={{base: `20px`, md: `32px`}}
        >
          <Box as={Link} href={`/`}>
            <ExpertListingLogo height={`17px`} />
          </Box>
          <Box flex={`1`}></Box>
          <NavbarMenu />
        </HStack>
      </Flex>
      {stickyNav && <Box h={`90px`} w={`100%`} />}
    </>
  );
};
