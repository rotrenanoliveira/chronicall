'use client'
import { CartesianGrid, LabelList, Line, LineChart, XAxis } from 'recharts'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { type ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart'
import type { DiabetesCondition } from '@/utils/types'
import { generatePatientHemoglobin } from '@/server/data/generate-patient-diabetes'

export const description = 'A linear area chart'

const chartConfig = {
  hemoglobin: { label: 'Hem.', color: 'hsl(var(--chart-1))' },
} satisfies ChartConfig

interface DiabetesHemoglobinProps {
  condition: DiabetesCondition
  description: string
}

export function DiabetesHemoglobin({ condition, description }: DiabetesHemoglobinProps) {
  return (
    <Card className="shadow-none w-full">
      <CardHeader>
        <CardTitle>Hemoglobina aplicada</CardTitle>
        <CardDescription className="font-light">
          Reflete a média da glicose dos últimos 3 meses, atualmente considerado{' '}
          <span className="font-bold">{description}</span> - (% glc)
        </CardDescription>
      </CardHeader>
      <CardContent className="h-">
        <ChartContainer config={chartConfig} className="max-h-32 w-full">
          <LineChart
            accessibilityLayer
            data={generatePatientHemoglobin(condition)}
            margin={{ top: 20, left: 18, right: 20 }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip cursor={false} content={<ChartTooltipContent indicator="line" />} />
            <Line
              dataKey="hemoglobin"
              type="natural"
              stroke="var(--color-hemoglobin)"
              strokeWidth={2}
              dot={{ fill: 'var(--color-hemoglobin)' }}
              activeDot={{ r: 6 }}
            >
              <LabelList position="top" offset={12} className="fill-foreground w-fit" fontSize={12} />
            </Line>
          </LineChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
