import {extendTheme} from '@chakra-ui/react';
import {colors, constant_colors} from './colors';
import {textStyles} from './typography';
import {components} from './components';

export const theme = extendTheme({
  styles: {
    global: {
      'html, body': {
        background: 'background.2',
      },
      body: {
        fontFamily: 'var(--font-euclid-circular-b)',
      },
    },
  },

  initialColorMode: 'light',
  useSystemColorMode: false,

  colors: {...constant_colors, ...colors.light},
  textStyles,
  components,
});
