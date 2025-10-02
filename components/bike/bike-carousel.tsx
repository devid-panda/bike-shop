import { Image } from 'expo-image';
import React, { useRef, useState } from 'react';
import { Dimensions, NativeScrollEvent, NativeSyntheticEvent, ScrollView, View } from 'react-native';

const { width: SCREEN_WIDTH } = Dimensions.get('window');

interface BikeCarouselProps {
  images: string[];
  height?: number;
}

export function BikeCarousel({ images, height = 208 }: BikeCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollViewRef = useRef<ScrollView>(null);

  const handleScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const scrollPosition = event.nativeEvent.contentOffset.x;
    const index = Math.round(scrollPosition / SCREEN_WIDTH);
    setActiveIndex(index);
  };

  return (
    <View>
      {/* Image Carousel */}
      <ScrollView
        ref={scrollViewRef}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={handleScroll}
        scrollEventThrottle={16}
        decelerationRate="fast"
      >
        {images.map((image, index) => (
          <View
            key={index}
            style={{ width: SCREEN_WIDTH }}
            className="items-center justify-center"
          >
            <Image
              source={image}
              style={{ width: 300, height }}
              contentFit="contain"
            />
          </View>
        ))}
      </ScrollView>

      {/* Dot Indicators */}
      <View className="flex-row justify-center items-center py-2 gap-2">
        {images.map((_, index) => (
          <View
            key={index}
            className={`h-[6px] rounded-full transition-all w-[6px] bg-white ${
              index !== activeIndex && 'opacity-20'
            }`}
          />
        ))}
      </View>
    </View>
  );
}

