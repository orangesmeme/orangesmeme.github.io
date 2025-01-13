// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'Orange',
			social: {
				github: 'https://github.com/orangesmeme/orangesmeme.github.io',
			},
			sidebar: [
				{
					label: 'Guides',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Guide to Orange', slug: 'guides/orange' },
					],
				},
				{
					label: 'Events',
					autogenerate: { directory: 'events' },
				},
			],
		}),
	],
});
