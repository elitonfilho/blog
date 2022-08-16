import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

const Bio = () => {
    const data = useStaticQuery(graphql`
        query BioQuery {
            site {
                siteMetadata {
                    author {
                        name
                        summary
                    }
                }
            }
        }`
    )

    const author = data.site.siteMetadata?.author

    return (
        <div className="bio">
            <StaticImage
                className="bio-avatar"
                formats={["auto", "webp", "avif"]}
                src="../static/profile-pic.jpeg"
                alt="Profile picture"
                constrained
            />
            <div>
                {author?.name && (
                    <p>
                        Hello, my name is <strong>{author.name}</strong>! {author?.summary || null}
                        {` `}
                    </p>
                )}
            </div>
        </div>
    )
}

export default Bio