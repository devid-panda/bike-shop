import { useCart } from '@/context/cart-context';
import { CartItem as CartItemType } from '@/types/bike';
import React from 'react';
import { Alert, Text, View } from 'react-native';
import Animated, { FadeInDown } from 'react-native-reanimated';
import CartItemImage from './cart-item-image';
import CartMinusButton from './cart-minus-button';
import CartPlusButton from './cart-plus-button';

interface CartItemProps {
  item: CartItemType;
  index: number;
}

export default function CartItem({ item, index }: CartItemProps) {
  const { removeFromCart, updateQuantity } = useCart();

  const decreaseQuantity = () => {
    if (item.quantity > 1) {
      updateQuantity(item.bike.id, Math.max(1, item.quantity - 1));
    } else {
      Alert.alert(
        'Remove Item',
        'Are you sure you want to remove this item from your cart?',
        [
          { text: 'Cancel', style: 'cancel' },
          { text: 'Remove', style: 'destructive', onPress: () => removeFromCart(item.bike.id) }
        ]
      );
    }
  };

  const increaseQuantity = () => {
    updateQuantity(item.bike.id, item.quantity + 1);
  };

  return (
    <Animated.View
      key={item.bike.id}
      entering={FadeInDown.delay(200 + index * 100)}
      className="px-5 py-4 flex-row border-b-[0.5px] border-b-[#ffffff7f] border-solid gap-1"
    >
      <CartItemImage item={item} />
      <View className="flex-1 justify-between py-1.5">
        <Text className="text-[#ffffffde] font-bold text-[15px] leading-[100%] tracking-[-0.3px] font-poppins-bold flex-1" numberOfLines={1}>
          {item.bike.name}
        </Text>
        <View className="justify-between flex-row items-center">
          <Text className="text-[#3C9EEA] font-normal text-[13px] leading-[100%] tracking-[-0.3px] font-poppins">
            ${item.bike.price.toLocaleString()}
          </Text>
          <View className="flex-row items-center gap-0">
            <CartMinusButton onPress={decreaseQuantity} />
            <Text className="w-6 text-center items-center justify-center items-center text-[#ffffff99] font-semibold text-[13px] leading-[100%] tracking-[-0.3px] font-poppins-semibold">{item.quantity}</Text>
            <CartPlusButton onPress={increaseQuantity} />
          </View>
        </View>
      </View>
    </Animated.View>
  );
}