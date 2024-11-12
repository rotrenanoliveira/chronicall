export type User = {
  id: string
  name: string
  email: string
}

export type Appointment = {
  date: string
  time: string
  doctorName: string
  specialty: string
  location: string
  notes: string
}

export type DiabetesCondition = 'normal' | 'pre' | 'diabetes'

export type GlucoseMeasurement = {
  day: Date
  fasting: number
  postMeal: number
}

export type HypertensionCondition = 'normal' | 'elevated' | 'stage1' | 'stage2' | 'crisis'

export type HypertensionMeasurement = {
  day: Date
  systolic: number
  diastolic: number
}
