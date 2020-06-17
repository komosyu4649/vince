import React from "react"
// import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Cbutton from "../components/cbutton/cbutton"
import "./jisseki.scss"

import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'


const JissekiPage = () => (

<Layout>
    <SEO title="Home" />

    <div className="jisseki-fv">
        <div className="jisseki-message">
            <div className="jm-h1">
                <h1>制作実績</h1>
            </div>
        </div>
    </div>


    <StaticQuery
        query={query}
        render={ data => (
    <div className="seisaku">
        <h3>農業事業者様に支持されるサイト制作を</h3>

        <div className="seisaku-w">
            <div className="seisaku-it">
            <div className="seisaku-i">
                <Img fluid={data.j1img.childImageSharp.fluid} />
            </div>
            <div className="seisaku-t">
                <artcle className="seisaku-r">
                    <h4>私たちが農業事業に強い理由</h4>
                    <p>農業法人様から求められるクオリティと価格を追求しています。
                        テキストテキストテキストテキストテキストテキスト
                        テキストテキストテキストテキストテキスト
                        テキストテキストテキストテキストテキストテキスト
                    </p>
                </artcle>
            </div>
            </div>

                <article className="seisaku-list">
                    <h5>農業事業への強み</h5>
                    <ul>
                        <li>・テキストテキストテキストテキスト</li>
                        <li>・テキストテキストテキストテキスト</li>
                        <li>・テキストテキストテキストテキスト</li>
                    </ul>
                </article>
        </div>
    </div>
        )}
    />


<StaticQuery
        query={query}
        render={ data => (
    <div className="s-jisseki">
        <h3>実績一覧</h3>
    <div className="s-jisseki-w">
        <article className="s-jisseki-i">
        <a href="/">
            <figure>
            <Img
                fluid={data.j2img.childImageSharp.fluid}
            />
            </figure>
            <h4>株式会社〇〇様</h4>
        </a>
        </article>

        <article className="s-jisseki-i">
        <a href="/">
            <figure>
            <Img
                fluid={data.j3img.childImageSharp.fluid}
            />
            </figure>
            <h4>株式会社〇〇様</h4>
        </a>
        </article>

        <article className="s-jisseki-i">
        <a href="/">
            <figure>
            <Img
                fluid={data.j4img.childImageSharp.fluid}
            />
            </figure>
            <h4>株式会社〇〇様</h4>
        </a>
        </article>
        <article className="s-jisseki-i">
        <a href="/">
            <figure>
            <Img
                fluid={data.j5img.childImageSharp.fluid}
            />
            </figure>
            <h4>株式会社〇〇様</h4>
        </a>
        </article>

        <article className="s-jisseki-i">
        <a href="/">
            <figure>
            <Img
                fluid={data.j6img.childImageSharp.fluid}
            />
            </figure>
            <h4>株式会社〇〇様</h4>
        </a>
        </article>

        <article className="s-jisseki-i">
        <a href="/">
            <figure>
            <Img
                fluid={data.j7img.childImageSharp.fluid}
            />
            </figure>
            <h4>株式会社〇〇様</h4>
        </a>
        </article>
        
    </div>
    </div>
)}
/>


<StaticQuery
        query={query}
        render={ data => (
<div className="o-jisseki">
    <h3>お客様の声</h3>
    <div className="o-jisseki-w">
        <div className="o-jisseki-i">
            <figure>
            <Img
                fluid={data.j8img.childImageSharp.fluid}
            />
            </figure>
            <article className="o-jisseki-i-t">
            <h4>株式会社〇〇</h4>
            <h5>代表取締役社長〇〇様</h5>
            <h6>「ここがよかったです」</h6>
            <p>
                テキストテキストテキストテキストテキスト
                テキストテキストテキストテキストテキスト
                テキストテキストテキストテキストテキスト
                テキストテキストテキストテキストテキスト
            </p>
            </article>
        </div>

        <div className="o-jisseki-i">
            <figure>
            <Img
                fluid={data.j9img.childImageSharp.fluid}
            />
            </figure>
            <article className="o-jisseki-i-t">
            <h4>株式会社〇〇</h4>
            <h5>代表取締役社長〇〇様</h5>
            <h6>「ここがよかったです」</h6>
            <p>
                テキストテキストテキストテキストテキスト
                テキストテキストテキストテキストテキスト
                テキストテキストテキストテキストテキスト
                テキストテキストテキストテキストテキスト
            </p>
            </article>
        </div>

        <div className="o-jisseki-i">
            <figure>
            <Img
                fluid={data.j10img.childImageSharp.fluid}
            />
            </figure>
            <article className="o-jisseki-i-t">
            <h4>株式会社〇〇</h4>
            <h5>代表取締役社長〇〇様</h5>
            <h6>「ここがよかったです」</h6>
            <p>
                テキストテキストテキストテキストテキスト
                テキストテキストテキストテキストテキスト
                テキストテキストテキストテキストテキスト
                テキストテキストテキストテキストテキスト
            </p>
            </article>
        </div>

    </div>
</div>
)}
    />


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


export default JissekiPage


const query = graphql`
query {
    j1img:file(relativePath: {eq: "j-1.jpeg"}) {
        childImageSharp {
          fluid(maxWidth:1600) {
            ...GatsbyImageSharpFluid
          }
        }
    },
    j2img:file(relativePath: {eq: "j-2.jpeg"}) {
        childImageSharp {
          fluid(maxWidth:1600) {
            ...GatsbyImageSharpFluid
          }
        }
    },
    j3img:file(relativePath: {eq: "j-3.jpeg"}) {
        childImageSharp {
          fluid(maxWidth:1600) {
            ...GatsbyImageSharpFluid
          }
        }
    },
    j4img:file(relativePath: {eq: "j-4.jpeg"}) {
        childImageSharp {
          fluid(maxWidth:1600) {
            ...GatsbyImageSharpFluid
          }
        }
    },
    j5img:file(relativePath: {eq: "j-5.jpeg"}) {
        childImageSharp {
          fluid(maxWidth:1600) {
            ...GatsbyImageSharpFluid
          }
        }
    },
    j6img:file(relativePath: {eq: "j-6.jpeg"}) {
        childImageSharp {
          fluid(maxWidth:1600) {
            ...GatsbyImageSharpFluid
          }
        }
    },
    j7img:file(relativePath: {eq: "j-7.jpeg"}) {
        childImageSharp {
          fluid(maxWidth:1600) {
            ...GatsbyImageSharpFluid
          }
        }
    },
    j8img:file(relativePath: {eq: "j-8.jpeg"}) {
        childImageSharp {
          fluid(maxWidth:1600) {
            ...GatsbyImageSharpFluid
          }
        }
    },
    j9img:file(relativePath: {eq: "j-9.jpeg"}) {
        childImageSharp {
          fluid(maxWidth:1600) {
            ...GatsbyImageSharpFluid
          }
        }
    },
    j10img:file(relativePath: {eq: "j-10.jpeg"}) {
        childImageSharp {
          fluid(maxWidth:1600) {
            ...GatsbyImageSharpFluid
          }
        }
    },
}
`

