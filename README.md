# Templates

## `typescript-package`

Building, testing, linting, and formatting are already setup - you just have to replace `<package-name>` in the README and package.json with the name of the package and start writing!

### Building

Uses [unbuild](https://github.com/unjs/unbuild), which utilizes [rollup](https://rollupjs.org/) and [esbuild](https://github.com/evanw/esbuild) under the hood. Not the fastest option, but the only one so far that works out-of-the-box and is easy to configure.

### Testing

Uses [Vitest](https://vitest.dev/).

### Linting

Uses [eslint](https://eslint.org/) with [typescript-eslint](https://typescript-eslint.io/), [`eslint-config-prettier`](https://github.com/prettier/eslint-config-prettier) to disable conflicting eslint style rules, [`eslint-plugin-unicorn`](https://github.com/sindresorhus/eslint-plugin-unicorn) to enforce good practices, and [`eslint-plugin-vitest`](https://github.com/veritem/eslint-plugin-vitest) to keep tests consistent.

### Formatting

Uses [Prettier](https://prettier.io/). In an ideal world, [dprint](https://github.com/dprint/dprint) is the best option... but most people in the ecosystem have yet to switch.

### Other

All of this is managed with [pnpm](https://pnpm.io/).
