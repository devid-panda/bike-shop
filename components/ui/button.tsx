import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { TouchableOpacity, TouchableOpacityProps, View } from 'react-native';
import { cn } from '../../lib/utils';

interface ButtonProps extends TouchableOpacityProps {
  children: React.ReactNode;
  variant?: 'default' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  textClassName?: string;
  slanted?: boolean;
}

export function Button({
  children,
  variant = 'default',
  size = 'md',
  className,
  textClassName,
  disabled,
  slanted = false,
  ...props
}: ButtonProps) {
  const baseStyles = 'rounded-xl items-center justify-center border-2 border-transparent overflow-hidden';
  
  const variants = {
    default: 'shadow-custom',
    outline: 'border-primary-500 bg-transparent',
    ghost: 'bg-transparent',
  };

  const sizes = {
    sm: 'h-8 px-3',
    md: 'h-11 px-6', // 44px height
    lg: 'h-12 px-8',
  };

  const ButtonContent = () => (
    <TouchableOpacity
      className={cn(
        baseStyles,
        variants[variant],
        sizes[size],
        disabled && 'opacity-50',
        className
      )}
      disabled={disabled}
      {...props}
    >
      {children}
    </TouchableOpacity>
  );

  if (variant === 'default') {
    return (
      <TouchableOpacity
        className={cn(
          'rounded-lg items-center justify-center overflow-hidden shadow-inset-2xl cursor-pointer',
          sizes[size],
          className,
          'px-0',
          disabled && 'opacity-50 cursor-not-allowed',
          slanted && '-skew-y-6'
        )}
        disabled={disabled}
        {...props}
      >
        <LinearGradient
          colors={['rgba(255, 255, 255, 0.1)', 'rgba(0, 0, 0, 0.1)']}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, borderRadius: 10 }}
          className="absolute inset-0 rounded-lg"
        />
        <LinearGradient
          colors={['#34C8E8', '#4E4AF2']}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={{ position: 'absolute', top: 2, left: 2, right: 2, bottom: 2, borderRadius: 8 }}
          className="absolute inset-[2px] rounded-lg"
        />
        <View className={cn(slanted && 'skew-y-6')}>
          {children}
        </View>
      </TouchableOpacity>
    );
  }

  return <ButtonContent />;
}

export default Button;
