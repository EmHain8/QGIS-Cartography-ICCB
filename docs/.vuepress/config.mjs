import { defineUserConfig } from 'vuepress'
import { viteBundler } from '@vuepress/bundler-vite'

export default defineUserConfig({
  title: 'QGIS Cartography ICCB',
  description: 'Course materials and resources',
  themeConfig: {
    sidebar: [
      '/',
    ],
  },
  bundler: viteBundler(),
})
