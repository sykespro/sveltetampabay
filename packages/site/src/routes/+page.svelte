<script lang="ts">
	import logo from '$lib/assets/svelte-tampabay-logo.png';
	import { siteSettings } from '$lib/configs/site';

	export let form;
</script>

<svelte:head>
	<title>{siteSettings.title}</title>
	<meta name="description" content={siteSettings.description} />
</svelte:head>
<div class="m-5 flex flex-col justify-items-center gap-2 text-white md:gap-4 lg:gap-6">
	<img src={logo} width="225px" height="225px" alt="Svelte Tampa Bay Logo" class="mx-auto" />
	<h1 class="mx-auto my-5 text-3xl antialiased md:text-4xl lg:text-6xl">
		Welcome to Svelte Tampa Bay
	</h1>
	<div
		class="lg:px-50 text-center text-xl font-light leading-7 antialiased  md:px-11 lg:text-3xl lg:leading-9"
	>
		<p>
			Join a community of passionate developers and take your skills with the Svelte framework to
			the next level. Our mission is to build a local community for knowledge sharing,
			collaboration, and networking, so you can grow, learn, and build amazing things together.
		</p>
		<p class="p-4">Ready to be a part of the movement?</p>
	</div>
	<div class="flex  items-center justify-center gap-6">
		<a href={siteSettings.twitter} target="_blank" rel="noreferrer">
			<svg xmlns="http://www.w3.org/2000/svg" class="h-9 w-9 fill-[#FF3E00]" viewBox="0 0 24 24"
				><path
					d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6.066 9.645c.183 4.04-2.83 8.544-8.164 8.544-1.622 0-3.131-.476-4.402-1.291 1.524.18 3.045-.244 4.252-1.189-1.256-.023-2.317-.854-2.684-1.995.451.086.895.061 1.298-.049-1.381-.278-2.335-1.522-2.304-2.853.388.215.83.344 1.301.359-1.279-.855-1.641-2.544-.889-3.835 1.416 1.738 3.533 2.881 5.92 3.001-.419-1.796.944-3.527 2.799-3.527.825 0 1.572.349 2.096.907.654-.128 1.27-.368 1.824-.697-.215.671-.67 1.233-1.263 1.589.581-.07 1.135-.224 1.649-.453-.384.578-.87 1.084-1.433 1.489z"
				/></svg
			></a
		>
		<a href={siteSettings.facebook} target="_blank" rel="noreferrer">
			<svg xmlns="http://www.w3.org/2000/svg" class="h-9 w-9 fill-[#FF3E00]" viewBox="0 0 24 24"
				><path
					d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm3 8h-1.35c-.538 0-.65.221-.65.778v1.222h2l-.209 2h-1.791v7h-3v-7h-2v-2h2v-2.308c0-1.769.931-2.692 3.029-2.692h1.971v3z"
				/></svg
			></a
		>
	</div>
	<div class="mt-4 bg-black bg-opacity-80 pb-4 md:mx-16 lg:mx-48">
		<form method="POST" action="?/subscribe">
			<div class="flex flex-col p-5">
				{#if form?.errors?.email}
					<div
						class="mb-4 border-l-4 border-orange-500 bg-orange-100 p-4 text-orange-700"
						role="alert"
					>
						<p class="font-bold">Not Subscribed</p>
						<p>{form?.errors?.email[0]}</p>
					</div>
				{/if}
				{#if form?.status == 200 || form?.status == 500}
					<div
						class="mb-4 border-l-4 border-green-500 bg-green-100 p-4 text-green-700"
						role="alert"
					>
						<p class="font-bold">Subscribed</p>
						<p>{form?.body.message}</p>
					</div>
				{/if}
				<label for="email" class="sr-only">Email address</label>
				<input
					value={form?.data?.email ?? ''}
					placeholder="Email Address"
					type="text"
					name="email"
					class="mb-3 h-10  p-3 text-gray-900 focus:outline-none focus:ring-1 focus:ring-[#FF3E00] focus:ring-offset-1 {form
						?.errors?.email
						? 'border-2 border-red-500'
						: ''} "
				/>
				<button
					class=" border border-transparent bg-[#FF3E00] px-4 py-2 text-lg font-medium text-white hover:bg-[#FF3E00] focus:outline-none focus:ring-2 focus:ring-[#FF3E00] focus:ring-offset-2"
					>SUBSCRIBE</button
				>
			</div>
		</form>
		<div class="text-center text-base font-thin tracking-wide text-gray-300 antialiased">
			We will only notify you when there are updates with the community. No spam, we promise!
		</div>
	</div>
</div>
