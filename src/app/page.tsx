import { Button } from '@/components/ui/button'
import { LogIn } from 'lucide-react'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="flex flex-col gap-4 h-screen w-screen items-center justify-center">
      <h1 className="text-xl lg:text-4xl font-bold">Bem-vindo ao chronicall</h1>

      <div className="inline-flex items-center gap-2">
        <Button variant="outline" asChild>
          <Link href="/health-plus">
            Plano de saúde <LogIn className="size-4" />
          </Link>
        </Button>

        <Button variant="outline" asChild>
          <Link href="/sign-up">
            Paciente <LogIn className="size-4" />
          </Link>
        </Button>
      </div>
    </div>
  )
}
