<script>
	import testimonialImg from '$lib/assets/images/assetImg_4.1_testimonial-Bri.png';

	// Divider SVG
	let DividerSvg = `
	<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 900 156" preserveAspectRatio="none" version="1.0"><defs><clipPath id="a"><path d="M0 1.5h900v153H0zm0 0"/></clipPath></defs><g clip-path="url(#a)"><path fill="#6b7280" d="M899.129 9.008c0-4.164-3.434-7.52-7.594-7.403-67.355 1.934-69.883 29.508-142.117 29.508-74.856 0-74.856-29.613-149.711-29.613-74.855 0-74.855 29.613-149.71 29.613C375.14 31.113 375.14 1.5 300.284 1.5c-74.851 0-74.851 29.613-149.707 29.613-72.23 0-74.762-27.574-142.113-29.508C4.305 1.488.87 4.844.87 9.008v138.09a7.405 7.405 0 0 0 7.402 7.402h883.454a7.405 7.405 0 0 0 7.402-7.402zm0 0"/></g></svg>`;
</script>

<section class="flex w-screen items-center justify-center bg-[#d3d9e0] xl:pb-24 xl:pt-14">
	<!-- Block Quote -->
	<div
		class="flex max-w-3xl items-center justify-center rounded-md bg-white xl:h-auto xl:px-10 xl:py-10"
	>
		<blockquote class="font-opensans text-xl font-semibold italic text-slate-800">
			<svg
				aria-hidden="true"
				class="h-10 w-10 text-slate-800"
				viewBox="0 0 24 27"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
				><path
					d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z"
					fill="currentColor"
				/></svg
			>
			<p class="mt-3">
				"Plus One Content LLC transformed our wedding day into a breathtaking social media story,
				captivating friends and family alike. Their stunning photography and insightful consulting
				made our special day effortless and unforgettable."
			</p>
			<p class="ml-44 mt-5">- Happy Brider</p>
		</blockquote>
	</div>
	<!-- Testimonial Image -->
	<div class="z-20 -ml-9 h-auto -rotate-12 transform xl:w-[350px]">
		<img class="h-full w-full object-cover" src={testimonialImg} alt="test" />
	</div>
</section>
