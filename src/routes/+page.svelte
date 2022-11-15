<script lang="ts">
	import { drop } from '../libs/functions/drop';
	import { EXTRA_TOKEN, gen_extra_token } from '../libs/default/tokens/extra';
	import { TOKEN_GRID } from '../libs/default/tokens/tokens';

	// console.log($TOKEN_GRID);
</script>

{#if $EXTRA_TOKEN !== null}
	<div class="flex flex-col text-slate-300 items-center justify-center ">
		{#each $EXTRA_TOKEN as row, _row_index}
			<div class="flex flex-row items-center justify-center my-2">
				{#each row as cell, _cell_index}
					<div class="text-[30px] mx-2 w-[50px] h-[50px] text-center ">
						{cell ? '1' : ''}
					</div>
				{/each}
			</div>
		{/each}
	</div>
{/if}

<div
	class="flex flex-col text-white items-center justify-center p-4 border-2 border-white rounded-lg"
>
	{#each $TOKEN_GRID as row, _row_index}
		<div class="flex flex-row items-center justify-center my-2">
			{#each row as cell, _cell_index}
				<div class="text-[30px] mx-2 w-[50px] h-[50px] text-center ">
					{cell ? '1' : ''}
				</div>
			{/each}
		</div>
	{/each}
</div>
<button class="bg-white font-black mt-5 px-4 py-2 rounded-md" on:click={gen_extra_token}
	>GENERATE EXTRA TOKEN</button
>
<button class="bg-white font-black mt-5 px-4 py-2 rounded-md" on:click={drop}>DROP</button>
<button class="bg-white font-black mt-5 px-4 py-2 rounded-md">DROP EXTRA TOKEN</button>
