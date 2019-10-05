import * as React from 'react'
import styled, { css } from 'styled-components'
import { fromVariantToGrid } from './deps'

/*
 * @todo only write in static colum control need fix in dynamic css control
 */

const StyledWrapper = styled.div`
  max-width: 100%;
  margin: auto;
`
const StyledGridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-auto-rows: 8vh;
  grid-auto-flow: row dense;
  grid-gap: 8px 8px;
  justify-items: stretch;
  height: 100%;
`
const StyledGridItem = styled.div`
  color: #000;
  background: #67c8ff;
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

export { StyledGridContainer, StyledGridItem, StyledWrapper }
