import * as React from 'react'
import styled, { css } from 'styled-components'
import { fromVariantToGrid } from './deps'
import { media } from '../../styles'

/*
 * @todo only write in static colum control need fix in dynamic css control
 */

const StyledWrapper = styled.div.attrs({ className: 'grid' })`
  max-width: 100%;
  margin: auto;
`
const StyledWrapperModal = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  z-index: 9;
  top: 0px;
`

const StyledModalMask = styled.div`
  background: #000000b5;
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 2;
  top: 0px;
`
const StyledModal = styled.div`
  position: absolute;
  z-index: 9;
  top: 0px;
  background: black;
  width: 60vw;
  margin: auto;
  left: 0;
  right: 0;
  bottom: 0;
  height: fit-content;
  overflow: hidden;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 20px;
  box-sizing: border-box;
  img {
    width: auto;
    height: 400px;
    ${media.phoneOrSmaller`
    width: 32vh;
    height: auto;
    `}
  }
  .close-button {
    width: 100%;
    text-align: right;
    font-family: 'material icons';
    font-size: 20px;
    color: white;
  }
`
const StyledGridContainer = styled.div`
  background: white;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-auto-rows: 8vh;
  grid-auto-flow: row dense;
  grid-gap: 8px 8px;
  justify-items: stretch;
  height: 100%;
  transition: all 400ms ease;

  ${media.phoneOrSmaller`
    grid-template-columns: repeat(2, 1fr);
    grid-auto-rows: 7vw;
    `}
  ${({ isModalEnable }) =>
    isModalEnable &&
    `
    pointer-event: none;
  `}
`
const StyledGridItem = styled.div`
  color: #000;
  background: white;
  font-size: 1.5rem;
  text-align: center;
  box-sizing: border-box;

  ${props => {
    const varientItem = props['data-variant']
    const { column, row, imageHeight, count } = fromVariantToGrid(varientItem)

    return css`
      grid-column: auto / span ${column};
      grid-row: auto / span ${row};
      overflow: hidden;
      img {
        object-fit: cover;
        height: 100%;
        width: 100%;
      }
    `
  }}
`

export {
  StyledGridContainer,
  StyledGridItem,
  StyledWrapper,
  StyledWrapperModal,
  StyledModal,
  StyledModalMask,
}
