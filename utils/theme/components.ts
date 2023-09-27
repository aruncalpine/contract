const sizes = {
  xxs: {
    fontSize: '14px',
    lineHeight: '18px',
  },
  xs: {
    fontSize: '22px',
    lineHeight: '32px',
  },
  sm: {
    fontSize: '24px',
    lineHeight: '32px',
  },
  md: {
    fontSize: '28px',
    lineHeight: '36px',
  },
  lg: {
    fontSize: '32px',
    lineHeight: '44px',
  },
  xl: {
    fontSize: '44px',
    lineHeight: '56px',
  },
  '2xl': {
    fontSize: '96px',
    lineHeight: '110px',
  },
  16: {
    fontSize: '16px',
    lineHeight: '24px',
  },
  64: {
    fontSize: '64px',
    lineHeight: '80.64px',
  },
  96: {
    fontSize: '96px',
    lineHeight: '120.96px',
    fontWeight: 800,
  },
};

const components = {
  Text: {
    sizes,
    variants: {
      gradient: {
        color: 'black',
        fontSize: {
          base: '28px',
          md: '32px',
          lg: '40px',
          xl: '44px',
        },
        lineHeight: '56px',
        fontWeight: 700,
        background: 'linear-gradient(90.67deg, #805AD5 28.86%, #38B2AC 94.03%);',
        backgroundClip: 'text',
        textFillColor: 'transparent',
        textAlign: 'center',
        '--webkit-background-clip': 'text',
        '--webkit-text-fill-color': 'transparent',
      },
    },
  },
  Input: {
    sizes,
  },
  Box: {
    sizes,
  },
};

export default components;
