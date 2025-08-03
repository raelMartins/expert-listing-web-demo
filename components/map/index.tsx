'use client';
import React, {CSSProperties, memo, useState} from 'react';
import {GoogleMap, useJsApiLoader} from '@react-google-maps/api';
import {
  Box,
  BoxProps,
  Button,
  Center,
  CenterProps,
  HStack,
  Stack,
  StackDivider,
  Text,
  VStack,
} from '@chakra-ui/react';
import {ExpandMapIcon, ZoomInIcon, ZoomOutIcon} from '../assets/map';
import {AnimatePresence, motion} from 'framer-motion';
import {BiCollapseAlt} from 'react-icons/bi';

const MotionBox = motion.create(Stack);

interface ExpandableMapProps extends BoxProps {
  containerStyle?: CSSProperties;
  location?: {lat: number; lng: number};
  onLoad?: any;
  onUnmount?: any;
  setZoom?: any;
  zoom?: any;
  setExpand?: any;
  expand?: any;
  isLoaded?: any;
  hideTabsHeader?: boolean;
}
interface ExpandedMapViewProps extends ExpandableMapProps {
  onDismiss: () => void;
}

function MapComponent({
  containerStyle,
  location,
  onLoad,
  onUnmount,
  setZoom,
  zoom,
  setExpand,
  expand,
  isLoaded,
  hideTabsHeader,
  ...rest
}: ExpandableMapProps) {
  const activeButton: CSSProperties = {
    background: `#176D581A`,
    color: `Green.1`,
    fontWeight: `700 !important`,
  };

  const tabButtonStyle: CenterProps = {
    padding: `12px 18px`,
    fontWeight: `500`,
    fontSize: `16px`,
    lineHeight: `100%`,
    letterSpacing: `1%`,
    textAlign: `center`,
    border: `1px solid`,
    borderColor: `border_color.1`,
    borderRadius: `16px`,
    cursor: `pointer`,
    transition: `.3s`,
    color: `text.3`,
    _hover: {...activeButton, fontWeight: `500`},
  };
  const [locationFocus, setLocationFocus] = useState(`map`);

  return (
    <MotionBox gap={expand ? `24px` : `20px`}>
      {!hideTabsHeader && (
        <HStack gap={`16px`}>
          <Center
            {...tabButtonStyle}
            sx={locationFocus === `map` ? {...activeButton} : {}}
            onClick={() => setLocationFocus(`map`)}
          >
            <Text>Map</Text>
          </Center>
          <Center
            {...tabButtonStyle}
            sx={locationFocus === `schools` ? {...activeButton} : {}}
            onClick={() => setLocationFocus(`schools`)}
          >
            <Text>Schools</Text>
          </Center>
          <Center
            {...tabButtonStyle}
            sx={locationFocus === `commerce` ? {...activeButton} : {}}
            onClick={() => setLocationFocus(`commerce`)}
          >
            <Text>Shop & Eat</Text>
          </Center>
        </HStack>
      )}
      <Box
        position={`relative`}
        border={`1px solid`}
        borderColor={`border_color.1`}
        borderRadius={`24px`}
        boxShadow={`3px 4px 8px 0px #0000000F`}
        backdropFilter={`blur(41.400001525878906px)`}
        overflow={`hidden`}
        width={`100%`}
        {...rest}
      >
        <Stack position={`absolute`} top={`24px`} right={`24px`} zIndex={`1`} gap={`24px`}>
          <Center
            boxShadow={`3px 4px 8px 0px #0000000F`}
            bg={`background.2`}
            boxSize={`48px`}
            cursor={`pointer`}
            border={`1px solid`}
            borderColor={`border_color.1`}
            borderRadius={`50%`}
            _hover={{bg: `background.2`}}
            onClick={() => setExpand(!expand)}
          >
            {!expand ? <ExpandMapIcon /> : <BiCollapseAlt fontSize={`22px`} />}
          </Center>
          <VStack
            align={`stretch`}
            boxShadow={`3px 4px 8px 0px #0000000F`}
            bg={`background.2`}
            gap={`0px`}
            borderRadius={`full`}
            overflow={`hidden`}
            width={`48px`}
            minW={`48px`}
            height={`104px`}
            cursor={`pointer`}
            border={`1px solid`}
            borderColor={`border_color.1`}
            divider={
              <StackDivider margin={`0px !important`} borderColor={`border_color.1 !important`} />
            }
          >
            <Center
              flex={`1`}
              cursor={`pointer`}
              _hover={{bg: `background.1`}}
              onClick={() => setZoom(zoom + 1)}
            >
              <ZoomInIcon />
            </Center>
            <Center
              flex={`1`}
              cursor={`pointer`}
              _hover={{bg: `background.1`}}
              onClick={() => setZoom(zoom - 1)}
            >
              <ZoomOutIcon />
            </Center>
          </VStack>
        </Stack>
        {expand && isLoaded && location ? (
          <Button
            as={'a'}
            href={`https://maps.google.com/?q=${location.lat},${location?.lng}`}
            target="_blank"
            rel={`norefferer noopener`}
            variant={`primary-border`}
            position={`absolute`}
            bottom={`16px`}
            left={`16px`}
            zIndex={`1`}
          >
            View On Maps
          </Button>
        ) : null}
        {isLoaded ? (
          <GoogleMap
            mapContainerStyle={containerStyle}
            center={location}
            zoom={zoom}
            onLoad={onLoad}
            onUnmount={onUnmount}
            // options={{cameraControl: false, fullscreenControl: false, colorScheme: 'FOLLOW_SYSTEM'}}
            options={{disableDefaultUI: true, colorScheme: 'FOLLOW_SYSTEM'}}
          >
            {/* Child components, such as markers, info windows, etc. */}
            <></>
          </GoogleMap>
        ) : (
          <></>
        )}
      </Box>
    </MotionBox>
  );
}
const ExpandedMapView = ({
  onDismiss,
  containerStyle,
  location,
  onLoad,
  onUnmount,
  setZoom,
  zoom,
  setExpand,
  expand,
  isLoaded,
  ...rest
}: ExpandedMapViewProps) => {
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
        onClick={onDismiss}
      />

      {/* The expanded image, linked to the gallery thumbnail via layoutId */}

      <MotionBox
        layoutId={`expandable-map-box`}
        zIndex={50}
        maxH="90vh"
        overflowY={`auto`}
        // maxW="90vw"
        // aspectRatio={`1280 / 767`}
        maxW={{base: `90vw`, lg: `800px`, xl: `1150px`}}
        width={`100%`}
        boxShadow="2xl"
        borderRadius={`24px`}
        padding={`24px`}
        bg={`background.1`}
      >
        <MapComponent
          containerStyle={containerStyle}
          location={location}
          {...rest}
          onLoad={onLoad}
          onUnmount={onUnmount}
          setZoom={setZoom}
          zoom={zoom}
          setExpand={setExpand}
          expand={expand}
          isLoaded={isLoaded}
          aspectRatio={`1232 / 660`}
        />
      </MotionBox>
    </Box>
  );
};

