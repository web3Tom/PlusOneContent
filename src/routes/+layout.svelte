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
<div
	class="fixed left-0 top-0 z-10 w-screen bg-primary py-2 transition-all duration-300 ease-in-out"
>
	<nav class="mx-auto flex content-center justify-between xl:w-[1200px]">
		<!-- LOGO -->
		<div class="">
			<img src={altLogo} alt="PlusOneContent Logo" class="h-16" />
		</div>
		<!-- NAV LINKS -->
		<div class="flex w-auto items-center">
			<div class="flex items-center transition-all duration-300 ease-in-out xl:mr-10">
				<ul class="flex gap-6 font-tenorsans text-black">
					<li>
						<a
							href={null}
							class="cursor-pointer px-4 py-[6px] transition hover:text-tertiary xl:text-sm">HOME</a
						>
					</li>
					<li>
						<a
							href={null}
							class="cursor-pointer px-4 py-[6px] transition hover:text-tertiary xl:text-sm"
							>ABOUT</a
						>
					</li>
					<li>
						<a
							href={null}
							class="cursor-pointer px-4 py-[6px] transition hover:text-tertiary xl:text-sm"
							>PRICING</a
						>
					</li>
					<li>
						<a
							href={null}
							class="cursor-pointer px-4 py-[6px] transition hover:text-tertiary xl:text-sm"
							>PORTFOLIO</a
						>
					</li>
				</ul>
			</div>
			<button
				class="flex h-10 w-full bg-gradient-to-tr from-[#eda915] via-tertiary to-secondary p-[2px] transition-colors duration-300 ease-in"
			>
				<a
					href={null}
					class="back flex h-full w-full items-center bg-primary px-5 font-tenorsans text-tertiary transition-colors hover:bg-transparent hover:font-semibold hover:text-white xl:text-sm"
					>AVAILABILITY</a
				>
			</button>
		</div>
	</nav>
</div>

<slot />
