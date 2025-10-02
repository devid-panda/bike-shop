import { Bike } from '@/types/bike';
import { Image } from 'expo-image';
import React from 'react';
import { Dimensions, Text, View } from 'react-native';
import Animated, { FadeInDown } from 'react-native-reanimated';

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
      <View className="relative z-10 shadow-inset-lg h-[240px]">
        <View className="absolute inset-0 w-full">
          <Image
            source={require('../../assets/images/bike-preview.png')}
            style={{
              width: width - 40,
              height: 240,
            }}
            contentFit="cover"
          />
        </View>
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
