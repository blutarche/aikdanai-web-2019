/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import styled from '@emotion/styled'
import { useCallback, useMemo } from 'react'
import uid from 'uid'

const glitchCopy = css`
  content: attr(data-text);
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`

const GlitchTextContainer = styled.div<{
  uid: string
  glitchAnimationFrames1: string
  glitchAnimationFrames2: string
  glitchSize: number
}>(
  p => css`
  position: relative;
  color: #fff;
  font-family: 'Share Tech Mono', monospace;
  font-size: 10vw;
  line-height: 1.1;
  letter-spacing: 4%;

  &::before {
    ${glitchCopy}
    left: ${p.glitchSize}px;
    text-shadow: -${p.glitchSize}px 0 #ff00c1;
    clip: rect(44px, 450px, 56px, 0);
    animation: glitch-anim-${p.uid}-1 7s infinite linear alternate-reverse;
  }
  &::after {
    ${glitchCopy}
    left: -${p.glitchSize}px;
    text-shadow: -${p.glitchSize}px 0 #00fff9, ${p.glitchSize}px ${p.glitchSize}px #ff00c1;
    animation: glitch-anim-${p.uid}-2 5s infinite linear alternate-reverse;
  }

  @keyframes glitch-anim-${p.uid}-1 {
    ${p.glitchAnimationFrames1}
  }
  @keyframes glitch-anim-${p.uid}-2 {
    ${p.glitchAnimationFrames2}
  }
`
)

const ANIMATION_FRAMES_COUNT = 20
export const GlitchText: React.FC<{ text: string }> = ({ text }) => {
  const getGlitchAnimationFrames = useCallback(() => {
    let str = ''
    for (let i = 0; i <= ANIMATION_FRAMES_COUNT; i++) {
      str += `
      ${(i / ANIMATION_FRAMES_COUNT) * 100}% {
        clip: rect(
          ${Math.random() * 150}px,
          9999px,
          ${Math.random() * 150}px,
          0
        );
        transform: skew(${Math.random()}deg);
      }
    `
    }
    return str
  }, [text])
  const glitchAnimationFrames1 = useMemo(() => getGlitchAnimationFrames(), [
    text,
  ])
  const glitchAnimationFrames2 = useMemo(() => getGlitchAnimationFrames(), [
    text,
  ])
  const generatedUID = useMemo(() => uid(10), [text])
  return (
    <GlitchTextContainer
      data-text={text}
      uid={generatedUID}
      glitchAnimationFrames1={glitchAnimationFrames1}
      glitchAnimationFrames2={glitchAnimationFrames2}
      glitchSize={1}
    >
      {text}
    </GlitchTextContainer>
  )
}
