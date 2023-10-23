<script>
	import makeUpMirror from '$lib/assets/images/assetImg_3.1_MakeUpMirror.png';
</script>

<!-- Ala Carte Services  Section -->
<section
	class="relative min-h-screen w-full flex-col items-center justify-start overflow-hidden bg-white p-28"
>
	<h2
		class="custom-underline mb-10 mt-24 translate-x-0 pb-6 text-center font-tanaegean text-2xl text-txtp underline-offset-2 opacity-100"
	>
		A La Carte Services
	</h2>
	<!-- Triple Column Services -->
	<div class="max-w-6xl flex-col items-center justify-center">
		<div class="flex items-center justify-start">
			<div class="h-44 w-64">
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
