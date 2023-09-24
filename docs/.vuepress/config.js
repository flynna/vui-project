module.exports = {
  themeConfig: {
    logo: '/favicon.ico',
    lastUpdated: 'Last Updated',
    sidebar: {
      '/config/': ['/config.html'],
      '/componentsDoc/': [
        'button' /* /componentsDoc/button.html */,
        'text' /* /componentsDoc/text.html */,
      ],
    },
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/config.html' },
      { text: 'docs', link: '/componentsDoc/button' },
      {
        text: 'Languages',
        items: [
          { text: '简体中文', link: '/language/chinese' },
          { text: '英文', items: '/language/english' },
        ],
      },
      {
        text: 'Github',
        link: 'https://github.com/flynna/vui-docs',
        target: '_blank',
        rel: 'noopener noreferrer',
      },
    ],
  },
};
