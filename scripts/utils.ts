import { readFile } from 'node:fs/promises';
import { join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

import YAML from 'yaml';

export const __dirname = fileURLToPath(new URL('.', import.meta.url));

export type Package = {
	description: string;
	setup: {
		placeholder: string;
		replacewith: string;
		files: string[];
	};
	sections: {
		[section: string]: string;
	};
	commands: {
		format: string;
		install: string;
	};
};

export type Packages = { [name: string]: Package };

export const getPackages = async () =>
	YAML.parse(
		await readFile(
			resolve(join(__dirname, '../', 'templates.yml')),
			'utf-8',
		),
	) as Packages;
