
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
      className="px-6 py-4"
    >
      <View className="">
      <View className="flex-row justify-between mb-2">
        <Text className="text-[#ffffffde] font-medium text-[15px] leading-[100%] tracking-[-0.3px] font-poppins">Subtotal:</Text>
          <Text className="text-[#ffffff99] font-normal text-[15px] leading-[100%] tracking-[-0.3px] font-poppins">${subtotal.toFixed(2)}</Text>
        </View>
        
        <View className="flex-row justify-between mb-2">
          <Text className="text-[#ffffffde] font-medium text-[15px] leading-[100%] tracking-[-0.3px] font-poppins">Delivery Fee:</Text>
          <Text className="text-[#ffffff99] font-normal text-[15px] leading-[100%] tracking-[-0.3px] font-poppins">
            {`$${deliveryFee}`}
          </Text>
        </View>
        
        <View className="flex-row justify-between mb-4">
          <Text className="text-[#ffffffde] font-medium text-[15px] leading-[100%] tracking-[-0.3px] font-poppins">Discount:</Text>
          <Text className="text-[#ffffff99] font-normal text-[15px] leading-[100%] tracking-[-0.3px] font-poppins">
            {((discount / subtotal) * 100).toFixed(0)}%
          </Text>
        </View>
        
        <View className="flex-row justify-between">
          <Text className="text-[#ffffffde] font-medium text-[15px] leading-[100%] tracking-[-0.3px] font-poppins">Total:</Text>
          <Text className="text-[#38B8EA] text-[17px] font-bold leading-[100%] tracking-[-0.3px] font-poppins">
            ${total.toLocaleString()}
          </Text>
        </View>
      </View>
    </Animated.View>
  );
}