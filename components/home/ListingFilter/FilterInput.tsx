'use client';

import {
  Box,
  Button,
  ButtonGroup,
  FocusLock,
  FormControl,
  FormLabel,
  Input,
  Popover,
  PopoverAnchor,
  PopoverArrow,
  PopoverCloseButton,
  PopoverContent,
  PopoverTrigger,
  Stack,
  useDisclosure,
} from '@chakra-ui/react';
import React, {ReactNode, useEffect} from 'react';
const TextInput = (props: any) => {
  return (
    <FormControl>
      <FormLabel htmlFor={props.id}>{props.label}</FormLabel>
      <Input variant={`regular`} id={props.id} {...props} />
    </FormControl>
  );
};

const Form = ({onCancel}: any) => {
  return (
    <Stack spacing={4}>
      <TextInput label="Value" id="value" defaultValue="" />
      <ButtonGroup display="flex" justifyContent="flex-end">
        <Button variant="outline-radius" onClick={onCancel}>
          Cancel
        </Button>
        <Button variant="filled-radius" isDisabled colorScheme="teal">
          Save
        </Button>
      </ButtonGroup>
    </Stack>
  );
};

export const FilterInput = ({isExpanded, children}: {isExpanded: boolean; children: ReactNode}) => {
  const {onOpen, onClose, isOpen} = useDisclosure();
  const firstFieldRef = React.useRef(null);

  useEffect(() => {
    if (!isExpanded) {
      onClose();
    }
  }, [isExpanded]);
  return (
    <>
      <Popover
        isOpen={isOpen}
        initialFocusRef={firstFieldRef}
        onOpen={onOpen}
        onClose={onClose}
        placement="bottom"
        closeOnBlur={true}
      >
        <PopoverTrigger>{children}</PopoverTrigger>
        <PopoverAnchor>
          <Box />
        </PopoverAnchor>
        <PopoverContent p={`20px`}>
          <FocusLock persistentFocus={false}>
            <PopoverArrow />
            <PopoverCloseButton />
            <Form firstFieldRef={firstFieldRef} onCancel={onClose} />
          </FocusLock>
        </PopoverContent>
      </Popover>
    </>
  );
};
