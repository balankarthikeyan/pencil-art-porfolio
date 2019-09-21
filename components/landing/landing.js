import React from 'react'
import { ProfilePicture, MainWrapper, ProfilePictureWrapper } from './styled'
import { defaultfRenderProfileDetails } from './renderProps'

class Landing extends React.PureComponent {
  constructor(props) {
    super(props)
    this.onChange = this.onChange.bind(this)
    this.state = {
      profileImage: ''
    }
  }
  static defaultProps = {
    className: '',
    renderProfileDetails: defaultfRenderProfileDetails
  }
  onChange(state) {
    this.setState({ profileImage: state })
  }
  componentDidMount() {
    // console.log('window.innerHeight', window.innerWidth)
    this.onChange(
      window.innerWidth <= 767
        ? '//ntryogep.sirv.com/myresumebk/home/profile-m.jpg'
        : '//ntryogep.sirv.com/myresumebk/home/profile.jpg'
    )
  }
  render() {
    const { className, renderProfileDetails } = this.props
    const { profileImage } = this.state
    return (
      <MainWrapper className={className}>
        <ProfilePictureWrapper>
          <ProfilePicture alt="profile" src={profileImage} />
        </ProfilePictureWrapper>
        {renderProfileDetails()}
      </MainWrapper>
    )
  }
}

export { Landing }
export default Landing
