<script>
	import heroImg from '$lib/assets/images/assetImg_1.1_hero-backyard-zoom.jpg';
	import Icon from '@iconify/svelte';
	import WeddingPackages from '../components/weddingPackages.svelte';
	import AboutMe from '../components/aboutMe.svelte';
	import AlaCarteServices from '../components/alaCarteServices.svelte';
	import QuoteComponent from '../components/quoteComponent.svelte';
	import SeeThroughLens from '../components/seeThroughLens.svelte';
</script>

<div class="relative w-screen">
	<img
		src={heroImg}
		title="Bridal detail shot wedding content"
		alt="Wedding Content creator in New Jersey; bridal shower detail shot. European love affair. Italian bridal theme. Lingerie display."
		class="absolute inset-0 -z-10 h-full w-full object-cover brightness-[.65]"
	/>
	<main class="xl:pb-52 xl:pt-56">
		<h1 class="mx-auto text-center font-tanaegean text-primary xl:pb-4 xl:text-7xl">
			Plus One Content
		</h1>
		<h3 class="mx-auto text-center font-sans text-primary xl:text-4xl">Your Favorite Plus One</h3>
		<!-- CTA Container -->
		<div class="mx-auto flex w-full max-w-3xl justify-evenly xl:mt-32">
			<button
				class="rounded-xl border-2 border-white bg-black px-4 py-2 text-center text-white transition-all duration-300 ease-in-out hover:border-black hover:bg-white hover:text-black lg:px-4 lg:py-3 xl:text-lg"
			>
				<a href={null} class="">Book A Consultation</a>
			</button>
		</div>
	</main>
	<div
		class="absolute bottom-0 h-[10%] w-full bg-gradient-to-b from-transparent via-white/25 via-50% to-white"
	/>
</div>

<!-- middle bar -->
<div class="flex h-[15vh] items-center justify-center bg-white text-center">
	<span class="my-auto">Something goes here</span>
</div>

<AboutMe />
<WeddingPackages />
<QuoteComponent />
<AlaCarteServices />
<SeeThroughLens />
