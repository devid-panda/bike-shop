# Bike Shop - React Native App

A modern, responsive React Native mobile app for a bike shop built with Expo, TypeScript, and Tailwind CSS. This app features a pixel-perfect UI with smooth animations, gesture-based interactions, and a complete e-commerce experience.

## 📱 Screens

1. **Home Screen** (`app/(tabs)/index.tsx`)
   - Featured bike with discount badge
   - Search functionality
   - Category filters
   - Responsive bike grid

2. **Product Detail** (`app/product/[id].tsx`)
   - Large product image with gradient background
   - Animated tabs with smooth left/right slide transitions
   - Weather widget in FREE DATA section
   - Interactive Add to Cart button with shrink animation
   - Dynamic button states (Add to Cart → Added to Cart)

3. **Shopping Cart** (`app/(tabs)/cart.tsx`)
   - Cart items with quantity controls
   - Order summary with discounts
   - Promo code application
   - Swipeable checkout button with gesture interaction
   - Tab bar hidden for immersive experience

## 🛠 Tech Stack

- **Framework**: Expo React Native 54
- **Language**: TypeScript
- **Styling**: Tailwind CSS (NativeWind)
- **Animations**: React Native Reanimated 4
- **Gestures**: React Native Gesture Handler
- **Navigation**: Expo Router
- **State Management**: React Context API
- **Image Handling**: Expo Image
- **Fonts**: Poppins (Regular, Medium, SemiBold, Bold)
- **Icons**: SF Symbols (iOS) / Material Icons (Android)
- **Shadows**: React Native Neomorph Shadows

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd bike-shop
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

4. **Run on device/simulator**
   ```bash
   # iOS
   npm run ios
   
   # Android
   npm run android
   ```

## 📁 Project Structure

```
bike-shop/
├── app/                    # App screens and navigation
│   ├── (tabs)/            # Tab-based screens
│   │   ├── index.tsx      # Home screen
│   │   └── cart.tsx    # Shopping cart
│   ├── product/           # Product detail screens
│   │   └── [id].tsx       # Dynamic product page
│   └── _layout.tsx        # Root layout with gesture support
├── components/            # Reusable components
│   ├── ui/               # UI components
│   │   ├── button.tsx    # Custom button with press effects
│   │   └── category-button.tsx # Tab button component
│   ├── bike/             # Bike-related components
│   │   ├── bike-card.tsx # Product card component
│   │   ├── bike-details.tsx # Product detail with animations
│   │   └── bike-preview.tsx # Product preview
│   ├── cart/             # Cart-related components
│   │   ├── checkout-button.tsx # Swipeable checkout button
│   │   ├── cart-item.tsx # Individual cart item
│   │   └── order-summary.tsx # Order summary component
│   └── cart-tab-icon.tsx # Cart icon with badge
├── context/              # React Context providers
│   └── cart-context.tsx  # Shopping cart state management
├── data/                 # Static data
│   ├── bikes.ts          # Bike product data
│   └── images.tsx        # Image assets
├── hooks/                # Custom hooks
│   ├── use-responsive.ts # Responsive design hook
│   └── use-color-scheme.ts # Theme color management
├── types/                # TypeScript type definitions
│   └── bike.ts           # Bike and cart types
├── constants/            # App constants
│   ├── theme.ts          # Theme configuration
│   └── fonts.ts          # Font loading configuration
└── assets/               # Static assets
    └── fonts/            # Poppins font files
```

## 🔧 Configuration

### Tailwind CSS
The app uses NativeWind for Tailwind CSS support. Configuration is in `tailwind.config.js` with custom colors and responsive breakpoints.

### Metro Configuration
Custom Metro configuration in `metro.config.js` enables NativeWind support and CSS processing.

### TypeScript
Strict TypeScript configuration with proper type definitions for all components and data structures.

## 📱 Responsive Design

The app is fully responsive and adapts to:
- **Small phones** (< 375px width)
- **Medium phones** (375px - 414px width)
- **Large phones** (> 414px width)
- **Tablets** (> 768px width)

### Responsive Features
- Dynamic grid layouts (2 columns on phones, 3 on tablets)
- Adaptive text sizes and spacing
- Flexible image sizing
- Responsive navigation

## 🎭 Animations & Interactions

All animations are implemented using React Native Reanimated and Gesture Handler for optimal performance:

### Button Interactions
1. **Press Effects**: Shrink animation (0.8125x scale) on button press
2. **No Darkening**: Custom `activeOpacity` prevents default TouchableOpacity darkening
3. **Spring Physics**: Natural, bouncy animations using `withSpring`

### Tab Transitions
1. **Slide Animations**: Smooth left/right slide transitions between Description/Specification tabs
2. **Direction Detection**: Intelligent slide direction based on tab selection
3. **Timing Control**: 300ms duration with 150ms delay for smooth transitions

### Gesture Interactions
1. **Swipeable Checkout**: Left-to-right swipe gesture for checkout completion
2. **Progress Tracking**: Visual feedback during swipe with opacity animations
3. **State Management**: Dynamic text changes (Checkout → Done!) with smooth transitions

### Cart State Management
1. **Dynamic Buttons**: Add to Cart → Added to Cart state changes
2. **Disabled States**: Proper handling of already-added items
3. **Visual Feedback**: Clear indication of cart status

## 🚀 Performance Optimizations

- **Image Optimization**: Using Expo Image for better performance
- **Lazy Loading**: Components load as needed
- **Efficient Animations**: Hardware-accelerated animations with React Native Reanimated
- **Gesture Performance**: Optimized gesture handling with React Native Gesture Handler
- **Optimized Renders**: Proper React optimization patterns
- **Memory Management**: Efficient state management with Context API
- **Font Loading**: Custom font loading with proper fallbacks
- **Shadow Performance**: Optimized shadow rendering with react-native-neomorph-shadows
