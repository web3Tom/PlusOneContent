<script>
	import heroImg from '$lib/assets/images/assetImg_1.1_hero-backyard-zoom.jpg';
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
		alt="Wedding Content creator in New Jersey; bridal shower detail shot. European love affair. Italian bridal theme. Lingerie display."
		style="object-position: center 15%;"
		class="absolute inset-0 -z-10 h-full w-full object-cover object-bottom brightness-[.65]"
	/>
	<main class="mx-auto xl:w-[1200px] xl:pt-44">
		<img
			src={cameraLogo}
			alt="Unique section of PlusOneContent Logo"
			class="mx-auto h-auto xl:w-[8%] xl:pb-6"
		/>
		<h1 class="mx-auto text-center font-tanaegean font-semibold text-primary xl:pb-20 xl:text-6xl">
			Content You'll Cherish Forever
		</h1>
		<h2 class="mx-auto text-center font-tanaegean text-primary xl:pb-3 xl:text-2xl">
			Social Content Creation for Life Changing Events
		</h2>
		<!-- CTA Container -->
		<button
			class="mx-auto flex h-10 w-fit transform bg-gradient-to-tr from-[#eda915] via-tertiary to-secondary p-8 shadow-top-right transition-transform duration-300 ease-in hover:translate-y-[-5px] xl:mt-14"
		>
			<a
				href={null}
				class="back flex h-full w-full items-center bg-transparent px-5 font-tenorsans font-semibold text-white transition-colors xl:text-base"
				>See Availability</a
			>
		</button>
		<div class="mx-auto flex w-auto items-start justify-center xl:mt-6">
			<p class="mr-2 font-tenorsans font-semibold leading-7 text-white xl:text-[15px]">
				Your favorite plus one, guaranteed
			</p>
			<img src={heartIcon} class="w-6 align-top" alt="heart-emoji" />
		</div>
	</main>
	<div
		class="circle-div absolute bottom-0 left-1/2 flex h-24 w-24 -translate-x-1/2 translate-y-1/2 transform justify-start rounded-full bg-primary"
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
