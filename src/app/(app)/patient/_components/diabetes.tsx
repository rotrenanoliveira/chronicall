import type { DiabetesCondition } from '@/utils/types'
import { faker } from '@faker-js/faker'
import React from 'react'
import { DiabetesGlucose } from './diabetes-glucose'
import { DiabetesHemoglobin } from './diabetes-hemoglobin'

export function Diabetes() {
  const condition = faker.helpers.arrayElement<DiabetesCondition>(['normal', 'pre', 'diabetes'])
  const conditionDescription = condition === 'pre' ? 'pré-diabetes' : condition

  return (
    <React.Fragment>
      <DiabetesGlucose condition={condition} description={conditionDescription} />
      <DiabetesHemoglobin condition={condition} description={conditionDescription} />
    </React.Fragment>
  )
}
