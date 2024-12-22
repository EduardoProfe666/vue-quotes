/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        light: {
          background_from: '#f0f9ff',
          background_to: '#e0f2fe',
          t: '#0c4a6e',
          button_background: '#0ea5e9',
          button_t: '#ffffff',
          button_icon: '#ffffff',
          button_hover_background: '#0284c7',
          button_hover_t: '#cdcdcd',
          button_hover_icon: '#cdcdcd',
          cd_background: '#ffffff',
          cd_t: '#1f2937',
          cd_decoration: '#0ea5e9',
          cd_hover_decoration: '#07719f',
          cd_footer: '#e5e7eb',
          cd_author: '#0284c7',
        },
        dark: {
          background_from: '#111827',
          background_to: '#1f2937',
          t: '#e0f2fe',
          button_background: '#0ea5e9',
          button_t: '#ffffff',
          button_icon: '#ffffff',
          button_hover_background: '#0284c7',
          button_hover_t: '#cdcdcd',
          button_hover_icon: '#cdcdcd',
          cd_background: '#1f2937',
          cd_t: '#ffffff',
          cd_decoration: '#0ea5e9',
          cd_hover_decoration: '#63bfea',
          cd_footer: '#4b5563',
          cd_author: '#7dd3fc',
        }
      },
      fontFamily: {
        display: ['Playfair Display', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'slide-up': 'slideUp 0.7s ease-out',
        'slide-down': 'slideDown 0.7s ease-out',
        'fade-in': 'fadeIn 0.7s ease-out',
      },
      keyframes: {
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}