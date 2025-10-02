'use client';

import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';

export default function WeatherWidget() {
  const [weather, setWeather] = useState<any>(null);

  useEffect(() => {
    // Using OpenWeatherMap API (free tier)
    const fetchWeather = async () => {
      try {
        // Using a demo API call - in production, you'd use your own API key
        const response = await fetch(
          'https://api.openweathermap.org/data/2.5/weather?q=San Francisco&appid=demo&units=metric'
        );
        
        // For demo purposes, we'll use mock data since we don't have a real API key
        const mockWeather = {
          main: { temp: 22, humidity: 65 },
          weather: [{ main: 'Clear', description: 'clear sky' }],
          wind: { speed: 3.5 }
        };
        
        setWeather(mockWeather);
      } catch (error) {
        // Fallback to mock data
        setWeather({
          main: { temp: 22, humidity: 65 },
          weather: [{ main: 'Clear', description: 'clear sky' }],
          wind: { speed: 3.5 }
        });
      }
    };

    fetchWeather();
  }, []);

  if (!weather) {
    return (
      <View className="mt-3 p-3 bg-blue-500/20 rounded-xl">
        <Text className="text-white text-[15px] leading-[100%] font-poppins-medium">Loading weather...</Text>
      </View>
    );
  }

  return (
    <View className="mt-3 p-3 bg-blue-500/20 rounded-xl">
      <View className="flex-row items-center justify-between">
        <View>
          <Text className="text-white text-[17px] leading-[100%] font-semibold font-poppins-semibold mb-1">{weather.main.temp}°C</Text>
          <Text className="text-white text-[15px] leading-[100%] font-poppins-medium capitalize">{weather.weather[0].description}</Text>
        </View>
        <View className="items-end">
          <Text className="text-[#ffffff99] text-[15px] leading-[100%] font-poppins-medium mb-1">Wind: {weather.wind.speed} m/s</Text>
          <Text className="text-[#ffffff99] text-[15px] leading-[100%] font-poppins-medium">Humidity: {weather.main.humidity}%</Text>
        </View>
      </View>
    </View>
  );
}