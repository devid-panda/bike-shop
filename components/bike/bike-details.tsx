'use client';

import { Bike } from '@/types/bike';
import { LinearGradient } from 'expo-linear-gradient';
import React, { useEffect, useState } from 'react';
import { ScrollView, Text, View } from 'react-native';
import Animated, {
  FadeInDown,
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming
} from 'react-native-reanimated';
import AddToCartButton from './add-to-cart-button';
import CategoryButton from './category-button';
import WeatherWidget from './weather-widget';

interface BikeDetailsProps {
  bike: Bike;
}

export default function BikeDetails({ bike }: BikeDetailsProps) {
  const [activeTab, setActiveTab] = useState<'description' | 'specification'>('description');

  // Animation values
  const tabIndicatorPosition = useSharedValue(0);
  const slidePosition = useSharedValue(0);

  const handleTabChange = (tab: 'description' | 'specification') => {
    if (tab === activeTab) return;
    
    // Determine slide direction
    const isMovingRight = (activeTab === 'description' && tab === 'specification');
    const isMovingLeft = (activeTab === 'specification' && tab === 'description');
    
    if (isMovingRight) {
      // Slide left (content moves left, revealing right content)
      slidePosition.value = withTiming(-1, { duration: 300 });
    } else if (isMovingLeft) {
      // Slide right (content moves right, revealing left content)
      slidePosition.value = withTiming(1, { duration: 300 });
    }
    
    // Update tab after a brief delay for smooth transition
    setTimeout(() => {
      setActiveTab(tab);
      slidePosition.value = withTiming(0, { duration: 300 });
    }, 150);
  };

  const contentAnimatedStyle = useAnimatedStyle(() => {
    const translateX = interpolate(
      slidePosition.value,
      [-1, 0, 1],
      [-300, 0, 300]
    );
    
    return {
      transform: [{ translateX }],
    };
  });

  useEffect(() => {
    tabIndicatorPosition.value = withSpring(activeTab === 'description' ? 0 : 1);
  }, [activeTab]);

  return (
    <View className="flex-1 mt-8 rounded-[30px] relative shadow-custom-2">
      {/* Background Gradient */}
      <View className="absolute inset-0 rounded-[30px] -ml-1 -mr-1">
        <LinearGradient
          colors={['rgba(255, 255, 255, 0.2)', 'rgba(0, 0, 0, 0)']}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, borderRadius: 30 }}
          className="absolute inset-0 rounded-[30px]"
        />
        <LinearGradient
          colors={['#353F54', '#222834']}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={{ position: 'absolute', top: 2, left: 2, right: 2, bottom: 2, borderRadius: 30 }}
          className="absolute inset-[2px] rounded-[30px]"
        />
      </View>
      {/* Tabs */}
      <Animated.View className="px-10 pb-1 pt-8">
        <View className="flex-row justify-center items-center relative gap-[30px]">
          <CategoryButton
            active={activeTab === 'description'}
            title="Description"
            onPress={() => handleTabChange('description')}
          />
          <CategoryButton
            active={activeTab === 'specification'}
            title="Specification"
            onPress={() => handleTabChange('specification')}
          />
        </View>
      </Animated.View>
      <ScrollView className="flex-1" showsVerticalScrollIndicator={false}>
        {/* Tab Content */}
        <Animated.View style={[contentAnimatedStyle]} className="px-5 pb-6 pt-6">
          {activeTab === 'description' ? (
            <Animated.View entering={FadeInDown.delay(100)}>
              <Text className="text-white text-[17px] font-bold font-poppins-bold leading-[100%] tracking-[-0.3px] mb-2">
                {bike.name}
              </Text>
              <Text className="text-[#ffffff99] text-[15px] leading-[100%] mb-4 font-poppins">
                {bike.description}
              </Text>
              <Text className="text-white text-[17px] font-bold font-poppins-bold leading-[100%] tracking-[-0.3px] mb-2">Features:</Text>
              {bike.features.map((feature, index) => (
                <View key={index} className="flex-row items-center mb-2">
                  <View className="w-1 h-1 bg-primary-500 rounded-full mr-3" />
                  <Text className="text-[#ffffff99] flex-1 font-poppins">{feature}</Text>
                </View>
              ))}
            </Animated.View>
          ) : (
            <Animated.View entering={FadeInDown.delay(100)}>
              <View className="p-4">
                {Object.entries(bike.specifications).map(([key, value], index) => (
                  <View key={key} className={`flex-row justify-between py-3 ${
                    index < Object.entries(bike.specifications).length - 1 ? 'border-b border-dark-700' : ''
                  }`}>
                    <Text className="text-[#ffffff99] text-[15px] leading-[100%] capitalize font-poppins-medium">{key}:</Text>
                    <Text className="text-white text-[15px] leading-[100%] font-medium font-poppins-medium">{value}</Text>
                  </View>
                ))}
              </View>
              
              {/* FREE DATA Section - Weather API */}
              <View className="mt-6 bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-4">
                <Text className="text-white text-[17px] font-bold font-poppins-bold leading-[100%] tracking-[-0.3px] mb-2">FREE DATA</Text>
                <Text className="text-[#ffffff99] text-[15px] leading-[100%] mb-2 font-poppins-medium">
                  Perfect cycling weather today! Check the weather conditions for your next ride.
                </Text>
                <WeatherWidget />
              </View>
            </Animated.View>
          )}
        </Animated.View>
      </ScrollView>

      {/* Add to Cart Button */}
      <AddToCartButton bike={bike} />
    </View>
  );
}
