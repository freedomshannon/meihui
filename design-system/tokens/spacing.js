// 间距系统 - 基于Figma设计稿提取
export const spacing = {
  // 基础间距单位 (基于8px网格系统)
  0: '0px',
  1: '4px',    // 最小间距
  2: '8px',    // 小间距
  3: '12px',   // 中小间距
  4: '16px',   // 中等间距
  5: '20px',   // 中大间距
  6: '24px',   // 大间距
  7: '28px',   // 较大间距
  8: '32px',   // 超大间距
  9: '36px',   // 特大间距
  10: '40px',  // 极大间距

  // 组件专用间距
  component: {
    padding: {
      xs: '8px 12px',    // 小按钮
      sm: '10px 16px',    // 中按钮
      md: '12px 24px',    // 大按钮
      lg: '16px 32px',    // 特大按钮
    },
    gap: {
      xs: '4px',    // 紧密间距
      sm: '8px',    // 小间距
      md: '16px',   // 中等间距
      lg: '24px',   // 大间距
      xl: '32px',   // 超大间距
      xxl: '48px',  // 特大间距
      xxxl: '64px', // 极大间距
    },
  },

  // 布局专用间距
  layout: {
    container: {
      padding: {
        mobile: '16px',
        tablet: '24px',
        desktop: '32px',
        wide: '48px',
      },
      margin: {
        section: '64px 0px',
        container: '96px 0px',
      },
    },
    grid: {
      gap: '32px',
      column: '96px',
    },
  },

  // 响应式断点
  breakpoints: {
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
    '2xl': '1536px',
  },
};
