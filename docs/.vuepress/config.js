module.exports = {
	dest: './docs/dist',
	title: 'VuePress Starter Kit',
	head: [
		['link', { rel: 'icon', href: `/favicon.png` }]
	],
	ga: '',
	description: 'This is your page description.',
	themeConfig: {
		repo: '',
		editLinks: false,
		editLinkText: '',
		lastUpdated: '',
		nav: [
			{
				text: 'Home',
				link: '/'
			},
			{
				text: 'Basic Page',
				link: '/basic/'
			},
			{
				text: 'Section',
				items: [
					{
						text: 'Section Introduction',
						link: '/section/#section-introduction'
					},
					{
						text: 'Some More Content!',
						link: '/section/#some-more-content'
					}
				]
			},
			{
				text: 'Contact',
				items: [
					{
						text: 'Twitter',
						link: 'https://www.twitter.com/'
					},
					{
						text: 'Email',
						link: 'mailto:hello@email.com'
					}
				]
			}
		],
		docsDir: 'docs'
	}
}
