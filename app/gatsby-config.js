require('dotenv').config();
const config = require('./gatsby-config-settings');
const plugins = [
  'gatsby-plugin-sitemap',
  'gatsby-plugin-sharp',
  'gatsby-plugin-emotion',
  'gatsby-plugin-react-helmet',
  'gatsby-plugin-layout',
  `gatsby-transformer-sharp`,
  /* --- Manifest --- */
  {
    resolve: `gatsby-plugin-manifest`,
    options: {
      name: `feedback.onemilliondevs.com`,
      short_name: `feedback.onemilliondevs.com`,
      start_url: `/`,
      background_color: `#f7f0eb`,
      theme_color: `#a2466c`,
      display: `standalone`,
      icon: `${__dirname}/src/assets/images/favicon.ico`,
    },
  },
  /* --- Markdown --- */
  {
    resolve: 'gatsby-plugin-mdx',
    options: {
      extensions: ['.mdx', '.md'],
    },
  },

  /* -------------------------- */
  /* --- Articles : Content --- */
  /* -------------------------- */
  {
    resolve: 'gatsby-source-filesystem',
    options: {
      name: 'content-articles',
      path: `${__dirname}/content/articles`,
    },
  },
  /* -------------------------- */
  /* --- Surveys : Content --- */
  /* -------------------------- */
  {
    resolve: 'gatsby-source-filesystem',
    options: {
      name: 'content-surveys',
      path: `${__dirname}/content/surveys`,
    },
  },
];
module.exports = {
  pathPrefix: config.gatsby.pathPrefix,
  siteMetadata: {
    title: config.siteMetadata.title,
    description: config.siteMetadata.description,
    docsLocation: config.siteMetadata.docsLocation,
    ogImage: config.siteMetadata.ogImage,
    favicon: config.siteMetadata.favicon,
    logo: {
      link: config.header.logoLink ? config.header.logoLink : '/',
      image: config.header.logo,
    },
    headerTitle: config.header.title,
    githubUrl: config.header.githubUrl,
    helpUrl: config.header.helpUrl,
    tweetText: config.header.tweetText,
    headerLinks: config.header.links,
    siteUrl: config.gatsby.siteUrl,
  },
  plugins: plugins,
};
