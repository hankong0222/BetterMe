import { View, TextInput, Button } from 'react-native'
import { NPCSpeech } from './npc/npcSpeech'

type Props = {
  goodThings: string
  badThings: string
  onChangeGood: (v: string) => void
  onChangeBad: (v: string) => void
  onNext: () => void
}

export function ReflectionInput({
  goodThings,
  badThings,
  onChangeGood,
  onChangeBad,
  onNext,
}: Props) {
  return (
    <View>
        <NPCSpeech text="今天有什么让你觉得不错的事情吗？" />
        <TextInput
            value={goodThings}
            onChangeText={onChangeGood}
        />
        <NPCSpeech text="有什么不太好的事情吗？" />
        <TextInput
            value={badThings}
            onChangeText={onChangeBad}
        />
        <Button title="下一步" onPress={onNext} />
    </View>
  )
}
