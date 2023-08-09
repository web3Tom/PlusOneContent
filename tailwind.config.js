/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				primary: '#F8F0DE',
				secondary: '#50402f',
				tertiary: '#bd5f22'
			},
			fontFamily: {
				tenorsans: ['TenorSans', 'sans-serif'],
				tanaegean: ['TanAegean', 'sans-serif'],
				opensans: ['OpenSans-Regular', 'sans-serif']
			},
			backgroundImage: {
				'hero-1': "url('/src/lib/assets/images/assetImg_1.1_hero-backyard-zoom.jpg')"
			},
			brightness: {
				25: '.25'
			},
			boxShadow: {
				'top-right': '4px 5px 5px rgba(135, 57, 7, 0.8)'
			}
		}
	}
};
