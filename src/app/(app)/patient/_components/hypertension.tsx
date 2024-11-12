import { HypertensionMeasures } from './hypertension-measures'
import type { HypertensionCondition } from '@/utils/types'
import { faker } from '@faker-js/faker'
import { HeartRate } from './heart-rate'

function getConditionDescription(condition: HypertensionCondition) {
  switch (condition) {
    case 'normal':
      return 'normal'
    case 'elevated':
      return 'elevada'
    case 'stage1':
      return 'fase 1'
    case 'stage2':
      return 'fase 2'
    case 'crisis':
      return 'crise'
  }
}

export function Hypertension() {
  const condition = faker.helpers.arrayElement<HypertensionCondition>([
    'normal',
    'elevated',
    'stage1',
    'stage2',
    'crisis',
  ])

  const conditionDescription = getConditionDescription(condition)

  return (
    <div className="flex flex-col gap-4 col-span-2 lg:col-span-2 lg:flex-row">
      <HypertensionMeasures condition={condition} description={conditionDescription} />
      <HeartRate />
    </div>
  )
}
