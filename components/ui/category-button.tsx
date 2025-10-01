import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { TouchableOpacity, TouchableOpacityProps, View } from 'react-native';
import { cn } from '../../lib/utils';

interface CategoryButtonProps extends TouchableOpacityProps {
  children: React.ReactNode;
  className?: string;
  active?: boolean;
}

export function CategoryButton({
  children,
  className,
  active = false,
  ...props
}: CategoryButtonProps) {
  const baseStyles = 'w-[50px] h-[50px] rounded-[10px] flex items-center justify-center border-0 overflow-hidden shadow-custom';

  return (
    <TouchableOpacity
      className={cn(
        baseStyles,
        className,
      )}
      {...props}
      >
      <LinearGradient
          colors={active ? ['rgba(255, 255, 255, 0.1)', 'rgba(0, 0, 0, 0.1)'] : ['rgba(255, 255, 255, 0.2)', 'rgba(0, 0, 0, 0.2)']}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, borderRadius: 10 }}
          className="absolute inset-0 rounded-lg"
      />
      <LinearGradient
          colors={active ? ['#34C8E8', '#4E4AF2'] : ['#353F54', '#222834']}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={{ position: 'absolute', top: 1, left: 1, right: 1, bottom: 1, borderRadius: 8 }}
          className="absolute inset-[2px] rounded-lg"
      />
      <View>
        {children}
      </View>
    </TouchableOpacity>
  );
}

export default CategoryButton;
