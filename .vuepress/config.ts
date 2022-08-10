import { defineUserConfig } from 'vuepress'
import type { DefaultThemeOptions } from 'vuepress'
import recoTheme from 'vuepress-theme-reco'
const themeConfig = require('./config/themeConf')
export default defineUserConfig({
  title: 'vuepress-theme-reco',
  description: 'Just playing around',
  theme: recoTheme(themeConfig),
  // debug: true,
})
