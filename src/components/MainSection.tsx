/** @jsx jsx */
import { jsx } from '@emotion/core'
import styled from '@emotion/styled'

import { GlitchText } from './GlitchText'

const Container = styled.div`
  background: linear-gradient(180deg, #131313 10%, #040404 90%);
  height: 100vh;
  width: 100vw;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column;
`

export const MainSection = () => {
  return (
    <Container>
      <GlitchText text="AIKDANAI" />
      <GlitchText text="SOFTWARE" />
      <GlitchText text="ENGINEER" />
    </Container>
  )
}
