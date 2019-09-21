import {
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
} from './styled'
import { wordings } from '../landing/fixture'
export const defaultRenderInformation = props => {
  return (
    <StyledInfoContainer>
      <StyledProfileImage src="//ntryogep.sirv.com/myresumebk/home/profile-m.jpg" />
      <StyledProfileDetails>
        <StyledFirstName>{wordings.name}</StyledFirstName>
        <StyledLastName>{wordings.lastname}</StyledLastName>
        <StyledDesignation> {wordings.posistion}</StyledDesignation>
      </StyledProfileDetails>
    </StyledInfoContainer>
  )
}
export const defaultRenderSummary = props => {
  return (
    <StyledSummaryWrapper>
      <StyledTitle>{'summary'}</StyledTitle>
      <StyledDescription>
        {
          'Versatile Front-end UI Developer with 3+ years of experience designing for 10+, and managing complex e-commerce sites and internal frameworks and Im worked with Automate site template gentrate from PSD script mode also I am create Automate UI Quality testing tool galen framework. Specializes in ReactJs and responsive design.'
        }
      </StyledDescription>
    </StyledSummaryWrapper>
  )
}

export const defaultRenderEducation = props => {
  return (
    <StyledEducationWrapper>
      <StyledTitle>{'education'}</StyledTitle>
      <StyledDescription>
        {'DID MY SCHOOLING:  CSI Higher Secondary school'}
      </StyledDescription>
      <StyledDescription>
        {'CLUSTER MUTIMEDIA DEPLOMA:  2D Animation && Graphic Designer'}
      </StyledDescription>
      <StyledDescription>
        {'TAMIL NADU OPEN UNIVERSITY:  Bachelor of Computer Application (BCA)'}
      </StyledDescription>
    </StyledEducationWrapper>
  )
}

export const defaultRenderExperience = props => {
  return (
    <StyledExperienceWrapper>
      <StyledTitle>{'experience'}</StyledTitle>
      <StyledDescription>{'Skava, an Infosys company'}</StyledDescription>
      <>
        <StyledDescription>
          <strong>{'2019-2018'}</strong>
          {' | Senior Creative Lead'}
          <strong>{' && '}</strong>
          {'REACT FRONTEND UI DEVELOPER'}
        </StyledDescription>
        <ul>
          <li> {'Programing: HTML/HTML5, CSS/CSS3'} </li>
          <li>
            {
              'Frameworks: React, Typescript, Babel, StyledComponent, Mobx, Webpack, Galen (QA Automation Tool)'
            }
          </li>
          <li> {'Javascript: NodeJS, ES5 && ES6, PSD Jsx script'} </li>
          <li> {'I know the scratch create the build system'} </li>
          <li> {'ATOMIC(ADM) build system concept'} </li>
          <li> {'Tools: VSCode, Sublime, Sketch, XD, PSD, AI,'} </li>
        </ul>
      </>
      <>
        <StyledDescription>
          <strong>{'2018-2015'}</strong>
          {' | Senior Creative Lead'}
          <strong>{' && '}</strong>
          {'FRONTEND UI DEVELOPER'}
        </StyledDescription>
        <ul>
          <li> {'Programing: HTML/HTML5, CSS/CSS3'}</li>
          <li> {'Frameworks: Studio API, Jqurey, Boostrap'}</li>
          <li> {'Javascript: Vannila Js, ES5, PSD Jsx script'}</li>
          <li> {'Tools: VSCode, Sublime, Sketch, PSD, AI,'}</li>
        </ul>
      </>
      <>
        <StyledDescription>
          <strong>{'2015-2013'}</strong>
          {' | Creative Lead'}
        </StyledDescription>
        <ul>
          <li> {'Programing: HTML/HTML5, CSS/CSS3'}</li>
          <li> {'Javascript: Vannila Js, ES5, PSD Jsx script'}</li>
          <li>
            {'Tools: Photoshop, AI, Animate, Fireworks, PremierPro, Brackets'}
          </li>
          <li> {'My Own Tool: Spotmap'}</li>
        </ul>
      </>
      <>
        <StyledDescription>
          <strong>{'2013-2010'}</strong>
          {' | Senior Creative Enginner'}
        </StyledDescription>
        <ul>
          <li> {'Programing: HTML/HTML5, CSS/CSS3'} </li>
          <li> {'Javascript: Vannila Js, ES5'} </li>
          <li>
            {'Tools: Photoshop, Indesign, AI, Animate, Fireworks, PremierPro'}
          </li>
        </ul>
      </>
      <>
        <StyledDescription>
          <strong>{'2010-2008'}</strong>
          {' | Creative Enginner'}
        </StyledDescription>
        <ul>
          <li> {'Programing: HTML/HTML5, CSS/CSS3'}</li>
          <li>
            {
              'Tools: Photoshop, Animate, Fireworks, PremierPro, Png Optimizer, Pingout'
            }
          </li>
        </ul>
      </>
    </StyledExperienceWrapper>
  )
}
export const defaultRenderSkill = props => {
  return (
    <StyledExperienceWrapper>
      <StyledTitle>{'Skill'}</StyledTitle>
      <>
        <ul>
          <li> {'One Time Star performer Award'} </li>
          <li> {'Two Time Execellent Award'} </li>
          <li> {'One Founder Award'} </li>
          <li>
            {
              'Adobe Creative Suite (Photoshop, AI, XD, Indesign, Animate, Premier Pro), Sketch, VSCode, Sublime'
            }
          </li>
          <li>
            {
              'JavaScript (JQuery, NodeJS, React, StyledComponents, Webpack, Bootstrap), HTML/CSS, Git, Sourve Tree'
            }
          </li>
          <li> {'Expert in responsive web development'} </li>
        </ul>
      </>
    </StyledExperienceWrapper>
  )
}
