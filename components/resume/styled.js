import React from 'react'
import styled, { css } from 'styled-components'
import { media } from '../../styles'
const Main = styled.div`
  position: absolute;
  z-index: 1;
  left: 320px;
  margin-left: 36px;
  overflow: scroll;
  height: 94vh;
  ${media.phoneOrSmaller`
    overflow: unset;
    height: unset;
    margin-top: 60px;
    border-top: 10px solid #4B21FF;
    position: relative;
    left: unset;
    margin-left: unset;
    margin-bottom: 200px;
    padding-left: 20px;
  `}
`
const StyledInfoContainer = styled.div`
  display: flex;
  margin-top: 20px;
`
const StyledProfileImage = styled.img`
  border-radius: 50%;
  width: 106px;
  height: 110px;
  margin-right: 20px;
`
const StyledProfileDetails = styled.div``
const StyledFirstName = styled.h1`
  text-transform: uppercase;
  margin: 0px;
  ${media.phoneOrSmaller`
    font-size: 8vw;
  `}
`
const StyledLastName = styled.h1`
  text-transform: uppercase;
  margin: 0px;
  color: #4c20fd;
  ${media.phoneOrSmaller`
    font-size: 8vw;
  `}
`
const StyledDesignation = styled.label`
  font-size: 15px;
  font-weight: 500;
  margin-top: 16px;
  ${media.phoneOrSmaller`
    font-size: 4vw;
  `}
`
const StyledTitle = styled.h2`
  text-transform: uppercase;
  margin-bottom: 10px;
  font-weight: 300;
`
const StyledDescription = styled.p`
  width: 50vw;
  margin: 0;
  ${media.phoneOrSmaller`
    width:90vw;
  `}
`
const commonAlignText = css`
  font-weight: 300;
  ${StyledTitle} {
    margin-top: 36px;
  }
  ${StyledDescription} {
    margin: 10px 0;
  }
`
const StyledSummaryWrapper = styled.div``
const StyledExperienceWrapper = styled.div`
  ${commonAlignText}
`
const StyledEducationWrapper = styled.div`
  ${commonAlignText}
`
export {
  Main,
  StyledInfoContainer,
  StyledProfileImage,
  StyledProfileDetails,
  StyledFirstName,
  StyledLastName,
  StyledDesignation,
  StyledTitle,
  StyledDescription,
  StyledSummaryWrapper,
  StyledEducationWrapper,
  StyledExperienceWrapper
}
