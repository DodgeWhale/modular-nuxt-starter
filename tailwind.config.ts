import type { Config } from 'tailwindcss';
import defaultTheme from 'tailwindcss/defaultTheme';

export default <Partial<Config>>{
  darkMode: 'class',

  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './modules/**/*.{js,vue,ts}',
    './nuxt.config.{js,ts}',
    'node_modules/flowbite/**/*.{js,jsx,ts,tsx}',
  ],

  theme: {
    /** @link https://tailwindcss.com/docs/screens#adding-smaller-breakpoints */
    screens: {
      xxs: '360px',
      xs: '475px',
      xxl: '1367px',
      ...defaultTheme.screens,
    },
    extend: {
      boxShadow: {
        'inner-md': 'inset 0 4px 8px 0 rgb(0 0 0 / 0.05)',
        'inner-lg': 'inset 0 8px 16px 0 rgb(0 0 0 / 0.05)',
        'inner-xl': 'inset 0 12px 24px 0 rgb(0 0 0 / 0.05)',
      },
      fontSize: {
        xxs: ['10px', '0.625rem'],
      },
      width: {
        128: '32rem' /* 512px */,
      },
      zIndex: {
        2: '2',
      },
      screens: {
        'sm-h': { raw: '(min-height: 640px)' },
        'md-h': { raw: '(min-height: 768px)' },
        'lg-h': { raw: '(min-height: 1024px)' },
      },
    },
  },

  plugins: [
    require('daisyui'),
    function ({ addVariant }: { addVariant: (name: string, definition: string) => void }) {
      addVariant('child', '& > *');
      addVariant('child-hover', '& > *:hover');
      addVariant('not-first', '& :not(:first-child)');
    },
  ],
};
