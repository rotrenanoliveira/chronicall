import { cn } from '@/lib/utils'

interface StepProps {
  steps: number
  currentStep: number
  color?: string
}

export function FormStep({ steps, currentStep, color = 'bg-blue-500' }: StepProps) {
  return (
    <div className="grid grid-cols-4 gap-1 w-full">
      {Array.from({ length: steps }).map((_, i) => (
        <div
          // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
          key={i}
          className={cn(
            'h-1 col-span-1 rounded-md opacity-50',
            currentStep === i + 1 && 'opacity-100',
            currentStep > i + 1 && 'opacity-100',
            color,
          )}
        />
      ))}
    </div>
  )
}
