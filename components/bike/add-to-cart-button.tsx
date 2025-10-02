'use client';

import { useCart } from '@/context/cart-context';
import { Bike } from '@/types/bike';
import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { Alert, Text, View } from 'react-native';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';
import Button from '../ui/button';

interface AddToCartButtonProps {
  bike: Bike;
}

export default function AddToCartButton({ bike }: AddToCartButtonProps) {
  // Animation values
  const addToCartScale = useSharedValue(1);
  const { addToCart, items } = useCart();
  
  // Check if bike is already in cart
  const isInCart = items.some(item => item.bike.id === bike.id);

  const addToCartAnimatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ scale: addToCartScale.value }],
    };
  });

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

  return (
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
  );
}