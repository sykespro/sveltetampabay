<script>
	import '../app.css';

	try {
		if (typeof window !== 'undefined' && window) {
			const googleAnalyticsId = 'G-FQRWWSMR0Z';
			// @ts-ignore
			window.dataLayer = window.dataLayer || [];

			function gtag() {
				// @ts-ignore
				window.dataLayer.push(arguments);
			}
			gtag('js', new Date());
			gtag('config', googleAnalyticsId);
		}
	} catch (error) {
		console.error('Failed to initialize Analytics');
	}
</script>

<svelte:head>
	<script async src="https://www.googletagmanager.com/gtag/js?id=G-FQRWWSMR0Z"></script>
</svelte:head>
<div
	class="h-screen bg-cover bg-center bg-no-repeat"
	style="background-image: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.9)), url('/images/sveltetampabay-bg01.webp');"
>
	<div class="container mx-auto w-full ">
		<slot />
	</div>
</div>
