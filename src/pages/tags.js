import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"

import { Link, graphql } from "gatsby"

const TagsPage = ({ data, location }) => {
  const { group } = data.allMdx
  const { title } = data.site.siteMetadata

  return (
    <Layout location={location}>
      <Seo title={title} />
      <h1>Tags</h1>
      <ul>
        {group.map(tag => (
          <li key={tag.fieldValue}>
            <Link to={`/tags/${tag.fieldValue}/`}>
              {tag.fieldValue} ({tag.totalCount})
            </Link>
          </li>
        ))}
      </ul>
    </Layout>
  )
}

export default TagsPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMdx(limit: 1000) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`