'use client';

import { useCart } from '@/context/cart-context';
import { Bike } from '@/types/bike';
import { LinearGradient } from 'expo-linear-gradient';
import React, { useEffect, useState } from 'react';
import { Alert, ScrollView, Text, View } from 'react-native';
import Animated, {
  FadeInDown,
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming
} from 'react-native-reanimated';
import Button from '../ui/button';
import CategoryButton from './category-button';

interface BikeDetailsProps {
  bike: Bike;
}

export default function BikeDetails({ bike }: BikeDetailsProps) {
  const [activeTab, setActiveTab] = useState<'description' | 'specification'>('description');

  // Animation values
  const tabIndicatorPosition = useSharedValue(0);
  const addToCartScale = useSharedValue(1);
  const slidePosition = useSharedValue(0);
  const { addToCart, items } = useCart();
  
  // Check if bike is already in cart
  const isInCart = items.some(item => item.bike.id === bike.id);

  const addToCartAnimatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ scale: addToCartScale.value }],
    };
  });

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

  const handleAddToCart = () => {
    if (!bike || isInCart) return;
    
    addToCart(bike);
    Alert.alert('Added to Cart', `${bike.name} has been added to your cart!`);
  };

  const handlePressIn = () => {
    if (!bike || isInCart) return;
    addToCartScale.value = withSpring(0.8125);
  };

  const handlePressOut = () => {
    if (!bike || isInCart) return;
    addToCartScale.value = withSpring(1);
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
      <View className="px-9 rounded-[50px] h-[104px] items-center justify-between bg-[#262E3D] relative flex-row">
        <LinearGradient
          colors={['rgba(255, 255, 255, 0.2)', 'rgba(0, 0, 0, 0.2)']}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, borderRadius: 50 }}
          className="absolute inset-0 rounded-[50px]"
        />
        <LinearGradient
          colors={['#262E3D', '#262E3D']}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={{ position: 'absolute', top: 1, left: 1, right: 1, bottom: 1, borderRadius: 50 }}
          className="absolute inset-0 rounded-[50px]"
        />
        <Text className="text-[#3D9CEA] text-2xl font-poppins font-normal leading-[100%] tracking-[-0.3px]">
          $ {bike.price.toLocaleString()}
        </Text>
        <Animated.View style={[addToCartAnimatedStyle]}>
          <Button 
            activeOpacity={1}
            className={`w-[160px] h-[48px] ${isInCart ? 'opacity-50' : ''}`} 
            onPress={handleAddToCart}
            onPressIn={handlePressIn}
            onPressOut={handlePressOut}
            disabled={isInCart}
          >
            <Text className="text-white text-[15px] font-medium font-poppins-medium leading-[100%] tracking-[-0.3px]">
              {isInCart ? 'Added to Cart' : 'Add to Cart'}
            </Text>
          </Button>
        </Animated.View>
      </View>
    </View>
  );
}

// Weather Widget Component for FREE DATA section
function WeatherWidget() {
  const [weather, setWeather] = useState<any>(null);

  useEffect(() => {
    // Using OpenWeatherMap API (free tier)
    const fetchWeather = async () => {
      try {
        // Using a demo API call - in production, you'd use your own API key
        const response = await fetch(
          'https://api.openweathermap.org/data/2.5/weather?q=San Francisco&appid=demo&units=metric'
        );
        
        // For demo purposes, we'll use mock data since we don't have a real API key
        const mockWeather = {
          main: { temp: 22, humidity: 65 },
          weather: [{ main: 'Clear', description: 'clear sky' }],
          wind: { speed: 3.5 }
        };
        
        setWeather(mockWeather);
      } catch (error) {
        // Fallback to mock data
        setWeather({
          main: { temp: 22, humidity: 65 },
          weather: [{ main: 'Clear', description: 'clear sky' }],
          wind: { speed: 3.5 }
        });
      }
    };

    fetchWeather();
  }, []);

  if (!weather) {
    return (
      <View className="mt-3 p-3 bg-blue-500/20 rounded-xl">
        <Text className="text-white text-[15px] leading-[100%] font-poppins-medium">Loading weather...</Text>
      </View>
    );
  }

  return (
    <View className="mt-3 p-3 bg-blue-500/20 rounded-xl">
      <View className="flex-row items-center justify-between">
        <View>
          <Text className="text-white text-[17px] leading-[100%] font-semibold font-poppins-semibold mb-1">{weather.main.temp}°C</Text>
          <Text className="text-white text-[15px] leading-[100%] font-poppins-medium capitalize">{weather.weather[0].description}</Text>
        </View>
        <View className="items-end">
          <Text className="text-[#ffffff99] text-[15px] leading-[100%] font-poppins-medium mb-1">Wind: {weather.wind.speed} m/s</Text>
          <Text className="text-[#ffffff99] text-[15px] leading-[100%] font-poppins-medium">Humidity: {weather.main.humidity}%</Text>
        </View>
      </View>
    </View>
  );
}
