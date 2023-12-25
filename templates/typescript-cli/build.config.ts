import { defineBuildConfig } from 'unbuild';

export default defineBuildConfig({
	entries: ['src/bin'],
	declaration: true,
	clean: true,
	rollup: {
		esbuild: {
			minifySyntax: true,
			minifyWhitespace: true,
			minifyIdentifiers: false,
		},
	},
});
