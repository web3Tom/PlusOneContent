<script>
	import makeUpMirror from '$lib/assets/images/assetImg_3.1_MakeUpMirror.png';

	// Divider SVG
	let DividerSvg = `
	<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 900 156" preserveAspectRatio="none" version="1.0"><defs><clipPath id="a"><path d="M0 1.5h900v153H0zm0 0"/></clipPath></defs><g clip-path="url(#a)"><path fill="#fff" d="M899.129 9.008c0-4.164-3.434-7.52-7.594-7.403-67.355 1.934-69.883 29.508-142.117 29.508-74.856 0-74.856-29.613-149.711-29.613-74.855 0-74.855 29.613-149.71 29.613C375.14 31.113 375.14 1.5 300.284 1.5c-74.851 0-74.851 29.613-149.707 29.613-72.23 0-74.762-27.574-142.113-29.508C4.305 1.488.87 4.844.87 9.008v138.09a7.405 7.405 0 0 0 7.402 7.402h883.454a7.405 7.405 0 0 0 7.402-7.402zm0 0"/></g></svg>`;
</script>

<!-- Ala Carte Services  Section -->
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
		<h1 class="font-tanaegean text-5xl text-black">A La Carte Services</h1>
		<svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24"
			><g transform="translate(24 0) scale(-1 1)"
				><path
					fill="currentColor"
					d="m9 4l2.5 5.5L17 12l-5.5 2.5L9 20l-2.5-5.5L1 12l5.5-2.5L9 4m0 4.83L8 11l-2.17 1L8 13l1 2.17L10 13l2.17-1L10 11L9 8.83M19 9l-1.26-2.74L15 5l2.74-1.25L19 1l1.25 2.75L23 5l-2.75 1.26L19 9m0 14l-1.26-2.74L15 19l2.74-1.25L19 15l1.25 2.75L23 19l-2.75 1.26L19 23Z"
				/></g
			></svg
		>
	</div>

	<!-- Triple Column Services -->
	<div class="flex h-auto w-full justify-around">
		<div class="w-[25%] flex-col items-center justify-start">
			<div class="mx-auto h-44 w-64 overflow-hidden rounded-full">
				<img class="h-full w-full object-cover" src={makeUpMirror} alt="test" />
			</div>
			<h2 class="mb-8 mt-8 text-center font-tenorsans text-2xl font-semibold text-black">
				The Unplugged<br />Bride
			</h2>
			<p class="max-w-md text-left">
				You spent all this time planning your wedding, I want to make sure you enjoy every minute of
				it. With this service, I can take over your phone and/or social accounts and post live
				updates on your behalf throughout the day so you can be completely unplugged and living in
				the moment!
			</p>
		</div>
		<!-- Second Col -->
		<div class="w-[25%] flex-col items-center justify-start">
			<div class="mx-auto h-44 w-64 overflow-hidden rounded-full">
				<img class="h-full w-full object-cover" src={makeUpMirror} alt="test" />
			</div>
			<h2 class="mb-8 mt-8 text-center font-tenorsans text-2xl font-semibold text-black">
				Additional Hours of<br />On-site Shooting
			</h2>
			<p class="max-w-md text-left">
				Not sure if my packages have the amount of coverage your looking for? Add on additional
				hours to any service!
			</p>
		</div>
		<div class="w-[25%] flex-col items-center justify-start">
			<div class="mx-auto h-44 w-64 overflow-hidden rounded-full">
				<img class="h-full w-full object-cover" src={makeUpMirror} alt="test" />
			</div>
			<h2 class="mb-8 mt-8 text-center font-tenorsans text-2xl font-semibold text-black">
				Additional Wedding<br />Event Coverage
			</h2>
			<p class="max-w-md text-left">
				Looking for content coverage for more of your wedding events? We customizable packages for
				all events including Bridal Showers, Rehearsal Dinners, After parties, and more!
			</p>
		</div>
	</div>
</section>
