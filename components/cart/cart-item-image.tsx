import { CartItem as CartItemType } from '@/types/bike';
import { Image } from 'expo-image';
import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { View } from 'react-native';

interface CartItemImageProps {
  item: CartItemType;
}

export default function CartItemImage({ item }: CartItemImageProps) {
  return (
    <View className="w-[100px] h-[90px] rounded-xl overflow-hidden mr-4 relative">
      <LinearGradient
        colors={['rgba(255, 255, 255, 0.2)', 'rgba(0, 0, 0, 0.2)']}
        locations={[0.0732, 0.5918]}
        start={{ x: 0.5736, y: 0 }} // cos(125.63°) ≈ 0.5736
        end={{ x: 0, y: 1 }}
        style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, borderRadius: 20 }}
        className="absolute inset-0 rounded-[20px]"
      />
      <LinearGradient
        colors={['#363E51', '#4C5770']}
        locations={[0.078, 0.9133]}
        start={{ x: 0.7771, y: 0.6293 }} // cos(322.57°), sin(322.57°)
        end={{ x: 0, y: 1 }}
        style={{ position: 'absolute', top: 1, left: 1, right: 1, bottom: 1, borderRadius: 20 }}
        className="absolute inset-[2px] rounded-[20px]"
      />
      <Image
        source={item.bike.images[0]}
        style={{
          width: 100,
          height: 90,
        }}
        contentFit="contain"
      />
    </View>
  );
}
