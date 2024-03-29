/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			fontFamily: {
				primary: ["'Fira Code'", 'monospace']
			}
		}
	},
	plugins: []
};
