module.exports = {
  siteMetadata: {
    title: `Eliton's Blog!`,
    author: {
      name: `Eliton`,
      summary: `A guy.`,
    },
    social: {
      github: `elitonfilho`,
      twitter: `jelitonaf`,
      linkedin: `elitonalbuquerque`
    },
    description: `Wannabe dev learning by writing (useful) articles!
    Interested in GIS tecnologies, ML/DL applications (especially on remote sensing data)
    and cool stuff about lower (C++/Rust) and higher (Python/JS) level languages!`,
    menuLinks: [
      {
        name: `blog`,
        link: `/`
      },
      {
        name: `projects`,
        link: `/projects`
      },
      {
        name: `cv`, 
        link: `/cv`
      },
      {
        name: `contact`, 
        link: `/contact`
      },

    ]
  },
  plugins: [
    `gatsby-plugin-image`,  
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`, `.md`],
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1000,
              sizeByPixelDensity: true,
            },
          }
        ],
      },
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: `${__dirname}/src/images`
        }
      }
    },
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
        path: `${__dirname}/src/images`,
        name: `images`,
      },
    },
  ],
};