import { useEffect, useState } from 'react'
import { Text } from 'react-native'

type Props = {
  text: string
  speed?: number
  onFinish?: () => void
}

export function TypewriterText({ text, speed = 50, onFinish }: Props) {
  const [displayed, setDisplayed] = useState('')

  useEffect(() => {
    // Handle empty text to avoid appending "undefined"
    if (!text || text.length === 0) {
      setDisplayed('')
      onFinish?.()
      return
    }

    let i = 0
    setDisplayed('')

    const timer = setInterval(() => {
      setDisplayed((prev) => prev + (text[i] ?? ''))
      i++
      if (i >= text.length) {
        clearInterval(timer)
        onFinish?.()
      }
    }, speed)

    return () => clearInterval(timer)
  }, [text, speed, onFinish])

  return <Text style={{ fontSize: 16 }}>{displayed}</Text>
}
