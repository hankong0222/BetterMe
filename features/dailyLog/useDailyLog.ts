import { useState } from 'react'
import { DailyLog } from './dailyLog.types'
import { getDailyLogs, addDailyLog } from './dailyLog.service'

export function useDailyLog() {
  const [logs, setLogs] = useState<DailyLog[]>(getDailyLogs())
  const [input, setInput] = useState('')

  const submitLog = () => {
    if (!input.trim()) return

    const newLog = addDailyLog(input)
    setLogs(prev => [newLog, ...prev])
    setInput('')
  }

  return {
    logs,
    input,
    setInput,
    submitLog,
  }
}
