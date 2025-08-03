export const constant_colors = {
  brand_color: '#A8DC66',
  Grey: {
    0: '#101828',
    1: '#5A5461',
    2: '#27272a',
    3: '#3f3f46',
    4: '#191919',
    5: '#18181b',
    6: '#3D3D3D',
    7: '#141414',
    8: '#344054',
    9: '#4B4B4B',
    10: '#292D32',
    11: '#27272A',
    12: '#242526',
    13: '#424242',
    14: '#D4D4D8',
    15: '#F9FAFB',
    16: '#D0D5DD',
    17: '#737373',
    18: '#525252',
    19: '#52525B',
    20: '#71717a',
    21: '#606060',
    22: '#a1a1a1',
    23: '#475467',
  },
  Red: {
    0: '#5A0C0C',
    1: '#871212',
    2: '#B41818',
    3: '#f81717',
    4: '#EF4444',
    5: '#f04438',
    6: '#DC2626',
    7: '#E74B4B',
    8: '#ED7878',
    9: '#F3A5A5',
    11: '#F9D2D2',
    12: '#F9D2D299',
  },
  Green: {
    0: '#18230F',
    1: '#105B48',
    2: '#176D58',
    3: '#116932',
    4: '#12D8A0',
    5: '#06D001',
    6: '#55E052',
    7: '#16A34A',
    8: '#22c55e',
    9: '#7FE87D',
    10: '#AAEFA9',
    11: '#D4F7D4',
    12: '#F0FDF4',
    13: '#12D8A02a',
  },
  Yellow: {
    0: '#70660F',
    1: '#B3A419',
    2: '#E0CD1F',
    3: '#FFCD00',
    4: '#E6D648',
    5: '#EDE178',
    6: '#F3EBA5',
    7: '#F9F5D2',
    8: '#FF91032a',
  },
  Orange: {
    0: '#92310A',
    1: '#F97316',
    2: '#ea580c',
    3: '#FF9103',
    4: '#fff7ed',
  },
  Blue: {
    0: '#1A314C',
    1: '#0C2841',
    2: '#4545fe',
    3: '#3737D1',
    4: '#6192CA',
    5: '#64C6FF',
    6: '#EBEBFF',
    7: '#9FBDDF',
    8: '#C6D7EC',
    9: '#D9E4F2',
  },
};

export const colors = {
  light: {
    theme_name: 'light',
    background: {1: `#F5F5F5`, 2: `#FFFFFF`, 3: `#FCFCFC`, 4: `#d5d5d5`},
    text: {1: '#000000', 2: '#191919', 3: `#71717a`, 4: `#424242`, 5: `#4B4B4B`},
    border_color: {1: `#E4E4E7`, 2: `#D6D6D6`},
    form: {label: `#A3A3A3`, color: `#292929`},
  },
  dark: {
    theme_name: 'dark',
    background: {1: `#232425`, 2: `#2C2C2C`, 3: `#3A3A3A`, 4: `#303030`},
    text: {1: '#FFFFFF', 2: '#DDDDDD', 3: '#F0F0F0', 4: '#F0F0F0', 5: `#F4F4F4`},
    border_color: {1: `#5e5e5e`, 2: `#6f6f6f`},
    form: {label: `#FAFAFAE5`, color: `#ffffff`},
  },
  darkGreen: {
    theme_name: 'darkGreen',
    background: {1: `#111B21`, 2: `#202C33`, 3: `#1e2a30`, 4: `#2C3B44`},
    text: {1: '#FFFFFF', 2: '#DDDDDD', 3: '#F0F0F0', 4: '#F0F0F0', 5: `#F4F4F4`},
    border_color: {1: `#2C3B44`, 2: `#3D4C55`},
    form: {label: `#A6A6A6`, color: `#ffffff`},
  },
  darkBlue: {
    theme_name: 'darkBlue',
    background: {1: `#15151E`, 2: `#1C1C2A`, 3: `#202436`, 4: `#2f3652`},
    text: {1: '#FFFFFF', 2: '#DDDDDD', 3: '#F0F0F0', 4: '#F0F0F0', 5: `#F4F4F4`},
    border_color: {1: `#2f3652`, 2: `#171a26`},
    form: {label: `#A6A6A6`, color: `#ffffff`},
  },
  default: {
    theme_name: 'light',
    background: {1: `#F5F5F5`, 2: `#FFFFFF`, 3: `#FCFCFC`, 4: `#d5d5d5`},
    text: {1: '#000000', 2: '#191919', 3: `#71717a`, 4: `#424242`, 5: `#4B4B4B`},
    border_color: {1: `#E4E4E7`, 2: `#D6D6D6`},
    form: {label: `#A3A3A3`, color: `#292929`},
  },
};

