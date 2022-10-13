/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: "610 Music",
    description: "Official website for 610Music Records and Publishing Inc.",
    twitterUsername: "@610music",
    image: "src/components/images/logo-white.png",
    siteUrl: "https://www.610music.com",
  },
  plugins: [
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/components/images/logo-white.png",
      },
    },
  ],
}
