/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./index.{js,ts,tsx}",
		"./src/app/**/*.{js,ts,tsx}",
		"./src/components/**/*.{js,ts,tsx}",
	],

	presets: [require("nativewind/preset")],
	theme: {
		extend: {
			colors: {
				primary: "#EB3678",
				secondary: "#4F1787",
				tertiary: "#140449",
			},
		},
	},
	plugins: [],
};
