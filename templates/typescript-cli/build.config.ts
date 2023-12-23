import { defineBuildConfig } from 'unbuild';

export default defineBuildConfig({
	entries: ['src/bin'],
	declaration: true,
	clean: true,
	rollup: {
		emitCJS: true,
		esbuild: {
			minify: true,
		},
	},
});
