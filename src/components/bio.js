import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import GitIcon from "../../src/images/gh.svg"
import LinkedinIcon from "../../src/images/linkedin.svg"
import TwitterIcon from "../../src/images/twitter.svg"
import CurriculumIcon from "../../src/images/curriculum.svg"

const Bio = () => {
    const data = useStaticQuery(graphql`
        query BioQuery {
            site {
                siteMetadata {
                    author {
                        name
                        summary
                    }
                    social {
                        twitter
                        github
                        linkedin
                    }
                }
            }
            file(name: {eq: "resume"}) {
                id
                publicURL
                dir
              }
        }`
    )

    const author = data.site.siteMetadata?.author
    const social = data.site.siteMetadata?.social

    return (
        <div className="bio">
            <StaticImage
                className="bio-avatar"
                layout="fixed"
                formats={["auto", "webp", "avif"]}
                src="../images/profile-pic.jpeg"
                width={50}
                height={50}
                quality={95}
                alt="Profile picture"
            />
            <div>
                {author?.name && (
                    <p>
                        Written by <strong>{author.name}</strong> {author?.summary || null}
                        {` `}
                    </p>
                )}
                <div className="bio-social">
                    <a href={`https://github.com/${social?.github || ''}`} target="_blank" rel="noreferrer"><GitIcon/>{}</a>
                    <a href={`https://linkedin.com/in/${social?.linkedin || ''}`} target="_blank" rel="noreferrer"><LinkedinIcon/>{}</a>
                    <a href={`https://twitter.com/${social?.twitter || ''}`} target="_blank" rel="noreferrer"><TwitterIcon/>{}</a>
                    <a href={data.file.publicURL} download><CurriculumIcon/>{}</a>
                </div>
            </div>


        </div>
    )
}

export default Bio