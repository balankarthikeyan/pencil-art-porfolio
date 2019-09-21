import React from 'react'
import { Layout, Resume } from '../components'

class ResumePage extends React.PureComponent {
  static defaultProps = {
    title: 'Resume'
  }
  render() {
    const { title } = this.props
    return <Layout title={title}> {<Resume className={title} />}</Layout>
  }
}

export default ResumePage
