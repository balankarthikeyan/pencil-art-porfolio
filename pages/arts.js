import React from 'react'
import styled from 'styled-components'
import { Layout } from '../layout'
import { Header, GridCard } from '../components'
const StyledStaticBanner = styled.img`
  width: 100%;
`

const StyledLayout = styled(Layout)`
  header {
    position: unset;
  }
`

const HomePage = props => {
  const { title = 'BK' } = props

  return (
    <StyledLayout title={title}>
      <Header />
      <GridCard />
    </StyledLayout>
  )
}

export default HomePage
