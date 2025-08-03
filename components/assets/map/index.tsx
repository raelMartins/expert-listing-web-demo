import {Box, useTheme} from '@chakra-ui/react';
import {get} from '@chakra-ui/utils';
import {AssetProps} from '../types';

export const ExpandMapIcon = ({
  boxSize = `24px`,
  baseColor = `text.2`,
  color = `text.2`,
  ...rest
}: AssetProps) => {
  const theme = useTheme();
  const svgFillColor = get(theme.colors, baseColor, color);

  return (
    <Box boxSize={boxSize} minW={boxSize} {...rest}>
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M18.3999 4.87988C18.5908 4.87988 18.774 4.95574 18.909 5.09077C19.044 5.22579 19.1199 5.40893 19.1199 5.59988V11.9999C19.1199 12.1908 19.044 12.374 18.909 12.509C18.774 12.644 18.5908 12.7199 18.3999 12.7199C18.2089 12.7199 18.0258 12.644 17.8908 12.509C17.7557 12.374 17.6799 12.1908 17.6799 11.9999V7.33748L7.33748 17.6799H11.9999C12.1908 17.6799 12.374 17.7557 12.509 17.8908C12.644 18.0258 12.7199 18.2089 12.7199 18.3999C12.7199 18.5908 12.644 18.774 12.509 18.909C12.374 19.044 12.1908 19.1199 11.9999 19.1199H5.59988C5.40893 19.1199 5.22579 19.044 5.09077 18.909C4.95574 18.774 4.87988 18.5908 4.87988 18.3999V11.9999C4.87988 11.9053 4.89851 11.8117 4.93469 11.7244C4.97087 11.637 5.02391 11.5576 5.09077 11.4908C5.15762 11.4239 5.237 11.3709 5.32435 11.3347C5.41171 11.2985 5.50533 11.2799 5.59988 11.2799C5.69443 11.2799 5.78806 11.2985 5.87542 11.3347C5.96277 11.3709 6.04214 11.4239 6.109 11.4908C6.17586 11.5576 6.22889 11.637 6.26508 11.7244C6.30126 11.8117 6.31988 11.9053 6.31988 11.9999V16.6623L16.6623 6.31988H11.9999C11.8089 6.31988 11.6258 6.24403 11.4908 6.109C11.3557 5.97397 11.2799 5.79084 11.2799 5.59988C11.2799 5.40893 11.3557 5.22579 11.4908 5.09077C11.6258 4.95574 11.8089 4.87988 11.9999 4.87988H18.3999Z"
          fill={svgFillColor}
        />
      </svg>
    </Box>
  );
};

export const ZoomInIcon = ({
  boxSize = `24px`,
  baseColor = `text.2`,
  color = `text.2`,
  ...rest
}: AssetProps) => {
  const theme = useTheme();
  const svgFillColor = get(theme.colors, baseColor, color);

  return (
    <Box boxSize={boxSize} minW={boxSize} {...rest}>
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M6 12H12M12 12H18M12 12V6M12 12V18"
          stroke={svgFillColor}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </Box>
  );
};

export const ZoomOutIcon = ({
  boxSize = `24px`,
  baseColor = `text.2`,
  color = `text.2`,
  ...rest
}: AssetProps) => {
  const theme = useTheme();
  const svgFillColor = get(theme.colors, baseColor, color);

  return (
    <Box boxSize={boxSize} minW={boxSize} {...rest}>
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M6 12H18"
          stroke={svgFillColor}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </Box>
  );
};
