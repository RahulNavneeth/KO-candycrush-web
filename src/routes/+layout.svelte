<script lang="ts">
	import { drop_extra_token } from '../libs/default/tokens/extra';
	import { drop } from '../libs/functions/drop';
	import { onMount } from 'svelte';
	import '../app.css';

	onMount(() => {
		drop();
		drop_extra_token();
	});
</script>

<div class="w-screen h-screen bg-black flex flex-col items-center justify-center font-primary">
	<slot />
</div>
