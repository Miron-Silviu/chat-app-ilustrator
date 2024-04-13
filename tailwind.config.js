/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./docs/**/*.{html,js}'],
  theme: {
    screens: {
      sm: { min: '50px', max: '870px' },
      // => @media (min-width: 640px and max-width: 767px) { ... }

      md: { min: '871px', max: '2600px' },
      // => @media (min-width: 768px and max-width: 1023px) { ... }

      // lg: { min: "1024px", max: "1279px" },
      // // => @media (min-width: 1024px and max-width: 1279px) { ... }

      // xl: { min: "1280px", max: "1535px" },
      // // => @media (min-width: 1280px and max-width: 1535px) { ... }

      // "2xl": { min: "1536px" },
      // // => @media (min-width: 1536px) { ... }
    },
    extend: {
      backgroundImage: {
        'radial-gradient':
          'radial-gradient(50.40% 70.55%  at 1% 6.29%, hsl(276, 55%, 52%)  100%, hsl(270, 20%, 96%) 100%)',
        radialGradient:
          'radial-gradient(100.40% 500.55% at 10% 8.29%, hsl(276, 55%, 52%)  100%, hsl(270, 20%, 96%) 100%)',
      },
      colors: {
        // primary text

        paleViolet: 'hsl(276, 100%, 81%)', // (subheading at the top of the app UI)
        moderateViolet: 'hsl(276, 55%, 52%)', // (chat on the left)
        desaturatedDarkViolet: 'hsl(271, 15%, 43%)', // (chat on the right)
        grayishBlue: 'hsl(206, 6%, 79%)', // (Placeholder)
        veryDarkDesaturatedViolet: 'hsl(271, 36%, 24%)', //(main heading)
        darkGrayishViolet: 'hsl(270, 7%, 64%)', //(paragraph)

        // gradients
        lightMagenta: 'hsl(293, 100%, 63%)',
        lightViolet: 'hsl(264, 100%, 61%)',

        // secondary

        white: 'hsl(0, 0%, 100%)',
        lightGrayishViolet: 'hsl(270, 20%, 96%)', //(background app )
        veryDarkDesaturatedViolet: 'hsl(271, 36%, 24%)', //(submit button background)
        veryLightMagenta: 'hsl(289, 100%, 72%)', //(radio buttons outline)
      },
    },
  },
  plugins: [],
};
