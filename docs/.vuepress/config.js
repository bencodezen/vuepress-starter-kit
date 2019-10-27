module.exports = {
  title: 'VuePress Starter Kit',
  head: [['link', { rel: 'icon', href: `/favicon.png` }]],
  ga: '',
  description: 'This is your page description.',
  themeConfig: {
    repo: 'https://github.com/bencodezen/vuepress-starter-kit',
    editLinks: true,
    editLinkText: 'Edit this page',
    lastUpdated: 'Last updated',
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
        text: 'Component Example',
        link: '/component-example'
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
    docsDir: 'docs',
    plugins: ['@vuepress/active-header-links']
  }
}
