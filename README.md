# Templates

## `typescript-package`

Building, testing, linting, and formatting are already setup - you just have to replace `<package-name>` in the README and package.json with the name of the package.

### Building

Uses [unbuild](https://github.com/unjs/unbuild), which utilizes [rollup](https://rollupjs.org/) and [esbuild](https://github.com/evanw/esbuild) under the hood. Not the fastest option, but the only one so far that works out-of-the-box and is easy to configure.

### Testing

Uses [Vitest](https://vitest.dev/).

### Linting

Uses [ESLint](https://eslint.org/) with [typescript-eslint](https://typescript-eslint.io/), [`eslint-config-prettier`](https://github.com/prettier/eslint-config-prettier) to disable conflicting eslint style rules, [`eslint-plugin-unicorn`](https://github.com/sindresorhus/eslint-plugin-unicorn) to enforce good practices, and [`eslint-plugin-vitest`](https://github.com/veritem/eslint-plugin-vitest) to keep tests consistent.

### Formatting

Uses [Prettier](https://prettier.io/). In an ideal world, [dprint](https://github.com/dprint/dprint) is the best option... but most people in the ecosystem have yet to switch.

### Other

All of this is managed with [pnpm](https://pnpm.io/). Workflows for formatting, linting, testing, and releasing are in `.github/workflows/`. A `.editorconfig` is included in addition to the Prettier config.

## `commonjs-package`

This is basically the same as above minus the build step and Typescript-related ESLint stuff. Testing, linting, and formatting are already setup - you just have to replace `<package-name>` in the README and package.json with the name of the package.

### Testing

Uses [Vitest](https://vitest.dev/) in MJS files.

### Linting

Uses [ESLint](https://eslint.org/) with [`eslint-config-prettier`](https://github.com/prettier/eslint-config-prettier) to disable conflicting eslint style rules, [`eslint-plugin-unicorn`](https://github.com/sindresorhus/eslint-plugin-unicorn) to enforce good practices, and [`eslint-plugin-vitest`](https://github.com/veritem/eslint-plugin-vitest) to keep tests consistent.

### Formatting

Uses [Prettier](https://prettier.io/). In an ideal world, [dprint](https://github.com/dprint/dprint) is the best option... but most people in the ecosystem have yet to switch.

### Other

All of this is managed with [pnpm](https://pnpm.io/). Workflows for formatting, linting, testing, and releasing are in `.github/workflows/`. A `.editorconfig` is included in addition to the Prettier config.
