import React from 'react'
import { Portfolio } from '../components/portfolio'
import { Layout } from '../layout'

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
