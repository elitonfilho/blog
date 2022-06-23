import * as React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"

const HeaderComponent = () => {

  const queryData = useStaticQuery(graphql`
  query HeaderQuery {
    site {
      siteMetadata {
        title
        menuLinks {
          name
          link
        }
      }
    }
  }`
  )

  const title = queryData.site.siteMetadata?.title
  const menuLinks = queryData.site.siteMetadata?.menuLinks

  return (
      <nav>
        <ul className="header-nav">
          <h1>
            <Link to="/">
              {title}
            </Link>
          </h1>
          {menuLinks.map((link) => (
            <li key={link.name}>
              <h6>
                <Link to={link.link}>{link.name}</Link>
              </h6>
            </li>
          ))}
        </ul>
      </nav>
  )
}

export default HeaderComponent