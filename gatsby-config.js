const siteMetadata = {
  title: `אדי הובלות`,
  description:
    "Liza Willow's personal portfolio website that showcases her digital illustrations",
  author: `אדוארד קוסטוצ'נקו`,
  url: "https://www.lizawillow.com",
  favicon: "./src/assets/icons/favicon.svg",
  image: "/src/assets/images/profile/liza proflie.jpg",
};

module.exports = {
  siteMetadata: siteMetadata,
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `אדי הובלות`,
        short_name: `א.ה`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: siteMetadata.favicon,
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-offline`,
  ],
};
