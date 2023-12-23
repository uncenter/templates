# Templates

-   [typescript-package](#typescript-package)
-   [typescript-cli](#typescript-cli)
-   [commonjs-package](#commonjs-package)
-   [solidstart-app](#solidstart-app)

## `typescript-package`

[[source](templates/typescript-package/)]

A ready-to-go TypeScript package template with building, testing, linting, and formatting already setup.

### Setup

```sh
# Download the typescript-package template into the <package-name> directory
# with one of the commands below:
npx giget@latest gh:uncenter/templates/templates/typescript-package <package-name>
pnpm dlx giget@latest gh:uncenter/templates/templates/typescript-package <package-name>
bunx giget@latest gh:uncenter/templates/templates/typescript-package <package-name>

# Enter the template directory and install dependencies:
cd <package-name>
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

## `typescript-cli`

[[source](templates/typescript-cli/)]

A very opinionated TypeScript template for building CLI packages.

### Setup

```sh
# Download the typescript-cli template into the <package-name> directory
# with one of the commands below:
npx giget@latest gh:uncenter/templates/templates/typescript-cli <package-name>
pnpm dlx giget@latest gh:uncenter/templates/templates/typescript-cli <package-name>
bunx giget@latest gh:uncenter/templates/templates/typescript-cli <package-name>

# Enter the template directory and install dependencies:
cd <package-name>
pnpm install
```

### Building

Uses [unbuild](https://github.com/unjs/unbuild), which utilizes [rollup](https://rollupjs.org/) and [esbuild](https://github.com/evanw/esbuild) under the hood. Not the fastest option, but the only one so far that works out-of-the-box and is easy to configure.

### Linting

Uses [ESLint](https://eslint.org/) with [typescript-eslint](https://typescript-eslint.io/), [`eslint-config-prettier`](https://github.com/prettier/eslint-config-prettier) to disable conflicting eslint style rules, [`eslint-plugin-import`](https://github.com/import-js/eslint-plugin-import) for opinionated import sorting, and [`eslint-plugin-unicorn`](https://github.com/sindresorhus/eslint-plugin-unicorn) to enforce good practices.

### Formatting

Uses [Prettier](https://prettier.io/) and a `.editorconfig` file.

### Other

All of this is managed with [pnpm](https://pnpm.io/). Workflows for formatting, linting, testing, and releasing are in `.github/workflows/`.

## `commonjs-package`

[[source](templates/commonjs-package/)]

A ready-to-go CJS package template.

### Setup

```sh
# Download the commonjs-package template into the <package-name> directory
# with one of the commands below:
npx giget@latest gh:uncenter/templates/templates/commonjs-package <package-name>
pnpm dlx giget@latest gh:uncenter/templates/templates/commonjs-package <package-name>
bunx giget@latest gh:uncenter/templates/templates/commonjs-package <package-name>

# Enter the template directory and install dependencies:
cd <package-name>
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

[[source](templates/solidstart-app/)]

A simple, bloat-free template for SolidStart/SolidJS with preconfigured formatting and linting.

### Setup

```sh
# Download the solidstart-app template into the <app-name> directory
# with one of the commands below:
npx giget@latest gh:uncenter/templates/templates/solidstart-app <app-name>
pnpm dlx giget@latest gh:uncenter/templates/templates/solidstart-app <app-name>
bunx giget@latest gh:uncenter/templates/templates/solidstart-app <app-name>

# Enter the template directory and install dependencies:
cd <app-name>
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
