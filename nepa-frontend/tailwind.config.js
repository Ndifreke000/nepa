module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      screens: {
        'xs': '475px', // Extra small screens
        'sm': '640px', // Small screens (tablets)
        'md': '768px', // Medium screens (small laptops)
        'lg': '1024px', // Large screens (desktops)
        'xl': '1280px', // Extra large screens
        '2xl': '1536px', // 2X large screens
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
        // Fluid spacing values
        'fluid-sm': 'clamp(1rem, 2vw, 1.5rem)',
        'fluid-md': 'clamp(1.5rem, 3vw, 2rem)',
        'fluid-lg': 'clamp(2rem, 4vw, 3rem)',
        'fluid-xl': 'clamp(3rem, 5vw, 4rem)',
      },
      fontSize: {
        'xs': ['0.75rem', { lineHeight: '1rem' }],
        'sm': ['0.875rem', { lineHeight: '1.25rem' }],
        'base': ['clamp(1rem, 2vw, 1.125rem)', { lineHeight: '1.5rem' }],
        'lg': ['clamp(1.125rem, 2.5vw, 1.25rem)', { lineHeight: '1.75rem' }],
        'xl': ['clamp(1.25rem, 3vw, 1.5rem)', { lineHeight: '1.75rem' }],
        '2xl': ['clamp(1.5rem, 4vw, 2rem)', { lineHeight: '2rem' }],
        '3xl': ['clamp(1.875rem, 5vw, 2.5rem)', { lineHeight: '2.25rem' }],
        '4xl': ['clamp(2.25rem, 6vw, 3rem)', { lineHeight: '2.5rem' }],
        '5xl': ['clamp(3rem, 7vw, 4rem)', { lineHeight: '1' }],
        '6xl': ['clamp(3.75rem, 8vw, 5rem)', { lineHeight: '1' }],
        '7xl': ['clamp(4.5rem, 9vw, 6rem)', { lineHeight: '1' }],
        '8xl': ['clamp(6rem, 10vw, 8rem)', { lineHeight: '1' }],
        '9xl': ['clamp(8rem, 12vw, 10rem)', { lineHeight: '1' }],
      },
      maxWidth: {
        '8xl': '88rem',
        '9xl': '96rem',
      },
      minWidth: {
        '44': '11rem', // Minimum touch target size
        '48': '12rem',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.3s ease-out',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
