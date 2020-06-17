import React from "react"
import { Link } from "gatsby"
import "./blog-template.scss"

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
            pagetitle="Vinceブログ" 
            pagedesc="Vinceのブログです"
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


            <div className="container-bt">
                <h3 className="bar">投稿一覧</h3>
                <div className="posts">
                    {data.allContentfulBlogPost.edges.map(({ node }) => (
                    <article className="post" key={node.id}>
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
                                ? `/blog/`
                                : `/blog/${pageContext.currentPage - 1}/`
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
                        <Link to={`/blog/${pageContext.currentPage + 1}/`}
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


        <div className="here">
            <h3>サイト制作のご相談は <br className="pc-none" />
            こちらから</h3>
            <div className="here-w">
                <dl>
                    <dt>Tel : </dt>
                    <dd>000-0000-0000</dd>
                </dl>
                <dl>
                    <dt>Mail : </dt>
                    <dd>+++++++++@gmail.com</dd>
                </dl>
            </div>
        </div>


    </Layout>
)


export default BlogPage


export const query = graphql`
    query($skip: Int!, $limit: Int!) {
        allContentfulBlogPost(
            sort: { order: DESC, fields: publishDate }
            skip: $skip
            limit: $limit
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