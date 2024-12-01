module.exports = {
    content: [
      "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          'tomato': {
            500: '#ff6347',
            600: '#e55340'
          },
          'lavender': {
            100: '#e6e6fa'
          }
        },
        animation: {
          'fade-in': 'fadeIn 2s ease-in-out'
        },
        keyframes: {
          fadeIn: {
            '0%': { opacity: '0' },
            '100%': { opacity: '1' }
          }
        }
      },
    },
    plugins: [],
  }