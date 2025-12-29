import { TextInput, View } from 'react-native'
import {TouchableOpacity, Text} from 'react-native'
import { NPCSpeech } from '../npc/npcSpeech'

type GoodProps = {
  goodThings: string
  onChangeGood: (v: string) => void
  onNext: () => void
  onFocus?: () => void
  onBlur?: () => void
  speechInstant?: boolean
}

export function GoodInput({
  goodThings,
  onChangeGood,
  onNext,
  onFocus,
  onBlur,
  speechInstant,
}: GoodProps) {
  return (
    
    <View style={{ padding: 10 }}>
      <View style={{ marginBottom: 12 }}>
        <NPCSpeech text="今天有什么让你觉得不错的事情吗？" instant={speechInstant} />
      </View>

      <View
        style={{
            borderTopWidth: 1,
            borderColor: '#eee',
            paddingTop: 8,
        }}>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <TextInput
            placeholder="比如：完成了工作任务，和朋友聊得很开心"
            value={goodThings}
            onChangeText={onChangeGood}
            multiline
            onFocus={onFocus}
            onBlur={onBlur}
            style={{
            flex: 1,
            borderWidth: 1,
            borderColor: '#ccc',
            borderRadius: 12,
            padding: 12,
            fontSize: 16,
            minHeight: 80,
            textAlignVertical: 'top',
            }}
            />
            <TouchableOpacity
            onPress={onNext}
            style={{
            marginLeft: 8,
            backgroundColor: '#007AFF',
            paddingVertical: 10,
            paddingHorizontal: 14,
            borderRadius: 8,
            }}
            >
            <Text style={{ color: '#fff', fontWeight: '600' }}>发送</Text>
            </TouchableOpacity>
            </View>
      </View>  
        
    </View>
  )
}

type BadProps = {
  badThings: string
  onChangeBad: (v: string) => void
  onNext: () => void
  onFocus?: () => void
  onBlur?: () => void
  speechInstant?: boolean
}

export function BadInput({
  badThings,
  onChangeBad,
  onNext,
  onFocus,
  onBlur,
  speechInstant,
}: BadProps) {
  return (
    <View style={{ padding: 10 }}>
      <View style={{ marginBottom: 12 }}>
        <NPCSpeech text="有什么让你觉得做的不好的事情吗？" instant={speechInstant} />
      </View>

      <View
        style={{
            borderTopWidth: 1,
            borderColor: '#eee',
            paddingTop: 8,
        }}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <TextInput
              placeholder="比如：感觉压力很大，和同事发生了争执"
              value={badThings}
              onChangeText={onChangeBad}
              onFocus={onFocus}
              onBlur={onBlur}
              multiline
              style={{
                flex: 1,
                borderWidth: 1,
                borderColor: '#ccc',
                borderRadius: 12,
                padding: 12,
                fontSize: 16,
                minHeight: 80,
                textAlignVertical: 'top',
              }}
              />
              <TouchableOpacity
                  onPress={onNext}
                  style={{
                  marginLeft: 8,
                  backgroundColor: '#007AFF',
                  paddingVertical: 10,
                  paddingHorizontal: 14,
                  borderRadius: 8,
                  }}
                  >
                  <Text style={{ color: '#fff', fontWeight: '600' }}>发送</Text>
              </TouchableOpacity>
          </View>  
      </View>
    </View>
  )
}

