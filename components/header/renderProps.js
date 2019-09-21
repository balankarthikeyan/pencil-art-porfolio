import {
  Logo,
  VectorLogo,
  ProfilePicture,
  StyledLabel,
  StyledValue,
  StyledInformationDetailWrapper,
  StyledEmail,
  StyledPhone,
  StyledShare,
  StyledSocialIconsWrapper,
  StyledPancakeWrapper,
  SideBarMainWrapper
} from './styled'
import { wordings } from './fixture'
import Link from 'next/link'
export const defaultRenderLogo = props => {
  return (
    <Link href="/">
      <Logo>
        <VectorLogo
          xmlns="http://www.w3.org/2000/svg"
          width="45.22"
          height="39.565"
          viewBox="0 0 45.22 39.565"
        >
          <g transform="translate(375.199 -791.897)">
            <path
              id="Path_1"
              data-name="Path 1"
              d="M-375.2,803.7l6.662-7.576c1.134-1.289,2.26-2.584,3.412-3.857a1.071,1.071,0,0,1,.685-.353c3.283-.022,6.567-.015,9.85-.013a3,3,0,0,1,.341.042v39.45c-.178-.2-.3-.325-.4-.46q-5.741-7.6-11.477-15.207c-1.3-1.725-2.559-3.48-3.857-5.206a.621.621,0,0,1,.018-.85c.916-1.369,1.81-2.753,2.754-4.195-.2-.021-.354-.052-.508-.053-1.824,0-3.649-.024-5.472.011a1.16,1.16,0,0,1-1.162-.587C-374.585,804.463-374.884,804.122-375.2,803.7Zm17.787,1.722c-1.911,0-3.712,0-5.513.007a.611.611,0,0,0-.443.171c-.923,1.311-1.811,2.648-2.744,3.952-.29.405-.168.661.093,1,.931,1.2,1.834,2.424,2.75,3.637q2.694,3.57,5.39,7.138c.119.157.251.3.467.564Zm-.026-10.308c-1.835,0-3.613.014-5.389-.011a1.09,1.09,0,0,0-.926.433c-1.8,2.07-3.62,4.125-5.431,6.185-.107.122-.2.254-.358.447h12.1Z"
              transform="translate(0 0)"
              fill="#fff"
            />
            <path
              id="Path_2"
              data-name="Path 2"
              d="M-186.769,831.715V792.188h3.147v10.224h12.161c-.657-.753-1.256-1.442-1.858-2.127-.807-.919-1.627-1.828-2.419-2.759a1.176,1.176,0,0,1-.291-.671c-.026-1.436-.013-2.872-.013-4.52l10.221,11.614c-.386.517-.729,1.036-1.139,1.5a1,1,0,0,1-.676.219c-1.824.017-3.648.009-5.473.009h-.762c.642.944,1.226,1.78,1.785,2.632.453.691,1.222,1.408,1.211,2.1-.01.669-.824,1.339-1.312,1.988q-3.285,4.369-6.586,8.726a1.353,1.353,0,0,1-.491.436v-.579c0-1.331-.022-2.662.015-3.991a1.85,1.85,0,0,1,.338-.984c1.3-1.772,2.63-3.525,3.969-5.269a.624.624,0,0,0,.039-.886c-.882-1.241-1.716-2.516-2.587-3.766-.12-.172-.34-.388-.517-.391-1.841-.029-3.683-.018-5.611-.018v.8c0,6.793.007,13.586-.018,20.378a2.269,2.269,0,0,1-.407,1.218C-184.887,829.275-185.8,830.43-186.769,831.715Z"
              transform="translate(-164.157 -0.254)"
              fill="#fff"
            />
          </g>
        </VectorLogo>
      </Logo>
    </Link>
  )
}

export const defaultfRenderSideBarWrapper = props => {
  return (
    <SideBarMainWrapper>
      <StyledInformationDetailWrapper>
        <StyledEmail>
          <StyledLabel> {'email'}</StyledLabel>
          <StyledValue> {wordings.email}</StyledValue>
        </StyledEmail>
        <StyledPhone>
          <StyledLabel> {'phone'}</StyledLabel>
          <StyledValue> {wordings.phone}</StyledValue>
        </StyledPhone>
        <StyledShare>
          <StyledLabel> {'find me on'}</StyledLabel>
          <StyledSocialIconsWrapper>
            <a alt="facebook" href="//www.facebook.com/bkarthikeyan.karthi">
              <VectorLogo
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 96.124 96.123"
              >
                <path
                  d={
                    'M72.089,0.02L59.624,0C45.62,0,36.57,9.285,36.57,23.656v10.907H24.037c-1.083,0-1.96,0.878-1.96,1.961v15.803   c0,1.083,0.878,1.96,1.96,1.96h12.533v39.876c0,1.083,0.877,1.96,1.96,1.96h16.352c1.083,0,1.96-0.878,1.96-1.96V54.287h14.654   c1.083,0,1.96-0.877,1.96-1.96l0.006-15.803c0-0.52-0.207-1.018-0.574-1.386c-0.367-0.368-0.867-0.575-1.387-0.575H56.842v-9.246   c0-4.444,1.059-6.7,6.848-6.7l8.397-0.003c1.082,0,1.959-0.878,1.959-1.96V1.98C74.046,0.899,73.17,0.022,72.089,0.02z'
                  }
                />
              </VectorLogo>
            </a>
            <a
              alt="linkedin"
              href="//www.linkedin.com/in/karthikeyan-balan-78b762a3/"
            >
              <VectorLogo
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="-21 -21 682.66669 682.66669"
              >
                <path d="m166.148438 640h-165.460938v-445.839844h165.460938zm0 0" />
                <path d="m640 640h-162.101562l.070312-197.234375c.679688-32.015625-12.242188-58.421875-34.5625-70.640625-15.324219-8.394531-32.960938-8.417969-49.507812-.332031l-1.429688 268.207031h-169.648438v-445.839844h169.75v18.121094c52.738282-21.382812 108.664063-18.296875 157.265626 9.5 54.773437 31.335938 90.164062 89.265625 90.164062 147.585938zm0 0" />
                <path d="m83.078125 166.320312c-45.8125 0-83.078125-37.304687-83.078125-83.160156 0-45.855468 37.265625-83.160156 83.078125-83.160156 45.804687 0 83.070313 37.304688 83.070313 83.160156 0 45.855469-37.265626 83.160156-83.070313 83.160156zm0 0" />
              </VectorLogo>
            </a>
          </StyledSocialIconsWrapper>
        </StyledShare>
      </StyledInformationDetailWrapper>
    </SideBarMainWrapper>
  )
}

export const defaultfRenderPancake = props => {
  return (
    <StyledPancakeWrapper>
      <VectorLogo
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 124 124"
      >
        <g xmlns="http://www.w3.org/2000/svg">
          <path d="M112,6H12C5.4,6,0,11.4,0,18s5.4,12,12,12h100c6.6,0,12-5.4,12-12S118.6,6,112,6z" />
          <path d="M112,50H12C5.4,50,0,55.4,0,62c0,6.6,5.4,12,12,12h100c6.6,0,12-5.4,12-12C124,55.4,118.6,50,112,50z" />
          <path d="M112,94H12c-6.6,0-12,5.4-12,12s5.4,12,12,12h100c6.6,0,12-5.4,12-12S118.6,94,112,94z" />
        </g>
      </VectorLogo>
    </StyledPancakeWrapper>
  )
}
