<script>
	import profileNik from '$lib/assets/images/assetImg_2.0_nik-about.png';

	// Divider SVG
	let DividerSvg = `
	<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 900 156" preserveAspectRatio="none" version="1.0"><defs><clipPath id="a"><path d="M0 1.5h900v153H0zm0 0"/></clipPath></defs><g clip-path="url(#a)"><path fill="#fff" d="M899.129 9.008c0-4.164-3.434-7.52-7.594-7.403-67.355 1.934-69.883 29.508-142.117 29.508-74.856 0-74.856-29.613-149.711-29.613-74.855 0-74.855 29.613-149.71 29.613C375.14 31.113 375.14 1.5 300.284 1.5c-74.851 0-74.851 29.613-149.707 29.613-72.23 0-74.762-27.574-142.113-29.508C4.305 1.488.87 4.844.87 9.008v138.09a7.405 7.405 0 0 0 7.402 7.402h883.454a7.405 7.405 0 0 0 7.402-7.402zm0 0"/></g></svg>`;
</script>

<!-- About Section -->
<div class="relative flex h-auto w-full justify-center bg-primary xl:pb-44 xl:pt-20">
	<section class="h-min w-full xl:w-[1200px]">
		<h2 class="py-1 text-left font-tanaegean text-2xl text-tertiary xl:pb-20">
			Get to know your favorite plus one
		</h2>
		<div class="flex flex-wrap">
			<img src={profileNik} alt="nicolette-tomasetti" class="mb-5 mr-5 h-auto w-1/4" />
			<span class="w-full flex-1 font-tenorsans text-xl text-black">
				Hi! My name is Nicolette, I am the founder of Plus One Content. My mission is to preserve
				life's most special moments by creating content that you want to live inside of. I'm here to
				capture all of the important, intimate behind the scenes moments and details and deliver
				them to you within 24 hours. Whether it's a wedding, a birthday, or even a regular day, my
				content captures the energy of life, so you can look back and relive every detail again.<br
				/><br />I'm not here to replace your incredible photographer and videographer, they'll
				handle the professional pictures you put on the mantle. I'm here to capture the details and
				moments you're afraid of missing. We can even throw in some TikTok trends and have some fun!
				Think of me as your ultimate bridesmaid.
			</span>
		</div>
	</section>

	<div class="absolute bottom-10 left-0 flex h-auto items-center">
		<div class="max-h-6 w-[50vw]">
			{@html DividerSvg}
		</div>
		<div class="-ml-2 max-h-6 w-[50vw]">
			{@html DividerSvg}
		</div>
	</div>
</div>
