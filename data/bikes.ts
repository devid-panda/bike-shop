import { Bike } from '../types/bike';

export const bikes: Bike[] = [
  {
    id: '0',
    name: 'PEUGEOT - LR01',
    brand: 'Road Bike',
    price: 1999.99,
    originalPrice: 2499.99,
    discount: 30,
    images: [require('../assets/images/bike-1.png'), require('../assets/images/bike-2.png'), require('../assets/images/bike-3.png')],
    category: 'bike',
    description: 'The LR01 uses the same design as the most iconic bikes from PEUGEOT Cycles 130-year history and combines it with agile, dynamic performance that\'s perfectly suited to navigating today\'s cities. As well as a lugged steel frame and iconic PEUGEOT black-and-white chequer design, this city bike also features a 16-speed Shimano Claris drivetrain.',
    specifications: {
      frame: 'Lugged Steel Frame',
      gears: '16-speed Shimano Claris',
      brakes: 'Caliper Brakes',
      wheels: '700c Alloy Wheels',
      weight: '12.5 kg'
    },
    features: [
      'Iconic PEUGEOT design',
      'Lugged steel frame',
      '16-speed Shimano Claris drivetrain',
      'Perfect for city navigation'
    ],
    inStock: true,
    rating: 4.8,
    reviews: 124
  },
  {
    id: '3',
    name: 'SMITH - Trade',
    brand: 'Road Helmet',
    price: 120,
    images: [require('../assets/images/helmet-1.png'), require('../assets/images/helmet-2.png'), require('../assets/images/helmet-1.png')],
    category: 'helmet',
    description: 'Affordable mountain bike perfect for trail riding and outdoor adventures. Built tough for all terrains.',
    specifications: {
      frame: 'Aluminum Alloy Frame',
      gears: '21-speed Shimano Tourney',
      brakes: 'V-Brakes',
      wheels: '26" Knobby Tires',
      weight: '14.2 kg'
    },
    features: [
      'Durable aluminum frame',
      'All-terrain capability',
      'Affordable pricing',
      'Perfect for beginners'
    ],
    inStock: true,
    rating: 4.3,
    reviews: 67
  },
  {
    id: '4',
    name: 'TREK - Domane SL6',
    brand: 'TREK',
    price: 3299.99,
    images: [require('../assets/images/helmet-2.png'), require('../assets/images/helmet-1.png'), require('../assets/images/helmet-2.png')],
    category: 'helmet',
    description: 'High-performance road bike with carbon frame and premium components for serious cyclists.',
    specifications: {
      frame: 'Carbon Fiber Frame',
      gears: '22-speed Shimano Ultegra',
      brakes: 'Hydraulic Disc Brakes',
      wheels: '700c Carbon Wheels',
      weight: '8.9 kg'
    },
    features: [
      'Lightweight carbon frame',
      'Shimano Ultegra groupset',
      'Aerodynamic design',
      'Professional racing geometry'
    ],
    inStock: true,
    rating: 4.9,
    reviews: 156
  },
  {
    id: '2',
    name: 'PILOT - CHROMOLY 520',
    brand: 'PILOT',
    price: 2699.95,
    images: [require('../assets/images/bike-3.png'), require('../assets/images/bike-1.png'), require('../assets/images/bike-2.png')],
    category: 'bike',
    description: 'Premium chromoly steel frame bike designed for performance and comfort. Features high-end components and exceptional build quality.',
    specifications: {
      frame: 'Chromoly Steel Frame',
      gears: '22-speed Shimano 105',
      brakes: 'Disc Brakes',
      wheels: '700c Carbon Wheels',
      weight: '10.8 kg'
    },
    features: [
      'Chromoly steel construction',
      'Shimano 105 groupset',
      'Carbon fiber wheels',
      'Professional grade components'
    ],
    inStock: true,
    rating: 4.9,
    reviews: 89
  },
];

