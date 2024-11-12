import type { DiabetesCondition } from '@/utils/types'
import { faker } from '@faker-js/faker'
import { DiabetesGlucose } from './diabetes-glucose'
import { DiabetesHemoglobin } from './diabetes-hemoglobin'

export function Diabetes() {
  const condition = faker.helpers.arrayElement<DiabetesCondition>(['normal', 'pre', 'diabetes'])
  const conditionDescription = condition === 'pre' ? 'pré-diabetes' : condition

  return (
    <div className="flex flex-col gap-4 col-span-2 lg:col-span-2 lg:flex-row">
      <DiabetesGlucose condition={condition} description={conditionDescription} />
      <DiabetesHemoglobin condition={condition} description={conditionDescription} />
    </div>
  )
}
