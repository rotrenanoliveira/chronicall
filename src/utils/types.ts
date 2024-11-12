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
