import { View, Text, Platform, TextInput } from 'react-native'
import { KeyboardAvoidingView} from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { useRef, useState } from 'react'
import { DailyCheckin, DailyCheckinRecord, Mood } from './model'
import { Mascot } from './mascot/Mascot'
import { MoodSelector } from './MoodSelector'
import { GoodInput, BadInput } from './ReflectionInput'
import { ConfirmStep } from './ConfirmStep'

type Step = 'mood' | 'reflectiongood' | 'reflectionbad' | 'confirm'

export function DailyCheckInFlow() {
  const [step, setStep] = useState<Step>('mood')
  const [data, setData] = useState<DailyCheckin>({
    mood: 'neutral',
    goodThings: '',
    badThings: ''
  })
  const [speechInstant, setSpeechInstant] = useState(false);

  return (
  <KeyboardAvoidingView
    style={{ flex: 1 }}
    behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    keyboardVerticalOffset={Platform.OS === 'ios' ? 64 : 0}
  >
    <KeyboardAwareScrollView 
      contentContainerStyle={{ flexGrow: 1}} 
      enableOnAndroid
      extraScrollHeight={Platform.OS === 'android' ? 150 : 240}
      keyboardShouldPersistTaps="handled"
      keyboardOpeningTime={150}
    >
      {
        <View style={{ padding: 24, flex: 1 }}>
          <Mascot mood={data.mood} />

          {step === 'mood' && (
            <MoodSelector
              onSelect={(mood: Mood) => {
                setData({ ...data, mood })
                setStep('reflectiongood')
                setSpeechInstant(false)
              }}
            />
          )}

          {step === 'reflectiongood' && (
            <GoodInput
              goodThings={data.goodThings}
              onChangeGood={(v) => setData({ ...data, goodThings: v })}
              onNext={() => {setStep('reflectionbad')
                    setSpeechInstant(false)
              }}
              onFocus={() => setSpeechInstant(true)}
              onBlur={() => setSpeechInstant(false)}
              speechInstant={speechInstant}
            />
          )}

          {step === 'reflectionbad' && (
            <BadInput
              badThings={data.badThings}
              onChangeBad={(v) => setData({ ...data, badThings: v })}
              onNext={() => setStep('confirm')}
              onFocus={() => setSpeechInstant(true)}
              onBlur={() => setSpeechInstant(false)}
              speechInstant={speechInstant}
            />
          )}

          {step === 'confirm' && (
            <ConfirmStep
              data={data}
              onSubmit={() => {
                console.log('submit', data)
                const entity: DailyCheckinRecord = {
                  id: Date.now().toString(),
                  ...data,
                  createdAt: new Date().toISOString(),
                }
                setStep('mood')
                setData({ mood: 'neutral', goodThings: '', badThings: '' })
              }}
            />
          )}
        </View>
      }
    </KeyboardAwareScrollView>
  </KeyboardAvoidingView>
)
}