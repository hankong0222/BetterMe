import { View, Button } from 'react-native'
import { Mood } from './model'

type Props = {
  onSelect: (mood: Mood) => void
}

export function MoodSelector({ onSelect }: Props) {
  return (
    <View>
      <Button title="😊 今天不错" onPress={() => onSelect('good')} />
      <Button title="😐 一般" onPress={() => onSelect('neutral')} />
      <Button title="😞 不太好" onPress={() => onSelect('bad')} />
    </View>
  )
}