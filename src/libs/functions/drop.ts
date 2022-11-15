import { TOKEN_GRID } from '../default/tokens/tokens';

let TOKEN: boolean[][];
TOKEN_GRID.subscribe((i) => {
	TOKEN = i;
});
export const drop = () => {
	const TOKEN_LEN = TOKEN.length - 1;
	// let f_count = 0;

	// for (let x = 0; x < TOKEN.length; x++) {
	// 	f_count += TOKEN[x].filter((i) => !i).length;
	// }
	setInterval(() => {
		for (let i = 0; i < TOKEN.length; i++) {
			for (let j = 0; j < TOKEN[i].length; j++) {
				console.log(TOKEN_LEN - i, j);
				if (TOKEN_LEN - i < TOKEN_LEN) {
					if (TOKEN[TOKEN_LEN - i][j] && !TOKEN[TOKEN_LEN - i + 1][j]) {
						TOKEN[TOKEN_LEN - i][j] = false;
						TOKEN[TOKEN_LEN - i + 1][j] = true;
						TOKEN_GRID.set(TOKEN);
					}
				}
			}
		}
	}, 100);
	console.log(TOKEN);
};
