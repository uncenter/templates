import path from 'node:path';
import url from 'node:url';

import solid from 'solid-start/vite';
import { defineConfig } from 'vite';

export default defineConfig(() => {
	return {
		plugins: [solid({ ssr: true })],
		ssr: {
			noExternal: ['@kobalte/core', '@internationalized/message'],
		},
		resolve: {
			alias: {
				'@': path.resolve(
					path.dirname(url.fileURLToPath(import.meta.url)),
					'./src',
				),
			},
		},
	};
});
