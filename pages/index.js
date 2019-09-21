import React from 'react'
import styled, { createGlobalStyle } from 'styled-components'
import { Layout, Landing } from '../components'

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
class HomePage extends React.PureComponent {
  static defaultProps = {
    title: 'BK'
  }
  render() {
    const { title } = this.props
    return (
      <Layout title={title}>
        <GlobalStyled />
        <Landing className="Home" />
      </Layout>
    )
  }
}

export default HomePage
