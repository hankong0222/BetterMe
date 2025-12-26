import { View, Text, Button } from 'react-native'
import { DailyCheckin } from './model'

type Props = {
  data: DailyCheckin
  onSubmit: () => void
}

export function ConfirmStep({ data, onSubmit }: Props) {
  return (
    <View>
      <Text>心情：{data.mood}</Text>
      <Text>做得好：{data.goodThings}</Text>
      <Text>没做好：{data.badThings}</Text>
      <Button title="确认提交" onPress={onSubmit} />
    </View>
  )
}
