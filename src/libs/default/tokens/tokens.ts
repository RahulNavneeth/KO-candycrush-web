import { writable } from 'svelte/store';

export const TOKEN_GRID = writable<boolean[][]>(
	// [true, false, true, true, true],
	// [true, true, false, true, true],
	// [true, false, false, true, true],
	// [true, false, true, true, true],
	// [true, true, false, true, true]
	[...Array(5)].map((j) => [...Array(5)].map((i) => (Math.floor(Math.random() * 2) ? true : false)))
);
