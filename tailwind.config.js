/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				// 60-30-10 Rule
				bgp: '#FFFFFF', // 60%: background
				bgs: '#bababa',
				txtp: '#333333',
				primary: '#F8F0DE', // 20%
				primaryV: '#d3a130', // 10%
				secondary: '#427E9B', // 7%: CTA Color: hover state for buttons, active state for nav links, highlighting sections
				secondaryV: '#002F96', // 3%: CTA Color: hover state for buttons, active state for nav links, highlighting sections
				tertiary: '#FFD1DC' // Uhh
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
