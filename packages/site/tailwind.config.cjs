const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}', '../../packages/components/src/**/*.svelte'],
	theme: {
		extend: {
			fontFamily: {
				sans: ['Oswald', ...defaultTheme.fontFamily.sans]
			}
		},
		plugins: [require('@tailwindcss/forms')]
	}
};
