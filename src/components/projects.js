import { useStaticQuery, graphql } from "gatsby"
import * as React from "react"

const ProjectComponent = () => {
    const queryData = useStaticQuery(graphql`
    query ProjectQuery {
        site {
          siteMetadata {
            projects {
              personal {
                name
                link
                description
              }
              work {
                name
                link
                description
              }
            }
          }
        }
    }`)

    const personalProjects = queryData.site.siteMetadata.projects?.personal
    const workProjects = queryData.site.siteMetadata.projects?.work

    return (
        <div>
            <h5 style={{ textAlign: `center` }}>Here are some personal projects that i've worked on: </h5>
            <ol>{
                personalProjects.map(element => {
                    return (
                        <li key={element.name}>
                            <a href={element.link}>{element.name}</a>
                            <p>{element.description}</p>
                        </li>)
                })}</ol>
            <h5 style={{ textAlign: `center` }}>And some open-source work projects that i've worked with: </h5>
            <ol>{
                workProjects.map(element => {
                    return (
                        <li key={element.name}>
                            <a href={element.link}>{element.name}</a>
                            <p>{element.description}</p>
                        </li>)
                })}</ol>
        </div>
    )
}

export default ProjectComponent