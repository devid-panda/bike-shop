
import { useCart } from '@/context/cart-context';
import React from 'react';
import { Text, View } from 'react-native';
import Animated, { SlideInRight } from 'react-native-reanimated';

export default function OrderSummary() {
  const { getTotalPrice } = useCart();

  const subtotal = getTotalPrice();
  const deliveryFee: number = 0; // Free shipping
  const discount = subtotal * 0.3; // 30% discount
  const total = subtotal - discount + deliveryFee;
  
  return (
    <Animated.View 
      entering={SlideInRight.delay(500)}
      className="mx-6 mt-6 mb-8"
    >
      <View className="bg-dark-800 rounded-2xl p-6">
        <Text className="text-white text-lg font-bold mb-4">Order Summary</Text>
        
        <View className="space-y-3">
          <View className="flex-row justify-between">
            <Text className="text-dark-400">Subtotal:</Text>
            <Text className="text-white font-medium">${subtotal.toFixed(2)}</Text>
          </View>
          
          <View className="flex-row justify-between">
            <Text className="text-dark-400">Delivery Fee:</Text>
            <Text className="text-green-400 font-medium">
              {deliveryFee === 0 ? 'FREE' : `$${deliveryFee.toFixed(2)}`}
            </Text>
          </View>
          
          <View className="flex-row justify-between">
            <Text className="text-dark-400">Discount:</Text>
            <Text className="text-green-400 font-medium">-${discount.toFixed(2)}</Text>
          </View>
          
          <View className="border-t border-dark-700 pt-3">
            <View className="flex-row justify-between">
              <Text className="text-white text-lg font-bold">Total:</Text>
              <Text className="text-primary-400 text-xl font-bold">
                ${total.toFixed(2)}
              </Text>
            </View>
          </View>
        </View>
      </View>
    </Animated.View>
  );
}