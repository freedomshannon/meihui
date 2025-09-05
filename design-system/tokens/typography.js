// 字体系统 - 基于Figma设计稿提取
export const typography = {
  // 字体族
  fontFamily: {
    primary: ['Roboto', 'system-ui', 'sans-serif'],
    secondary: ['Inter', 'system-ui', 'sans-serif'],
    mono: ['JetBrains Mono', 'monospace'],
  },

  // 字体大小
  fontSize: {
    xs: '12px',
    sm: '14px',
    base: '16px',
    lg: '18px',
    xl: '20px',
    '2xl': '24px',
    '3xl': '30px',
    '4xl': '36px',
    '5xl': '48px',
    '6xl': '60px',
    '7xl': '72px',
    '8xl': '96px',
    '9xl': '128px',
  },

  // 字重
  fontWeight: {
    thin: 100,
    light: 300,
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
    extrabold: 800,
    black: 900,
  },

  // 行高
  lineHeight: {
    none: 1,
    tight: 1.25,
    snug: 1.375,
    normal: 1.5,
    relaxed: 1.625,
    loose: 2,
  },

  // 字母间距
  letterSpacing: {
    tighter: '-0.05em',
    tight: '-0.025em',
    normal: '0em',
    wide: '0.025em',
    wider: '0.05em',
    widest: '0.1em',
  },

  // 文字装饰
  textDecoration: {
    underline: 'underline',
    lineThrough: 'line-through',
    none: 'none',
  },

  // 文字变换
  textTransform: {
    uppercase: 'uppercase',
    lowercase: 'lowercase',
    capitalize: 'capitalize',
    none: 'none',
  },

  // 预定义文字样式
  textStyles: {
    // 标题样式
    heading: {
      h1: {
        fontFamily: 'Roboto',
        fontSize: '58px',
        fontWeight: 600,
        lineHeight: 1,
        letterSpacing: '-3.9999998849013756%',
      },
      h2: {
        fontFamily: 'Roboto',
        fontSize: '36px',
        fontWeight: 700,
        lineHeight: 1.1111111111111112,
        letterSpacing: '-2.499999933772617%',
      },
      h3: {
        fontFamily: 'Roboto',
        fontSize: '20px',
        fontWeight: 600,
        lineHeight: 1.4,
      },
      h4: {
        fontFamily: 'Roboto',
        fontSize: '18px',
        fontWeight: 600,
        lineHeight: 1.5555555555555556,
      },
    },

    // 正文样式
    body: {
      large: {
        fontFamily: 'Roboto',
        fontSize: '18px',
        fontWeight: 400,
        lineHeight: 1.7777777777777777,
      },
      base: {
        fontFamily: 'Roboto',
        fontSize: '16px',
        fontWeight: 400,
        lineHeight: 1.5,
      },
      small: {
        fontFamily: 'Roboto',
        fontSize: '14px',
        fontWeight: 400,
        lineHeight: 1.4285714285714286,
      },
    },

    // 按钮样式
    button: {
      primary: {
        fontFamily: 'Roboto',
        fontSize: '14px',
        fontWeight: 500,
        lineHeight: 1.4285714285714286,
      },
      secondary: {
        fontFamily: 'Inter',
        fontSize: '14px',
        fontWeight: 600,
        lineHeight: 1.4285714285714286,
      },
    },

    // 标签样式
    label: {
      fontFamily: 'Inter',
      fontSize: '16px',
      fontWeight: 500,
      lineHeight: 1,
    },

    // 导航样式
    nav: {
      fontFamily: 'Roboto',
      fontSize: '16px',
      fontWeight: 600,
      lineHeight: 1.25,
      textTransform: 'uppercase',
    },
  },
};
