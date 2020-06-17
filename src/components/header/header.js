import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import "./header.scss"

const Header = ({ siteTitle }) => (
    <div>
      <h1 style={{ margin: 0 }}>
        <Link　to="/">
          {siteTitle}
        </Link>
      </h1>
      <div className="header-menu">
      <nav>
        <ul>
            <li>
                <Link to="/">
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
    </div>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
