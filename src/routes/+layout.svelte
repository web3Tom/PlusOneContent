<script>
	import logo from '$lib/assets/images/assetImg_0.1_navigation-logo.svg';
	import '../global.css';
</script>

<!-- Navbar -->
<div
	class="fixed left-0 top-0 flex w-full content-center justify-between bg-transparent px-16 py-2"
>
	<div class="">
		<img src={logo} alt="PlusOneContent Logo" class="h-16" />
	</div>
	<div class="color flex w-auto items-center text-white">
		<nav class="mr-28 flex items-center">
			<ul class="flex gap-8">
				<li>Home</li>
				<li>Pricing</li>
				<li>Recent Work</li>
			</ul>
		</nav>
		<button class="rounded-xl border-2 border-white bg-black px-4 py-2 text-white">
			Get Started
		</button>
	</div>
</div>

<slot />
