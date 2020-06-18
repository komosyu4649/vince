import React from "react"
// import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Cbutton from "../components/cbutton/cbutton"
import "./shinjyo.scss"

import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'


const ShinjyoPage = () => (
    <Layout>
        <SEO title="Home" />

        <div className="shinjyo-fv">
            <div className="shinjyo-message">
                <div className="cm-h1">
                    <h1>地域貢献</h1>
                </div>
            </div>
        </div>


        {/* <StaticQuery
            query={query}
            render={ data => (
        <div className="keii"> 
            <h3>設立経緯</h3>
            <div className="keii-w">
                <h4>生まれ育った <br />
                    この地で</h4>
                <div className="keii-i">
                    <Img fluid ={data.c1img.childImageSharp.fluid} />
                </div>
                <article className="keii-t">
                    <p>
                    テキストテキストテキストテキスト
                    テキスト
                    テキストテキストテキストテキスト 
                    テキストテキストテキスト 
                    テキストテキストテキストテキスト 
                    テキストテキストテキスト
                    テキストテキストテキストテキスト
                    </p>
                </article>
            </div>
        </div>
            ) }
        /> */}


        {/* <StaticQuery
            query={query}
            render={ data => (
        <div className="c-support">
            <h3>地域密着のサポート体制</h3>
            <div className="c-support-w">
                <h4>新庄から <br />
                    地域徹底サポート</h4>
                <div className="c-support-i">
                    <Img fluid={data.c2img.childImageSharp.fluid} />
                </div>
                <article className="c-support-list">
                    <ul>
                        <li>テキストテキストテキスト</li>
                        <li>テキストテキストテキスト</li>
                        <li>テキストテキストテキスト</li>
                    </ul>
                </article>
            </div>
        </div>
            )}
        /> */}


        {/* <StaticQuery
            query={query}
            render={ data => (
                <div className="future">
                    <h3>描く未来</h3>
                    <div className="future-w">
                        <h4>こういう会社、 <br/>
                            こういう地域</h4>
                        <div className="future-i">
                            <Img fluid={data.c3img.childImageSharp.fluid} />
                        </div>
                        <article className="future-t">
                            <p>
                            テキストテキストテキストテキスト
                            テキスト
                            テキストテキストテキストテキスト 
                            テキストテキストテキスト 
                            テキストテキストテキストテキスト 
                            テキストテキストテキスト
                            テキストテキストテキストテキスト
                            </p>
                        </article>
                    </div>
                </div>
            )}
        /> */}


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


export default ShinjyoPage


const query = graphql`
query {
    c1img:file(relativePath: {eq: "c-1.jpeg"}) {
        childImageSharp {
          fluid(maxWidth:1600) {
            ...GatsbyImageSharpFluid
          }
        }
    },
    c2img:file(relativePath: {eq: "c-2.jpeg"}) {
        childImageSharp {
          fluid(maxWidth:1600) {
            ...GatsbyImageSharpFluid
          }
        }
    },
    c3img:file(relativePath: {eq: "c-3.jpeg"}) {
        childImageSharp {
          fluid(maxWidth:1600) {
            ...GatsbyImageSharpFluid
          }
        }
    },
}
`