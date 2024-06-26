# Templates

- [rust-cli](#rust-cli)
- [typescript-cli](#typescript-cli)
- [typescript-package](#typescript-package)
- [commonjs-package](#commonjs-package)

## `rust-cli`

[[source](templates/rust-cli/)]

A simple template for getting a Rust CLI up-and-running as fast as possible.

### Setup

```sh
# Download the rust-cli template into the <package-name> directory
# with one of the commands below:
npx giget@latest gh:uncenter/templates/templates/rust-cli <package-name>
pnpm dlx giget@latest gh:uncenter/templates/templates/rust-cli <package-name>
bunx giget@latest gh:uncenter/templates/templates/rust-cli <package-name>

# Enter the template directory and install dependencies:
cd <package-name>
cargo build
```

### Features

Includes [clap](https://github.com/clap-rs/clap) for argument parsing.

### Linting

Uses [Clippy](https://rust-lang.github.io/rust-clippy/) with `pedantic = "warn"`.

### Formatting

Uses [rustfmt](https://rust-lang.github.io/rustfmt/) and a `.editorconfig` file.

### Other

Workflows for building, linting, and releasing are in `.github/workflows/`.

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

All of this is managed with [pnpm](https://pnpm.io/). Workflows for building, linting, testing, and releasing are in `.github/workflows/`.

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

All of this is managed with [pnpm](https://pnpm.io/). Workflows for building, linting, testing, and releasing are in `.github/workflows/`.

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

All of this is managed with [pnpm](https://pnpm.io/). Workflows for linting, testing, and releasing are in `.github/workflows/`.
