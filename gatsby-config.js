module.exports = {
  siteMetadata: {
    title: `Vince.inc`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@gatsbyjs`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `5yllosc0vj6y`,
        // Learn about environment variables: https://gatsby.dev/env-vars
        accessToken: `OyqssY5LHMOleNysMmApW51OyvsnHqkTu6aM1rNW6iU`,
      },
    },

    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,

    // {
    //   resolve: '@contentful/gatsby-transformer-contentful-richtext',
    //   options: {
    //     renderOptions: {
    //       renderNode: {
    //         // 必要なnodeTypeを順次追加する！！
    //         // BLOCKSなどの定義先を参照すると、定義が確認できる。
    //         [BLOCKS.EMBEDDED_ASSET]: node => {
    //           return `<img class='custom-asset' src="${
    //             node.data.target.fields.file['ja-JP'].url
    //           }"/>`
    //         }
    //       },
    //     },
    //   },
    // },
  ],
}