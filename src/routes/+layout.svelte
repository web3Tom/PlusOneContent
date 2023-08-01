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
	class={`fixed left-0 top-0 z-10 w-screen py-2 transition-all duration-300 ease-in-out ${
		scrolled ? `bg-white shadow-md` : `bg-transparent`
	}`}
>
	<nav class="mx-auto flex content-center justify-between xl:w-[1200px]">
		<!-- LOGO -->
		<div class="">
			<img src={`${scrolled ? altLogo : logo}`} alt="PlusOneContent Logo" class="h-16" />
		</div>
		<!-- NAV LINKS -->
		<div class="flex w-auto items-center">
			<div class="mr-28 flex items-center transition-all duration-300 ease-in-out">
				<ul class={`flex gap-8 ${scrolled ? `text-black` : `text-white`}`}>
					<li>
						<a
							href={null}
							class="cursor-pointer rounded-2xl px-4 py-[6px] transition hover:bg-black hover:text-white xl:text-lg"
							>Home</a
						>
					</li>
					<li>
						<a
							href={null}
							class="cursor-pointer rounded-2xl px-4 py-[6px] transition hover:bg-black hover:text-white xl:text-lg"
							>Pricing</a
						>
					</li>
					<li>
						<a
							href={null}
							class="cursor-pointer rounded-2xl px-4 py-[6px] transition hover:bg-black hover:text-white xl:text-lg"
							>Recent Work</a
						>
					</li>
				</ul>
			</div>
			<button
				class={`rounded-xl border-2 px-4 py-2 transition-all duration-300 ease-in-out ${
					scrolled
						? `border-black bg-white text-black hover:bg-black hover:text-white`
						: `border-white bg-black text-white hover:border-black hover:bg-white hover:text-black`
				} `}
			>
				<a href={null} class="">Get Started</a>
			</button>
		</div>
	</nav>
</div>

<slot />
