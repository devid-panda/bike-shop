import { IconSymbol } from '@/components/ui/icon-symbol';
import React from 'react';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import Animated, { FadeInDown, FadeInUp } from 'react-native-reanimated';
import { SafeAreaView } from 'react-native-safe-area-context';

const menuItems = [
  { id: '1', title: 'My Orders', icon: 'bag', subtitle: 'Track your orders' },
  { id: '2', title: 'Wishlist', icon: 'heart', subtitle: 'Your favorite bikes' },
  { id: '3', title: 'Payment Methods', icon: 'creditcard', subtitle: 'Manage payments' },
  { id: '4', title: 'Shipping Address', icon: 'location', subtitle: 'Delivery locations' },
  { id: '5', title: 'Notifications', icon: 'bell', subtitle: 'App preferences' },
  { id: '6', title: 'Help & Support', icon: 'questionmark.circle', subtitle: 'Get assistance' },
  { id: '7', title: 'About', icon: 'info.circle', subtitle: 'App information' },
];

export default function ProfileScreen() {
  return (
    <SafeAreaView className="flex-1 bg-dark-900">
      <ScrollView className="flex-1" showsVerticalScrollIndicator={false}>
        {/* Header */}
        <Animated.View 
          entering={FadeInUp.delay(100)}
          className="px-6 py-4"
        >
          <Text className="text-white text-2xl font-bold mb-6">Profile</Text>
          
          {/* User Info */}
          <View className="bg-dark-800 rounded-2xl p-6 flex-row items-center mb-6">
            <View className="w-16 h-16 bg-primary-500 rounded-2xl items-center justify-center mr-4">
              <IconSymbol name="person.fill" size={28} color="white" />
            </View>
            
            <View className="flex-1">
              <Text className="text-white text-lg font-semibold">John Doe</Text>
              <Text className="text-dark-400">john.doe@example.com</Text>
              <Text className="text-primary-400 text-sm mt-1">Premium Member</Text>
            </View>
            
            <TouchableOpacity className="w-10 h-10 bg-dark-700 rounded-xl items-center justify-center">
              <IconSymbol name="pencil" size={16} color="white" />
            </TouchableOpacity>
          </View>
        </Animated.View>

        {/* Menu Items */}
        <View className="px-6">
          {menuItems.map((item, index) => (
            <Animated.View
              key={item.id}
              entering={FadeInDown.delay(200 + index * 50)}
              className="mb-3"
            >
              <TouchableOpacity className="bg-dark-800 rounded-2xl p-4 flex-row items-center">
                <View className="w-12 h-12 bg-dark-700 rounded-xl items-center justify-center mr-4">
                  <IconSymbol name={item.icon as any} size={20} color="#0091F5" />
                </View>
                
                <View className="flex-1">
                  <Text className="text-white font-semibold mb-1">{item.title}</Text>
                  <Text className="text-dark-400 text-sm">{item.subtitle}</Text>
                </View>
                
                <IconSymbol name="chevron.right" size={16} color="#64748B" />
              </TouchableOpacity>
            </Animated.View>
          ))}
        </View>

        {/* Logout Button */}
        <Animated.View 
          entering={FadeInDown.delay(800)}
          className="px-6 py-6 mb-12"
        >
          <TouchableOpacity className="bg-red-500/20 border border-red-500 rounded-2xl py-4 items-center">
            <Text className="text-red-400 font-semibold">Sign Out</Text>
          </TouchableOpacity>
        </Animated.View>
      </ScrollView>
    </SafeAreaView>
  );
}

