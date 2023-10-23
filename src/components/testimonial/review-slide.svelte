<script>
	import { slide } from 'svelte/transition';

	export let prevImage;
	export let currentImage;
	export let nextImage;
	export let reviewText;
	export let reviewerName;
</script>

<div class="flex justify-center gap-x-10" transition:slide={{ duration: 300 }}>
	<img class="h-40 w-auto" src={prevImage} alt="test" />
	<img class="h-64 w-auto" src={currentImage} alt="test" />
	<img class="h-40 w-auto" src={nextImage} alt="test" />
</div>
<blockquote
	class="mx-auto max-w-3xl flex-col items-center pt-8 font-opensans text-lg font-semibold italic text-slate-800"
>
	<svg
		aria-hidden="true"
		class="mx-auto h-10 w-10 text-slate-800"
		viewBox="0 0 24 27"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		><path
			d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z"
			fill="currentColor"
		/></svg
	>
	<p class="mt-3 h-[200px] text-center font-tenorsans text-base font-normal">
		{reviewText}
	</p>
	<p class="mt-5 text-center">- {reviewerName}</p>
</blockquote>
