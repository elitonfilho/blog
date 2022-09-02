import { Link } from "gatsby"
import * as React from "react"

const TagsBlogPost = ({ inArticle, tags }) => (
        <div inarticle={inArticle} className="tags-article">
            <Link to="/tags/">Tags:</Link>
            {tags && tags.map(tag =>
                <Link to={`/tags/${tag}`}>{tag}</Link>
            )}
        </div>
)

export default TagsBlogPost