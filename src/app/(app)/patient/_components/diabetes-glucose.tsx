'use client'
import { CartesianGrid, Line, LineChart, XAxis } from 'recharts'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { type ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart'
import type { DiabetesCondition } from '@/utils/types'
import { generatePatientGlucose } from '@/server/data/generate-patient-diabetes'

export const description = 'A linear area chart'

const chartConfig = {
  postMeal: { label: 'Pós-refeição', color: 'hsl(var(--chart-2))' },
  fasting: { label: 'Jejum', color: 'hsl(var(--chart-1))' },
} satisfies ChartConfig

interface DiabetesGlucoseProps {
  condition: DiabetesCondition
  description: string
}

export function DiabetesGlucose({ condition, description }: DiabetesGlucoseProps) {
  return (
    <Card className="shadow-none">
      <CardHeader>
        <CardTitle>Glicose</CardTitle>
        <CardDescription className="font-light">
          Nível de glicose no sangue na última semana, atualmente considerado{' '}
          <span className="font-bold">{description}</span> - (mg/dL)
        </CardDescription>
      </CardHeader>
      <CardContent className="h-">
        <ChartContainer config={chartConfig} className="max-h-32 w-full">
          <LineChart accessibilityLayer data={generatePatientGlucose(condition)} margin={{ left: 15, right: 12 }}>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="day"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => new Date(value).toLocaleDateString('pt-BR', { weekday: 'short' })}
            />
            <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
            <Line dataKey="postMeal" type="monotone" stroke="var(--color-postMeal)" strokeWidth={2} dot={true} />
            <Line dataKey="fasting" type="monotone" stroke="var(--color-fasting)" strokeWidth={2} dot={true} />
          </LineChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
