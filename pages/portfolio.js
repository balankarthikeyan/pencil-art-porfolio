import React from 'react'
import { Layout, Portfolio } from '../components'

class PortfolioPage extends React.PureComponent {
  static defaultProps = {
    title: 'Portfolio'
  }
  render() {
    const { title } = this.props
    return <Layout title={title}> {<Portfolio className={title} />}</Layout>
  }
}

export default PortfolioPage
