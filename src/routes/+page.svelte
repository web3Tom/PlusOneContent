<script>
	import heroImg from '$lib/assets/images/assetImg_1.1_hero-backyard-zoom.jpg';
	import Icon from '@iconify/svelte';
	import WeddingPackages from '../components/weddingPackages.svelte';
	import AboutMe from '../components/aboutMe.svelte';
	import AlaCarteServices from '../components/alaCarteServices.svelte';
	import QuoteComponent from '../components/quoteComponent.svelte';
	import SeeThroughLens from '../components/seeThroughLens.svelte';
</script>

<div class="relative flex h-[85vh] w-full items-center justify-center">
	<img
		src={heroImg}
		title="Bridal detail shot wedding content"
		alt="Wedding Content creator in New Jersey; bridal shower detail shot. European love affair. Italian bridal theme. Lingerie display."
		class="absolute inset-0 -z-10 h-full w-full object-cover brightness-[.65]"
	/>
	<main class="flex-col items-center justify-start">
		<h1 class="pb-4 text-center font-tanaegean text-7xl text-primary">Plus One Content</h1>
		<h2 class="text-center font-sans text-4xl text-primary">Your Favorite Plus One</h2>
		<!-- Span: Wedding & Event Content Creation Scroll with "Your Favorite Plust One" -->
		<button
			class="mx-auto mt-32 flex border border-primary bg-transparent px-4 py-3 text-center font-tenorsans text-lg text-primary hover:bg-primary hover:text-black"
			>Book A Consultation</button
		>
	</main>
	<div
		class="via- absolute bottom-0 h-[10vh] w-[100vw] bg-gradient-to-b from-transparent via-white/25 via-50% to-white"
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
