module.exports = {
  siteMetadata: {
    title: `Eliton's Blog!`,
    author: {
      name: `Eliton`,
      summary: `I am a Cartographic Enginner / Software Dev trying to build and share
       some knowledge by writing articles!
      Interested in GIS tecnologies, ML/DL applications (especially on remote sensing data)
      and cool stuff about lower (C++/Rust) and higher (Python/JS) level languages!`
    },
    social: {
      github: `elitonfilho`,
      twitter: `jelitonaf`,
      linkedin: `elitonalbuquerque`,
      mail: `jealbf@gmail.com`
    },
    projects: {
      personal:[
        {
          name: `SegSR`,
          link: `https://github.com/elitonfilho/segsr`,
          description: `Deep learning method to generate semantically-aware super resolved imagery`
        },
        {
          name: `This blog!`,
          link: `https://github.com/elitonfilho/blog`,
          description: `Static website using a modified gatsby blog template`
        },
        {
          name: `Secret Message`,
          link: `https://github.com/poa-tech-beer/experiment-1`,
          description: `Serverless message application built with friends during pizza nights!`
        },
      ],
      work: [
        {
          name: `Edition Plugin`,
          link: `https://github.com/dsgoficial/ferramentas_edicao`,
          description: `QGIS Plugin that generates and exports maps by using a simple configuration file`
        },
        {
          name: `DSGTools`,
          link: `https://github.com/dsgoficial/DsgTools`,
          description: `QGIS Plugin that creates and manipulates geospatial data`
        },
        {
          name: `Experimental Tools`,
          link: `https://github.com/1cgeo/ferramentas_experimentais`,
          description: `QGIS Plugin holding multiple validation routines for spatial data`
        },
      ]
    }
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