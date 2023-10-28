import type { Templates } from './utils';

import { $ } from 'execa';

import { getTemplates } from './utils';

async function executeTemplateFormatCommands(data: Templates) {
	for (const [name, pkg] of Object.entries(data)) {
		await $({
			shell: true,
		})`cd templates/${name}/ && ${pkg.commands.format}`;
	}
}

await executeTemplateFormatCommands(await getTemplates());
