import * as React from 'react'
import * as ReactDom from 'react-dom'
import { list } from './fixture'
import {
  StyledWrapper,
  StyledModal,
  StyledWrapperModal,
  StyledGridItem,
  StyledGridContainer,
  StyledModalMask,
} from './styled'

const Modal = props => {
  const handleClick = e => {
    props.isModalEnable(false)
  }
  return (
    <StyledWrapperModal>
      <StyledModal>
        <div className="close-button" onClick={handleClick}>
          close
        </div>
        <img src={props.item.image} />
      </StyledModal>
      <StyledModalMask onClick={handleClick} />
    </StyledWrapperModal>
  )
}

const renderListItems = (item, index, getImageData, isModalEnable) => {
  const handleClick = e => {
    getImageData({ image: e.target.src })
    isModalEnable(true)
  }
  return (
    <StyledGridItem data-variant={item.variant} key={index}>
      <img onClick={handleClick} src={item.imageUrl} />
    </StyledGridItem>
  )
}

const gridTypeTwo = () => {
  const [isEnableModal, setModalEnable] = React.useState(false)
  const [imageItem, setImageItem] = React.useState(false)

  const getImageData = props => {
    setImageItem(props)
  }
  const isModalEnable = props => {
    setModalEnable(props)
  }
  return (
    <div>
      <StyledGridContainer isModalEnable={isModalEnable}>
        {list.map((item, index) =>
          renderListItems(item, index, getImageData, isModalEnable)
        )}
      </StyledGridContainer>
      {isEnableModal && (
        <Modal isModalEnable={isModalEnable} item={imageItem} />
      )}
    </div>
  )
}

const GridCard = () => {
  return <StyledWrapper>{gridTypeTwo()}</StyledWrapper>
}

export { GridCard }
