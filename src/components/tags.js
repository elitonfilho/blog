import { Link } from "gatsby"
import * as React from "react"

const TagsBlogPost = ({ inArticle, tags }) => (
        <div inArticle={inArticle} className="tags-article">
            <Link to="/tags/">Tags:</Link>
            {tags.map(tag =>
                <Link to={`/tags/${tag}`}>{tag}</Link>
            )}
        </div>
)

export default TagsBlogPost