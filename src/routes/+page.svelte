<script>
	import heroImg from '$lib/assets/images/assetImg_1.1_wedding-stock.png';
	import logo from '$lib/assets/images/assetImg_0.1_navigation-logo.svg';
	import cameraLogo from '$lib/assets/images/assetImg_1.4_hero-logo-camera.svg';
	import heartIcon from '$lib/assets/images/assetImg_1.5_hero-heart-icon.svg';
	import womanCamera from '$lib/assets/images/assetImg_1.6_woman-taking-photo.svg';
	import ImageSlider from '../components/imageSlider.svelte';
	import WeddingPackages from '../components/weddingPackages.svelte';
	import AboutMe from '../components/aboutMe.svelte';
	import AlaCarteServices from '../components/alaCarteServices.svelte';
	import QuoteComponent from '../components/quoteComponent.svelte';
	import SeeThroughLens from '../components/seeThroughLens.svelte';
</script>

<section class="relative h-[85vh] w-screen overflow-hidden">
	<img
		src={heroImg}
		title="Bridal detail shot wedding content"
		alt="Wedding Content creator in New Jersey; etail shot. European love affair. Italian bridal theme. Lingerie display."
		style="object-position: center 15%;"
		class="absolute inset-0 -z-10 h-full w-full object-cover object-bottom brightness-[.65]"
	/>
	<main class="mx-auto xl:w-[1400px] xl:pt-44">
		<img
			src={logo}
			alt="Unique section of PlusOneContent Logo"
			class="mx-auto h-auto xl:w-[10%] xl:pb-6"
		/>
		<h1 class="mx-auto text-center font-tanaegean font-semibold text-white xl:pb-16 xl:text-6xl">
			Content You'll Want to <span class="pl-2 text-white">Live Inside Of</span>
		</h1>
		<h2 class="mx-auto text-center font-tanaegean text-white xl:pb-10 xl:text-2xl">
			Wedding and Event Content Creation for Life's Biggest Moments
		</h2>
		<!-- CTA Container -->
		<button
			class="mx-auto flex h-10 w-fit transform rounded-lg border-2 border-white bg-transparent p-8 px-5 py-2.5 text-center text-sm font-semibold text-white transition-all duration-100 hover:border-gray-900 hover:bg-black hover:text-white focus:outline-none focus:ring-4 focus:ring-primary xl:mt-14"
		>
			<a
				href={null}
				class="flex h-full w-full items-center px-5 font-tenorsans font-semibold xl:text-xl"
				>Inquire Here</a
			>
		</button>
		<div class="mx-auto flex w-auto items-start justify-center xl:mt-4">
			<p class="mr-2 font-tenorsans font-semibold leading-7 text-white xl:text-sm">
				Your favorite plus one, guaranteed
			</p>
			<img src={heartIcon} class="w-6 align-top" alt="heart-emoji" />
		</div>
	</main>
	<div
		class="circle-div absolute bottom-0 left-1/2 flex h-24 w-24 -translate-x-1/2 translate-y-1/2 transform justify-start rounded-full bg-bgp"
	>
		<img src={womanCamera} alt="girl-with-camera" class="mx-auto pt-2" />
	</div>
</section>

<!-- image slider -->
<!-- <div class="w- h-[30vh] overflow-hidden bg-primary pt-3">
	<ImageSlider />
</div> -->

<AboutMe />
<QuoteComponent />
<WeddingPackages />
<AlaCarteServices />
<SeeThroughLens />
