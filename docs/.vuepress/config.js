const path = require('path')

module.exports = {
  title: 'Tillhub Design System',
  ga: 'UA-112313836-6',
  themeConfig: {
    sidebar: [
      '/',
      {
      title: 'Overview',
      path: '/guides/'
      },
      {
        title: 'Dashboard',
        path: '/Dashboard/',
        children: [
          {
            path: '/Dashboard/',
            title: 'Overview'
          }
        ]
      },
      {
         title: 'POS',
         children: [
           ['/POS/', 'Overview'],
         ]
      },
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
