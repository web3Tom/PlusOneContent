<script>
	import aboutImg from '$lib/assets/images/assetImg_1.2_about-bg-section.png';
	import Icon from '@iconify/svelte';

	// Divider SVG
	let DividerSvg = `
	<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 900 156" preserveAspectRatio="none" version="1.0"><defs><clipPath id="a"><path d="M0 1.5h900v153H0zm0 0"/></clipPath></defs><g clip-path="url(#a)"><path fill="#fff" d="M899.129 9.008c0-4.164-3.434-7.52-7.594-7.403-67.355 1.934-69.883 29.508-142.117 29.508-74.856 0-74.856-29.613-149.711-29.613-74.855 0-74.855 29.613-149.71 29.613C375.14 31.113 375.14 1.5 300.284 1.5c-74.851 0-74.851 29.613-149.707 29.613-72.23 0-74.762-27.574-142.113-29.508C4.305 1.488.87 4.844.87 9.008v138.09a7.405 7.405 0 0 0 7.402 7.402h883.454a7.405 7.405 0 0 0 7.402-7.402zm0 0"/></g></svg>`;
</script>

<!-- Wedding Packages Section -->
<section
	class="relative min-h-screen w-full flex-col items-center justify-start overflow-hidden bg-primary p-28"
>
	<!-- SVG Divider -->
	<div class="absolute left-0 top-10 flex items-center">
		<div class="max-h-4 w-[50vw] rotate-180 transform">
			{@html DividerSvg}
		</div>
		<div class="-ml-2 max-h-4 w-[50vw] rotate-180 transform">
			{@html DividerSvg}
		</div>
	</div>

	<!-- main component -->
	<div class="mb-36 mt-10 flex items-center justify-center gap-x-10">
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
	</div>

	<!-- Triple Column Wedding Packages -->
	<div class="flex h-auto w-full justify-around">
		<div class="w-[25%] flex-col items-center justify-start">
			<div class="mx-auto h-36 w-64 overflow-hidden rounded-full">
				<img class="h-full w-full object-cover" src={aboutImg} alt="test" />
			</div>
			<h2 class="mb-8 mt-8 text-center font-tenorsans text-2xl font-semibold text-secondary">
				Get Ready With Me
			</h2>

			<ul class="max-w-md list-none space-y-3 text-left">
				<li class="flex justify-start p-2">
					<span class="w-[8%]"><Icon icon="octicon:sparkle-fill-16" color="black" /></span>
					<span class="-mt-1 pl-3 text-secondary"
						>Initial Consultation to get to know the couple and brainstorm ideas</span
					>
				</li>
				<li class="flex justify-start p-2">
					<span class="w-[8%]"><Icon icon="octicon:sparkle-fill-16" color="black" /></span>
					<span class="-mt-1 pl-3 text-secondary"
						>Second Consultation to finalize content capturing on the day</span
					>
				</li>
				<li class="flex justify-start p-2">
					<span class="w-[8%]"><Icon icon="octicon:sparkle-fill-16" color="black" /></span>
					<span class="-mt-1 pl-3 text-secondary"
						>Hundreds of pieces of content uploaded to a shared folder within 24 hours</span
					>
				</li>
				<li class="flex justify-start p-2">
					<span class="w-[8%]"><Icon icon="octicon:sparkle-fill-16" color="black" /></span>
					<span class="-mt-1 pl-3 text-secondary"
						>One 60-second video edited in an aesthetic style or vlog style, delivered within 48
						hours</span
					>
				</li>
				<li class="flex justify-start p-2">
					<span class="w-[8%]"><Icon icon="octicon:sparkle-fill-16" color="black" /></span>
					<span class="-mt-1 text-secondary">This Package is 4 hours, time is set by couple</span>
				</li>
			</ul>
		</div>

		<!-- Second Col -->
		<div class="w-[25%] flex-col items-center justify-start">
			<div class="mx-auto h-36 w-64 overflow-hidden rounded-full">
				<img class="h-full w-full object-cover" src={aboutImg} alt="test" />
			</div>
			<h2 class="mb-8 mt-8 text-center font-tenorsans text-2xl font-semibold text-secondary">
				Meet Me at the Alter
			</h2>
			<ul class="max-w-md list-none space-y-3 text-left">
				<li class="flex justify-start p-2">
					<span class="-mt-1 pl-3 text-secondary">Everything in GRWM plus..</span>
				</li>
				<li class="flex justify-start p-2">
					<span class="w-[8%]"><Icon icon="octicon:sparkle-fill-16" color="black" /></span>
					<span class="-mt-1 pl-3 text-secondary"
						>Two 60-second videos edited in an aesthetic style or vlog style (delivered within 48
						hours)</span
					>
				</li>
				<li class="flex justify-start p-2">
					<span class="w-[8%]"><Icon icon="octicon:sparkle-fill-16" color="black" /></span>
					<span class="-mt-1 text-secondary">This package is 6 hours, time is set by couple</span>
				</li>
			</ul>
		</div>

		<!-- Third Col -->
		<div class="w-[25%] flex-col items-center justify-start">
			<div class="mx-auto h-36 w-64 overflow-hidden rounded-full">
				<img class="h-full w-full object-cover" src={aboutImg} alt="test" />
			</div>
			<h2 class="mb-8 mt-8 text-center font-tenorsans text-2xl font-semibold text-secondary">
				The Ultimate Bridesmaid
			</h2>
			<ul class="max-w-md list-none space-y-3 text-left">
				<li class="flex justify-start p-2">
					<span class="-mt-1 pl-3 text-secondary">Everything in Meet Me at the Alter plus..</span>
				</li>
				<li class="flex justify-start p-2">
					<span class="w-[8%]"><Icon icon="octicon:sparkle-fill-16" color="black" /></span>
					<span class="-mt-1 text-secondary">Up to 2 Additional videos upon request</span>
				</li>
				<li class="flex justify-start p-2">
					<span class="w-[8%]"><Icon icon="octicon:sparkle-fill-16" color="black" /></span>
					<span class="-mt-1 text-secondary"> Option to include "The Unplugged Bride" service</span>
				</li>
				<li class="flex justify-start p-2">
					<span class="w-[8%]"><Icon icon="octicon:sparkle-fill-16" color="black" /></span>
					<span class="-mt-1 text-secondary"> This package is 8 hours, time is set by couple</span>
				</li>
			</ul>
		</div>
	</div>
</section>
