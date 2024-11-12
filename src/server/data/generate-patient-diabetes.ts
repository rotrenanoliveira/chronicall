'server only'

import type { DiabetesCondition, GlucoseMeasurement } from '@/utils/types'
import { faker } from '@faker-js/faker'

function genFastingMeasurement(condition: DiabetesCondition) {
  if (condition === 'normal') {
    return faker.number.int({ min: 70, max: 99 })
  }

  if (condition === 'pre') {
    return faker.number.int({ min: 100, max: 125 })
  }

  if (condition === 'diabetes') {
    return faker.number.int({ min: 126 })
  }

  throw new Error('Invalid condition')
}

function genPostMealMeasurement(condition: DiabetesCondition) {
  if (condition === 'normal') {
    return faker.number.int({ min: 70, max: 140 })
  }

  if (condition === 'pre') {
    return faker.number.int({ min: 141, max: 199 })
  }

  if (condition === 'diabetes') {
    return faker.number.int({ min: 200 })
  }

  throw new Error('Invalid condition')
}

function genHemoglobin(condition: DiabetesCondition) {
  if (condition === 'normal') {
    return faker.number.float({ min: 0, max: 5.6, fractionDigits: 2 })
  }

  if (condition === 'pre') {
    return faker.number.float({ min: 5.7, max: 6.4, fractionDigits: 2 })
  }

  if (condition === 'diabetes') {
    return faker.number.float({ min: 6.5, max: 15, fractionDigits: 2 })
  }

  throw new Error('Invalid condition')
}

export function generatePatientGlucose(condition: DiabetesCondition) {
  const dates: Date[] = []

  for (let i = 0; i < 7; i++) {
    const date = new Date()
    date.setDate(date.getDate() - i)
    dates.push(date)
  }

  dates.sort((a, b) => a.getTime() - b.getTime())

  const measurements: GlucoseMeasurement[] = dates.map((day) => ({
    day,
    fasting: genFastingMeasurement(condition),
    postMeal: genPostMealMeasurement(condition),
  }))

  return measurements
}

export function generatePatientHemoglobin(condition: DiabetesCondition) {
  const months: string[] = []

  for (let i = 0; i < 3; i++) {
    const date = new Date()
    const month = new Date(date.setMonth(date.getMonth() - (i + 1))).toLocaleDateString('pt-BR', { month: 'long' })

    months.unshift(month)
  }

  const measurements = months.map((month) => {
    return {
      month,
      hemoglobin: genHemoglobin(condition),
    }
  })

  return measurements
}
