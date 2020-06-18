import React from "react"
// import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Cbutton from "../components/cbutton/cbutton"
import "./about.scss"

import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'


const AboutPage = () => (
    <Layout>
        <SEO title="Home" />
        
        <div className="about-fv">
            <div className="about-message">
                <div className="am-h1">
                    <h1>企業情報</h1>
                </div>
            </div>
        </div>


        {/* <StaticQuery
            query={query}
            render={ data => (
        <div className="company">
            <h3>会社概要</h3>
                <div className="company-w">
                <div className="company-l">
                    <Img fluid={data.a1img.childImageSharp.fluid} />
                </div>
                <div className="company-d">
                    <table>
                        <tr>
                            <th>会社名</th>
                            <td>Vince.inc</td>
                        </tr>
                        <tr>
                            <th>代表</th>
                            <td>奥山健太郎</td>
                        </tr>
                        <tr>
                            <th>設立</th>
                            <td>2020年9月1日</td>
                        </tr>
                        <tr>
                            <th>資本金</th>
                            <td>5,000,000円</td>
                        </tr>
                        <tr>
                            <th>従業員</th>
                            <td>３名</td>
                        </tr>
                        <tr>
                            <th>電話番号</th>
                            <td>000-0000-0000</td>
                        </tr>
                        <tr>
                            <th>メール</th>
                            <td>++++++@gmail.com</td>
                        </tr>
                        <tr>
                            <th>事業内容</th>
                            <td>Webサイト制作/広告代理/地方創生/ECサイト運営/農業コンサルティング</td>
                        </tr>
                    </table>
                </div>
                </div>
        </div>
        )}
        /> */}


        {/* <StaticQuery 
            query={query}
            render={ data => (
        <div className="represent">
            <h3>代表あいさつ</h3>
            <div className="reoresent-w">
            <div className="represent-i">
                <Img fluid={data.a2img.childImageSharp.fluid} />
            </div>
                <div className="represent-t">
                    <div className="represent-n">
                        <h4>奥山健太郎</h4>
                        <h5>Kentaro Okuyama</h5>
                    </div>
                        <p>
                        テキストテキストテキストテキスト
                        テキスト
                        テキストテキストテキストテキスト 
                        テキストテキストテキスト 
                        テキストテキストテキストテキスト 
                        テキストテキストテキスト
                        テキストテキストテキストテキスト
                        </p>
                </div>

            </div>
        </div>
    )}
    /> */}


    {/* <StaticQuery
        query={query}
        render={ data => (
    <div className="contribution">
        <h3>貢献活動</h3>
        <div className="contribution-w">
            <div className="contribution-i">
                <Img fluid={data.a3img.childImageSharp.fluid} />
            </div>
            <div className="contribution-t">
                <h4>〇〇向け無料制作</h4>
                <p>
                    テキストテキストテキスト 
                    テキストテキストテキスト
                </p>
            </div>
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


export default AboutPage


const query = graphql`
query {
    a1img:file(relativePath: {eq: "a-1.jpg"}) {
        childImageSharp {
            fluid(maxWidth: 1600) {
                ...GatsbyImageSharpFluid
            }
        }
    },
    a2img:file(relativePath: {eq: "a-2.jpeg"}) {
        childImageSharp {
            fluid(maxWidth: 1600) {
                ...GatsbyImageSharpFluid
            }
        }
    },
    a3img:file(relativePath: {eq: "a-3.jpeg"}) {
        childImageSharp {
            fluid(maxWidth: 1600) {
                ...GatsbyImageSharpFluid
            }
        }
    }
}
`