#!/usr/bin/env node

import bin from 'tiny-bin';

bin('package-name', '')
	.action((options, args) => {
		console.log({options, args})
	})
	.run();
