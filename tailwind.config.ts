import type { Config } from "tailwindcss";
import tailwindcssAnimate from "tailwindcss-animate";

export default {
  darkMode: ["class"],
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
  		boxShadow: {
  			form: '0 4px 18px 0 rgba(0, 0, 0, 0.09)'
  		},
  		colors: {
  			primary_white: '#ffffff',
  			primary_gray: '#333333',
  			primary_red: '#e12728',
  			red_white: '#e6e6e64d',
  			stroke: '#E2E8F0',
  			boxdark: '#24303F',
  			strokeinput: '#BBBBBB',
  			'boxdark-2': '#1A222C',
  			strokedark: '#3f3f46',
  			success: '#219653',
  			danger: '#D34053',
  			warning: '#FFA70B',
  			form: '#fffbfb',
  		},
  		fontFamily: {
  			figtree: [
  				'var(--font-figtree)'
  			]
  		},
  	}
  },
  plugins: [tailwindcssAnimate, require("tailwindcss-animate")],
} satisfies Config;
