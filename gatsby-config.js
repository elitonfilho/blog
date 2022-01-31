module.exports = {
    siteMetadata: {
      title: `Eliton's Blog`,
      author: {
          name: `Eliton`,
          summary: `A guy.`,
      },
      description: `Trying to write useful and not boring stuff`,
    },
    plugins: [
      {
        resolve: `gatsby-plugin-mdx`,
        options: {
          extensions: [`.mdx`, `.md`],
        },
      },
      {
        resolve: `gatsby-source-filesystem`,
        options: {
          path: `${__dirname}/blog`,
          name: `blog`,
        },
      },
    ],
  };