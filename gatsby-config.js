module.exports = {
  siteMetadata: {
    title: `Dmitriy An`,
    author: `Dmitriy An`,
    description: `Personal website and blog by Dmitriy An.`,
    siteUrl: `https://dmitriyaa.github.io/`,
    social: {
      github: `dmitriyaa`,
      instagram: `tbat_dima`,
      linkedin: `dmitriy-an-431465106`,
      twitter: `just_dmitriy_an`,
    },
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/projects`,
        name: `projects`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/assets`,
        name: `assets`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              classPrefix: "language-",
              inlineCodeMarker: null,
              aliases: {},
              showLineNumbers: false,
              noInlineHighlight: false,
            },
          },
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `UA-96913357-3`,
      },
    },
    `gatsby-plugin-feed`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Dmitriy An`,
        short_name: `Dmitriy An`,
        start_url: `/`,
        background_color: `#14161e`,
        theme_color: `#47f4cf`,
        display: `minimal-ui`,
        icon: `content/assets/icon.png`,
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/theme/typography`,
      },
    },
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        serialize: ({ site, allSitePage }) =>
          allSitePage.edges.map(edge => {
            // if homepage, set priority 1
            const priority = edge.node.path !== "/" ? 0.7 : 1

            return {
              url: site.siteMetadata.siteUrl + edge.node.path,
              changefreq: `daily`,
              priority,
            }
          }),
      },
    },
  ],
}
