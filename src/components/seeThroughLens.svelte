<script>
	import iphoneContainer from '$lib/assets/images/assetImg_5.1_phone-component.png';
</script>

<section
	class="relative min-h-screen w-full flex-col items-center justify-start overflow-hidden bg-primary p-28"
>
	<!-- main component -->
	<div class="mb-36 mt-10 flex items-center justify-center gap-x-10">
		<svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24"
			><path
				class="fill-tertiary"
				d="m9 4l2.5 5.5L17 12l-5.5 2.5L9 20l-2.5-5.5L1 12l5.5-2.5L9 4m0 4.83L8 11l-2.17 1L8 13l1 2.17L10 13l2.17-1L10 11L9 8.83M19 9l-1.26-2.74L15 5l2.74-1.25L19 1l1.25 2.75L23 5l-2.75 1.26L19 9m0 14l-1.26-2.74L15 19l2.74-1.25L19 15l1.25 2.75L23 19l-2.75 1.26L19 23Z"
			/></svg
		>
		<h1 class="font-tanaegean text-5xl text-tertiary">See yourself through my lens</h1>
		<svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24"
			><g transform="translate(24 0) scale(-1 1)"
				><path
					class="fill-tertiary"
					d="m9 4l2.5 5.5L17 12l-5.5 2.5L9 20l-2.5-5.5L1 12l5.5-2.5L9 4m0 4.83L8 11l-2.17 1L8 13l1 2.17L10 13l2.17-1L10 11L9 8.83M19 9l-1.26-2.74L15 5l2.74-1.25L19 1l1.25 2.75L23 5l-2.75 1.26L19 9m0 14l-1.26-2.74L15 19l2.74-1.25L19 15l1.25 2.75L23 19l-2.75 1.26L19 23Z"
				/></g
			></svg
		>
	</div>
	<div class="relative flex h-auto w-full justify-start">
		<div class="ml-[270px] mt-[7px] w-[350px] overflow-hidden rounded-3xl">
			<video class="h-auto w-auto grayscale filter" autoplay loop>
				<source src="/assetVid_1.1_walking-down-alley.mp4" type="video/mp4" />
				<track kind="captions" />
				Your browser does not support the video tag.
			</video>
		</div>
		<img
			class="absolute top-0 z-10 ml-[258px] h-[634px] w-[375px]"
			src={iphoneContainer}
			alt="iphone-container"
		/>
		<div class="ml-[300px] h-full flex-col items-start justify-center">
			<div class="pb-16 text-left font-tenorsans">
				<h2 class="text-4xl text-secondary underline">Contact</h2>
				<span class="text-xl text-secondary">hello@PlusOneContent.com</span>
			</div>
			<div class="text-left font-tenorsans">
				<h2 class="text-4xl text-secondary underline">Contact</h2>
				<span class="text-xl text-secondary">hello@PlusOneContent.com</span>
			</div>
		</div>
	</div>
</section>
