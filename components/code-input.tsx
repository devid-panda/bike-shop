import Button from '@/components/ui/button';
import React from 'react';
import { Text, TextInput, View } from 'react-native';
import Animated, {
  FadeInDown,
} from 'react-native-reanimated';

export default function CodeInput() {
  return (
    <Animated.View 
      entering={FadeInDown.delay(600)}
      className="px-5"
    >
      <View className="bg-dark-800 rounded-lg flex-row justify-between items-center">
        <View
          className="flex-1 justify-center px-3 bg-[#242C3B] h-12 rounded-lg -mr-4 relative"
          style={{
            boxShadow: '4px 10px 30px 0px #191E29 inset',
            shadowColor: '#191E29',
            shadowOffset: { width: 4, height: 10 },
            shadowOpacity: 1,
            shadowRadius: 30,
            elevation: 0, // No outer shadow, only for Android fallback
          }}
        >
          <TextInput
            placeholder="Enter code"
            placeholderTextColor="#ffffff99"
            className="text-white bg-transparent"
            style={{ paddingVertical: 0, paddingHorizontal: 0 }}
          />
        </View>
        <Button className="w-[114px] h-[48px]">
          <Text className="text-white font-semibold">Apply</Text>
        </Button>
      </View>
    </Animated.View>
  );
}