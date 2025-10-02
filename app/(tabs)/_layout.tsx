import { Tabs } from 'expo-router';
import React from 'react';
import { StyleSheet, View } from 'react-native';

import { HapticTab } from '@/components/haptic-tab';
import Button from '@/components/ui/button';
import { IconSymbol } from '@/components/ui/icon-symbol';
import { LinearGradient } from 'expo-linear-gradient';

export default function TabLayout() {
  const renderTabBarIcon = (color: string, focused: boolean, name: any, size: number) => {
    if (focused) {
      return (
        <View className="relative !mb-2 !-mt-4">
          <Button className="w-[60px] h-[48px] !px-0" slanted>
            <IconSymbol size={size} name={name} color={color} />
          </Button>
        </View>
      );
    }
    return (
      <IconSymbol size={size} name={name} color={color} />
    );
  };

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: '#ffffff',
        tabBarInactiveTintColor: '#ffffff99',
        headerShown: false,
        tabBarButton: HapticTab,
        tabBarBackground: () => (
          <View className="overflow-hidden h-[100px]">
            <View style={{ width: '200%', height: 100 }} className="bg-transparent -skew-y-3">
              {/* Border gradient layer */}
              <LinearGradient
                colors={['rgba(255, 255, 255, 0.2)', 'rgba(0, 0, 0, 0)']}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0.35 }}
                style={[
                  StyleSheet.absoluteFill,
                  { height: 2, top: 0 }
                ]}
              />
               {/* Main background gradient */}
              <LinearGradient
                colors={['#363E51', '#181C24']}
                start={{ x: 0.5, y: 0 }}
                end={{ x: 0.5, y: 1 }}
                style={[
                  StyleSheet.absoluteFill,
                  { top: 2 }
                ]}
              />
            </View>
          </View>
        ),
        tabBarStyle: {
          paddingBottom: 34,
          paddingTop: 20,
          height: 100,
          position: 'absolute',
          borderTopWidth: 0,
        },
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: '',
          tabBarIcon: ({ color, focused }) => renderTabBarIcon(color, focused, 'bicycle', 28),
        }}
      />
      <Tabs.Screen
        name="location"
        options={{
          title: '',
          tabBarIcon: ({ color, focused }) => renderTabBarIcon(color, focused, 'map.fill', 24),
        }}
      />
      <Tabs.Screen
        name="cart"
        options={{
          title: '',
          tabBarIcon: ({ color, focused }) => renderTabBarIcon(color, focused, 'cart.fill', 24),
          tabBarStyle: { display: 'none' },
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: '',
          tabBarIcon: ({ color, focused }) => renderTabBarIcon(color, focused, 'person.fill', 20),
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          title: '',
          tabBarIcon: ({ color, focused }) => renderTabBarIcon(color, focused, 'document.fill', 20),
        }}
      />
    </Tabs>
  );
}
