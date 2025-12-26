import { View, TextInput, Button } from 'react-native'

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
      <TextInput
        placeholder="今天做得好的地方"
        value={goodThings}
        onChangeText={onChangeGood}
      />
      <TextInput
        placeholder="今天没做好的地方"
        value={badThings}
        onChangeText={onChangeBad}
      />
      <Button title="下一步" onPress={onNext} />
    </View>
  )
}
