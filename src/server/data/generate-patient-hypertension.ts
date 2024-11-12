import type { HypertensionCondition, HypertensionMeasurement } from '@/utils/types'
import { faker } from '@faker-js/faker'

function genSystolicPressure(condition: HypertensionCondition) {
  if (condition === 'normal') {
    return faker.number.int({ min: 80, max: 120 })
  }

  if (condition === 'elevated') {
    return faker.number.int({ min: 120, max: 129 })
  }

  if (condition === 'stage1') {
    return faker.number.int({ min: 130, max: 139 })
  }

  if (condition === 'stage2') {
    return faker.number.int({ min: 140, max: 179 })
  }

  if (condition === 'crisis') {
    return faker.number.int({ min: 180, max: 250 })
  }

  throw new Error('Invalid condition')
}

function genDiastolicPressure(condition: HypertensionCondition) {
  if (condition === 'normal') {
    return faker.number.int({ min: 60, max: 80 })
  }

  if (condition === 'elevated') {
    return faker.number.int({ min: 61, max: 79 })
  }

  if (condition === 'stage1') {
    return faker.number.int({ min: 80, max: 89 })
  }

  if (condition === 'stage2') {
    return faker.number.int({ min: 90, max: 99 })
  }

  if (condition === 'crisis') {
    return faker.number.int({ min: 100, max: 119 })
  }

  throw new Error('Invalid condition')
}

export function generatePatientHypertension(condition: HypertensionCondition) {
  const dates: Date[] = []

  for (let i = 0; i < 7; i++) {
    const date = new Date()
    date.setDate(date.getDate() - i)
    dates.push(date)
  }

  dates.sort((a, b) => a.getTime() - b.getTime())

  const measurements: HypertensionMeasurement[] = dates.map((day) => ({
    day,
    systolic: genSystolicPressure(condition),
    diastolic: genDiastolicPressure(condition),
  }))

  return measurements
}

export function generatePatientHeartRate() {
  const baseHeartRate = faker.number.int({ min: 40, max: 220 })

  const dates: Date[] = []

  for (let i = 0; i < 7; i++) {
    const date = new Date()
    date.setDate(date.getDate() - i)
    dates.push(date)
  }

  dates.sort((a, b) => a.getTime() - b.getTime())

  const measurements = dates.map((day) => ({
    day,
    heartRate: faker.number.int({
      min: baseHeartRate >= 80 ? baseHeartRate - 40 : baseHeartRate,
      max: baseHeartRate + 40,
    }),
  }))

  return measurements
}
