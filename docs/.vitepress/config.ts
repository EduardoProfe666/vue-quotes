import { defineConfig } from 'vitepress'

export default defineConfig({
    title: "Vue Quotes",
    description: "A modern and customizable quotes application",
    cleanUrls: true,
    themeConfig: {
        logo: '/logo.png',
        search: {
            provider: 'local'
        },
        nav: [
            { text: 'Guide', link: '/guide/' },
            { text: 'Configuration', link: '/config/' },
            { text: 'Implementations', link: '/implementations' }
        ],
        sidebar: {
            '/guide/': [
                {
                    text: 'Getting Started',
                    items: [
                        { text: 'Introduction', link: '/guide/' },
                        { text: 'Quick Start', link: '/guide/quick-start.md' },
                        { text: 'Installation', link: '/guide/installation' }
                    ]
                }
            ],
            '/config/': [
                {
                    text: 'Configuration',
                    items: [
                        { text: 'Overview', link: '/config/' },
                        { text: 'Generals', link: '/config/generals' },
                        { text: 'Metadata', link: '/config/metadata' },
                        { text: 'Badges', link: '/config/badges' },
                        { text: 'Phrases', link: '/config/phrases' },
                        { text: 'Buttons', link: '/config/buttons' },
                        { text: 'Languages', link: '/config/languages' },
                        { text: 'Search', link: '/config/search' },
                        { text: 'Themes', link: '/config/themes' }
                    ]
                }
            ]
        },
        socialLinks: [
            { icon: 'github', link: 'https://github.com/EduardoProfe666/vue-quotes' },
        ],
        footer: {
            message: 'Released under the MIT License.',
            copyright: 'Copyright © 2024 EduardoProfe666'
        },
        editLink: {
            pattern: 'https://github.com/EduardoProfe666/vue-quotes /edit/main/docs/:path'
        }
    },
    lastUpdated: true,
    head: [['link', { rel: 'icon', href: '/favicon.ico' }]]
})