// next-sitemap.config.js
module.exports = {
    siteUrl: 'https://rk960.github.io/rk960/', // 🔁 अपनी site का URL डालें
    generateRobotsTxt: true, // robots.txt भी generate करेगा
    changefreq: 'daily',
    priority: 0.7,
    sitemapSize: 10000,
    exclude: ['/admin/*', '/secret-page'],
    robotsTxtOptions: {
      policies: [{ userAgent: '*', allow: '/' }],
    },
    outDir: './out', // if using static export
  };
  