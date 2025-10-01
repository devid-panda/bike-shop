import CartItem from '@/components/cart-item';
import CodeInput from '@/components/code-input';
import OrderSummary from '@/components/order-summary';
import PageHeader from '@/components/page-header';
import { IconSymbol } from '@/components/ui/icon-symbol';
import { useCart } from '@/context/cart-context';
import React from 'react';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring
} from 'react-native-reanimated';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function CartScreen() {
  const { items: cartItems } = useCart();

  const checkoutScale = useSharedValue(1);

  const handleCheckout = () => {
    checkoutScale.value = withSpring(0.95, {}, () => {
      checkoutScale.value = withSpring(1);
    });
  };

  const checkoutAnimatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ scale: checkoutScale.value }],
    };
  });

  return (
    <SafeAreaView className="flex-1 bg-dark-900">
      <ScrollView className="flex-1" showsVerticalScrollIndicator={false}>
        {/* Header */}
        <PageHeader title="My Shopping Cart" />
        {/* Cart Items */}
        <View>
          {cartItems.map((item, index) => <CartItem key={item.bike.id} item={item} index={index} />)}
        </View>
        <Text className="py-6 text-[#ffffff99] font-normal text-[15px] leading-[100%] tracking-[-0.3px] font-poppins text-center">Your cart qualifies for free shipping</Text>
        {/* Promo Code */}
        <CodeInput />
        {/* Order Summary */}
        <OrderSummary />
      </ScrollView>
      {/* Checkout Button */}
      <Animated.View 
        style={[checkoutAnimatedStyle]}
        className="px-6 pb-6"
      >
        <TouchableOpacity
          onPress={handleCheckout}
          className="bg-primary-500 rounded-2xl py-4 flex-row items-center justify-center"
        >
          <Text className="text-white text-lg font-semibold mr-2">Checkout</Text>
          <IconSymbol name="arrow.right" size={20} color="white" />
        </TouchableOpacity>
      </Animated.View>
    </SafeAreaView>
  );
}
