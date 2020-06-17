import React from 'react'
import './footer.scss'
import { Link } from "gatsby"
// import About from "./about"

function Footer() {
    return (
        <div className="footer">
            <h3>Vince.inc</h3>
            <div className="footer-w">
            <div className="footer-i">
                <dl>
                    <dt>〒</dt>
                    <dd>000-0000</dd>
                </dl>
                <dl>
                    <dt>会社所在地：</dt>
                    <dd>＊＊＊＊＊＊＊＊＊</dd>
                </dl>
            </div>
            <div className="footer-i">
                <dl>
                    <dt>Tel：</dt>
                    <dd>000-0000-0000</dd>
                </dl>
                <dl>
                    <dt>Mail</dt>
                    <dd>++++++++++@gmail.com</dd>
                </dl>
            </div>
            </div>
            <div className="footer-f">
            
            <div className="footer-menu">
                <nav>
                    <ul>
                        <li>
                            <Link to={`/`}>
                                ホーム
                            </Link>
                        </li>
                        <li>
                            <Link to={`/about/`}>
                                企業情報
                            </Link>
                        </li>
                        <li>
                            <Link to={`/service/`}>
                                事業内容
                            </Link>
                        </li>
                        <li>
                            <Link to={`/blog/`}>
                                ブログ
                            </Link>
                        </li>
                        <li>
                            <Link to={`/shinjyo/`}>
                                地域貢献
                            </Link>
                        </li>
                        <li>
                            <Link to={`/jisseki/`}>
                                制作実績
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
            <small>Copyright Vince.inc All Right Reserved</small>
            </div>
        </div>
    )
}

export default Footer
