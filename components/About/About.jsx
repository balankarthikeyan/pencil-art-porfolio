import * as React from 'react'
import styled from 'styled-components'
import { configAbout } from './fixture'
import { media } from '../../styles'
const StyledAboutWrapper = styled.div`
  height: fit-content;
  width: 100%;
  display: flex;
  background: #000;

  .about-container-fluid {
    width: 100%;
    max-width: 1200px;
    padding: 0 20px;
    margin: auto;
    display: flex;
    flex-wrap: nowrap;
    flex-direction: row;
    align-items: center;
    ${media.phoneOrSmaller`
      flex-direction: column;
    `}
  }

  .image-wrapper {
    img {
      height: auto;
      width: 600px;
      pointer-events: none;
      ${media.phoneOrSmaller`
        width: 100%;
      `}
    }
    ${media.phoneOrSmaller`
      order: 2;
    `}
  }

  .about-wrapper {
    flex-direction: column;
    ${media.phoneOrSmaller`
      order: 1;
      text-align: center;
    `}
    h1,
    h3,
    p {
      color: white;
      margin: 0;
      padding: 0;
    }

    h1 {
      font-size: 70px;
      text-transform: uppercase;
    }
    h3 {
      font-size: 36px;
      text-transform: uppercase;
    }
    p {
      font-size: 16px;
      width: 370px;
      margin-top: 20px;
      ${media.phoneOrSmaller`
        font-size: 27px;
        width: 61vw;
    `}
    }
  }
  .image-wrapper,
  .about-wrapper {
    display: flex;
  }
`

const About = props => {
  return (
    <StyledAboutWrapper>
      <div className="about-container-fluid">
        <div className="image-wrapper">
          <img src={configAbout.image} />
        </div>
        <div className="about-wrapper">
          <h1>{configAbout.title}</h1>
          <h3>{configAbout.subtitle}</h3>
          <p>{configAbout.description}</p>
        </div>
      </div>
    </StyledAboutWrapper>
  )
}

export { About }
export default About
