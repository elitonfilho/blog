import * as React from "react"
import ThemeSelector from "./themeSelector"
import { Link, graphql, useStaticQuery } from "gatsby"

const HeaderComponent = () => {

  const queryData = useStaticQuery(graphql`
  query HeaderQuery {
    site {
      siteMetadata {
        title
        }
      }
    file(name: {eq: "resume"}) {
      id
      publicURL
      dir
    }
  }`
  )

  const title = queryData.site.siteMetadata?.title
  const fileURL = queryData.file?.publicURL

  return (
      <nav>
        <ul className="header-nav">
          <h1>
            <Link to="/">
              {title}
            </Link>
          </h1>
          <li key={`projects`}>
            <h6>
              <Link to="/projects">projects</Link>
            </h6>
          </li>
          <li key={`cv`}>
            <h6>
              <a href={fileURL} download>cv</a>
            </h6>
          </li>
          <li key={`contact`}>
            <h6>
              <Link to="/contact">contact</Link>
            </h6>
          </li>
          <li>
            <ThemeSelector/>
          </li>
        </ul>
      </nav>
  )
}

export default HeaderComponent