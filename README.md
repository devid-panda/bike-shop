# Bike Shop - React Native App

A modern, responsive React Native mobile app for a bike shop built with Expo, TypeScript, and Tailwind CSS. This app features a pixel-perfect UI matching the provided Figma design with smooth animations and responsive design.

## 🚀 Features

### Core Features
- **Pixel-Perfect UI**: Matches the Figma design exactly with proper typography, spacing, and colors
- **Responsive Design**: Adapts to different screen sizes and form factors
- **Smooth Animations**: Implemented using React Native Reanimated for fluid user experience
- **Shopping Cart**: Full cart functionality with add/remove items and quantity management
- **Product Details**: Detailed product pages with tabs and specifications
- **Search & Filter**: Search bikes by name/brand and filter by categories

### Technical Features
- **Expo React Native 54**: Latest Expo SDK with new architecture enabled
- **TypeScript**: Full type safety throughout the application
- **Tailwind CSS**: Utility-first CSS framework via NativeWind
- **React Native Reanimated**: Advanced animations and gestures
- **Context API**: State management for cart functionality
- **Responsive Hooks**: Custom hooks for handling different screen sizes

### Animations (MOTION Section Implementation)
- **Right to Left Swipe**: Smooth transitions between screens
- **Button Press Effects**: Accent colored buttons shrink on press with smooth transitions
- **Skeuomorphic Transitions**: Smooth transitions between Description/Specification tabs
- **Checkout Flow**: Slide animations from left to right during checkout process

### API Integration (FREE DATA Section)
- **Weather Widget**: Integrated weather API in the product specification tab
- **Clean Display**: Weather information displayed in a visually appealing card format
- **Fallback Data**: Mock data provided for demo purposes

## 📱 Screens

1. **Home Screen** (`app/(tabs)/index.tsx`)
   - Featured bike with discount badge
   - Search functionality
   - Category filters
   - Responsive bike grid

2. **Product Detail** (`app/product/[id].tsx`)
   - Large product image with gradient background
   - Animated tabs (Description/Specification)
   - Weather widget in FREE DATA section
   - Add to cart functionality

3. **Shopping Cart** (`app/(tabs)/cart.tsx`)
   - Cart items with quantity controls
   - Order summary with discounts
   - Promo code application
   - Animated checkout button

4. **Categories** (`app/(tabs)/explore.tsx`)
   - Category grid with icons
   - Popular brands section
   - Responsive layout

5. **Profile** (`app/(tabs)/profile.tsx`)
   - User information
   - Menu items with navigation
   - Settings and preferences

## 🛠 Tech Stack

- **Framework**: Expo React Native 54
- **Language**: TypeScript
- **Styling**: Tailwind CSS (NativeWind)
- **Animations**: React Native Reanimated 4
- **Navigation**: Expo Router
- **State Management**: React Context API
- **Image Handling**: Expo Image
- **Icons**: SF Symbols (iOS) / Material Icons (Android)

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
   
   # Web
   npm run web
   ```

## 📁 Project Structure

```
bike-shop/
├── app/                    # App screens and navigation
│   ├── (tabs)/            # Tab-based screens
│   │   ├── index.tsx      # Home screen
│   │   ├── cart.tsx       # Shopping cart
│   │   ├── explore.tsx    # Categories
│   │   └── profile.tsx    # User profile
│   ├── product/           # Product detail screens
│   │   └── [id].tsx       # Dynamic product page
│   └── _layout.tsx        # Root layout
├── components/            # Reusable components
│   ├── ui/               # UI components
│   ├── bike-card.tsx     # Product card component
│   └── cart-tab-icon.tsx # Cart icon with badge
├── context/              # React Context providers
│   └── cart-context.tsx  # Shopping cart state
├── data/                 # Static data
│   └── bikes.ts          # Bike product data
├── hooks/                # Custom hooks
│   └── use-responsive.ts # Responsive design hook
├── types/                # TypeScript type definitions
│   └── bike.ts           # Bike and cart types
└── constants/            # App constants
    └── theme.ts          # Theme configuration
```

## 🎨 Design System

### Colors
- **Primary**: Blue (#0091F5)
- **Dark Theme**: Various shades of dark gray/blue
- **Accent**: Red for discounts, Green for success states
- **Text**: White primary, gray secondary

### Typography
- **Font Family**: SF Pro Display (iOS native)
- **Sizes**: Responsive text sizing based on screen size
- **Weights**: Regular, Medium, Semibold, Bold

### Spacing
- **Consistent**: 4px base unit system
- **Responsive**: Adapts to screen size
- **Padding/Margin**: Standardized spacing scale

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

## 🎭 Animations

All animations are implemented using React Native Reanimated for optimal performance:

1. **Entrance Animations**: FadeInUp, FadeInDown with staggered delays
2. **Interaction Animations**: Button press effects, tab transitions
3. **Navigation Animations**: Smooth screen transitions
4. **Cart Animations**: Add to cart button scaling effects

## 🌐 API Integration

The app includes a weather widget as the FREE DATA section:
- Displays current weather conditions
- Shows temperature, humidity, and wind speed
- Integrated into the product specification tab
- Fallback to mock data for demo purposes

## 🚀 Performance Optimizations

- **Image Optimization**: Using Expo Image for better performance
- **Lazy Loading**: Components load as needed
- **Efficient Animations**: Hardware-accelerated animations
- **Optimized Renders**: Proper React optimization patterns
- **Memory Management**: Efficient state management

## 📄 License

This project is created for demonstration purposes based on the provided Figma design.

## 🤝 Contributing

This is a demonstration project. For production use, consider:
- Adding proper error handling
- Implementing real API endpoints
- Adding user authentication
- Including comprehensive testing
- Setting up CI/CD pipelines

---

Built with ❤️ using React Native and Expo