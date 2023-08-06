<script>
	import heroImg from '$lib/assets/images/assetImg_1.1_hero-backyard-zoom.jpg';
	import ImageSlider from '../components/imageSlider.svelte';
	import WeddingPackages from '../components/weddingPackages.svelte';
	import AboutMe from '../components/aboutMe.svelte';
	import AlaCarteServices from '../components/alaCarteServices.svelte';
	import QuoteComponent from '../components/quoteComponent.svelte';
	import SeeThroughLens from '../components/seeThroughLens.svelte';
</script>

<div class="relative h-[75vh] w-screen overflow-hidden">
	<img
		src={heroImg}
		title="Bridal detail shot wedding content"
		alt="Wedding Content creator in New Jersey; bridal shower detail shot. European love affair. Italian bridal theme. Lingerie display."
		style="object-position: center 15%;"
		class="absolute inset-0 -z-10 h-full w-full object-cover object-bottom brightness-[.65]"
	/>
	<main class="xl:pb-52 xl:pt-56">
		<h1 class="mx-auto text-center font-tanaegean text-primary xl:pb-4 xl:text-7xl">
			Plus One Content
		</h1>
		<h3 class="mx-auto text-center font-tanaegean text-primary xl:text-2xl">
			Your Favorite Plus One
		</h3>
		<!-- CTA Container -->
		<button
			class="mx-auto flex h-10 w-fit bg-gradient-to-tr from-[#eda915] via-tertiary to-secondary p-[2px] transition-colors duration-300 ease-in xl:mt-32"
		>
			<a
				href={null}
				class="back flex h-full w-full items-center bg-orange-100 px-5 font-tenorsans font-semibold text-tertiary transition-colors hover:bg-transparent hover:text-white xl:text-sm"
				>AVAILABILITY</a
			>
		</button>
	</main>
	<div
		class="circle-div absolute bottom-0 left-1/2 h-32 w-32 -translate-x-1/2 translate-y-1/2 transform overflow-hidden rounded-full bg-transparent"
	>
		<div
			class="relative flex h-full w-full flex-col items-center rounded-full bg-primary font-tanaegean text-sm font-semibold text-tertiary"
		>
			<span class="translate-y-4">Recent</span>
			<span class="translate-y-5">Work</span>
		</div>
	</div>
</div>

<!-- middle bar -->
<div class="h-[35vh] w-auto overflow-hidden bg-primary pt-8">
	<ImageSlider />
</div>

<AboutMe />
<WeddingPackages />
<QuoteComponent />
<AlaCarteServices />
<SeeThroughLens />
