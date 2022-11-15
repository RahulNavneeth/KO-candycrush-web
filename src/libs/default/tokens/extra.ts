import { GRID_SIZE, INTERVAL_TIME } from '../../config/constant';
import { writable } from 'svelte/store';
import { TOKEN_GRID } from './tokens';

export const EXTRA_TOKEN = writable<boolean[][] | null>(null);

let TOKEN: boolean[][];
TOKEN_GRID.subscribe((i) => {
	TOKEN = i;
});

export const drop_extra_token = () => {
	setInterval(() => {
		TOKEN[0] = Array(GRID_SIZE).fill(true);
	}, INTERVAL_TIME);

	return true;
};
