import { writable } from 'svelte/store';

export const TOKEN_GRID = writable<boolean[][]>([
	[true, false, true, true, true],
	[true, true, false, true, true],
	[true, false, false, true, true],
	[true, false, true, true, true],
	[true, true, false, true, true]
]);
