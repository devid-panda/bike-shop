import { useEffect, useState } from 'react';
import { Dimensions } from 'react-native';

interface ScreenDimensions {
  width: number;
  height: number;
  isSmall: boolean;
  isMedium: boolean;
  isLarge: boolean;
  isTablet: boolean;
}

export function useResponsive(): ScreenDimensions {
  const [dimensions, setDimensions] = useState(() => {
    const { width, height } = Dimensions.get('window');
    return {
      width,
      height,
      isSmall: width < 375,
      isMedium: width >= 375 && width < 414,
      isLarge: width >= 414,
      isTablet: width >= 768,
    };
  });

  useEffect(() => {
    const subscription = Dimensions.addEventListener('change', ({ window }) => {
      const { width, height } = window;
      setDimensions({
        width,
        height,
        isSmall: width < 375,
        isMedium: width >= 375 && width < 414,
        isLarge: width >= 414,
        isTablet: width >= 768,
      });
    });

    return () => subscription?.remove();
  }, []);

  return dimensions;
}

