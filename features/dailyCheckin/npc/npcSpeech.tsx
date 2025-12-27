import React from 'react'
import { SpeechBubble } from './SpeechBubble'
import { TypewriterText } from './TypewriterText'

type Props = {
  text: string
  onFinish?: () => void
}

export function NPCSpeech({ text, onFinish }: Props) {
  return (
    <SpeechBubble>
      <TypewriterText text={text} onFinish={onFinish} />
    </SpeechBubble>
  )
}
