import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        "rich-black": "var(--color-rich-black)",
        "neon-blue": "var(--color-neon-blue)",
        "jasper": "var(--color-jasper)",
        "mauve": "var(--color-mauve)",
        "baby-powder": "var(--color-baby-powder)"
      },
      fontFamily: {
        "logo": ["'Victor Mono'", 'monospace'],
        "heading": ["'Space Grotesk'", 'sans-serif'],
        "body": ["Karla", 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
export default config
