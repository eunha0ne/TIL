const path = require("path");

const { description } = require('../../package');
const { sideBarList } = require('./sideBarList');

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
    sidebar: sideBarList
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
