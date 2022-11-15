import { GRID_SIZE } from '../../config/constant';
import { writable } from 'svelte/store';

export const TOKEN_GRID = writable<boolean[][]>(
	// [
	// 	[true, true, true, true, true],
	// 	[true, true, true, true, false],
	// 	[true, false, false, false, true],
	// 	[true, true, true, true, true],
	// 	[true, true, true, true, false]
	// ]
	[...Array(GRID_SIZE)].map((j) =>
		[...Array(GRID_SIZE)].map((i) => (Math.floor(Math.random() * 2) ? true : false))
	)
);
