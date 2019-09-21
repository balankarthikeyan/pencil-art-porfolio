import Link from 'next/link'
import {
  StyledMyProfile,
  StyledName,
  StyledLastName,
  StyledDesigination,
  StyledDescription,
  StyledPrimaryButton,
  StyledSecondaryButton,
  StyledMyStackTag
} from './styled'
import { wordings } from './fixture'
export const defaultfRenderProfileDetails = props => {
  return (
    <StyledMyProfile>
      <StyledName>{wordings.name}</StyledName>
      <StyledLastName>{wordings.lastname}</StyledLastName>
      <StyledDesigination>{wordings.posistion}</StyledDesigination>
      <StyledDescription>
        {`${wordings.mydescription} `}
        <b>
          <StyledMyStackTag href="https://stackshare.io/balankarthikeyan/my-stack">
            My Stack
          </StyledMyStackTag>
        </b>
      </StyledDescription>
      <div>
        <Link href="/portfolio">
          <StyledPrimaryButton>{'Portfolio'}</StyledPrimaryButton>
        </Link>
        <Link href="/resume">
          <StyledSecondaryButton>{'Resume'}</StyledSecondaryButton>
        </Link>
      </div>
    </StyledMyProfile>
  )
}
