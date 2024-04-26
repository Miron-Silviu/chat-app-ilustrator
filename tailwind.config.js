/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./docs/**/*.{html,js}'],
  theme: {
    screens: {
      xs: { min: '50px', max: '320px' },
      // => @media (min-width: 640px and max-width: 767px) { ... }
      sm: { min: '321px', max: '550px' },

      md: { min: '551px', max: '850px' },
      // => @media (min-width: 768px and max-width: 1023px) { ... }

      lg: { min: '851px', max: '1279px' },
      // // => @media (min-width: 1024px and max-width: 1279px) { ... }

      xl: { min: '1280px', max: '1535px' },
      // // => @media (min-width: 1280px and max-width: 1535px) { ... }

      xxl: { min: '1536px', max: '2600px' },
      // // => @media (min-width: 1536px) { ... }
    },
    extend: {
      backgroundImage: {
        'radial-gradient':
          'radial-gradient(30.40% 70.55%  at 1% 1.29%, hsl(276, 55%, 52%)  100%, hsl(270, 20%, 96%), transparent)',
        radialGradient:
          'radial-gradient(400.40% 200.55% at 50% 9.29% , hsl(276, 55%, 52%)  100%, hsl(270, 20%, 96%))',
      },
      colors: {
        // primary text

        paleViolet: 'hsl(276, 100%, 81%)', // (subheading at the top of the app UI)
        moderateViolet: 'hsl(276, 55%, 52%)', // (chat on the left)
        desaturatedDarkViolet: 'hsl(271, 15%, 43%)', // (chat on the right)
        grayishBlue: 'hsl(263, 32%, 94%)', // (Placeholder)
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
