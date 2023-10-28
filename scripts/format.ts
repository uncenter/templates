import type { Packages } from './utils';

import { $ } from 'execa';

import { getPackages } from './utils';

async function executeTemplateFormatCommands(data: Packages) {
	for (const [name, pkg] of Object.entries(data)) {
		await $({
			shell: true,
		})`cd templates/${name}/ && ${pkg.commands.format}`;
	}
}

await executeTemplateFormatCommands(await getPackages());
