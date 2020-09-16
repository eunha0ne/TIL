const path = require("path");

const { description } = require('../../package');
const { sideBarList } = require('./sideBarList');

/**
 * Ref：https://v1.vuepress.vuejs.org/config
 */

module.exports = {
  title: 'Today I Learned',
  description: description,
  head: [
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
  ],
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
