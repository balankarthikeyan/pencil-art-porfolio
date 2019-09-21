import React from 'react'
import styled, { css } from 'styled-components'
import { media } from '../../styles'
const commonButton = css`
  font-size: 13px;
  padding: 8px 28px;
  border-radius: 50px;
  text-transform: uppercase;
  font-weight: 600;
  outline: none;
  letter-spacing: 3px;
`
const MainWrapper = styled.div`
  display: flex;
  ${media.phoneOrSmaller`
    flex-wrap: wrap;
    margin-top: 60px;
  `}
`
const StyledMyProfile = styled.div.attrs({
  className: 'StyledMyProfile'
})`
  left: 50vw;
  width: 36vw;
  height: fit-content;
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto;
  display: flex;
  flex-wrap: wrap;
  ${media.tabletOrSmaller`
    left: 60vw;
  `}
  ${media.phoneOrSmaller`
    position: relative;
    top: unset;
    bottom: unset;
    left: unset;
    right: unset;
    margin: 20px;
    z-index: 1;
    width: 100%;
  `}
`
const StyledName = styled.h1`
  text-transform: uppercase;
  margin: 0px;
  font-size: 6vw;
  ${media.tabletOrSmaller`
    font-size: 5vw;
  `}
  ${media.phoneOrSmaller`
    font-size: 11vw;
  `}
`
const StyledLastName = styled.h1`
  text-transform: uppercase;
  margin: 0px;
  color: #4c20fd;
  font-size: 4vw;
  ${media.tabletOrSmaller`
    font-size: 4vw;
  `}
  ${media.phoneOrSmaller`
    font-size: 9vw;
  `}
`
const StyledDesigination = styled.label`
  font-size: 15px;
  font-weight: 500;
  margin-top: 16px;
  font-size: 2vw;
  ${media.phoneOrSmaller`
    font-size: 5vw;
  `}
`
const StyledDescription = styled.p`
  font-size: 14px;
  font-weight: 300;
  font-size: 1.2vw;
  margin-top: 1vh;
  margin-bottom: 8vh;
  ${media.phoneOrSmaller`
    font-size: 4vw;
    margin-bottom: 3vh;
  `}
`
const StyledPrimaryButton = styled.button`
  ${commonButton}
  background-color: #4c20fd;
  border: 2px solid #4c20fd;
  color: white;
  margin-right: 10px;
`
const StyledSecondaryButton = styled.button`
  ${commonButton}
  background-color: transparent;
  border: 2px solid #222222;
  color: #222222;
  border-radius: 50px;
`
const ProfilePictureWrapper = styled.div`
  ${media.phoneOrSmaller`
    position: relative;
    ::before {
      height: 130px;
      bottom: 0;
      content: '';
      position: absolute;
      z-index: 9999;
      width: 100%;
      background: -webkit-linear-gradient(top, rgba(255,255,255,0) 0%,rgba(255,255,255,1) 83%,rgba(255,255,255,1) 85%);
    }
  `}
`
const ProfilePicture = styled.img`
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto;
  left: 240px;
  height: 88vh;
  user-select: none;
  user-drag: none;
  z-index: 1;
  box-shadow: #00000085 0px 0px 35px;
  width: auto;
  ${media.desktopOrSmaller`
    height: 50vh;
    left: 200px;
  `}
  ${media.tabletOrSmaller`
    height: 50vh;
    left: 200px;
  `}
  
  ${media.phoneOrSmaller`
    border-top: 10px solid #4B21FF;
    position: relative;
    top: unset;
    bottom: unset;
    left: unset;
    right: unset;
    margin: unset;
    z-index: 1;
    height: 100%;
    width: 100%;
    box-shadow: none;
  `}
`
const StyledMyStackTag = styled.a`
  color: #4c20fd;
  text-decoration: none;
  padding: 0px 5px;
  border-radius: 3px;
  :hover {
    background-color: #4c20fd;
    color: white;
  }
`
export {
  MainWrapper,
  StyledMyProfile,
  StyledName,
  StyledLastName,
  StyledDesigination,
  StyledDescription,
  StyledPrimaryButton,
  StyledSecondaryButton,
  ProfilePicture,
  StyledMyStackTag,
  ProfilePictureWrapper
}
