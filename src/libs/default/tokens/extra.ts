import { writable } from 'svelte/store';
import { TOKEN_GRID } from './tokens';

export const EXTRA_TOKEN = writable<boolean[][] | null>(null);

let TOKEN: boolean[][];
TOKEN_GRID.subscribe((i) => {
	TOKEN = i;
});

export const gen_extra_token = () => {
	const EXTRA = TOKEN.filter((i) => !i.every((row) => row === true));
	for (let row = 0; row < EXTRA.length; row++) {
		for (let cell = 0; cell < EXTRA[row].length; cell++) {
			EXTRA[row][cell] ? (EXTRA[row][cell] = false) : (EXTRA[row][cell] = true);
		}
	}
	EXTRA_TOKEN.set(EXTRA);
};
