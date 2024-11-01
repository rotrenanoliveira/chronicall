'use client'
import { CartesianGrid, Line, LineChart, XAxis } from 'recharts'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { type ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart'
import { generatePatientWeight } from '@/server/data/generate-patient-weight'

export const description = 'A linear area chart'

const chartConfig = {
  weight: {
    label: 'Weight',
    color: 'hsl(var(--chart-1))',
  },
} satisfies ChartConfig

export function PatientWeight() {
  return (
    <Card className="shadow-none">
      <CardHeader>
        <CardTitle>Peso</CardTitle>
        <CardDescription className="font-light">Acompanhe seu peso nos últimos 6 meses</CardDescription>
      </CardHeader>
      <CardContent className="h-">
        <ChartContainer config={chartConfig} className="max-h-32 w-full">
          <LineChart
            accessibilityLayer
            data={generatePatientWeight()}
            margin={{
              left: 12,
              right: 12,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip cursor={false} content={<ChartTooltipContent hideLabel />} />
            <Line dataKey="weight" type="linear" stroke="var(--color-weight)" strokeWidth={1} dot={true} />
          </LineChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
