import { View, Text } from 'react-native'
import { useState } from 'react'
import { DailyCheckin, Mood } from './model'
import { Mascot } from './mascot/Mascot'
import { MoodSelector } from './MoodSelector'
import { ReflectionInput } from './ReflectionInput'
import { ConfirmStep } from './ConfirmStep'

type Step = 'mood' | 'reflection' | 'confirm'

export function DailyCheckInFlow() {
  const [step, setStep] = useState<Step>('mood')
  const [data, setData] = useState<DailyCheckin>({
    mood: 'neutral',
    goodThings: '',
    badThings: '',
  })

  return (
    <View style={{ padding: 24 }}>
      <Mascot mood={data.mood} />

      {step === 'mood' && (
        <MoodSelector
          onSelect={(mood: Mood) => {
            setData({ ...data, mood })
            setStep('reflection')
          }}
        />
      )}

      {step === 'reflection' && (
        <ReflectionInput
          goodThings={data.goodThings}
          badThings={data.badThings}
          onChangeGood={(v) => setData({ ...data, goodThings: v })}
          onChangeBad={(v) => setData({ ...data, badThings: v })}
          onNext={() => setStep('confirm')}
        />
      )}

      {step === 'confirm' && (
        <ConfirmStep
          data={data}
          onSubmit={() => {
            console.log('submit', data)
            setStep('mood')
            setData({ mood: 'neutral', goodThings: '', badThings: '' })
          }}
        />
      )}
    </View>
  )
}
