<script lang="ts">
    import "../app.css";
    import type { LayoutData } from './$types';
    
    //export let data: LayoutData;
</script>
<div class="h-screen bg-no-repeat bg-cover bg-center" 
style="background-image: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.9)), url('/images/sveltetampabay-bg01.webp');" >
<div class="container mx-auto w-full " >
    <slot />
</div></div>