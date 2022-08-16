import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import GitIcon from "../../src/static/gh.svg"
import LinkedinIcon from "../../src/static/linkedin.svg"
import TwitterIcon from "../../src/static/twitter.svg"
import MailIcon from "../../src/static/mail.svg"

const ContactComponent = () => {

    const data = useStaticQuery(graphql`
        query contactQuery {
            site {
                siteMetadata {
                    social {
                        twitter
                        github
                        linkedin
                        mail
                    }
                }
            }
        }`
    )

    const social = data.site.siteMetadata?.social

    return (
        <div className="contact">
            <p>
                Feel free to contact me using any of these links:
            </p>
            <ol>
                <li>
                <a href={`https://github.com/${social?.github || ''}`} target="_blank" rel="noreferrer"><GitIcon />GitHub</a>
                </li>
                <li>
                <a href={`https://linkedin.com/in/${social?.linkedin || ''}`} target="_blank" rel="noreferrer"><LinkedinIcon />LinkedIn</a>
                </li>
                <li>
                <a href={`https://twitter.com/${social?.twitter || ''}`} target="_blank" rel="noreferrer"><TwitterIcon />Twitter</a>
                </li>
                <li>
                <a href={`mailto:${social?.mail || ''}`} target="_blank" rel="noreferrer"><MailIcon />Email</a>
                </li>
            </ol>
        </div>
    )
}

export default ContactComponent