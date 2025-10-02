import React from 'react';
import { ScrollView, Text } from 'react-native';
import Animated, { FadeInUp } from 'react-native-reanimated';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function ExploreScreen() {
  return (
    <SafeAreaView className="flex-1 bg-dark-900">
      <ScrollView className="flex-1" showsVerticalScrollIndicator={false}>
        {/* Header */}
        <Animated.View 
          entering={FadeInUp.delay(100)}
          className="px-6 py-4"
        >
          <Text className="text-white text-2xl font-bold mb-2 font-poppins-bold">Files</Text>
        </Animated.View>
      </ScrollView>
    </SafeAreaView>
  );
}