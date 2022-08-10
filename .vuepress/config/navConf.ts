const nav = [
    { text: "Home", link: "/", icon: "reco-home" },
    { text: "TimeLine", link: "/timeline/", icon: "reco-date" },
    { text: "GitHub", link: "https://github.com/EraserandRain", icon: "reco-github" }
]
const navtemp = [
    { text: 'Home', link: '/' },
    { text: 'Categories', link: '/categories/reco/1/' },
    { text: 'Tags', link: '/tags/tag1/1/' },
    {
        text: 'Docs',
        children: [
            { text: 'vuepress-reco', link: '/docs/theme-reco/theme' },
            { text: 'vuepress-theme-reco', link: '/blogs/other/guide' }
        ]
    },
]
module.exports = navtemp