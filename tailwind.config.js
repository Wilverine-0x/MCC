/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          green: {
            DEFAULT: '#4CC52A',
            hover: '#40AC23',
            deep: '#1B7943',
            forest: '#166534',
            light: '#F0FCF4',
            accent: '#C6EE37',
          },
          dark: {
            DEFAULT: '#1C1C1C',
            botanical: '#112316',
            surface: '#111827',
          },
          canvas: {
            DEFAULT: '#F8F9F5',
            alt: '#F7F9F4',
          },
          border: {
            DEFAULT: '#EAEAEA',
            subtle: '#E4E7EB',
          }
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      borderRadius: {
        'btn': '10px',
        'card': '16px',
        'box': '20px',
      },
      boxShadow: {
        'subtle': '0 4px 16px rgba(0, 0, 0, 0.03)',
        'elevated': '0 10px 30px rgba(0, 0, 0, 0.06)',
      }
    },
  },
  plugins: [],
}
