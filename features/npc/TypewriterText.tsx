import { useEffect, useState } from 'react'
import { Text } from 'react-native'

type Props = {
  text: string
  speed?: number
  onFinish?: () => void
  instant?: boolean
}

export function TypewriterText({ text, speed = 50, onFinish, instant }: Props) {
  const [displayed, setDisplayed] = useState('')

  useEffect(() => {
    if (instant) {
      setDisplayed(text ?? '')
      onFinish?.()
      return
    }

    // Handle empty text to avoid appending "undefined"
    if (!text || text.length === 0) {
      setDisplayed('')
      onFinish?.()
      return
    }

    // Show first character immediately to reduce perceived delay
    setDisplayed(text[0] ?? '')
    if (text.length === 1) {
      onFinish?.()
      return
    }

    // Schedule each subsequent character with its own timeout for reliability
    const timers: ReturnType<typeof setTimeout>[] = []
    for (let idx = 1; idx < text.length; idx++) {
      const t = setTimeout(() => {
        setDisplayed((prev) => prev + (text[idx] ?? ''))
        if (idx === text.length - 1) {
          onFinish?.()
        }
      }, speed * idx)
      timers.push(t)
    }

    return () => timers.forEach((t) => clearTimeout(t))
  }, [text, speed, onFinish, instant])

  return <Text style={{ fontSize: 16 }}>{displayed}</Text>
}
