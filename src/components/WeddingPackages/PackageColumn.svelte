<script>
	import Icon from '@iconify/svelte';

	export let title;
	export let imgSrc;
	export let price;
	export let items = [];
	export let popular = false;
</script>

<div
	class="relative z-20 flex-col items-center justify-start rounded-xl {popular
		? ' border-4 border-gray-800 bg-black'
		: 'border-2 border-gray-200 bg-white'}  px-3 pb-3 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
>
	<span
		class="text-xm rounded-full border-4 border-black bg-white px-2 font-opensans font-bold uppercase {popular
			? `absolute right-1/2 top-0 -translate-y-3/4 translate-x-1/2`
			: `hidden`}">most popular</span
	>
	<div class="-mx-4 -mt-2 mb-4 overflow-hidden rounded-t-xl">
		<h2
			class="-mx-3 {popular
				? 'bg-white'
				: 'bg-zinc-600 text-white'} pb-3 pt-5 text-center font-tanaegean text-xl font-semibold"
		>
			{title}
		</h2>
	</div>
	<div class="mx-auto mb-5 overflow-hidden rounded-full xl:h-[117px] xl:w-52">
		<img class="h-full w-full object-cover" alt="wedding-package" src={imgSrc} />
	</div>
	<p
		class="mb-4 {popular
			? 'border-white text-white'
			: 'border-gray-200'} border-b-2 pb-4 pl-12 font-tanaegean text-2xl font-semibold"
	>
		<span class="pr-3 text-xs font-normal {popular ? 'text-white' : 'text-gray-600'}"
			>Starting at...</span
		>{price}
	</p>
	<ul class="mb-10 w-full list-none space-y-3 text-left text-[15px] xl:h-[310px]">
		{#each items as item}
			<li class="flex justify-start p-2">
				{#if item.icon}
					<span class="w-4"
						><Icon icon="octicon:sparkle-fill-16" color={popular ? 'white' : 'black'} /></span
					>
				{/if}
				<span
					class={item.icon ? '-mt-1 pl-3' : '-mt-1'}
					style="color: {popular ? 'white' : 'black'}">{item.text}</span
				>
			</li>
		{/each}
	</ul>
	<div class="pb-6 text-center">
		<a
			href="#availability"
			class="transform cursor-pointer rounded-lg border-2 {popular
				? 'border-white bg-black text-white hover:bg-white hover:text-black'
				: 'border-black bg-white text-black'} px-5 py-2 font-tenorsans text-lg font-semibold transition-all duration-100 hover:bg-black hover:text-white"
			>Inquire</a
		>
	</div>
</div>
