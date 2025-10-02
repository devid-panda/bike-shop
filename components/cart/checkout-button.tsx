import { IconSymbol } from '@/components/ui/icon-symbol';
import React, { useState } from 'react';
import { Text, View } from 'react-native';
import { Gesture, GestureDetector } from 'react-native-gesture-handler';
import Animated, {
    interpolate,
    runOnJS,
    useAnimatedStyle,
    useSharedValue,
    withSpring,
    withTiming
} from 'react-native-reanimated';
import Button from '../ui/button';

export default function CheckoutButton() {
  const [isCompleted, setIsCompleted] = useState(false);
  const slideProgress = useSharedValue(0);
  const translateX = useSharedValue(0);
  const buttonWidth = 174; // Button width from className
  const iconWidth = 44; // Icon width (w-11 = 44px)
  const maxSwipeDistance = buttonWidth - iconWidth; // Max distance to swipe (right edge reaches end)

  const handleCompletion = () => {
    try {
      setIsCompleted(true);
    } catch (error) {
      console.log('Error setting completion state:', error);
    }
  };

  const panGesture = Gesture.Pan()
    .enabled(!isCompleted)
    .onUpdate((event: any) => {
      if (isCompleted) return;
      
      // Constrain the swipe to the button area
      const newTranslateX = Math.max(0, Math.min(event.translationX, maxSwipeDistance));
      translateX.value = newTranslateX;
      
      // Update slide progress based on swipe distance
      slideProgress.value = newTranslateX / maxSwipeDistance;
    })
    .onEnd((event: any) => {
      if (isCompleted) return;
      
      // If the right edge of the chevron reaches the end, complete the checkout
      if (event.translationX >= maxSwipeDistance) {
        // Complete the animation - chevron reaches the end
        translateX.value = withTiming(maxSwipeDistance, { duration: 200 });
        slideProgress.value = withTiming(1, { duration: 200 }, () => {
          runOnJS(handleCompletion)();
        });
      } else {
        // Snap back to start
        translateX.value = withSpring(0);
        slideProgress.value = withSpring(0);
      }
    });

  const iconAnimatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: translateX.value }],
    };
  });

  const checkoutTextAnimatedStyle = useAnimatedStyle(() => {
    const opacity = interpolate(
      slideProgress.value,
      [0, 1],
      [0.6, 0] // Decreases from 60% to 0%
    );
    
    return {
      opacity,
    };
  });

  const doneTextAnimatedStyle = useAnimatedStyle(() => {
    const opacity = interpolate(
      slideProgress.value,
      [0, 1],
      [0, 0.6] // Increases from 0% to 60%
    );
    
    return {
      opacity,
    };
  });

  return (
    <View className="px-6 flex-row justify-center">
      <View
        className="w-[174px] h-[44px] bg-[#242C3B] rounded-[10px] overflow-hidden relative"
      >
        {/* Dark gray text area */}
        <View className="px-6 justify-center flex-row items-center flex-1 relative">
          {/* Checkout text */}
          <Animated.View 
            style={[checkoutTextAnimatedStyle]}
            className="absolute inset-0 justify-center items-center"
          >
            <Text 
              className="text-[#ffffff] text-[15px] font-medium font-poppins-medium text-center bg-transparent"
              style={{ paddingLeft: 44 }}
            >
              Checkout
            </Text>
          </Animated.View>
          
          {/* Done text */}
          <Animated.View 
            style={[doneTextAnimatedStyle, { paddingLeft: 22 }]}
            className="absolute left-0 top-0 bottom-0 justify-center items-start"
          >
            <Text 
              className="text-[#ffffff] text-[15px] font-medium font-poppins-medium bg-transparent"
            >
              Done!
            </Text>
          </Animated.View>
        </View>
        
        {/* Blue gradient icon that slides - only this is swipeable */}
        <GestureDetector gesture={panGesture}>
          <Animated.View 
            style={[iconAnimatedStyle]}
            className="absolute left-0 top-0"
          >
            <Button className="w-11 h-11">
              <IconSymbol name="chevron.right" size={20} color="white" />
            </Button>
          </Animated.View>
        </GestureDetector>
      </View>
    </View>
  );
}