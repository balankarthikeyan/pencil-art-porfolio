import React from 'react'
import Link from 'next/link'
import Head from 'next/head'
import styled, { createGlobalStyle } from 'styled-components'
const GlobalStyled = createGlobalStyle`
  /* @import url('https://fonts.googleapis.com/css?family=Roboto'); */
  body {
    margin: 0px;
    padding: 0px;
    font-family: 'Roboto', arial, verdana
  }

  * {
    box-sizing: border-box;
  }
`
import { StyledFooter } from './styled'
const Layout = ({ children, title = 'This is the default title' }) => (
  <React.Fragment>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <script src="//cdnjs.cloudflare.com/ajax/libs/masonry/3.1.5/masonry.pkgd.min.js" />
    </Head>
    {children}
    <GlobalStyled />
    <StyledFooter className="footer">{'©2019 Karthikeyan Balan'}</StyledFooter>
  </React.Fragment>
)

export { Layout }
export default Layout
