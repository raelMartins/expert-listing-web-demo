export const components = {
  Text: {
    variants: {
      neue_haas: {
        fontFamily: 'var(--font-neue-haas)',
      },
    },
  },
  Heading: {
    baseStyle: {
      fontFamily: 'var(--font-euclid-circular-b)',
    },
    variants: {
      neue_haas: {
        fontFamily: 'var(--font-neue-haas)',
      },
    },
  },
  Button: {
    baseStyle: {
      outline: `none`,
      _hover: {
        opacity: `1`,
      },
      _active: {
        opacity: `1`,
      },
      _focus: {
        outline: `none`,
      },
      _focusVisible: {
        outline: `none`,
      },
    },
    variants: {
      primary: {
        h: 'max-content',
        w: 'fit-content',
        fontSize: '16px',
        fontWeight: '600',
        color: 'Grey.0',
        bg: 'brand_color',
        rounded: 'full',
        lineHeight: '100%',
        letterSpacing: `0%`,
        iconSpacing: '8px',
        p: '13px 16px',
        border: '1px solid',
        borderColor: 'transparent',
        transition: '.5s',
        _hover: {
          bg: 'brand_color',
          opacity: 1,
          transform: `translate(3px, 3px)`,
        },
        _active: {
          bg: 'brand_color',
          opacity: 1,
          transform: `translate(3px, 3px)`,
        },
        boxShadow: `2px 3px 6px 0px #00000026`,
        backdropFilter: `blur(50px)`,
      },
      'primary-border': {
        h: 'max-content',
        w: 'fit-content',
        fontSize: '16px',
        fontWeight: '600',
        color: 'Grey.0',
        bg: 'brand_color',
        rounded: 'full',
        lineHeight: '100%',
        letterSpacing: `0%`,
        iconSpacing: '8px',
        p: '13px 16px',
        border: '1px solid',
        borderColor: '#FFFFFF80',
        transition: '.5s',
        _hover: {
          bg: 'brand_color',
          opacity: 1,
          transform: `translate(3px, 3px)`,
        },
        _active: {
          bg: 'brand_color',
          opacity: 1,
          transform: `translate(3px, 3px)`,
        },
        boxShadow: `2px 3px 6px 0px #00000026`,
        backdropFilter: `blur(50px)`,
      },
      secondary: {
        h: 'max-content',
        w: 'fit-content',
        fontSize: '16px',
        fontWeight: '600',
        color: 'text.2',
        bg: 'background.2',
        rounded: 'full',
        lineHeight: '100%',
        letterSpacing: `0%`,
        iconSpacing: '8px',
        p: '13px 16px',
        border: '1px solid',
        borderColor: 'border_color.1',
        transition: '.5s',
        _hover: {
          bg: 'background.2',
          opacity: 1,
          transform: `translate(3px, 3px)`,
        },
        _active: {
          bg: 'background.2',
          opacity: 1,
          transform: `translate(3px, 3px)`,
        },
        boxShadow: `2px 3px 12px 0px #00000014`,
      },
      outline: {
        h: '36px',
        w: 'fit-content',
        fontSize: '13px',
        fontWeight: '400',
        color: 'text.2',
        bg: 'background.2',
        rounded: 'full',
        lineHeight: '150%',
        iconSpacing: '8px',
        p: '8px 19px',
        borderColor: 'border_color.1',
        border: '0.5px solid',
        _hover: {
          bg: 'background.2',
          opacity: 0.7,
        },
        _active: {
          bg: 'background.2',
          opacity: 0.7,
        },
      },

      'outline-transparent': {
        h: '36px',
        w: 'fit-content',
        fontSize: '13px',
        fontWeight: '500',
        color: 'text.2',
        bg: 'transparent',
        minW: '200px',
        rounded: 'full',
        lineHeight: '150%',
        letterSpacing: '2%',
        iconSpacing: '10px',
        p: '8px 19px',
        borderColor: 'border_color.1',
        border: '1px solid',
        _hover: {
          bg: 'transparent',
          opacity: 0.7,
        },
        _active: {
          bg: 'transparent',
          opacity: 0.7,
        },
      },
      'filled-radius': {
        bg: 'Grey.2',
        height: '54px',
        w: 'full',
        maxW: '400px',
        borderRadius: '72px',
        fontSize: '18px',
        fontWeight: '500',
        lineHeight: '21.6px',
        color: 'Grey.16',
        _hover: {
          _disabled: {
            opacity: 0.6,
            bg: 'text.1',
          },
        },
      },
      'outline-radius': {
        border: '1px solid',
        borderColor: '#d6d6d6',
        height: '54px',
        w: 'full',
        maxW: '400px',
        borderRadius: '72px',
        fontSize: '18px',
        fontWeight: '500',
        lineHeight: '21.6px',
        color: 'text.2',
      },
      'md-filled-radius': {
        bg: 'Grey.2',
        // fontFamily: "Euclid Circular B",

        height: '45.5px',
        // w: '400px',
        borderRadius: '72px',
        fontSize: '14.91px',
        fontWeight: '400',
        lineHeight: '18.9px',
        color: 'Grey.16',
        _hover: {
          _disabled: {
            opacity: 0.6,
            bg: 'text.1',
          },
        },
      },
      'md-outline-radius': {
        border: '1px solid',
        borderColor: '#424242',
        // fontFamily: "Euclid Circular B",

        height: '45.5px',
        // w: '400px',
        borderRadius: '72px',
        fontSize: '14.91px',
        fontWeight: '400',
        lineHeight: '18.9px',
        color: 'text.2',
      },
      'drawer-footer-filled-radius': {
        height: '45.5px',

        borderRadius: '72px',

        color: '#ffffff',
        h: '46px',
        w: 'full',
        bg: 'text.1',
        fontSize: '16px',
        fontWeight: '500',
        lineHeight: '140%',
        _hover: {
          _disabled: {
            opacity: 0.6,
            bg: 'text.1',
          },
        },
      },
      'drawer-footer-outline-radius': {
        height: '45.5px',

        borderRadius: '72px',
        border: '1px solid',
        borderColor: 'border_color.1',
        color: '#ffffff',
        h: '46px',
        w: 'full',

        fontSize: '16px',
        fontWeight: '500',
        lineHeight: '140%',
        _hover: {
          _disabled: {
            opacity: 0.6,
          },
        },
      },
      'md-outline-blue-radius': {
        border: '1px solid',
        borderColor: 'Blue.2',
        iconSpacing: '10px',
        height: '36px',
        fontSize: '13px',
        fontWeight: '500',
        letterSpacing: '2%',
        lineHeight: '150%',
        w: 'fit-content',
        p: '8px 16px',
        borderRadius: '72px',
        textStyle: 'labelText',
        color: 'Blue.2',
      },
      glass: {
        h: 'max-content',
        w: 'fit-content',
        fontSize: '14px',
        fontWeight: '500',
        color: '#ffffff',
        bg: 'linear-gradient(90.51deg, rgba(255, 255, 255, 0.125) 0%, rgba(255, 255, 255, 0.0925) 100%)',
        rounded: 'full',
        lineHeight: '100%',
        letterSpacing: `0%`,
        iconSpacing: '8px',
        p: '10px 18px',
        borderColor: '#ffffff',
        border: '1px solid',
        transition: '.5s',
        _hover: {
          bg: 'linear-gradient(90.51deg, rgba(255, 255, 255, 0.125) 0%, rgba(255, 255, 255, 0.0925) 100%)',
          opacity: 1,
          transform: `translate(3px, 3px)`,
        },
        _active: {
          bg: 'linear-gradient(90.51deg, rgba(255, 255, 255, 0.125) 0%, rgba(255, 255, 255, 0.0925) 100%)',
          opacity: 1,
          transform: `translate(3px, 3px)`,
        },
        boxShadow: `0px 20px 40px 0px #0000001A`,
        backdropFilter: `blur(50px)`,
      },
    },
  },
  NumberInput: {
    baseStyle: {
      field: {
        // fontFamily: "Euclid Circular B",
        _focus: {
          boxShadow: 'none',
          outline: 'none',
          borderColor: '#525252',
          backgroundColor: '#fafafa',
          color: '#141414',
        },

        _active: {
          boxShadow: 'none',
          outline: 'none',
          borderColor: '#525252',
          backgroundColor: '#fafafa',
          color: '#141414',
        },
        _hover: {
          backgroundColor: '#fafafa',
          color: '#141414',
        },
        _placeholder: {
          color: '#606060',
          fontSize: '14px',
          fontWeight: '400',
        },
        _autofill: {
          boxShadow: '0 0 0px 1000px #fafafa inset',
          transition: 'background-color 5000s ease-in-out 0s',
          color: '#141414',
        },
      },
    },
    variants: {
      unstyled: {
        field: {
          width: 'full',
          '--input-font-height': 'calc(150% * 13px)',
          outline: 'none',
          background: 'transparent',
          fontWeight: '500',
          lineHeight: '150%',
          letterSpacing: '2%',
          fontSize: '13px',
          minH: 'var(---input-font-height)',
          h: 'var(---input-font-height)',
          color: 'text.1',
          _hover: {
            bg: 'transparent',
          },
          _focus: {
            bg: 'transparent',
          },
        },
      },
      regular: {
        field: {
          fontSize: '13px',
          fontWeight: '400',
          color: 'text.1',
          _placeholder: {fontSize: '13px', color: 'text.3'},
          _focusVisible: {
            borderColor: 'text.4',
          },
          w: 'full',
          h: '36px',
          rounded: '8px',
          p: '8px 12px',
          border: ' 1px solid',
          borderColor: `border_color.1`,
          boxShadow: '0px 1px 2px 0px #1018280D',
        },
      },
      regularMed: {
        field: {
          fontSize: '16px',
          lineHeight: '140%',
          fontWeight: '400',
          color: 'text.1',
          _placeholder: {fontSize: '13px', color: 'text.3'},
          _focusVisible: {
            borderColor: 'text.4',
          },
          w: 'full',
          h: '40px',
          rounded: '8px',
          p: '8px 12px',
          border: ' 1px solid',
          borderColor: `border_color.1`,
          boxShadow: '0px 1px 2px 0px #1018280D',
        },
      },
      auth: {
        field: {
          border: '1px solid #e5e5e5',
          padding: '15px 17px',
          backgroundColor: '#fafafa',
          color: '#141414',
          fontWeight: '400',
          borderRadius: '8px',
          height: '50px',
          width: '100%',
          _focus: {
            backgroundColor: '#fafafa',
            color: '#141414',
            borderColor: '#525252',
          },
          _hover: {
            backgroundColor: '#fafafa',
            color: '#141414',
          },
          _autofill: {
            boxShadow: '0 0 0px 1000px #fafafa inset',
            transition: 'background-color 5000s ease-in-out 0s',
            color: '#141414',
          },
        },
      },
    },
  },
  Input: {
    baseStyle: {
      field: {
        // fontFamily: "Euclid Circular B",
        _focus: {
          boxShadow: 'none',
          outline: 'none',
          borderColor: '#525252',
          backgroundColor: '#fafafa',
          color: '#141414',
        },

        _active: {
          boxShadow: 'none',
          outline: 'none',
          borderColor: '#525252',
          backgroundColor: '#fafafa',
          color: '#141414',
        },
        _hover: {
          backgroundColor: '#fafafa',
          color: '#141414',
        },
        _placeholder: {
          color: '#606060',
          fontSize: '14px',
          fontWeight: '400',
        },
        _autofill: {
          boxShadow: '0 0 0px 1000px #fafafa inset',
          transition: 'background-color 5000s ease-in-out 0s',
          color: '#141414',
        },
      },
    },

    variants: {
      unstyled: {
        field: {
          width: 'full',
          '--input-font-height': 'calc(150% * 13px)',
          outline: 'none',
          background: 'transparent',
          fontWeight: '500',
          lineHeight: '150%',
          letterSpacing: '2%',
          fontSize: '13px',
          minH: 'var(---input-font-height)',
          h: 'var(---input-font-height)',
          color: 'text.1',
          _hover: {
            bg: 'transparent',
          },
          _focus: {
            bg: 'transparent',
          },
        },
      },
      regular: {
        field: {
          fontSize: '13px',
          fontWeight: '400',
          color: 'text.1',
          _placeholder: {fontSize: '13px', color: 'text.3'},
          _focusVisible: {
            borderColor: 'text.4',
          },
          w: 'full',
          h: '36px',
          rounded: '8px',
          p: '8px 12px',
          border: ' 1px solid',
          borderColor: `border_color.1`,
          boxShadow: '0px 1px 2px 0px #1018280D',
        },
      },
      regularMed: {
        field: {
          fontSize: '16px',
          lineHeight: '140%',
          fontWeight: '400',
          color: 'text.1',
          _placeholder: {fontSize: '13px', color: 'text.3'},
          _focusVisible: {
            borderColor: 'text.4',
          },
          w: 'full',
          h: '40px',
          rounded: '8px',
          p: '8px 12px',
          border: ' 1px solid',
          borderColor: `border_color.1`,
          boxShadow: '0px 1px 2px 0px #1018280D',
        },
      },
      auth: {
        field: {
          border: '1px solid #e5e5e5',
          padding: '15px 17px',
          backgroundColor: '#fafafa',
          color: '#141414',
          fontWeight: '400',
          borderRadius: '8px',
          height: '50px',
          width: '100%',
          _focus: {
            backgroundColor: '#fafafa',
            color: '#141414',
            borderColor: '#525252',
          },
          _hover: {
            backgroundColor: '#fafafa',
            color: '#141414',
          },
          _autofill: {
            boxShadow: '0 0 0px 1000px #fafafa inset',
            transition: 'background-color 5000s ease-in-out 0s',
            color: '#141414',
          },
        },
      },
    },
  },
  Textarea: {
    baseStyle: {
      field: {
        _focus: {
          boxShadow: 'none',
          outline: 'none',
          borderColor: '#525252',
          backgroundColor: '#fafafa',
          color: '#141414',
        },

        _active: {
          boxShadow: 'none',
          outline: 'none',
          borderColor: '#525252',
          backgroundColor: '#fafafa',
          color: '#141414',
        },
        _hover: {
          backgroundColor: '#fafafa',
          color: '#141414',
        },
        _placeholder: {
          color: '#606060',
          fontSize: '14px',
          fontWeight: '400',
        },
        _autofill: {
          boxShadow: '0 0 0px 1000px #fafafa inset',
          transition: 'background-color 5000s ease-in-out 0s',
          color: '#141414',
        },
      },
    },

    variants: {
      regular: {
        resize: 'none',
        fontSize: '13px',
        h: '94px',
        fontWeight: '400',
        color: 'text.1',
        _placeholder: {fontSize: '13px', color: 'text.3'},
        _focusVisible: {
          borderColor: 'text.4',
        },
        w: 'full',

        rounded: '8px',
        p: '8px 12px',
        border: ' 1px solid',
        borderColor: `border_color.1`,
        boxShadow: '0px 1px 2px 0px #1018280D',
      },
      regularMed: {
        resize: 'none',

        fontSize: '16px',
        lineHeight: '140%',
        fontWeight: '400',
        color: 'text.1',
        _placeholder: {fontSize: '13px', color: 'text.3'},
        _focusVisible: {
          borderColor: 'text.4',
        },
        w: 'full',

        rounded: '8px',
        p: '8px 12px',
        border: ' 1px solid',
        borderColor: `border_color.1`,
        boxShadow: '0px 1px 2px 0px #1018280D',
      },
    },
  },
  Select: {
    variants: {
      auth: {
        field: {
          border: '1px solid #e5e5e5',
          padding: '15px 17px',
          backgroundColor: '#fafafa',
          color: '#141414',

          fontSize: '14px',
          fontWeight: '400',
          borderRadius: '8px',
          height: '50px',
          width: '100%',
          _placeholder: {
            color: '#606060',
          },
        },
      },
      regular: {
        field: {
          fontSize: '13px',
          fontWeight: '400',
          color: 'text.1',
          _placeholder: {fontSize: '13px', color: 'text.3'},
          _focusVisible: {
            borderColor: 'text.4',
          },
          w: 'full',
          h: '36px',
          rounded: '8px',
          p: '8px 12px',
          border: ' 1px solid',
          borderColor: `border_color.1`,
          boxShadow: '0px 1px 2px 0px #1018280D',
        },
      },
      regularMed: {
        field: {
          fontSize: '13px',
          lineHeight: '150%',
          fontWeight: '400',
          color: 'text.1',
          _placeholder: {fontSize: '13px', color: 'text.3'},
          _focusVisible: {
            borderColor: 'text.4',
          },
          w: 'full',
          h: '40px',
          rounded: '8px',
          p: '8px 12px',
          border: ' 1px solid',
          borderColor: `border_color.1`,
          boxShadow: '0px 1px 2px 0px #1018280D',
        },
      },
    },
  },
  Drawer: {
    baseStyle: {
      overlay: {
        bg: 'rgba(0,0,0,0.1)',
      },
      body: {
        display: 'flex',
        flexDirection: 'column',
        gap: '24px',
        py: '24px',
        px: '20px',
        pr: '13px',
        'margin-right': '10px',
        '&::-webkit-scrollbar': {
          width: '4px',
          borderRadius: '16px',
        },
        '&::-webkit-scrollbar-track': {
          borderRadius: '16px',
          WebkitBoxShadow: 'inset 0 0 6px transparent',
        },
        '&::-webkit-scrollbar-thumb': {
          borderRadius: '16px',
          backgroundColor: '#cbcbcb',
        },
      },
      footer: {
        p: '20px 30px',
        borderTop: '0.5px solid',
        borderColor: 'border_color.1',
        bg: 'background.2',
      },
    },
  },

  Container: {
    baseStyle: {
      bg: 'background.2',
      minW: 'full',
      rounded: '12px',
      w: 'full',
      p: '32px',
      border: '1px solid var(--chakra-colors-border_color.1)',
    },
    variants: {
      md: {
        rounded: '8px',
        p: '16px 12px',
        border: '0.5px solid var(--chakra-colors-border_color.1)',
        boxShadow: '0px 4px 8px 0px #00000005',
      },
    },
  },
  Badge: {
    baseStyle: {
      p: '2px 8px',
      rounded: '16px',
      minW: 'fit-content',
      w: 'fit-content',
      textTransform: 'capitalize',
      fontSize: '12px',
      fontWeight: '500',
      letterSpacing: '0%',
      lineHeight: '18px',
    },
    variants: {
      green: {
        bg: 'Green.12',
        color: 'Green.3',
      },
      purple: {
        bg: 'Purple.6',
        color: 'Purple.4',
      },
      blue: {
        bg: 'Blue.6',
        color: 'Blue.2',
      },
      orange: {
        bg: 'Orange.4',
        color: 'Orange.0',
      },
    },
  },
};
