import React from 'react'
import styled from 'styled-components'
import { Layout } from '../layout'
import { media } from '../styles'
import { Header, About, Contact, Portfolio } from '../components'
const StyledStaticHeroBanner = styled.div`
  width: 100%;
  position: relative;
  .static-button {
    position: absolute;
    left: 0px;
    right: 0px;
    margin: auto;
    bottom: 40px;
    font-size: 30px;
    padding: 10px 45px;
    background: #000000de;
    color: white;
    font-weight: bold;
    border: none;

    animation: example 700ms ease infinite;
    @keyframes example {
      0% {
        transform: scale(0.99);
      }
      50% {
        transform: scale(1.05);
      }
      100% {
        transform: scale(0.99);
      }
    }

    ${media.phoneOrSmaller`
      bottom: 18px;
      font-size: 12px;
      padding: 7px 45px;
    `}
  }
`
const StyledStaticBanner = styled.img`
  width: 100%;
`

const StaticHeroBanner = props => {
  return (
    <StyledStaticHeroBanner>
      <a href="/arts">
        <button className="static-button">GO MY SKETCH</button>
      </a>
      <StyledStaticBanner src="//ntryogep.sirv.com/pencil-sketch/banner_01.jpg" />
    </StyledStaticHeroBanner>
  )
}

const HomePage = props => {
  const { title = 'BK' } = props

  return (
    <Layout title={title}>
      <Header />
      <StaticHeroBanner />
      <Portfolio />
      <About />
      <Contact />
    </Layout>
  )
}

export default HomePage
