'use client'

import { Bar, BarChart, XAxis } from 'recharts'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { type ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart'
import { generatePatientHypertension } from '@/server/data/generate-patient-hypertension'
import type { HypertensionCondition } from '@/utils/types'

const chartConfig = {
  systolic: { label: 'sistólica', color: 'hsl(var(--chart-1))' },
  diastolic: { label: 'diastólica', color: 'hsl(var(--chart-2))' },
} satisfies ChartConfig

interface HypertensionMeasuresProps {
  condition: HypertensionCondition
  description: string
}

export function HypertensionMeasures({ condition, description }: HypertensionMeasuresProps) {
  return (
    <Card className="shadow-none xl:max-h-64 w-full">
      <CardHeader>
        <CardTitle>Pressão arterial</CardTitle>
        <CardDescription>
          Medidas da pressão arterial sistólica e diastólica dos últimos 7 dias, atualmente{' '}
          <span className="font-bold">{description}</span> - (mmHg)
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig} className="max-h-32 w-full">
          <BarChart accessibilityLayer data={generatePatientHypertension(condition)}>
            <XAxis
              dataKey="day"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => new Date(value).toLocaleDateString('pt-BR', { weekday: 'short' })}
            />
            <Bar dataKey="systolic" stackId="a" fill="var(--color-systolic)" radius={[0, 0, 4, 4]} />
            <Bar dataKey="diastolic" stackId="a" fill="var(--color-diastolic)" radius={[4, 4, 0, 0]} />
            <ChartTooltip content={<ChartTooltipContent />} cursor={false} />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
