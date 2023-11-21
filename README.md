# Templates

- [typescript-package](#typescript-package)
- [commonjs-package](#commonjs-package)
- [solidstart-app](#solidstart-app)

## `typescript-package`

[[source](templates/typescript-package/)]

A ready-to-go TypeScript package template with building, testing, linting, and formatting already setup.

### Setup

1. Template installation and customization CLI coming soon!
2. Run pnpm install to install dependencies.

### Building

Uses [unbuild](https://github.com/unjs/unbuild), which utilizes [rollup](https://rollupjs.org/) and [esbuild](https://github.com/evanw/esbuild) under the hood. Not the fastest option, but the only one so far that works out-of-the-box and is easy to configure.

### Testing

Uses [Vitest](https://vitest.dev/).

### Linting

Uses [ESLint](https://eslint.org/) with [typescript-eslint](https://typescript-eslint.io/), [`eslint-config-prettier`](https://github.com/prettier/eslint-config-prettier) to disable conflicting eslint style rules, [`eslint-plugin-import`](https://github.com/import-js/eslint-plugin-import) for opinionated import sorting, [`eslint-plugin-unicorn`](https://github.com/sindresorhus/eslint-plugin-unicorn) to enforce good practices, and [`eslint-plugin-vitest`](https://github.com/veritem/eslint-plugin-vitest) to keep tests consistent.

### Formatting

Uses [Prettier](https://prettier.io/) and a `.editorconfig` file.

### Other

All of this is managed with [pnpm](https://pnpm.io/). Workflows for formatting, linting, testing, and releasing are in `.github/workflows/`.

## `commonjs-package`

[[source](templates/commonjs-package/)]

A ready-to-go CJS package template.

### Setup

1. Template installation and customization CLI coming soon!
2. Run pnpm install to install dependencies.

### Testing

Uses [Vitest](https://vitest.dev/) (in MJS files).

### Linting

Uses [ESLint](https://eslint.org/) with [`eslint-config-prettier`](https://github.com/prettier/eslint-config-prettier) to disable conflicting eslint style rules, [`eslint-plugin-import`](https://github.com/import-js/eslint-plugin-import) for opinionated import sorting, [`eslint-plugin-unicorn`](https://github.com/sindresorhus/eslint-plugin-unicorn) to enforce good practices, and [`eslint-plugin-vitest`](https://github.com/veritem/eslint-plugin-vitest) to keep tests consistent.

### Formatting

Uses [Prettier](https://prettier.io/) and a `.editorconfig` file.

### Other

All of this is managed with [pnpm](https://pnpm.io/). Workflows for formatting, linting, testing, and releasing are in `.github/workflows/`.

## `solidstart-app`

[[source](templates/solidstart-app/)]

A simple, bloat-free template for SolidStart/SolidJS with preconfigured formatting and linting.

### Setup

1. Template installation and customization CLI coming soon!
2. Run pnpm install to install dependencies.

### Features

Includes TailwindCSS and has [shadcn-solid](https://shadcn-solid.vercel.app/docs/introduction) already intialized.

### Linting

Uses [ESLint](https://eslint.org/) with [`eslint-config-prettier`](https://github.com/prettier/eslint-config-prettier) to disable conflicting eslint style rules, [`eslint-plugin-import`](https://github.com/import-js/eslint-plugin-import) for opinionated import sorting, [`eslint-plugin-unicorn`](https://github.com/sindresorhus/eslint-plugin-unicorn) to enforce good practices, and [`eslint-plugin-solid`](https://github.com/solidjs-community/eslint-plugin-solid) for Solid-specific linting.

### Formatting

Uses [Prettier](https://prettier.io/) and a `.editorconfig` file.

### Other

All of this is managed with [pnpm](https://pnpm.io/). Workflows for formatting and linting are in `.github/workflows/`.
