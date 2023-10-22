<script>
	// import logo from '$lib/assets/images/assetImg_0.1_navigation-logo.svg';
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
<div
	class="sticky top-0 z-50 w-screen bg-bgp transition-all duration-300 ease-in-out {scrolled
		? 'shadow-lg'
		: ''}"
>
	<div class="mx-auto flex w-9/12 items-center justify-between font-tenorsans">
		<!-- LOGO -->
		<div class="xl:pb-1 xl:pt-2">
			<img src={altLogo} alt="PlusOneContent Logo" class="h-14" />
		</div>
		<!-- NAV LINKS -->
		<nav class="flex items-center transition-all duration-300 ease-in-out xl:mr-8">
			<ul class="flex items-end gap-y-10 text-[15px] text-txtp xl:gap-x-14 xl:text-base">
				<li
					class="border-b-2 border-transparent transition-all duration-100 ease-in-out hover:border-txtp"
				>
					<a href="#home" class="cursor-pointer">HOME</a>
				</li>
				<li
					class="border-b-2 border-transparent transition-all duration-100 ease-in-out hover:border-txtp"
				>
					<a href="#about" class="cursor-pointer">ABOUT</a>
				</li>
				<li
					class="border-b-2 border-transparent transition-all duration-100 ease-in-out hover:border-txtp"
				>
					<a href="#pricing" class="cursor-pointer">PRICING</a>
				</li>
				<li
					class="border-b-2 border-transparent transition-all duration-100 ease-in-out hover:border-txtp"
				>
					<a href="#portfolio" class="cursor-pointer">PORTFOLIO</a>
				</li>
			</ul>
		</nav>
		<div class="flex justify-self-end">
			<a
				href="#schedule"
				class="flex h-10 cursor-pointer items-center rounded-lg border-2 border-black bg-transparent text-center text-sm font-semibold text-black transition-all duration-100 hover:border-gray-900 hover:bg-black hover:text-white focus:outline-none focus:ring-4 focus:ring-primary xl:px-6"
			>
				AVAILABILITY
			</a>
		</div>
	</div>
</div>

<slot />
