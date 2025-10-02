'use client';

import { Bike } from '@/types/bike';
import { Image } from 'expo-image';
import { LinearGradient } from 'expo-linear-gradient';
import { Link } from 'expo-router';
import React, { useState } from 'react';
import { Dimensions, Text, TouchableOpacity, View } from 'react-native';
import Animated, { FadeInDown } from 'react-native-reanimated';
import { IconSymbol } from '../ui/icon-symbol';

const { width } = Dimensions.get('window');

interface BikeCardProps {
  bike: Bike;
  index: number;
  isLarge?: boolean;
  isDark?: boolean;
}

export function BikeCard({ bike, index, isLarge = false, isDark = false }: BikeCardProps) {
  const [isFavorite, setIsFavorite] = useState(false);
  const cardWidth = isLarge ? width - 48 : (width - 72) / 2;
  
  return (
    <Animated.View
      entering={FadeInDown.delay(300 + index * 100)}
      style={{ width: cardWidth }}
      className="mb-4"
    >
      <Link href={`/product/${bike.id}`} asChild>
        <TouchableOpacity className="rounded-[20px] px-4 pb-8 pt-2 relative">
          <View className="absolute inset-0 rounded-[20px] opacity-50">
            <LinearGradient
              colors={['rgba(255, 255, 255, 0.2)', 'rgba(0, 0, 0, 0.2)']}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
              style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, borderRadius: 10 }}
              className="absolute inset-0 rounded-[20px]"
            />
            <LinearGradient
              colors={isDark ? ['rgba(54, 62, 81, 0.6)', 'rgba(25, 30, 38, 0.6)'] : ['#353F5499', '#22283499']}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
              style={{ position: 'absolute', top: 2, left: 2, right: 2, bottom: 2, borderRadius: 8 }}
              className="absolute inset-[2px] rounded-[20px]"
            />
          </View>
          <View className="skew-y-6">
            <View className={`aspect-[6/5] w-full rounded-xl`}>
              <Image
                source={bike.images[0]}
                style={{
                  position: 'absolute',
                  top: 32,
                  left: 0,
                  right: 0,
                  bottom: 0,
                }}
                contentFit="cover"
              />
            </View>
            <Text className="text-white opacity-[0.6] text-[13px] font-medium leading-[100%] font-poppins-medium tracking-[-0.3px] mt-8 mb-1">{bike.brand}</Text>
            <Text className="text-white font-poppins-bold text-[15px] leading-[100%] tracking-[-0.3px] mb-1" numberOfLines={1}>
              {bike.name}
            </Text>
            <Text className="text-white opacity-[0.6] text-[13px] font-medium leading-[100%] font-poppins-medium leading-[100%]">
              $ {bike.price.toLocaleString()}
            </Text>
            <TouchableOpacity className="absolute right-0 top-0 w-6 h-6 items-center justify-center" onPress={() => setIsFavorite(!isFavorite)}>
              {isFavorite ? (
                <Image
                  source={require('../../assets/images/icon-heart.png')}
                  style={{ width: 20, height: 20 }}
                  resizeMode="contain"
                />
              ) : (
                <IconSymbol name="heart" size={20} color="white" />
              )}
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
      </Link>
    </Animated.View>
  );
}

