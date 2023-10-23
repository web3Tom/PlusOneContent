<script>
	import Icon from '@iconify/svelte';
	import altLogo from '$lib/assets/images/assetImg_0.2_alt-navigation-logo.svg';
	import pocTextLogo from '$lib/assets/images/assetSVG_POC-LogoText.svg';
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
<!-- Navbar -->
<div
	class="sticky top-0 z-50 w-screen bg-bgp transition-all duration-200 ease-in-out {scrolled
		? 'shadow-lg'
		: ''}"
>
	<div class="relative mx-auto max-w-6xl">
		<nav class="grid grid-cols-3 items-center py-2 font-tenorsans">
			<!-- Left Menu -->
			<div class="flex justify-end gap-x-10">
				<span class="border-b-2 border-transparent py-2 hover:border-b-2 hover:border-black">
					<a href="#about" class="text-base text-black">About</a>
				</span>
				<span class="border-b-2 border-transparent py-2 hover:border-b-2 hover:border-black">
					<a href="#packages" class="text-base text-black">Services</a>
				</span>
			</div>

			<!-- Logo -->
			<div class="flex justify-center">
				<img src={pocTextLogo} alt="Plus One Content Logo" class="h-16 w-auto" />
			</div>

			<!-- Right Menu + INQUIRE Button -->
			<div class="relative flex justify-start gap-x-10">
				<span class="py-2">
					<a href="#about" class="text-base text-black">
						<Icon icon="mdi:instagram" style="font-size: 30px;" />
					</a>
				</span>
				<span class="py-2">
					<a href="#about" class="text-base text-black">
						<Icon icon="ic:baseline-tiktok" style="font-size: 30px;" />
					</a>
				</span>
				<span class="absolute right-0">
					<a
						href="#inquire"
						class="flex h-10 cursor-pointer items-center rounded-lg border-2 border-black bg-transparent text-center text-sm font-semibold text-black transition-all duration-100 hover:border-gray-900 hover:bg-black hover:text-white focus:outline-none focus:ring-4 focus:ring-primary xl:px-6"
					>
						INQUIRE
					</a>
				</span>
			</div>
		</nav>
	</div>
</div>

<slot />
