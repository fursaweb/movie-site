import React from 'react'
import Header from '../Header'

const Layout = props => {
    return (
        <>
            <Header />
            <div className="main">
                <div className="l-wrapper">{props.children}</div>
            </div>
            <footer className="footer">
                <a href="/" className="footer__link">
                    Movie
                    <br />
                    Site
                </a>
            </footer>
        </>
    )
}

export default Layout
