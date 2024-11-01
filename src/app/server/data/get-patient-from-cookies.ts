'use server'

import type { User } from '@/app/utils/types'
import { cookies } from 'next/headers'

export async function getPatientFromCookie() {
  const cookieStore = await cookies()

  const patientData = cookieStore.get('chronicall:user')

  if (!patientData) return null

  return JSON.parse(patientData.value) as User
}
