<script>
	import testimonialImg from '$lib/assets/images/assetImg_4.1_testimonial-Bri.png';
</script>

<section class="flex w-screen items-center justify-center bg-bgs xl:h-[66vh]">
	<!-- Block Quote -->
	<div class=" flex items-center justify-center bg-white xl:h-auto xl:max-w-4xl xl:px-10 xl:py-10">
		<blockquote class="font-opensans text-2xl font-semibold italic text-slate-800">
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
	<div class="-ml-9 h-auto w-96 -rotate-12 transform">
		<img class="h-full w-full object-cover" src={testimonialImg} alt="test" />
	</div>
</section>
