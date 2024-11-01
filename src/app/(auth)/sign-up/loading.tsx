import { Loader2 } from 'lucide-react'

export default function Loading() {
  return (
    <div className="flex flex-col gap-4 h-screen w-screen items-center justify-center">
      <Loader2 className="animate-spin text-4xl font-bold" />
    </div>
  )
}
