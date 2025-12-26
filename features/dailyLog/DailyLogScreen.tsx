import { View, Text, TextInput, Button, FlatList } from 'react-native'
import { useDailyLog } from './useDailyLog'

export default function DailyLogScreen() {
  const { logs, input, setInput, submitLog } = useDailyLog()

  return (
    <View style={{ padding: 16 }}>
      <Text style={{ fontSize: 20, marginBottom: 8 }}>
        今日记录
      </Text>

      <TextInput
        placeholder="今天做了什么？"
        value={input}
        onChangeText={setInput}
        style={{
          borderWidth: 1,
          borderColor: '#ccc',
          padding: 8,
          marginBottom: 8,
        }}
      />

      <Button title="保存" onPress={submitLog} />

      <FlatList
        data={logs}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View style={{ marginTop: 12 }}>
            <Text>{item.content}</Text>
            <Text style={{ fontSize: 12, color: '#666' }}>
              {item.createdAt}
            </Text>
          </View>
        )}
      />
    </View>
  )
}
