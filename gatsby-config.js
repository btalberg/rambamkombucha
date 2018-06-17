module.exports = {
  siteMetadata: {
    title: 'Rämbäm Kombucha',
    siteUrl: `https://rambamkombucha.org`,
    description: `Twin Cities Kombucha Brewer, helping nourish the soul through healthy diet`,
    siteSocialUrls: [
      "https://www.instagram.com/rambamkombucha/",
      "mailto:info@rambamkombucha.org",
      "https://www.facebook.com/Rambam-Kombucha-2546285918730835/"
    ],
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sass',
    {
      resolve: `gatsby-plugin-favicon`,
      options: {
        logo: `./src/images/favicon.png`,
        injectHTML: true,
        icons: {
          android: true,
          appleIcon: true,
          appleStartup: true,
          coast: false,
          favicons: true,
          firefox: true,
          twitter: false,
          yandex: false,
          windows: false
        }
      }
    }
  ],
};
