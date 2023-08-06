<script>
	import { onMount, onDestroy } from 'svelte';
	import img1 from '$lib/assets/images/assetImg_6.1_scrollFeed-brideBnW.png';
	import img2 from '$lib/assets/images/assetImg_6.11_scrollFeed-theKirks.png';
	import img3 from '$lib/assets/images/assetImg_6.12_scrollFeed-groomStairsBnW.png';
	import img4 from '$lib/assets/images/assetImg_6.13_scrollFeed-iLoveBri.png';
	import img5 from '$lib/assets/images/assetImg_6.14_scrollFeed-drumsTyler.png';
	import img6 from '$lib/assets/images/assetImg_6.15_scrollFeed-coupleSinging.png';

	function debounce(func, wait) {
		let timeout;
		return function (...args) {
			const context = this;
			clearTimeout(timeout);
			timeout = setTimeout(() => func.apply(context, args), wait);
		};
	}

	let scrollLastPosition = 0;

	let handleScroll = debounce(function () {
		const slider = document.querySelector('.image-slider');

		// Check if the user is scrolling down or up
		if (window.scrollY > scrollLastPosition) {
			// Scrolling down
			slider.scrollLeft += 30; // Adjust this value if needed
		} else if (window.scrollY < scrollLastPosition) {
			// Scrolling up
			slider.scrollLeft -= 30;
		}

		// Store the new last position for the next scroll event
		scrollLastPosition = window.scrollY;
	}, 30);

	onMount(() => {
		window.addEventListener('scroll', handleScroll);
	});
</script>

<div class="image-slider">
	<img src={img1} alt="Description 1" />
	<img src={img2} alt="Description 2" />
	<img src={img3} alt="Description 3" />
	<img src={img4} alt="Description 4" />
	<img src={img5} alt="Description 5" />
	<img src={img6} alt="Description 6" />

	<!-- ... Add more images ... -->
</div>

<style>
	.image-slider {
		display: flex;
		overflow-x: hidden;
		scroll-behavior: smooth; /* For smooth scrolling */
		margin: 0 20%;
	}
	.image-slider img {
		width: 13vw; /* Adjust the width as per requirements */
		height: auto;
		margin: 0 50px;
		border-radius: 15px; /* This gives the rounded edges */
		border: 2px solid #50402f; /* This provides the brown border */
	}
</style>
