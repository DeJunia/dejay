module.exports = {
  siteUrl: "https://dejaydrivingsch.vercel.app", // Replace with your actual domain
  generateRobotsTxt: true, // Generate robots.txt
  generateIndexSitemap: true,
  sitemapSize: 7000, // default
  changefreq: "daily",
  priority: 0.7,
  trailingSlash: false,

  exclude: ["/dev", "/unavailable", "/admin", "/drafts"],
};
