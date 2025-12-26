export type Mood = 'good' | 'neutral' | 'bad'

export type DailyCheckin = {
  id: string
  mood: Mood
  goodThings: string
  analysis: string
  badThings: string
  improvements: string
  createdAt: string
}