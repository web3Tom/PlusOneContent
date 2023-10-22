<script>
	import heroImg from '$lib/assets/images/assetImg_1.1_hero-img-nt-v2.png';
	import logo from '$lib/assets/images/assetImg_0.1_navigation-logo.svg';
	import cameraLogo from '$lib/assets/images/assetImg_1.4_hero-logo-camera.svg';
	import heartIcon from '$lib/assets/images/assetImg_1.5_hero-heart-icon.svg';
	import womanCamera from '$lib/assets/images/assetImg_1.6_woman-taking-photo.svg';
	import ImageSlider from '../components/image-slider.svelte';
	import AboutMe from '../components/about-me.svelte';
	import QuoteComponent from '../components/quote-component.svelte';
	import WeddingPackages from '../components/WeddingPackages/wedding-packages.svelte';
	import AlaCarteServices from '../components/ala-carte-services.svelte';
	import SeeThroughLens from '../components/see-through-lens.svelte';
</script>

<section
	class="relative w-screen overflow-hidden border border-b-2 border-t-2 border-black xl:min-h-[500px]"
>
	<img
		src={heroImg}
		title="Bridal detail shot wedding content"
		alt="Wedding Content creator in New Jersey; Detail shot. European love affair. Italian bridal theme. Lingerie display."
		style="object-position: center 15%;"
		class="absolute inset-0 -z-10 h-full w-1/2 object-cover brightness-[.65]"
	/>
	<div class="pb-20 pt-5">
		<!-- <img
			src={logo}
			alt="Unique section of PlusOneContent Logo"
			class="h-auto w-1/12 xl:pb-6 2xl:w-[10%]"
		/> -->
		<main class="ml-auto mt-28 max-w-fit text-center xl:mr-32">
			<h1 class="mb-5 whitespace-nowrap font-tanaegean text-4xl text-black 2xl:mb-16 2xl:text-6xl">
				Content You'll Want to Live Inside Of
			</h1>
			<h2 class="whitespace-wrap mb-16 font-tanaegean text-xl italic text-black 2xl:text-2xl">
				Wedding and Event Content Creation for Life's <b>Biggest</b> Moments
			</h2>
			<!-- CTA Container -->
			<a
				href="#schedule"
				class="h-10 transform cursor-pointer rounded-lg border-2 border-black bg-transparent px-5 py-2.5 font-tenorsans text-sm font-semibold text-black transition-all duration-100 hover:bg-black hover:text-white xl:text-xl"
			>
				Inquire Here
			</a>
			<div class="mx-auto flex w-auto items-start justify-center xl:mt-4">
				<p class="mr-2 font-tenorsans font-semibold leading-7 text-black xl:text-sm">
					Your favorite plus one, guaranteed
				</p>
				<img src={heartIcon} class="w-6 align-top" alt="heart-emoji" />
			</div>
		</main>
	</div>
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
