import { Bike } from '@/types/bike';
import { Image } from 'expo-image';
import React from 'react';
import { Dimensions, Text, View } from 'react-native';
import Animated, { FadeInDown } from 'react-native-reanimated';
import Svg, { Defs, LinearGradient, Path, Stop } from 'react-native-svg';

interface BikePreviewProps {
  bike: Bike;
}

const { width } = Dimensions.get('window');

export function BikePreview({ bike }: BikePreviewProps) {

  return (
    <Animated.View 
      entering={FadeInDown.delay(200)}
      className="relative"
    >
      <View className="relative z-10 shadow-inset-lg">
        <Svg
          height="240"
          width={width - 40}
          viewBox={`0 0 ${width - 40} 240`}
        >
          <Defs>
            {/* Fill Gradient */}
            <LinearGradient
              id="bikePreviewGradient"
              x1="0"
              y1="0"
              x2={Math.cos((169.98 * Math.PI) / 180) * (width - 40)}
              y2={Math.sin((169.98 * Math.PI) / 180) * 240}
              gradientUnits="userSpaceOnUse"
            >
              <Stop
                offset="27.98%"
                stopColor="#353F54"
                stopOpacity={0.6}
              />
              <Stop
                offset="81.2%"
                stopColor="#222834"
                stopOpacity={0.6}
              />
            </LinearGradient>
            {/* Border Gradient */}
            <LinearGradient
              id="bikePreviewBorderGradient"
              x1="0"
              y1="0"
              x2={width - 40}
              y2="240"
              gradientUnits="userSpaceOnUse"
              gradientTransform="rotate(134.4)"
            >
              <Stop
                offset="7.51%"
                stopColor="rgb(255,255,255)"
                stopOpacity="0.2"
              />
              <Stop
                offset="65.43%"
                stopColor="rgb(0,0,0)"
                stopOpacity="0.2"
              />
            </LinearGradient>
          </Defs>
          {/* Fill Path with rounded corners and slanted border */}
          <Path
            d={`
              M20 0
              L${width - 60} 0
              Q${width - 40} 0, ${width - 40} 20
              L${width - 40} 200
              Q${width - 40} 220, ${width - 60} 220
              L20 240
              Q0 240, 0 220
              L0 20
              Q0 0, 20 0
              Z
            `}
            fill="url(#bikePreviewGradient)"
          />
          {/* Border Path with rounded corners and slanted border */}
          <Path
            d={`
              M21 1
              L${width - 61} 1
              Q${width - 41} 1, ${width - 41} 21
              L${width - 41} 199
              Q${width - 41} 219, ${width - 61} 219
              L21 239
              Q1 239, 1 219
              L1 21
              Q1 1, 21 1
              Z
            `}
            fill="none"
            stroke="url(#bikePreviewBorderGradient)"
            strokeWidth={2}
          />
        </Svg>
        <View className="absolute inset-0 w-full h-full items-center justify-center">
          <Image
            source={bike.images[0]}
            style={{
              width: 316,
              height: 153,
              marginBottom: 10,
            }}
            contentFit="contain"
          />
        </View>
        <View className="absolute bottom-6 left-4">
          <Text className="text-white text-[26px] font-bold opacity-[.6] font-poppins-bold">
            {bike.discount}% Off
          </Text>
        </View>
      </View>
    </Animated.View>
  );
}
