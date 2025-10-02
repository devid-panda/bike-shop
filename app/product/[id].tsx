import BackgroundSvg from '@/components/background-svg';
import BikeDetails from '@/components/bike-details';
import PageHeader from '@/components/page-header';
import { BikeCarousel } from '@/components/ui/bike-carousel';
import { bikes } from '@/data/bikes';
import { Bike } from '@/types/bike';
import { useLocalSearchParams } from 'expo-router';
import React, { useEffect, useState } from 'react';
import { Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function ProductDetailScreen() {
  const { id } = useLocalSearchParams();
  const [bike, setBike] = useState<Bike | null>(null);
  
  useEffect(() => {
    const foundBike = bikes.find(b => b.id === id);
    setBike(foundBike || null);
  }, [id]);

  if (!bike) {
    return (
      <SafeAreaView className="flex-1 bg-dark-900 items-center justify-center">
        <Text className="text-white text-lg font-poppins-bold font-bold">Bike not found</Text>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView className="flex-1 bg-dark-900 relative" edges={['top']}> 
      <BackgroundSvg className="top-[-105px]" />
      {/* Header */}
      <PageHeader title={bike.name} />

      {/* Bike Image */}
      <BikeCarousel images={bike.images} />

      <BikeDetails bike={bike} />
    </SafeAreaView>
  );
}
