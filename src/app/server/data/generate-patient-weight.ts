'server only'

import { faker } from '@faker-js/faker'

export function generatePatientWeight() {
  const weight = faker.number.int({ min: 50, max: 120 })
  const minWeight = weight - faker.number.int({ min: 10, max: 20 })
  const maxWeight =
    weight >= 100 ? weight + faker.number.int({ min: 1, max: 5 }) : weight + faker.number.int({ min: 5, max: 20 })

  const weightData = [
    { month: 'Jun', weight: faker.number.int({ min: minWeight, max: maxWeight }) },
    { month: 'Jul', weight: faker.number.int({ min: minWeight, max: maxWeight }) },
    { month: 'Ago', weight: faker.number.int({ min: minWeight, max: maxWeight }) },
    { month: 'Set', weight: faker.number.int({ min: minWeight, max: maxWeight }) },
    { month: 'Out', weight: faker.number.int({ min: minWeight, max: maxWeight }) },
    { month: 'Nov', weight: faker.number.int({ min: minWeight, max: maxWeight }) },
  ]

  return weightData
}
