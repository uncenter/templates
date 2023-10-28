import { $ } from "execa";
import { Package, packages } from "./utils";

function executeTemplateFormatCommands(data: Package[]) {
	Object.keys(data).forEach(async (name: string) => {
		const pkg = data[name] as Package;
		await $({ shell: true })`cd templates/${name}/ && ${pkg.commands.format}`;
	});
}

executeTemplateFormatCommands(await packages());
