/** @type {import('tailwindcss').Config} */
import daisyui from 'daisyui';
export default {
	content: ['./src/**/*.{js,jsx,ts,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {},
	},
	plugins: [daisyui],
};