export const ExpandableMap = memo(function ExpandableMap({
  containerStyle = {
    width: '100%',
    height: '100%',
  },
  location = {
    lat: -3.745,
    lng: -38.523,
  },
  hideTabsHeader = false,
  ...rest
}: ExpandableMapProps) {
  const {isLoaded} = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: 'AIzaSyChJUITJdOGM6V99bBztRcYFqzvB6gzBYA',
  });
  // const [map, setMap] = useState(null);
  const [zoom, setZoom] = useState(10);
  const [expand, setExpand] = useState(false);

  // //This is just in case I need the to get and use the map instance
  // const onLoad = useCallback(function callback(map: any) {
  //   // !!! don't just blindly copy!
  //   const bounds = new window.google.maps.LatLngBounds(location);
  //   map.fitBounds(bounds);

  //   setMap(map);
  // }, []);

  // const onUnmount = React.useCallback(function callback() {
  //   setMap(null);
  // }, []);

  return (
    <>
      <MotionBox layoutId={`expandable-map-box`}>
        <MapComponent
          containerStyle={containerStyle}
          location={location}
          // onLoad={onLoad}
          // onUnmount={onUnmount}
          setZoom={setZoom}
          zoom={zoom}
          setExpand={setExpand}
          expand={expand}
          isLoaded={isLoaded}
          width={`738px`}
          height={`324px`}
          hideTabsHeader={hideTabsHeader}
          {...rest}
        />
      </MotionBox>
      {/* AnimatePresence handles the mounting and unmounting of the ExpandedView */}
      <AnimatePresence>
        {expand && (
          <ExpandedMapView
            onDismiss={() => setExpand(false)}
            containerStyle={containerStyle}
            location={location}
            // onLoad={onLoad}
            // onUnmount={onUnmount}
            setZoom={setZoom}
            zoom={zoom}
            setExpand={setExpand}
            expand={expand}
            isLoaded={isLoaded}
          />
        )}
      </AnimatePresence>
    </>
  );
});
