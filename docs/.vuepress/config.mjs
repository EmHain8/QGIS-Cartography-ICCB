import { defineUserConfig } from 'vuepress'
import { viteBundler } from '@vuepress/bundler-vite'

export default defineUserConfig({
  lang: 'en-AU',
  title: 'QGIS Cartography ICCB',
  description: 'Course materials and resources for ICCB attendees',

  theme: '@vuepress/theme-default',

  themeConfig: {
    sidebar: [
      { text: 'Introduction', link: '/' },
      { text: 'Resources', link: '/resources' },
      { text: 'Get Ready', link: '/get-ready' },
      { text: 'Part 1: Styling Data', link: '/part1-styling-data' },
      { text: 'Part 2: Build a Beautiful Map', link: '/part2-build-map' },
    ],
  },

  bundler: viteBundler(),
})
