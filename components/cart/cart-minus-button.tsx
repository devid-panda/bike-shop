import { IconSymbol } from '@/components/ui/icon-symbol';
import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { TouchableOpacity, TouchableOpacityProps, View } from 'react-native';

export default function CartMinusButton(props: TouchableOpacityProps) {
  return (
    <TouchableOpacity
      className="w-6 h-6 items-center justify-center rounded-[5px] relative"
      {...props}
    >
      <LinearGradient
        colors={['rgba(255, 255, 255, 0.2)', 'rgba(0, 0, 0, 0.2)']}
        locations={[0.0625, 0.5389]}
        start={{ x: 0.7705, y: 0.6362 }} // cos(141.57°), sin(141.57°)
        end={{ x: 0, y: 1 }}
        style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, borderRadius: 5 }}
        className="absolute inset-0 rounded-[5px]"
      />
      <View className="absolute inset-[0.5px] bg-[#353F54] rounded-[5px]" />
      <IconSymbol name="minus" size={20} color="#ffffff99" />
    </TouchableOpacity>
  );
}