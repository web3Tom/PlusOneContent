<script>
	import { tick } from 'svelte';

	import ReviewSlide from './review-slide.svelte';
	import reviewImg1 from '$lib/assets/images/assetImg_3.3_reviewImg-kirks.png';
	import reviewImg2 from '$lib/assets/images/assetImg_3.2_reviewImg-child.png';

	let currentReview = 0; // Index for the current review.
	const totalReviews = 3; // Update this with the total number of reviews.
	let showSlide = true;

	async function nextReview() {
		showSlide = false; // Hide the slide
		await tick(); // Wait for updates to be processed
		if (currentReview < totalReviews - 1) currentReview = currentReview + 1;
		else currentReview = 0; // wrap-around to the start
		showSlide = true; // Show the slide, triggering the animation
	}

	async function prevReview() {
		showSlide = false; // Hide the slide
		await tick(); // Wait for updates to be processed
		if (currentReview > 0) currentReview = currentReview - 1;
		else currentReview = totalReviews - 1; // wrap-around to the end
		showSlide = true; // Show the slide, triggering the animation
	}

	function getPrevReviewIndex(index) {
		if (index > 0) return index - 1;
		else return totalReviews - 1;
	}

	function getNextReviewIndex(index) {
		if (index < totalReviews - 1) return index + 1;
		else return 0;
	}

	function getCurrentImages(index) {
		let prevIndex = getPrevReviewIndex(index);
		let nextIndex = getNextReviewIndex(index);
		return {
			prevImage: reviews[prevIndex].testimonialImg,
			currentImage: reviews[index].testimonialImg,
			nextImage: reviews[nextIndex].testimonialImg
		};
	}

	const reviews = [
		{
			testimonialImg: reviewImg1,
			reviewText: `We couldn't have asked for a more talented and dedicated day-of content creator than Plus One Content! Nicolette took the time to understand our vision before our wedding, and transformed all of our special moments into timeless memories. She captured countless of candid photos and videos from our rehearsal dinner and entire wedding day, and we had access to all the content by the very next morning! Her custom made videos are amazing glimpse of moments we didn't even realize were happening, and are so glad they were recorded. We get to not only relive our special day, but relive memories we didn't get to witness first hand. She was professional, pleasant, and discreet; the perfect plus one! We are forever grateful for her expertise and the incredible keepsakes we'll cherish forever. Thank you for making our day even more unforgettable!!`,
			reviewerName: 'Bri and Tyler'
		},
		{
			testimonialImg: reviewImg2,
			reviewText: `With a house full of kids, it's nearly impossible to get pictures and videos of everyone. Nicolette took our daughter and captured more pictures and videos than we could have imagined. We love the reel she made us so much, we play it for everyone! She captured moments and memories that we would've never had the time to grab. She's also great with kids! We can't recommend her enough! Thank you Nicolette!`,
			reviewerName: 'Jessica, Happy Mom'
		},
		{
			testimonialImg: reviewImg2,
			reviewText: `With a house full of kids, it's nearly impossible to get pictures and videos of everyone. Nicolette took our daughter and captured more pictures and videos than we could have imagined. We love the reel she made us so much, we play it for everyone! She captured moments and memories that we would've never had the time to grab. She's also great with kids! We can't recommend her enough! Thank you Nicolette!`,
			reviewerName: 'Jessica, Happy Mom'
		}
		// ... add as many reviews as you have
	];
	// Divider SVG
	let DividerSvg = `
	<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 900 156" preserveAspectRatio="none" version="1.0"><defs><clipPath id="a"><path d="M0 1.5h900v153H0zm0 0"/></clipPath></defs><g clip-path="url(#a)"><path fill="#6b7280" d="M899.129 9.008c0-4.164-3.434-7.52-7.594-7.403-67.355 1.934-69.883 29.508-142.117 29.508-74.856 0-74.856-29.613-149.711-29.613-74.855 0-74.855 29.613-149.71 29.613C375.14 31.113 375.14 1.5 300.284 1.5c-74.851 0-74.851 29.613-149.707 29.613-72.23 0-74.762-27.574-142.113-29.508C4.305 1.488.87 4.844.87 9.008v138.09a7.405 7.405 0 0 0 7.402 7.402h883.454a7.405 7.405 0 0 0 7.402-7.402zm0 0"/></g></svg>`;
</script>

<section class="w-screen bg-[#d3d9e0] xl:pb-24 xl:pt-14">
	<h2
		class="custom-underline translate-x-0 text-center font-tanaegean text-txtp underline-offset-2 opacity-100 transition duration-1000 xl:mb-10 xl:pb-6 xl:text-3xl"
	>
		Client Love
	</h2>
	<div class="relative mx-auto max-w-6xl flex-col content-center justify-center">
		<!-- Toggle buttons -->
		<div class="absolute -left-[5%] flex w-[110%] justify-between xl:top-20">
			<!-- Previous Button -->
			<button
				on:click={prevReview}
				aria-label="Previous"
				class="p-2 transition-all duration-300 ease-in-out hover:-translate-x-2"
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 21 41"
					class="fill-black"
					width="21"
					height="41"
				>
					<path d="M20.3 40.8 0 20.5 20.3.2l.7.7L1.3 20.5 21 40.1z" />
				</svg>
			</button>
			<!-- Next Button -->
			<button
				on:click={nextReview}
				aria-label="Next"
				class="rotate-180 p-2 transition-all duration-300 ease-in-out hover:translate-x-2"
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 21 41"
					class="fill-black"
					width="21"
					height="41"
				>
					<path d="M20.3 40.8 0 20.5 20.3.2l.7.7L1.3 20.5 21 40.1z" />
				</svg>
			</button>
		</div>
		{#if showSlide}
			<ReviewSlide
				key={currentReview}
				{...getCurrentImages(currentReview)}
				reviewText={reviews[currentReview].reviewText}
				reviewerName={reviews[currentReview].reviewerName}
			/>
		{/if}
		<div class="mt-4 flex justify-center space-x-2">
			{#each reviews as _, index}
				<button
					class="h-4 w-4 rounded-full transition duration-150 ease-in-out {currentReview === index
						? 'bg-black'
						: 'bg-gray-400'}"
					on:click={() => {
						console.log('Setting currentReview:', index);
						currentReview = index;
					}}
					aria-label={`Go to slide ${index + 1}`}
				/>
			{/each}
		</div>
	</div>
</section>

<style>
	.custom-underline::after {
		content: '';
		display: block;
		height: 3px; /* thickness of the underline */
		width: 10%;
		background-color: currentColor; /* color of the underline, currentColor will use the text color */
		margin-top: 10px; /* space between the text and the underline */
		margin-left: auto;
		margin-right: auto;
	}
</style>
