/** @type {import('tailwindcss').Config} */
function withOpacity({opacity, vb}) {
  if (opacity !== undefined) {
    return `rgba(${vb}, ${opacity})`;
  }
  return `rgb(${vb})`;
}
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      height: {
        '80v': '80vh'
      },
      // backgroundColor: {
      //   skin: {
      //     pink1: 'var(--bg-color-base1)',
      //     pink2: 'var(--bg-color-base2)',
      //     pink3: 'var(--bg-color-base3)',
      //   }
      // },
      // backgroundColor: {
      //   skin: {
      //     base: withOpacity('--bg-color-base1', 1)
      //   }
      // }
    },
  },
  plugins: [],
}
