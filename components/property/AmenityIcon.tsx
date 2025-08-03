import {ChakraProps} from '@chakra-ui/react';
import {
  GardenIcon,
  HomeOfficeIcon,
  KitchenIcon,
  OceanViewIcon,
  PoolIcon,
  SecurityIcon,
  SmartHomeIcon,
  TwoCarGarageIcon,
} from '../assets/property/amenities';

interface AmenityIconProps extends ChakraProps {
  type: string;
}

export const AmenityIcon = ({type, ...rest}: AmenityIconProps) => {
  const displayAmenityIcon = () => {
    switch (type) {
      case `kitchen`:
        return <KitchenIcon {...rest} />;
      case `pool`:
        return <PoolIcon {...rest} />;
      case `garden`:
        return <GardenIcon {...rest} />;
      case `garage`:
        return <TwoCarGarageIcon {...rest} />;
      case `smart_home`:
        return <SmartHomeIcon {...rest} />;
      case `home_office`:
        return <HomeOfficeIcon {...rest} />;
      case `security`:
        return <SecurityIcon {...rest} />;
      case `view`:
        return <OceanViewIcon {...rest} />;
      default:
        return <SecurityIcon {...rest} />;
    }
  };
  return <>{displayAmenityIcon()}</>;
};
