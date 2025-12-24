import { DailyLog } from './dailyLog.types'

let logs: DailyLog[] = []

export function getDailyLogs(): DailyLog[] {
  return logs
}

export function addDailyLog(content: string): DailyLog {
  const newLog: DailyLog = {
    id: Date.now().toString(),
    content,
    createdAt: new Date().toISOString(),
  }

  logs = [newLog, ...logs]
  return newLog
}