/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      height: {
        '80v': '80vh'
      },
      backgroundColor: {
        skin: {
          pink1: 'var(--bg-color-base1)',
          pink2: 'var(--bg-color-base2)',
          pink3: 'var(--bg-color-base3)',
        }
      },
      backgroundColor: {
        // skin: {
        //   base: ({opacity}) => {
        //     if (opacity !== undefined) {
        //       return `rgba(var(--color-text-inverted), ${opacity})`;
        //     }
        //     return `rgb(var(--color-text-inverted))`;
        //   },
        //   light: 'var(--color-text-muted)',
        // }
      }
    },
  },
  plugins: [],
}