export const get_color_pop = (hex: string, background: string) => {
  //hex color
  const hex_string = hex.replace(`#`, ``);
  const hexcolor =
    hex_string?.length === 3
      ? `${hex_string[0]}${hex_string[0]}${hex_string[1]}${hex_string[1]}${hex_string[2]}${hex_string[2]}`
      : hex_string;

  const r1 = parseInt(hexcolor.substr(0, 2), 16);
  const g1 = parseInt(hexcolor.substr(2, 2), 16);
  const b1 = parseInt(hexcolor.substr(4, 2), 16);
  const yiq1 = (r1 * 299 + g1 * 587 + b1 * 114) / 1000;

  //background
  const backgroundHex = background.replace(`#`, ``);
  const backgroundColor =
    backgroundHex?.length === 3
      ? `${backgroundHex[0]}${backgroundHex[0]}${backgroundHex[1]}${backgroundHex[1]}${backgroundHex[2]}${backgroundHex[2]}`
      : backgroundHex;

  const r2 = parseInt(backgroundColor.substr(0, 2), 16);
  const g2 = parseInt(backgroundColor.substr(2, 2), 16);
  const b2 = parseInt(backgroundColor.substr(4, 2), 16);
  const yiq2 = (r2 * 299 + g2 * 587 + b2 * 114) / 1000;

  return yiq1 >= 183 && yiq2 >= 128 ? '#191919' : yiq1 < 100 && yiq2 < 128 ? '#ffffff' : hex;
};

function addAlpha(color: string, opacity: number) {
  // coerce values so it is between 0 and 1.
  const _opacity = Math.round(Math.min(Math.max(opacity || 1, 0), 1) * 255);
  return color + _opacity.toString(16).toUpperCase();
}

export const get_hex_color_complements = (hex: string, theme: string) => {
  const hex_string = hex.replace(`#`, ``);
  const hexcolor =
    hex_string?.length === 3
      ? `${hex_string[0]}${hex_string[0]}${hex_string[1]}${hex_string[1]}${hex_string[2]}${hex_string[2]}`
      : hex_string;
  console.log(hexcolor);

  const r = parseInt(hexcolor.substr(0, 2), 16);
  const g = parseInt(hexcolor.substr(2, 2), 16);
  const b = parseInt(hexcolor.substr(4, 2), 16);
  const yiq = (r * 299 + g * 587 + b * 114) / 1000;

  const color_pop =
    yiq >= 183 && theme === `light` ? '#191919' : yiq < 100 && theme !== `light` ? '#ffffff' : hex;

  const background =
    theme === `light` && yiq >= 200
      ? `#${addAlpha('191919', 1)}`
      : theme !== `light` && yiq <= 100
      ? `#${addAlpha('ffffff', 1)}`
      : `transparent`;

  return {
    primary: hex,
    custom_color: {
      spectrum: yiq >= 183 ? 'light' : 'dark',
      color: hex,
      contrast: yiq >= 128 ? '#191919' : '#ffffff',
      accent: yiq >= 128 ? '#ffffff' : '#191919',
      background,
      dark_background_pop: yiq >= 128 ? hex : `#FFFFFF`,
      light_background_pop: yiq >= 128 ? `#191919` : hex,
      opacity: {
        _05: `${hex}0D`,
        _10: `${hex}1A`,
        _20: `${hex}33`,
        _30: `${hex}4D`,
        _40: `${hex}66`,
        _50: `${hex}80`,
        _60: `${hex}99`,
        _70: `${hex}B3`,
        _80: `${hex}cc`,
        _90: `${hex}e6`,
      },
      opacity_pop: {
        _05: `${color_pop}0D`,
        _10: `${color_pop}1A`,
        _20: `${color_pop}33`,
        _30: `${color_pop}4D`,
        _40: `${color_pop}66`,
        _50: `${color_pop}80`,
        _60: `${color_pop}99`,
        _70: `${color_pop}B3`,
        _80: `${color_pop}cc`,
        _90: `${color_pop}e6`,
      },
      color_pop,
      contrast_pop:
        color_pop === `#ffffff`
          ? '#191919'
          : color_pop === `#191919`
          ? '#ffffff'
          : yiq >= 183
          ? '#191919'
          : '#ffffff',
    },
  };
};
