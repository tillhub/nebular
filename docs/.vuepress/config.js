const path = require('path')

module.exports = {
  title: 'Tillhub Design System',
  ga: 'UA-112313836-6',
  themeConfig: {
    sidebar: [
      '/',
      {
      title: 'Guides',
      children: [
        ['/guides/', 'Overview'],
        ['/guides/spacing', 'Spacing']
       ]
      },
      {
        title: 'Components',
        children: [
          ['/components/', 'Overview'],
          ['/components/currencies', 'Currencies']
        ]
      },
      {
        title: 'Dashboard',
        children: [
          ['/Dashboard/', 'Overview'],
        ]
      },
      {
        title: 'POS',
        children: [
          ['/POS/', 'Overview'],
        ]
      },
      ['/about', 'About']
    ],
    docsRepo: 'tillhub/tillhub-design-system',
    editLinks: true,
    editLinkText: 'Help us improve this page!',
    lastUpdated: 'Last Updated',
    nav: [
      { text: 'Guides', link: '/guides/' }
    ]
  },
  plugins: [
    [
      'register-components',
      {
        components: [
          {
            componentsDir: path.resolve(__dirname, 'components')
          }
        ]
      }
    ]
  ]
}
