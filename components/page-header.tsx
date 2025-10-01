
import Button from '@/components/ui/button';
import { IconSymbol } from '@/components/ui/icon-symbol';
import { router } from 'expo-router';
import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import Animated, { FadeInUp } from 'react-native-reanimated';

interface PageHeaderProps {
  title: string;
}

export default function PageHeader({ title }: PageHeaderProps) {
  return (
    <Animated.View 
      entering={FadeInUp.delay(100)}
      className="flex-row items-center justify-between px-5 pt-4 pb-4"
    >
      <Button className="w-11 !px-0" onPress={() => router.back()}>
        <IconSymbol name="chevron.left" size={20} color="white" />
      </Button>
      
      <Text className="text-white text-xl font-bold font-poppins leading-[100%] tracking-[-0.3px]">{title}</Text>
      
      <TouchableOpacity className="w-10 h-10 rounded-xl items-center justify-center">
      </TouchableOpacity>
    </Animated.View>
  );
}
