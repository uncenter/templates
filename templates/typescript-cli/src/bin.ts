#!/usr/bin/env node

import { defineCommand, runMain } from 'citty';

import { name, version, description } from '../package.json' assert { type: 'json' };

const main = defineCommand({
	meta: {
		name: name,
		version: version,
		description: description,
	},
	args: {
		name: {
			type: "positional",
			description:"Your name!"
		}
	},
	async run({ args }) {
		console.log(`Hello, ${args.name}!`)
	},
});

runMain(main);
