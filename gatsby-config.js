require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
})
// const queries = require("./src/constants/algolia")
module.exports = {
  siteMetadata: {
    title: `The Art Outside`,
    description: `Collection of Outsider Art. Project built using Gatsbyjs & Airtable with CSS from Webflow`,
    author: `@thethisthat`,
    titleTemplate: `%s | Outsider Art`,
    siteUrl: `https://theartoutside.com`,
    defaultImage: `cover.jpg`,
    twitterUsername: `@thethisthat`,
  },
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    
    `gatsby-transformer-sharp`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [] // just in case those previously mentioned remark plugins sound cool :)
      }
    },
    {
      resolve:`gatsby-source-airtable`,
      options:{
        apiKey:process.env.GATSBY_AIRTABLE_API,
        concurrency:5,
        tables:[
          {
            baseId:process.env.GATSBY_AIRTABLE_BASE_ID,
            tableName:`Artists`,
            mapping:{gallery:`fileNode`, cover_img: `fileNode`, biography: `text/markdown` },
            }
        ]
      }
    },
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-plugin-webfonts`,
      options: {
        fonts: {
          google: [
            {
              family: "Roboto",
              variants: ["300", "400", "500"],
            },
            {
              family: "Roboto Condensed",
              variants: ["300", "700"],
            },
            {
              family: "Roboto Slab",
              variants: ["300"],
            },
          ],
        },
      },
    },
  ],
}
