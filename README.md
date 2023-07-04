# uncenter/templates

This repository contains templates for [Solid](https://www.solidjs.com/) projects, powered by [`solid-start`](https://start.solidjs.com), but will also have templates for other frameworks and libraries in the future. Mostly, this is just a place for me to store templates that I use for my own projects, but feel free to use them if you want.

## Usage

To use a template, run the following command, replacing `<template>` with the name of the template you want to use:

```bash
npx degit uncenter/templates/<template> my-app
```

## Templates

### Solid

All Solid projects are configured to work with [Vercel](https://vercel.com/) out of the box (using the `solid-start-vercel` adapter), use [TypeScript](https://www.typescriptlang.org/),
and are set with [`pnpm`](https://pnpm.io/) as the package manager.
Templates contain zero content, so you can start from scratch without having to delete anything.

-   `bare`: A _completely_ barebones Solid project, with no additional libraries or frameworks.

```sh
npx degit uncenter/templates/solidjs/bare my-app
```

-   `tailwind`: A Solid project with [Tailwind CSS](https://tailwindcss.com/).

```sh
npx degit uncenter/templates/solidjs/tailwind my-app
```
