import React from 'react'
import { ProfilePicture, MainWrapper } from './styled'

import {
  defaultRenderLogo,
  defaultfRenderSideBarWrapper,
  defaultfRenderProfileDetails,
  defaultfRenderPancake
} from './renderProps'

class Header extends React.PureComponent {
  static defaultProps = {
    className: '',
    renderLogo: defaultRenderLogo,
    renderPancake: defaultfRenderPancake,
    renderInformationDetails: defaultfRenderSideBarWrapper
  }
  render() {
    const {
      className,
      renderLogo,
      renderInformationDetails,
      renderPancake
    } = this.props
    return (
      <MainWrapper className={className}>
        {renderLogo()}
        {/* renderPancake() */}
        {renderInformationDetails()}
      </MainWrapper>
    )
  }
}

export { Header }
export default Header
