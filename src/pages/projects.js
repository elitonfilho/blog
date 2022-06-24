import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import ProjectComponent from "../components/projects"

const ProjectPage = ({ location }) => {
    return (
        <Layout location={location}>
            <Seo/>
            <ProjectComponent/>
        </Layout>
    )
}

export default ProjectPage