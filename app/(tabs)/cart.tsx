import CartItem from '@/components/cart-item';
import CheckoutButton from '@/components/checkout-button';
import CodeInput from '@/components/code-input';
import OrderSummary from '@/components/order-summary';
import PageHeader from '@/components/page-header';
import { useCart } from '@/context/cart-context';
import React from 'react';
import { ScrollView, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function CartScreen() {
  const { items: cartItems } = useCart();

  return (
    <SafeAreaView className="flex-1 bg-dark-900">
      {/* Header */}
      <PageHeader title="My Shopping Cart" />
      <ScrollView className="flex-1" showsVerticalScrollIndicator={false}>
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
      <CheckoutButton />
    </SafeAreaView>
  );
}
