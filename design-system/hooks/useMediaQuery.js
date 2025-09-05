import { useState, useEffect } from 'react';

// 媒体查询Hook
export function useMediaQuery(query) {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(query);

    // 设置初始值
    setMatches(media.matches);

    // 监听变化
    const listener = (event) => {
      setMatches(event.matches);
    };

    // 添加监听器
    if (media.addEventListener) {
      media.addEventListener('change', listener);
    } else {
      // 兼容性处理
      media.addListener(listener);
    }

    // 清理监听器
    return () => {
      if (media.removeEventListener) {
        media.removeEventListener('change', listener);
      } else {
        // 兼容性处理
        media.removeListener(listener);
      }
    };
  }, [query]);

  return matches;
}

// 预定义的媒体查询Hook
export function useIsMobile() {
  return useMediaQuery('(max-width: 768px)');
}

export function useIsTablet() {
  return useMediaQuery('(min-width: 768px) and (max-width: 1024px)');
}

export function useIsDesktop() {
  return useMediaQuery('(min-width: 1024px)');
}

export function useIsLargeDesktop() {
  return useMediaQuery('(min-width: 1280px)');
}
