# Templates

## `typescript-package`

A ready-to-go TypeScript package template with building, testing, linting, and formatting already setup.

### Setup

1. Clone this repository.
2. Replace `<package-name>` with undefined
3. Run the following command to install dependencies:

    ```
    pnpm install
    ```

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

A ready-to-go CJS package template.

### Setup

1. Clone this repository.
2. Replace `<package-name>` with undefined
3. Run the following command to install dependencies:

    ```
    pnpm install
    ```

### Testing

Uses [Vitest](https://vitest.dev/) (in MJS files).

### Linting

Uses [ESLint](https://eslint.org/) with [`eslint-config-prettier`](https://github.com/prettier/eslint-config-prettier) to disable conflicting eslint style rules, [`eslint-plugin-import`](https://github.com/import-js/eslint-plugin-import) for opinionated import sorting, [`eslint-plugin-unicorn`](https://github.com/sindresorhus/eslint-plugin-unicorn) to enforce good practices, and [`eslint-plugin-vitest`](https://github.com/veritem/eslint-plugin-vitest) to keep tests consistent.

### Formatting

Uses [Prettier](https://prettier.io/) and a `.editorconfig` file.

### Other

All of this is managed with [pnpm](https://pnpm.io/). Workflows for formatting, linting, testing, and releasing are in `.github/workflows/`.

## `solidstart-app`

A simple, bloat-free template for SolidStart/SolidJS with preconfigured formatting and linting.

### Setup

1. Clone this repository.
2. Replace `<app-name>` with undefined
3. Run the following command to install dependencies:

    ```
    pnpm install
    ```

### Features

Includes TailwindCSS and has [shadcn-solid](https://shadcn-solid.vercel.app/docs/introduction) already intialized.

### Linting

Uses [ESLint](https://eslint.org/) with [`eslint-config-prettier`](https://github.com/prettier/eslint-config-prettier) to disable conflicting eslint style rules, [`eslint-plugin-import`](https://github.com/import-js/eslint-plugin-import) for opinionated import sorting, [`eslint-plugin-unicorn`](https://github.com/sindresorhus/eslint-plugin-unicorn) to enforce good practices, and [`eslint-plugin-solid`](https://github.com/solidjs-community/eslint-plugin-solid) for Solid-specific linting.

### Formatting

Uses [Prettier](https://prettier.io/) and a `.editorconfig` file.

### Other

All of this is managed with [pnpm](https://pnpm.io/). Workflows for formatting and linting are in `.github/workflows/`.
