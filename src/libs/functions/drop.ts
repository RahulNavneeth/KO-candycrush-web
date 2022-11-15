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
		for (let i = TOKEN.length - 1; i >= 0; i--) {
			for (let j = 0; j < TOKEN[i].length; j++) {
				if (i < TOKEN_LEN) {
					if (TOKEN[i][j] && !TOKEN[i + 1][j]) {
						TOKEN[i][j] = false;
						TOKEN[i + 1][j] = true;
					} else if (TOKEN[i][j] && TOKEN[i + 1][j]) {
						if (!TOKEN[i + 1][j - 1] && j !== 0) {
							TOKEN[i][j] = false;
							TOKEN[i + 1][j - 1] = true;
						} else if (!TOKEN[i + 1][j + 1] && j !== 4) {
							TOKEN[i][j] = false;
							TOKEN[i + 1][j + 1] = true;
							console.log(i, j);
						}
					}
				}

				TOKEN_GRID.set(TOKEN);
			}
		}
	}, 500);
	console.log(TOKEN);
};
