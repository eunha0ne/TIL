const path = require("path");
const { description } = require('../../package')

module.exports = {
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: 'TIL: Today I Learned',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: description,

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    nav: [
      {
        text: 'Github',
        link: 'https://github.com/eunha0ne'
      },
      {
        text: 'Blog',
        link: 'https://eunha0ne.github.io'
      }
    ],
    sidebar: [
      {
        title: 'books',
        children: [
          'books/객체지향의-사실과-오해.md'
        ]
      },
      {
        title: 'Career',
        children: [
          'Career/'
        ]
      },
      {
        title: 'Git',
        children: [
            'Git/Git.md'
        ]
      },
      {
        title: 'HTML',
        children: [
          'HTML/html.md'
        ]
      },
      {
        title: 'IDE',
        children: [
          'IDE/',
          'IDE/Webstorm.md'
        ]
      },
      {
        title: 'JavaScript',
        children: [
          'JavaScript/'
        ]
      },
      {
        title: 'Linux',
        children: [
          'Linux/Linux.md',
          'Linux/shell-script.md'
        ]
      },
      {
        title: 'macOS',
        children: [
          'macOS/git-auto-completion.md',
          'macOS/macOS.md'
        ]
      },
      {
        title: 'NPM',
        children: [
          'npm/npm.md'
        ]
      },
      {
        title: 'TIR',
        children: [
          'TIR/'
        ]
      },
      {
        title: 'Vim',
        children: [
          'Vim/Vim.md'
        ]
      },
      {
        title: 'Vue',
        children: [
          'Vue/Vue.md',
          'Vue/vue-press.md'
        ]
      }
    ]
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
  ],

  configureWebpack: {
    resolve: {
      alias: {
        '@assets': path.join(__dirname, './public/assets')
      }
    }
  },

  dest: 'public'
}
