import { IconSymbol } from '@/components/ui/icon-symbol';
import { useCart } from '@/context/cart-context';
import React from 'react';
import { Text, View } from 'react-native';

interface CartTabIconProps {
  color: string;
  size?: number;
}

export function CartTabIcon({ color, size = 24 }: CartTabIconProps) {
  const { getTotalItems } = useCart();
  const itemCount = getTotalItems();

  return (
    <View className="relative">
      <IconSymbol name="cart" size={size} color={color} />
      {itemCount > 0 && (
        <View className="absolute -top-1 -right-1 bg-red-500 rounded-full min-w-[18px] h-[18px] items-center justify-center">
          <Text className="text-white text-xs font-bold">
            {itemCount > 99 ? '99+' : itemCount}
          </Text>
        </View>
      )}
    </View>
  );
}

