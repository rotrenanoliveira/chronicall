'use client'
import { CartesianGrid, LabelList, Line, LineChart, XAxis } from 'recharts'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { type ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart'
import { generatePatientHeartRate } from '@/server/data/generate-patient-hypertension'

const chartConfig = { heartRate: { label: 'batimentos', color: 'hsl(var(--chart-1))' } } satisfies ChartConfig

export function HeartRate() {
  return (
    <Card className="shadow-none">
      <CardHeader>
        <CardTitle>Frequência cardíaca</CardTitle>
        <CardDescription className="font-light">
          Média da frequência cardíaca nos últimos 7 dias - (bpm)
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig} className="max-h-32 w-full">
          <LineChart accessibilityLayer data={generatePatientHeartRate()} margin={{ top: 20, left: 18, right: 20 }}>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="day"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => new Date(value).toLocaleDateString('pt-BR', { weekday: 'short' })}
            />
            <ChartTooltip cursor={false} content={<ChartTooltipContent indicator="line" />} />
            <Line
              dataKey="heartRate"
              type="linear"
              stroke="var(--color-heartRate)"
              strokeWidth={2}
              dot={{ fill: 'var(--color-heartRate)' }}
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
