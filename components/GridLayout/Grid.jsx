import * as React from 'react'
import { list } from './fixture'
import { StyledWrapper, StyledGridItem, StyledGridContainer } from './styled'

const gridTypeTwo = () => {
  const renderListItems = (item, index) => {
    return (
      <StyledGridItem data-variant={item.variant} key={index}>
        <img src={item.imageUrl} />
      </StyledGridItem>
    )
  }

  return (
    <div>
      <StyledGridContainer>{list.map(renderListItems)}</StyledGridContainer>
    </div>
  )
}

const GridCard = () => {
  return <StyledWrapper>{gridTypeTwo()}</StyledWrapper>
}

export { GridCard }
