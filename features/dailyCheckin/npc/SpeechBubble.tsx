import { View, Text } from 'react-native'
import React from 'react'

type Props = {
  children: React.ReactNode
}

export function SpeechBubble({ children }: Props) {
  return (
    <View
      style={{
        backgroundColor: '#fff',
        padding: 12,
        borderRadius: 16,
        maxWidth: '75%',
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 6,
      }}
    >
      <Text style={{ fontSize: 16 }}>{children}</Text>
    </View>
  )
}
