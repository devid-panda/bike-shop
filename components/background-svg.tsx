import { cn } from '@/lib/utils';
import React from 'react';
import { Dimensions, View } from 'react-native';
import Svg, { Defs, LinearGradient, Path, Stop } from 'react-native-svg';

interface BackgroundSvgProps {
  className?: string;
}

export default function BackgroundSvg({ className }: BackgroundSvgProps) {
  const { width, height } = Dimensions.get('window');
  
  return (
    <View className={cn('absolute top-0 left-0 z-[-1]', className)}>
      <Svg 
        width={width} 
        height={height} 
        viewBox="0 0 390 695" 
      >
        <Defs>
          <LinearGradient id="paint0_linear_1_40" x1="168.5" y1="0.500004" x2="372.499" y2="720.5" gradientUnits="userSpaceOnUse">
            <Stop offset="0" stopColor="#37B6E9" />
            <Stop offset="1" stopColor="#4B4CED" />
          </LinearGradient>
        </Defs>
        <Path 
          d="M242.5 167.5L322 0L393.5 59.5V720.5L-20 705L242.5 167.5Z" 
          fill="url(#paint0_linear_1_40)" 
        />
      </Svg>
    </View>
  );
};
