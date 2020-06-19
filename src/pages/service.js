import React from "react"
// import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Cbutton from "../components/cbutton/cbutton"
import "./service.scss"

import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'


const ServicePage = () => (
    <StaticQuery
            query={query}
            render={ data => (
    <Layout>
        <SEO title="Home" />

        <div className="service-fv">
            <div className="service-message">
                <div className="sm-h1">
                    <h1>提供サービス</h1>
                </div>
            </div>
        </div>


        <div className="service-s">
           <h2>
               それぞれの課題に沿った <br className="pc-none"/>
               月々定額プラン
            </h2> 
            <div className="service-s-t">
                <p>お客様の課題解決に必要な幅広いプランを<br className="pc-none"/>
ご用意してお待ちしております。</p>
            </div>
        </div>


        <div className="service-c">
            <h3>圧倒的コストパフォーマンス</h3>
            <div className="service-c-w">
                <ul>
                    <li>初期導入費用0円</li>
                    <li>更新料金込み</li>
                    <li>ドメインサーバー代込み</li>
                    <li>解約自由</li>
                </ul>
            </div>
        </div>


        <div className="service-p-w">
            <div className="service-p-i">
                <Img fluid={data.s1img.childImageSharp.fluid} />
                <dl>
                    <dt>月額</dt>
                    <dd>5,500円</dd>
                </dl>
                <div className="service-t">
                <tabel>
                    <tr>
                        <th>ページ</th>
                        <td>〜6ページ</td>
                    </tr>
                    <tr>
                        <th>レスポンシブ</th>
                        <td>PC, タブレット, SP</td>
                    </tr>
                    <tr>
                        <th>取材・撮影</th>
                        <td>素材一括作成</td>
                    </tr>
                    <tr>
                        <th>更新</th>
                        <td>3回/月</td>
                    </tr>
                </tabel>
                </div>
            </div>
            <div className="service-p-i">
                <Img fluid={data.s1img.childImageSharp.fluid} />
                <dl>
                    <dt>月額</dt>
                    <dd>7,700円</dd>
                </dl>
                <div className="service-t">
                <tabel>
                    <tr>
                        <th>ページ</th>
                        <td>〜8ページ</td>
                    </tr>
                    <tr>
                        <th>レスポンシブ</th>
                        <td>PC, タブレット, SP</td>
                    </tr>
                    <tr>
                        <th>取材・撮影</th>
                        <td>素材一括作成</td>
                    </tr>
                    <tr>
                        <th>更新</th>
                        <td>5回/月</td>
                    </tr>
                    <tr>
                        <th>サイト設計</th>
                        <td>SPAサイト</td>
                    </tr>
                    <tr>
                        <th>キュレーション</th>
                        <td>掲載</td>
                    </tr>
                    <tr>
                        <th>SNS共有</th>
                        <td>4回発信/月</td>
                    </tr>
                </tabel>
                </div>
            </div>
            <div className="service-p-i">
                <Img fluid={data.s1img.childImageSharp.fluid} />
                <dl>
                    <dt>月額</dt>
                    <dd>9,900円</dd>
                </dl>
                <div className="service-t">
                <tabel>
                    <tr>
                        <th>ページ</th>
                        <td>〜12ページ</td>
                    </tr>
                    <tr>
                        <th>レスポンシブ</th>
                        <td>PC, タブレット, SP</td>
                    </tr>
                    <tr>
                        <th>取材・撮影</th>
                        <td>素材一括作成</td>
                    </tr>
                    <tr>
                        <th>更新</th>
                        <td>7回/月</td>
                    </tr>
                    <tr>
                        <th>サイト設計</th>
                        <td>SPAサイト</td>
                    </tr>
                    <tr>
                        <th>ECサイト</th>
                        <td>自社/弊社</td>
                    </tr>
                    <tr>
                        <th>キュレーション</th>
                        <td>掲載</td>
                    </tr>
                    <tr>
                        <th>SNS共有</th>
                        <td>8回発信/月</td>
                    </tr>
                </tabel>
                </div>
            </div>

        </div>


    <div className="service-o-c-w">
    <div className="service-p-s">
            <h3>徹底的にサポートします！</h3>
            <ul>
                <li>サイトコンテンツ提案</li>
                <li>適切なプラン相談</li>
                <li>EC機能の導入</li>
            </ul>
        </div>

        <div className="service-p-k">
            <h3>契約について</h3>
            <div className="service-p-k-w">
            <ul>
                <li>毎月10日更新</li>
                <li>初期手数料0円</li>
                <li>解約は1ヶ月前申告</li>
            </ul>
            </div>
        </div>

        <div className="service-p-c">
            <h3>こんな希望に合わせた相談も…</h3>
            <ul>
                <li>Q.テキストテキストテキスト</li>
                <li>Q.テキストテキストテキスト</li>
                <li>Q.テキストテキストテキスト</li>
                <li>Q.テキストテキストテキスト</li>
            </ul>
        </div>
        </div>


        <div className="service-o">
            <h3>他サービス一覧</h3>
        <div className="service-o-w">
            <div className="service-o-i">
                <figure>
                    <Img fluid={data.s2img.childImageSharp.fluid} />
                </figure>
                <div className="service-o-i-t">
                    <h4>農作物EC</h4>
                    <p>
                        テキストテキストテキストテキスト
                       テキストテキストテキストテキスト
                       テキストテキストテキスト
                    </p>
                </div>
            </div>
            <div className="service-o-i">
                <figure>
                    <Img fluid={data.s2img.childImageSharp.fluid} />
                </figure>
                <div className="service-o-i-t">
                    <h4>農業コンサルティング</h4>
                    <p>
                        テキストテキストテキストテキスト
                       テキストテキストテキストテキスト
                       テキストテキストテキスト
                    </p>
                </div>
            </div>
            <div className="service-o-i">
                <figure>
                    <Img fluid={data.s2img.childImageSharp.fluid} />
                </figure>
                <div className="service-o-i-t">
                    <h4>新規就農者紹介</h4>
                    <p>
                        テキストテキストテキストテキスト
                       テキストテキストテキストテキスト
                       テキストテキストテキスト
                    </p>
                </div>
            </div>
            <div className="service-o-i">
                <figure>
                    <Img fluid={data.s2img.childImageSharp.fluid} />
                </figure>
                <div className="service-o-i-t">
                    <h4>SNSコンサルティング</h4>
                    <p>
                        テキストテキストテキストテキスト
                       テキストテキストテキストテキスト
                       テキストテキストテキスト
                    </p>
                </div>
            </div>
            <div className="service-o-i">
                <figure>
                    <Img fluid={data.s2img.childImageSharp.fluid} />
                </figure>
                <div className="service-o-i-t">
                    <h4>テキスト</h4>
                    <p>
                        テキストテキストテキストテキスト
                       テキストテキストテキストテキスト
                       テキストテキストテキスト
                    </p>
                </div>
            </div>
            <div className="service-o-i">
                <figure>
                    <Img fluid={data.s2img.childImageSharp.fluid} />
                </figure>
                <div className="service-o-i-t">
                    <h4>テキスト</h4>
                    <p>
                        テキストテキストテキストテキスト
                       テキストテキストテキストテキスト
                       テキストテキストテキスト
                    </p>
                </div>
            </div>
        </div>
        </div>


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


export default ServicePage


const query = graphql`
query {
    s1img:file(relativePath: {eq: "s-1.jpeg"}) {
        childImageSharp {
            fluid(maxWidth: 1600) {
                ...GatsbyImageSharpFluid
            }
        }
    },
    s2img:file(relativePath: {eq: "s-2.jpeg"}) {
        childImageSharp {
            fluid(maxWidth: 1600) {
                ...GatsbyImageSharpFluid
            }
        }
    }
}
`