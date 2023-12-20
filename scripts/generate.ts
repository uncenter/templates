import type { Template, Templates } from './utils';

import { writeFile } from 'node:fs/promises';
import { join, resolve } from 'node:path';

import { __dirname, getTemplates } from './utils';

function generateReadmeSection(name: string, data: Template) {
	return `
## \`${name}\`

[[source](templates/${name}/)]

${data.description}

### Setup

\`\`\`sh
# Download the template into the <${data.setup.placeholder}> directory with one of the commands below:
${['npx', 'pnpm dlx', 'bunx'].map((c) => `${c} giget@latest gh:uncenter/templates/templates/${name} <${data.setup.placeholder}>\n`)}

# Enter template directory and install packages:
cd <${data.setup.placeholder}>
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

function generateReadme(templates: Templates) {
	let readme = '# Templates\n\n';

	for (const template of Object.keys(templates)) {
		readme += `- [${template}](#${template})\n`;
	}

	for (const template of Object.keys(templates)) {
		readme += generateReadmeSection(template, templates[template]);
	}

	console.log(readme);

	return readme;
}

await writeFile(
	resolve(join(__dirname, '../', 'README.md')),
	generateReadme(await getTemplates()),
	'utf-8',
);

console.log('README.md generated successfully.');
