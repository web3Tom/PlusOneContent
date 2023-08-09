<script>
	import { onMount, onDestroy } from 'svelte';
	import img1 from '$lib/assets/images/assetImg_6.1_scrollFeed-brideBnW.png';
	import img2 from '$lib/assets/images/assetImg_6.11_scrollFeed-theKirks.png';
	import img3 from '$lib/assets/images/assetImg_6.12_scrollFeed-groomStairsBnW.png';
	import img4 from '$lib/assets/images/assetImg_6.13_scrollFeed-iLoveBri.png';
	import img5 from '$lib/assets/images/assetImg_6.14_scrollFeed-drumsTyler.png';
	import img6 from '$lib/assets/images/assetImg_6.15_scrollFeed-coupleSinging.png';

	const images = [img1, img2, img3, img4, img5, img6];
	// Double the array to simulate a loop:
	const loopedImages = [...images, ...images];

	let slider;

	function resetSlider() {
		slider.style.animationPlayState = 'paused'; // Pause the animation
		slider.style.transform = 'translateX(0)'; // Reset the position
		setTimeout(() => {
			slider.style.animationPlayState = 'running'; // Restart the animation
		}, 50); // Small delay to ensure the position has reset
	}
</script>

<div class="image-slider" bind:this={slider} on:animationiteration={resetSlider}>
	{#each loopedImages as image}
		<img src={image} alt="Description" />
	{/each}

	<!-- ... Add more images ... -->
</div>

<style>
	.image-slider {
		display: flex;
		width: full;
		animation: slide 10s linear infinite; /* Adjust the duration as needed */
		overflow-x: hidden;
		scroll-behavior: smooth; /* For smooth scrolling */
		margin: 0 auto;
	}

	@keyframes slide {
		0% {
			transform: translateX(0);
		}
		100% {
			transform: translateX(-50%);
		} /* Because we've doubled the number of images */
	}

	.image-slider img {
		width: 12vw; /* Adjust the width as per requirements */
		height: auto;
		margin: 0 50px;
		border-radius: 15px; /* This gives the rounded edges */
		border: 2px solid #50402f; /* This provides the brown border */
	}
</style>
