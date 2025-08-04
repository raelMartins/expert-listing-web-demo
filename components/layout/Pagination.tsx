import {ChevronLeftIcon, ChevronRightIcon} from '@chakra-ui/icons';
import {Center, CenterProps, HStack, Text} from '@chakra-ui/react';

export const Pagination = ({}) => {
  const activeColor: CenterProps = {background: `text.2`, color: `background.2`};
  return (
    <HStack
      fontWeight={`500`}
      fontSize={`12px`}
      lineHeight={`100%`}
      letterSpacing={`0%`}
      textAlign={`center`}
      color={`text.2`}
      justify={`center`}
      gap={`8px`}
      cursor={`pointer`}
    >
      <Center color={`text.3`} boxSize={`32px`} fontSize={`20px`}>
        <ChevronLeftIcon />
      </Center>
      <Center boxSize={`32px`} minW={`32px`} borderRadius={`50%`} {...activeColor}>
        1
      </Center>
      <Center boxSize={`32px`} minW={`32px`} borderRadius={`50%`}>
        2
      </Center>
      <Center boxSize={`32px`} minW={`32px`} borderRadius={`50%`}>
        3
      </Center>
      <Center boxSize={`32px`} minW={`32px`} borderRadius={`50%`}>
        4
      </Center>
      <Text>...</Text>
      <Center boxSize={`32px`} minW={`32px`} borderRadius={`50%`}>
        100
      </Center>
      <Center color={`text.3`} boxSize={`32px`} fontSize={`20px`}>
        <ChevronRightIcon />
      </Center>
    </HStack>
  );
};
