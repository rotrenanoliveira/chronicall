import { Button } from '@/components/ui/button'
import { LogIn } from 'lucide-react'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="flex flex-col gap-4 h-screen w-screen items-center justify-center">
      <h1 className="text-4xl font-bold">Bem-vindo ao chronicall</h1>
      <Button variant="outline" asChild>
        <Link href="/sign-up">
          Entrar <LogIn className="size-4" />
        </Link>
      </Button>
    </div>
  )
}
