import React from 'react'
import styled, { css } from 'styled-components'
import { media } from '../../styles'
const MainWrapper = styled.header`
  display: flex;
  ${media.phoneOrSmaller`
    flex-wrap: wrap;
  `}
`
const SideBarMainWrapper = styled.div`
  width: 320px;
  height: calc(100vh - 29px);
  background: #4b21ff;
  position: relative;
  display: flex;
  ${media.phoneOrSmaller`
    width: 100%;
    height: auto;
    padding: 20px;
  `}
`
const VectorLogo = styled.svg``
const Logo = styled.div`
  position: absolute;
  left: 40px;
  z-index: 1;
  width: 46px;
  height: 40px;
  top: 40px;
  ${media.phoneOrSmaller`
    background: white;
    width: 100%;
    position: fixed;
    left: 0px;
    top: 0px;
    padding: 11px;
    height: 60px;
  `}
  ${VectorLogo} {
    ${media.phoneOrSmaller`
      path {
        fill: #4b21ff;
      }
  `}
  }
`
const StyledInformationDetailWrapper = styled.div`
  position: absolute;
  bottom: 100px;
  width: 100%;
  left: 30px;
  ${media.phoneOrSmaller`
    position: relative;
    bottom: unset;
    left: unset;
  `}
`
const commontFont = css`
  color: white;
  display: flex;
  font-weight: 300;
  font-size: 13px;
`
const StyledLabel = styled.label`
  ${commontFont}
  margin-top: 12px;
`
const StyledValue = styled.label`
  ${commontFont}
`

const StyledEmail = styled.div``
const StyledPhone = styled.div``
const StyledPancakeWrapper = styled.div`
  position: absolute;
  top: 40px;
  right: 40px;
  z-index: 1;
  ${media.phoneOrSmaller`
    top: 20px;
    right: 15px;
    position: fixed;
  `}
`
const StyledShare = styled.div``
const StyledSocialIconsWrapper = styled.div`
  margin-top: 12px;
  ${VectorLogo} {
    width: 15px;
    fill: white;
    margin-right: 12px;
  }
`
export {
  MainWrapper,
  SideBarMainWrapper,
  VectorLogo,
  Logo,
  StyledInformationDetailWrapper,
  StyledLabel,
  StyledValue,
  StyledEmail,
  StyledPhone,
  StyledPancakeWrapper,
  StyledShare,
  StyledSocialIconsWrapper
}
