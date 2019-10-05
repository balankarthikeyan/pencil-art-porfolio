import React from 'react'
import styled from 'styled-components'
import { Layout } from '../layout'
import { Header, GridCard } from '../components'
const StyledStaticBanner = styled.img`
  width: 100%;
`

const HomePage = props => {
  const { title = 'BK' } = props

  return (
    <Layout title={title}>
      <GridCard />
    </Layout>
  )
}

export default HomePage
