import type { Config } from 'tailwindcss'
const randomAnimation: Record<string, string> = {
  'ping-pulse':
    'ping 1s cubic-bezier(0, 0, 0.2, 1) 0s infinite, pulse 2s cubic-bezier(0.4, 0, 0.6, 1) 0s infinite'
}
const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      screens: {
        sm: { max: '640px' },
        md: { max: '818px' },
        lg: { max: '1024px' },
        xl: { max: '1280' },
        '2xl': { max: '1536px' }
      },
      colors: {
        platinum: '#D8D5DB',
        glacous: '#6184D8',
        lcterine: '#F0F465',
        bgGrad: '#100D2C',
        card: '#111111'
      },
      backgroundImage: {
        card1: 'url(/public/hr.png)'
      }
    }
  },

  plugins: []
}
export default config
