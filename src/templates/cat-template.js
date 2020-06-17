import React from "react"
import { Link } from "gatsby"
import "./cat-template.scss"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Cbutton from "../components/cbutton/cbutton"

import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import { node } from "prop-types"

import { FontAwesomeIcon 
} from "@fortawesome/react-fontawesome"
import { faChevronLeft, 
         faChevronRight,
} from "@fortawesome/free-solid-svg-icons"


const BlogPage = ({ data, location, pageContext }) => (
    <Layout>
        <SEO 
            pagetitle={`CATEGORY: ${pageContext.catname}`} 
            pagedesc={`「${pageContext.catname}」カテゴリーの記事です`}
            pagepath={location.pathname}
        />

        <div className="blog-fv">
            <div className="blog-message">
                <div className="bm-h1">
                    <h1>Vinceブログ</h1>
                </div>
            </div>
        </div>

        <section className="content bloglist">
            <div className="container-ct">
                <h3 className="bar">CATEGORY: {pageContext.catname}</h3>
                <div className="posts-ct">
                    {data.allContentfulBlogPost.edges.map(({ node }) => (
                    <article className="post-ct" key={node.id}>
                    <Link to ={`/blog/post/${node.slug}/`}>
                        <figure>
                        <Img
                            fluid={node.eyecatch.fluid}
                            alt={node.eyecatch.description}
                            style={{ height: "100%" }}
                        />
                        <div className="hover-mask">
                            <p>記事を読む</p>
                        </div>
                        </figure>
                    </Link>
                        <h4>{node.title}</h4>
                    
                    </article>
                    ))}
                </div>

                <ul className="pagenation">
                    {!pageContext.isFirst && (
                    <li className="prev">
                        <Link to={
                            pageContext.currentPage === 2
                                ? `/cat/${pageContext.catslug}/`
                                : `/cat/${pageContext.catslug}/${pageContext.currentPage - 1}/`
                            }
                            rel="prev"
                        >
                            <FontAwesomeIcon icon={faChevronLeft} />
                            <span>前のページ</span>
                        </Link>
                    </li>
                    )}
                    
                    {!pageContext.isLast && (
                    <li className="next">
                        <Link to={`/cat/${pageContext.catslug}/${pageContext.currentPage + 1}/`}
                            rel="next"
                        >
                            <span>次のページ</span>
                            <FontAwesomeIcon icon={faChevronRight} />
                        </Link>
                    </li>
                    )}
                </ul>

            </div>
        </section>

    </Layout>
)


export default BlogPage


export const query = graphql`
    query($catid: String!, $skip: Int!, $limit: Int!) {
        allContentfulBlogPost(
            sort: { order: DESC, fields: publishDate }
            skip: $skip
            limit: $limit
            filter: { category: { elemMatch: { id: { eq: $catid } } } }
        ) {
            edges {
                node {
                title
                id
                slug
                eyecatch {
                    fluid(maxWidth: 500) {
                        ...GatsbyContentfulFluid
                    }
                    description
                }
                }
            }
        }
    }
`