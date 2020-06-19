import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Cbutton from "../components/cbutton/cbutton"
import "./index.scss"

import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'


const IndexPage = () => (
  <StaticQuery
        query={query}
        render={ data => (
  <Layout>
    
    <SEO title="Home" />


    <div className="top-fv">
        <div className="top-message">
            <div className="tm-h1">
                <h1>農業特化型</h1>
                <h1>月額定額のサイト制作</h1>
            </div>
            <div className="tm-h2">
                <h2>
                    新庄を中心に、山形の農業事業者様を <br/>
                    月額5,500円から徹底サポート
                </h2>
            </div>
        </div>
        <div className="tcb">
            <Cbutton />
        </div>
    </div>

    
    <div className="reason">
      <div className="reason-wrapper">
            <h3>今、<span>農業</span>にWebが必要な理由</h3>
            <p>
                テキストテキストテキストテキスト <br/>
                テキストテキストテキストテキストテキスト <br/>
                テキストテキストテキストテキストテキスト <br/>
                テキストテキスト
            </p>
      </div>
    </div>

                <div className="resolve">
                    <h3>こんなお悩みの解決に…</h3>
                      <div className="resolve-w">

                      <div className="resolve-i">
                      <figure>
                        <Img fluid={data.img1.childImageSharp.fluid}/>
                      </figure>
                        <div className="resolve-i-t">
                        <h4><span>楽</span>々、簡単に導入可能</h4>
                        <p>
                          テキストテキスト
                          テキストテキストテキストテキスト
                          テキストテキストテキスト
                          テキストテキストテキストテキストテキスト
                        </p>
                        </div>
                      </div>

                      <div className="resolve-i">
                      <figure>
                        <Img fluid={data.img2.childImageSharp.fluid}/>
                      </figure>
                        <div className="resolve-i-t">
                        <h4><span>安</span>心、徹底サポート</h4>
                        <p>
                          テキストテキスト
                          テキストテキストテキストテキスト
                          テキストテキストテキスト
                          テキストテキストテキストテキストテキスト
                        </p>
                        </div>
                      </div>

                      <div className="resolve-i">
                      <figure>
                        <Img fluid={data.img3.childImageSharp.fluid}/>
                      </figure>
                        <div className="resolve-i-t">
                        <h4><span>目</span>的別プランをご用意</h4>
                        <p>
                          テキストテキスト
                          テキストテキストテキストテキスト
                          テキストテキストテキスト
                          テキストテキストテキストテキストテキスト
                        </p>
                        </div>
                      </div>
                      </div>
                </div>
      
      
            <div className="ryoiki">
                <h3>事業領域</h3>
                <div className="ryoiki-w">
                    <div className="ryoiki-i"> 
                      <figure>
                        <Img fluid={data.img4.childImageSharp.fluid}/>
                      </figure>
                        <div className="ryoiki-i-t">
                            <h4>Web制作</h4>
                            <p>
                            テキストテキストテキストテキストテキスト
                            テキストテキストテキストテキストテキスト
                            </p>
                            <a>詳細ページへ</a>
                        </div>
                    </div>
                    <div className="ryoiki-i"> 
                      <figure>
                        <Img fluid={data.img4.childImageSharp.fluid}/>
                      </figure>
                        <div className="ryoiki-i-t">
                            <h4>宣伝広告媒体</h4>
                            <p>
                            テキストテキストテキストテキストテキスト
                            テキストテキストテキストテキストテキスト
                            </p>
                            <a>詳細ページへ</a>
                        </div>
                    </div>
                    <div className="ryoiki-i"> 
                      <figure>
                        <Img fluid={data.img4.childImageSharp.fluid}/>
                      </figure>
                        <div className="ryoiki-i-t">
                            <h4>地方創生</h4>
                            <p>
                            テキストテキストテキストテキストテキスト
                            テキストテキストテキストテキストテキスト
                            </p>
                            <a>詳細ページへ</a>
                        </div>
                    </div>
                    <div className="ryoiki-i"> 
                      <figure>
                        <Img fluid={data.img4.childImageSharp.fluid}/>
                      </figure>
                        <div className="ryoiki-i-t">
                            <h4>ECサイト運営</h4>
                            <p>
                            テキストテキストテキストテキストテキスト
                            テキストテキストテキストテキストテキスト
                            </p>
                            <a>詳細ページへ</a>
                        </div>
                    </div>
                    <div className="ryoiki-i"> 
                      <figure>
                        <Img fluid={data.img4.childImageSharp.fluid}/>
                      </figure>
                        <div className="ryoiki-i-t">
                            <h4>農業コンサルティング</h4>
                            <p>
                            テキストテキストテキストテキストテキスト
                            テキストテキストテキストテキストテキスト
                            </p>
                            <a>詳細ページへ</a>
                        </div>
                        
                    </div>
                </div>
            </div>


    <div className="mean">
        <h3>新庄と私たち</h3>
        <div className="mean-w">
            <h4>この土地でやる意味</h4>
            <p>
            テキストテキストテキストテキスト <br/>
            テキストテキストテキスト <br/>
            テキストテキストテキストテキストテキスト <br/>
            テキストテキスト <br/>
            テキストテキストテキストテキスト <br/>
            テキストテキストテキスト <br/>
            <br/>
            テキストテキスト <br/>
            テキストテキストテキストテキスト <br/>
            テキスト<br/>


            テキストテキストテキストテキスト
            </p>
        </div>
    </div>


    <section className="top-blog">
        <div className="container">
            <h3>Vinceブログ</h3>
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
  )}
/> 
  
)

export default IndexPage


export const query = graphql`
query {
  img1:file(relativePath: {eq: "t-3.jpeg"}) {
    childImageSharp {
      fluid(maxWidth:1600) {
        ...GatsbyImageSharpFluid
      }
    }
  },
  img2:file(relativePath: {eq: "t-4.jpeg"}) {
    childImageSharp {
      fluid(maxWidth:1600) {
        ...GatsbyImageSharpFluid
      }
    }
  },
  img3:file(relativePath: {eq: "t-5.jpeg"}) {
    childImageSharp {
      fluid(maxWidth:1600) {
        ...GatsbyImageSharpFluid
      }
    }
  },
  img4:file(relativePath: {eq: "t-6.jpeg"}) {
    childImageSharp {
      fluid(maxWidth:1600) {
        ...GatsbyImageSharpFluid
      }
    }
  },
  img5:file(relativePath: {eq: "t-7.jpeg"}) {
    childImageSharp {
      fluid(maxWidth:1600) {
        ...GatsbyImageSharpFluid
      }
    }
  },
    
    allContentfulBlogPost(
      sort: { order: DESC, fields: publishDate }
      skip: 0
      limit: 6
      ) {
        edges {
          node {
          title
          id
          slug
          eyecatch {
              fluid(maxWidth: 573) {
                  ...GatsbyContentfulFluid
              }
              description
          }
        }
      }
    }
  }
    
`