<script>
	import logo from '$lib/assets/images/assetImg_0.1_navigation-logo.svg';
	import altLogo from '$lib/assets/images/assetImg_0.2_alt-navigation-logo.svg';
	import '../global.css';
	import { onMount } from 'svelte';

	// Change Navigation CSS when user scrolls down
	let scrolled = false;
	onMount(() => {
		const handleScroll = () => {
			scrolled = window.scrollY > 100; // The pixels scrolled that trigger the change
		};
		window.addEventListener('scroll', handleScroll);

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	});
</script>

<!-- Navbar -->
<div class="fixed left-0 top-0 z-10 w-screen bg-bgp transition-all duration-300 ease-in-out">
	<nav class="mx-auto flex content-center justify-between font-tenorsans xl:w-11/12">
		<!-- LOGO -->
		<div class="xl:pb-1 xl:pt-2">
			<img src={altLogo} alt="PlusOneContent Logo" class="h-16" />
		</div>
		<!-- NAV LINKS -->
		<div class="flex w-auto items-center">
			<div class="flex items-center transition-all duration-300 ease-in-out xl:mr-8">
				<ul class="flex items-end text-txtp xl:gap-6">
					<li
						class="border-b-2 border-transparent transition-all duration-100 ease-in-out hover:border-txtp"
					>
						<a href={null} class="cursor-pointer px-4 transition xl:text-base">HOME</a>
					</li>
					<li
						class="border-b-2 border-transparent transition-all duration-100 ease-in-out hover:border-txtp"
					>
						<a href={null} class="cursor-pointer px-4 transition xl:text-base">ABOUT</a>
					</li>
					<li
						class="border-b-2 border-transparent transition-all duration-100 ease-in-out hover:border-txtp"
					>
						<a href={null} class="cursor-pointer px-4 transition xl:text-base">PRICING</a>
					</li>
					<li
						class="border-b-2 border-transparent transition-all duration-100 ease-in-out hover:border-txtp"
					>
						<a href={null} class="cursor-pointer px-4 transition xl:text-base">PORTFOLIO</a>
					</li>
				</ul>
			</div>
			<button
				class="mb-2 mr-2 flex h-10 w-full rounded-lg border-2 border-black bg-transparent px-5 py-2.5 text-center text-sm font-semibold text-black transition-all duration-100 hover:border-gray-900 hover:bg-black hover:text-white focus:outline-none focus:ring-4 focus:ring-primary"
				type="button"
			>
				<a href={null} class="flex h-full w-full items-center xl:px-2">AVAILABILITY</a>
			</button>
		</div>
	</nav>
</div>

<slot />
