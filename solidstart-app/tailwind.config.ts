import type { Config } from 'tailwindcss';

import animate from 'tailwindcss-animate';

export default {
	darkMode: ['class', '[data-kb-theme="dark"]'],
	content: ['src/routes/**/*.{ts,tsx}', 'src/components/**/*.{ts,tsx}'],
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px',
			},
		},
		extend: {
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--kb-accordion-content-height)' },
				},
				'accordion-up': {
					from: { height: 'var(--kb-accordion-content-height)' },
					to: { height: '0' },
				},
				'collapsible-down': {
					from: { height: '0' },
					to: { height: 'var(--kb-collapsible-content-height)' },
				},
				'collapsible-up': {
					from: { height: 'var(--kb-collapsible-content-height)' },
					to: { height: '0' },
				},
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'collapsible-down': 'collapsible-down 0.2s ease-out',
				'collapsible-up': 'collapsible-up 0.2s ease-out',
			},
		},
	},
	plugins: [animate],
} satisfies Config;
