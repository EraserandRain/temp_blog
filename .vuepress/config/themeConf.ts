const navbar = require('./navConf')
const temp = {
    type: "blog",
    logo: "/toad.jpg",
    mode: 'dark',
    blogConfig: {
        category: { location: 2, text: "Category" },
        tag: { location: 3, text: "Tag" }
    },
    search: true,
    searchMaxSuggestions: 10,
    lastUpdated: "Last Updated",
    navbar: navbar,
    smoothScroll: true,
    author: "EraserRain",
    authorAvatar: "/toad.jpg",
    series: {
        '/vuepress-theme-reco/': ['introduce', 'usage']
    }
}
const themeConfig = {
    style: '@vuepress-reco/style-default',
    logo: '/logo.png',
    author: 'reco_luan',
    docsRepo: 'https://github.com/vuepress-reco/vuepress-theme-reco-next',
    docsBranch: 'main',
    docsDir: 'example',
    lastUpdatedText: '',
    series: {
        '/docs/theme-reco/': [
            {
                text: 'module one',
                children: ['home', 'theme']
            },
            {
                text: 'module two',
                children: ['api', 'plugin']
            }
        ]
    },
    navbar: navbar,
}
module.exports = themeConfig