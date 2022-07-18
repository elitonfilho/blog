import { Link } from "gatsby"
import * as React from "react"

const TagsBlogPost = ({inArticle, tags}) => {
    if (inArticle) return (
        <ul className="tags-article">
            <li>
                <Link to="/tags/">Tags:</Link>
            </li>
            {tags.map(tag => 
            <li>
                <Link to={`/tags/${tag}`}>{tag}</Link>
            </li>
        )}
        </ul>
    )
    else return (
    <div>
        <ul className="tags-title">
        {tags.map(tag => 
            <Link to={`/tags/${tag}`}>{tag}</Link>
        )}
        </ul>
    </div>
    )
}

export default TagsBlogPost