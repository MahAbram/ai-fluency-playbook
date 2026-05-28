import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "AI Fluency Playbook",
  description: "A Playbook for the Modern Professional",
  base: '/ai-fluency-playbook/',

  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Start Here', link: '/start-here' },
    ],

    sidebar: [
      {
        text: 'The Playbook',
        items: [
          { text: 'Start Here', link: '/start-here' },
          { text: 'Chapter 1: What is AI?', link: '/chapter-01' },
          { text: 'Chapter 2: Evolution & Ethics', link: '/chapter-02' },
          { text: 'Chapter 3: Interacting with AI', link: '/chapter-03' },
          { text: 'Chapter 4: Advanced AI Fluency', link: '/chapter-04' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/MahAbram/ai-fluency-playbook' }
    ],

    search: {
      provider: 'local'
    },

    footer: {
      message: 'Released under CC BY 4.0.',
      copyright: 'Copyright © 2025 MahAbram'
    }
  }
})
