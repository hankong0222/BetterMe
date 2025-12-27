export type Mood = 'good' | 'neutral' | 'bad'

export type DailyCheckin = {
  mood: Mood
  goodThings: string
  badThings: string
}

export type DailyCheckinRecord = DailyCheckin & {
  id: string,
// anylisis: string, 加AI后再加回来
// improvements: string, 加AI后再加回来
  createdAt: string
}