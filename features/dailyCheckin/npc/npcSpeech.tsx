import React from 'react'
import { SpeechBubble } from './SpeechBubble'
import { TypewriterText } from './TypewriterText'

type Props = {
  text: string
  onFinish?: () => void
  instant?: boolean
}

export function NPCSpeech({ text, onFinish, instant }: Props) {
  return (
    <SpeechBubble>
      <TypewriterText text={text} onFinish={onFinish} instant={instant} />
    </SpeechBubble>
  )
}
