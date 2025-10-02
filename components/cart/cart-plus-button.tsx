import { IconSymbol } from '@/components/ui/icon-symbol';
import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { TouchableOpacity, TouchableOpacityProps } from 'react-native';

export default function CartPlusButton(props: TouchableOpacityProps) {
  return (
    <TouchableOpacity
      className="w-6 h-6 items-center justify-center rounded-[5px] relative"
      {...props}
    >
      <LinearGradient
        colors={['rgba(255, 255, 255, 0.6)', 'rgba(0, 0, 0, 0.6)']}
        locations={[0, 1]}
        start={{ x: 0.9029, y: 0.4279 }} // cos(154.74°), sin(154.74°)
        end={{ x: 0, y: 1 }}
        style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, borderRadius: 5 }}
        className="absolute inset-0 rounded-[5px]"
      />
      <LinearGradient
        colors={['#34C8E8', '#4E4AF2']}
        start={{ x: 0.5299, y: 1 }} // cos(152.72°), sin(152.72°)
        end={{ x: 0, y: 0 }}
        style={{ position: 'absolute', top: 0.5, left: 0.5, right: 0.5, bottom: 0.5, borderRadius: 5 }}
        className="absolute inset-0 rounded-[5px]"
      />
      <IconSymbol name="plus" size={20} color="white" />
    </TouchableOpacity>
  );
}