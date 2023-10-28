import type { Package, Packages } from './utils';

import { writeFile } from 'node:fs/promises';

import { getPackages } from './utils';

function generateReadmeSection(name: string, data: Package) {
	return `
## \`${name}\`

${data.description}

### Setup

1. Clone this repository.
2. Replace \`${data.setup.placeholder}\` with ${data.setup.replacewith}
3. Run the following command to install dependencies:

   \`\`\`
   ${data.commands.install}
   \`\`\`

${Object.keys(data.sections)
	.map((section) => {
		return `### ${section.charAt(0).toUpperCase() + section.slice(1)}\n\n${
			data.sections[section]
		}`;
	})
	.join('\n\n')}
`;
}

function generateReadme(data: Packages) {
	return Object.keys(data)
		.map((name: string) => {
			return generateReadmeSection(name, data[name]);
		})
		.join('\n');
}

await writeFile(
	'README.md',
	'# Templates\n' + generateReadme(await getPackages()),
	'utf-8',
);

console.log('README.md generated successfully.');
