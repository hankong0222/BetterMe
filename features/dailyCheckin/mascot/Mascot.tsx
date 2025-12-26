import { Image } from 'react-native'
import { mascotExpressions } from './expression'
import { Mood } from '../model'

type Props = {
  mood: Mood | null
}

export function Mascot({ mood }: Props) {
  const source =
    mood === 'good'
      ? mascotExpressions.good
      : mood === 'bad'
      ? mascotExpressions.bad
      : mascotExpressions.neutral

  return <Image source={source} style={{ width: 120, height: 120 }} />
}