import React from 'react'
import { Main } from './styled'
import {
  defaultRenderInformation,
  defaultRenderSummary,
  defaultRenderEducation,
  defaultRenderExperience,
  defaultRenderSkill
} from './renderProps'
class Resume extends React.PureComponent {
  static defaultProps = {
    className: '',
    renderInformation: defaultRenderInformation,
    renderSummary: defaultRenderSummary,
    renderEducation: defaultRenderEducation,
    renderExperience: defaultRenderExperience,
    renderSkill: defaultRenderSkill
  }
  render() {
    const {
      className,
      renderInformation,
      renderSummary,
      renderEducation,
      renderExperience,
      renderSkill
    } = this.props
    return (
      <Main className={className}>
        {renderInformation()}
        {renderSummary()}
        {renderEducation()}
        {renderExperience()}
        {renderSkill()}
      </Main>
    )
  }
}

export { Resume }
export default Resume
