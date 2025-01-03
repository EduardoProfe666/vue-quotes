/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{vue,js,ts,jsx,tsx}",
    ],
    darkMode: 'class',
    theme: {
        patterns: {
            opacities: {
                100: "1",
                80: ".80",
                60: ".60",
                40: ".40",
                20: ".20",
                10: ".10",
                5: ".05",
            },
            sizes: {
                1: "0.25rem",
                2: "0.5rem",
                4: "1rem",
                6: "1.5rem",
                8: "2rem",
                16: "4rem",
                20: "5rem",
                24: "6rem",
                32: "8rem",
            }
        },
        extend: {
            fontFamily: {
                display: ['Playfair Display', 'serif'],
                sans: ['Inter', 'system-ui', 'sans-serif'],
            },
            animation: {
                'slide-up': 'slideUp 0.7s ease-out',
                'slide-down': 'slideDown 0.7s ease-out',
                'fade-in': 'fadeIn 0.7s ease-out',
                'badge-pop': 'badgePop 0.5s cubic-bezier(0.22, 1, 0.36, 1)',
                'pulse-scale': 'pulseScale 0.7s ease-in-out infinite',
            },
            keyframes: {
                slideUp: {
                    '0%': {transform: 'translateY(20px)', opacity: '0'},
                    '100%': {transform: 'translateY(0)', opacity: '1'},
                },
                slideDown: {
                    '0%': {transform: 'translateY(-20px)', opacity: '0'},
                    '100%': {transform: 'translateY(0)', opacity: '1'},
                },
                fadeIn: {
                    '0%': {opacity: '0'},
                    '100%': {opacity: '1'},
                },
                badgePop: {
                    '0%': { transform: 'scale(0.95)', opacity: '0' },
                    '50%': { transform: 'scale(1.05)' },
                    '100%': { transform: 'scale(1)', opacity: '1' },
                },
                pulseScale: {
                    '0%, 100%': { transform: 'scale(1.1)' },
                    '50%': { transform: 'scale(0.90)' },
                },
            },
        },
    },
    plugins: [
        require('@tailwindcss/typography'),
        require('tailwindcss-bg-patterns'),
    ],
}