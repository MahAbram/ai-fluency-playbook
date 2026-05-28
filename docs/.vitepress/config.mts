import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "AI Fluency Playbook",
  appearance: 'dark',
  description: "A Playbook for the Modern Professional",
  base: '/ai-fluency-playbook/',

  outline: {
  level: [2, 3],
  label: 'On this page'
  },

  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Start Here', link: '/start-here' },
      { text: 'About', link: '/about' },
    ],

    sidebar: [
  {
    text: 'The Playbook',
    items: [
      { text: 'Start Here', link: '/start-here' },
    ]
  },
  {
    text: 'Part 1: What is AI?',
    collapsed: false,
    items: [
      { text: 'Chapter 1 Overview', link: '/chapter-01' },
    ]
  },
  {
    text: 'Part 2: Evolution & Ethics',
    collapsed: true,
    items: [
      { text: 'Chapter 2 Overview', link: '/chapter-02' },
    ]
  },
  {
    text: 'Part 3: Interacting with AI',
    collapsed: true,
    items: [
      { text: 'Chapter 3 Overview', link: '/chapter-03' },
    ]
  },
  {
    text: 'Part 4: Advanced AI Fluency',
    collapsed: true,
    items: [
      { text: 'Chapter 4 Overview', link: '/chapter-04' },
    ]
  },
  { text: 'About', link: '/about' },
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
