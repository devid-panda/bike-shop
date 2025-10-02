import BackgroundSvg from '@/components/background-svg';
import { BikeCard } from '@/components/bike-card';
import { BikePreview } from '@/components/bike-preview';
import Button from '@/components/ui/button';
import CategoryButton from '@/components/ui/category-button';
import { IconSymbol } from '@/components/ui/icon-symbol';
import { bikes } from '@/data/bikes';
import { IconBicycle, IconHelmet, IconMountain2, IconRoad } from '@/data/images';
import { useResponsive } from '@/hooks/use-responsive';
import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import Animated, { FadeInUp } from 'react-native-reanimated';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function HomeScreen() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [isSearchVisible, setIsSearchVisible] = useState(false);
  const { isTablet } = useResponsive();

  const categories = ['All', 'Bike', 'Road', 'Mountain', 'Helmet'];
  
  const filteredBikes = bikes.filter(bike => {
    const matchesSearch = bike.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         bike.brand.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || 
                           bike.category.toLowerCase() === selectedCategory.toLowerCase();
    return matchesSearch && matchesCategory;
  });

  const featuredBike = bikes[0]; // PEUGEOT - LR01

  return (
    <SafeAreaView className="flex-1 bg-dark-900">
      <BackgroundSvg className="top-[105px]" />
      <ScrollView className="flex-1" showsVerticalScrollIndicator={false}>
        {/* Header */}
        <Animated.View 
          entering={FadeInUp.delay(100)}
          className="px-5 py-4"
        >
          <View className="flex-row items-center justify-between">
            <Text className="text-white text-xl font-bold font-poppins-bold">Choose Your Bike</Text>
            <Button className="w-11 !px-0" onPress={() => setIsSearchVisible(!isSearchVisible)}>
              <IconSymbol name="magnifyingglass" size={20} color="white" />
            </Button>
          </View>

          {/* Search Bar */}
          {isSearchVisible && (
            <View className="bg-dark-800 rounded-2xl px-4 py-3 flex-row items-center mt-6">
              <IconSymbol name="magnifyingglass" size={20} color="#64748B" />
              <TextInput
                className="flex-1 ml-3 text-white text-base font-poppins"
                placeholder="Search bikes..."
                placeholderTextColor="#64748B"
                value={searchQuery}
                onChangeText={setSearchQuery}
              />
            </View>
          )}
        </Animated.View>

        {/* Featured Bike Card */}
        <View className="pt-[30px] px-4 pb-4 ">
          <BikePreview bike={featuredBike} />
        </View>

        <Animated.View
          entering={FadeInUp.delay(100)}
          className="px-6 pt-2 pb-6"
        >
          {/* Categories */}
          <View className="flex justify-between align-center flex-row w-full -skew-y-6">
            {categories.map((category) => (
              <CategoryButton
                key={category}
                className="skew-y-6"
                onPress={() => setSelectedCategory(category)}
                active={selectedCategory === category}
              >
                {category === 'All' && (
                  <Text className={`text-sm font-medium font-poppins-medium ${
                    selectedCategory === category ? 'text-white' : 'text-[#ffffff99]'
                  }`}>
                    {category}
                  </Text>
                )}
                {category === 'Bike' && (
                  <IconBicycle color={selectedCategory === category ? 'white' : '#ffffff99'} />
                )}
                {category === 'Road' && (
                  <IconRoad name='road.circle' size={36} color={selectedCategory === category ? 'white' : '#ffffff99'} />
                )}
                {category === 'Mountain' && (
                  <IconMountain2 name='mountain.2' size={36} color={selectedCategory === category ? 'white' : '#ffffff99'} />
                )}
                {category === 'Helmet' && (
                  <IconHelmet name='helmet.fill' size={36} color={selectedCategory === category ? 'white' : '#ffffff99'} />
                )}
              </CategoryButton>
            ))}
          </View>
        </Animated.View>

        {/* Bikes Grid */}
        <View className="px-6 pb-6 pt-4 mb-12 -skew-y-6">
          <View className={`flex-row flex-wrap ${isTablet ? 'justify-start' : 'justify-between'}`}>
            {filteredBikes.map((bike, index) => (
              <View 
                key={bike.id}
                className={isTablet ? 'w-1/3 pr-3' : 'w-[48%]'}
              >
                <BikeCard bike={bike} index={index} isDark={index === 0} />
              </View>
            ))}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    padding: 8,
  },
});
