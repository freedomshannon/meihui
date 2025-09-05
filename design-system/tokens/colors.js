// 颜色系统 - 基于Figma设计稿提取
export const colors = {
  // 品牌色
  brand: {
    primary: '#18181B', // 主色调 - 深灰黑色
    secondary: '#FAFAFA', // 次要色 - 浅灰白色
  },

  // 文字颜色
  text: {
    primary: '#000000', // 主要文字
    secondary: '#71717A', // 次要文字
    inverse: '#FAFAFA', // 反色文字
    muted: '#4D4D4D', // 柔和文字
  },

  // 背景颜色
  background: {
    primary: '#FFFFFF', // 主背景
    secondary: '#FAFAFA', // 次背景
    accent: '#F9F9F9', // 强调背景
  },

  // 边框颜色
  border: {
    light: '#E4E4E7', // 浅边框
    medium: '#D4D4D8', // 中等边框
    dark: '#71717A', // 深边框
  },

  // 状态颜色
  status: {
    success: '#10B981', // 成功绿
    warning: '#F59E0B', // 警告黄
    error: '#EF4444', // 错误红
    info: '#3B82F6', // 信息蓝
  },

  // 功能色
  functional: {
    accent: '#0EA5E9', // 强调色 - 亮蓝色
    highlight: '#F59E0B', // 高亮色
  },

  // 渐变色
  gradients: {
    primary: 'linear-gradient(90deg, #18181B 0%, rgba(24, 24, 27, 0.8) 100%)',
    text: 'linear-gradient(180deg, #18181B 0%, #333333 100%)',
    background: 'linear-gradient(0deg, #FAFAFA 0%, #FFFFFF 100%)',
  },

  // 透明度变体
  opacity: {
    light: 'rgba(255, 255, 255, 0.5)',
    medium: 'rgba(255, 255, 255, 0.8)',
    dark: 'rgba(24, 24, 27, 0.8)',
    text: 'rgba(113, 113, 122, 0.8)',
  },
};
