<script>
	import picHead1 from '$lib/assets/images/assetImg_3.1_packages-bucket-hat-bride.png';
	import picHead2 from '$lib/assets/images/assetImg_3.2_packages-outdoor.png';
	import picHead3 from '$lib/assets/images/assetImg_3.3_packages-bride-veil.png';

	import PackageColumn from './PackageColumn.svelte';
	// Divider SVG
	let DividerSvg = `
	<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 900 156" preserveAspectRatio="none" version="1.0"><defs><clipPath id="a"><path d="M0 1.5h900v153H0zm0 0"/></clipPath></defs><g clip-path="url(#a)"><path fill="#d3d9e0" d="M899.129 9.008c0-4.164-3.434-7.52-7.594-7.403-67.355 1.934-69.883 29.508-142.117 29.508-74.856 0-74.856-29.613-149.711-29.613-74.855 0-74.855 29.613-149.71 29.613C375.14 31.113 375.14 1.5 300.284 1.5c-74.851 0-74.851 29.613-149.707 29.613-72.23 0-74.762-27.574-142.113-29.508C4.305 1.488.87 4.844.87 9.008v138.09a7.405 7.405 0 0 0 7.402 7.402h883.454a7.405 7.405 0 0 0 7.402-7.402zm0 0"/></g></svg>`;
</script>

<!-- Wedding Packages Section -->
<section class="relative flex-col items-center justify-start bg-[#d3d9e0] pb-10">
	<!-- SVG Divider -->
	<!-- <div class="absolute left-0 top-10 flex items-center">
		<div class="max-h-4 w-[50vw] rotate-180 transform">
			{@html DividerSvg}
		</div>
		<div class="-ml-2 max-h-4 w-[50vw] rotate-180 transform">
			{@html DividerSvg}
		</div>
	</div> -->

	<!-- main component -->
	<!-- <div class="mb-36 mt-10 flex items-center justify-center gap-x-10">
		<svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24"
			><path
				fill="currentColor"
				d="m9 4l2.5 5.5L17 12l-5.5 2.5L9 20l-2.5-5.5L1 12l5.5-2.5L9 4m0 4.83L8 11l-2.17 1L8 13l1 2.17L10 13l2.17-1L10 11L9 8.83M19 9l-1.26-2.74L15 5l2.74-1.25L19 1l1.25 2.75L23 5l-2.75 1.26L19 9m0 14l-1.26-2.74L15 19l2.74-1.25L19 15l1.25 2.75L23 19l-2.75 1.26L19 23Z"
			/></svg
		>
		<h1 class="font-tanaegean text-5xl text-black">Wedding Packages</h1>
		<svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24"
			><g transform="translate(24 0) scale(-1 1)"
				><path
					fill="currentColor"
					d="m9 4l2.5 5.5L17 12l-5.5 2.5L9 20l-2.5-5.5L1 12l5.5-2.5L9 4m0 4.83L8 11l-2.17 1L8 13l1 2.17L10 13l2.17-1L10 11L9 8.83M19 9l-1.26-2.74L15 5l2.74-1.25L19 1l1.25 2.75L23 5l-2.75 1.26L19 9m0 14l-1.26-2.74L15 19l2.74-1.25L19 15l1.25 2.75L23 19l-2.75 1.26L19 23Z"
				/></g
			></svg
		>
	</div> -->
	<div class="mx-auto max-w-7xl xl:pb-32 xl:pt-20">
		<h2
			class="custom-underline translate-x-0 text-center font-tanaegean text-txtp underline-offset-2 opacity-100 transition duration-1000 xl:mb-16 xl:text-3xl"
		>
			Wedding Packages
		</h2>

		<!-- Triple Column Wedding Packages -->
		<div class="mx-auto grid grid-cols-1 gap-x-6 gap-y-6 md:grid-cols-2 lg:grid-cols-3">
			<PackageColumn
				title="Get Ready With Me"
				imgSrc={picHead1}
				price="$400"
				items={[
					{
						icon: true,
						text: 'Initial Consultation to get to know the couple and brainstorm ideas'
					},
					{ icon: true, text: 'Second Consultation to finalize content capturing on the day' },
					{
						icon: true,
						text: 'Hundreds of pieces of content uploaded to a shared folder within 24 hours'
					},
					{
						icon: true,
						text: 'One 60-second video edited in an aesthetic style or vlog style, delivered within 48 hours'
					},
					{ icon: true, text: 'This Package is 4 hours, time is set by couple' }
				]}
			/>

			<PackageColumn
				imgSrc={picHead2}
				title="Meet Me at the Alter"
				price="$1200"
				items={[
					{ icon: false, text: 'Everything in GRWM plus..' },
					{ icon: true, text: 'Second Consultation to finalize content capturing on the day' },
					{
						icon: true,
						text: `Two 60-second videos edited in an aesthetic style or vlog style (delivered within 48
						hours)`
					},
					{
						icon: true,
						text: 'This package is 6 hours, time is set by couple'
					}
				]}
				popular="true"
			/>

			<PackageColumn
				imgSrc={picHead3}
				title="The Ultimate Bridesmaid"
				price="$1800"
				items={[
					{ icon: false, text: 'Everything in Meet Me at the Alter plus..' },
					{ icon: true, text: 'Second Consultation to finalize content capturing on the day' },
					{
						icon: true,
						text: 'Up to 2 Additional videos upon request'
					},
					{
						icon: true,
						text: 'Option to include "The Unplugged Bride" service'
					},
					{
						icon: true,
						text: 'This package is 8 hours, time is set by couple'
					}
				]}
			/>
		</div>
	</div>

	<!-- Divider Component -->
	<div class="absolute bottom-0 left-0 z-10 -mb-10 flex h-auto items-center">
		<div class="-ml-1 max-h-6 w-[50vw] rotate-180">
			{@html DividerSvg}
		</div>
		<div class="-ml-2 max-h-6 w-[50vw] rotate-180">
			{@html DividerSvg}
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
