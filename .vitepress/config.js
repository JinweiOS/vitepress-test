import { defineConfig } from 'vitepress'
import { pagefindPlugin } from 'vitepress-plugin-pagefind'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "BeingThink",
  description: "记录记录小日常",
  vite:{
    plugins:[pagefindPlugin()],
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      { text: '技术博客', link: '/blog/tech-map.md' }
    ],

    sidebar: [
      {
        text: '技术博客',
        items: [
          { text: '前端技术路线', link: '/blog/tech-map.md' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/beingthink' }
    ],

    footer: {
      copyright: 'Copyright © 2023-present JINWEI PENG'
    }
  }
})
