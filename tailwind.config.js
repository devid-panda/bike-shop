/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      borderRadius: {
        'sm': '2px',
        'md': '6px',
        'lg': '10px',
        'xl': '12px',
      },
      colors: {
        primary: {
          50: '#E6F4FE',
          100: '#CCE9FD',
          200: '#99D3FB',
          300: '#66BDF9',
          400: '#33A7F7',
          500: '#0091F5',
          600: '#0074C4',
          700: '#005793',
          800: '#003A62',
          900: '#242C3B',
        },
        dark: {
          50: '#F8FAFC',
          100: '#F1F5F9',
          200: '#E2E8F0',
          300: '#CBD5E1',
          400: '#94A3B8',
          500: '#64748B',
          600: '#475569',
          700: '#334155',
          800: '#1E293B',
          900: '#0F172A',
        }
      },
      fontFamily: {
        'poppins': ['Poppins-Regular', 'Poppins', 'system-ui', 'sans-serif'],
        'poppins-medium': ['Poppins-Medium', 'Poppins', 'system-ui', 'sans-serif'],
        'poppins-semibold': ['Poppins-SemiBold', 'Poppins', 'system-ui', 'sans-serif'],
        'poppins-bold': ['Poppins-Bold', 'Poppins', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        xs: 12,
        sm: 14,
        base: 16,
        lg: 18,
        xl: 20,
        '2xl': 24,
        '3xl': 28,
        '4xl': 32,
        '5xl': 36,
        '6xl': 40,
        '7xl': 44,
      },
      fontWeight: {
        normal: 400,
        medium: 500,
        semibold: 600,
        bold: 700,
      },
      spacing: {
        0: 0,
        0.5: 2,   // same as Tailwind web
        1: 4,
        1.5: 6,
        2: 8,     // <- now pt-2 will be 8, not 7
        2.5: 10,
        3: 12,
        3.5: 14,
        4: 16,
        5: 20,
        6: 24,
        7: 28,
        8: 32,
        9: 36,
        10: 40,
        11: 44,
      },
      boxShadow: {
        'custom': '0px 30px 60px 0px #1A1F2C',
        'inset-sm': '4px 4px 8px 0px #202633 inset, -4px -4px 8px 0px #364055 inset',
        'inset-md': '4px 4px 10px 0px #252B39, -4px -4px 10px 0px #38445A',
      },
    },
  },
  plugins: [],
}

