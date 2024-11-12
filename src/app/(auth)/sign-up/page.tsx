import { Rethink_Sans } from 'next/font/google'
import { cn } from '@/lib/utils'
import Image from 'next/image'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import React from 'react'
import { FormStep } from '@/components/ui/form-step'
import { Label } from '@/components/ui/label'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Mail, ArrowRightIcon } from 'lucide-react'
import { InputPhone } from './_components/input-phone'
import Link from 'next/link'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { signUpAction } from '@/server/actions/sign-up'

const rethink = Rethink_Sans({ subsets: ['latin'] })

type SearchParams = Promise<{ step: string | undefined }>

export default async function SignUpPage(props: { searchParams: SearchParams }) {
  const searchParams = await props.searchParams
  const step = searchParams.step

  const userId = (await cookies()).get('sign-up:user')

  if (userId && !step) {
    redirect('/patient')
  }

  if (!userId && !step) {
    redirect('?step=1')
  }

  return (
    <main className={cn(rethink.className, 'flex flex-col w-screen h-svh items-center px-6 py-32 space-y-12 ')}>
      <div className="inline-flex items-center gap-2">
        <Image src="/chronicall.png" alt="Logo" width={48} height={48} />
        <h1 className="text-4xl font-bold">chronicall</h1>
      </div>

      {/* personal information form*/}
      {step === '1' && (
        <React.Fragment>
          <form action={signUpAction} className="w-96 p-4 space-y-4 flex flex-col items-center justify-center">
            <h3 className="text-xl">Cadastro de Paciente</h3>
            <p className="text-foreground/65 leading-5 text-sm">
              Preencha seus dados para garantir um atendimento personalizado e eficiente.
            </p>

            <FormStep steps={4} currentStep={1} />

            {/* input email */}
            <div className="space-y-1 w-full">
              <Label htmlFor="user-mail">
                Email <span className="text-destructive">*</span>
              </Label>
              <div className="relative">
                <Input
                  type="email"
                  id="user-mail"
                  name="user-mail"
                  placeholder="insira um e-mail válido"
                  className="peer pe-9"
                  required
                />
                <div className="pointer-events-none absolute inset-y-0 end-0 flex items-center justify-center pe-3 text-muted-foreground/80 peer-disabled:opacity-50">
                  <Mail size={16} strokeWidth={2} aria-hidden="true" />
                </div>
              </div>
            </div>

            {/* input name */}
            <div className="space-y-1 w-full">
              <Label htmlFor="user-name">
                Nome <span className="text-destructive">*</span>
              </Label>
              <Input type="text" id="user-name" name="user-name" placeholder="insira seu nome completo" required />
            </div>

            {/* input phone */}
            <InputPhone name="user-phone" label="Telefone" required />

            {/* birth date */}
            <div className="space-y-1 w-full">
              <Label htmlFor="user-birthdate">
                Data de Nascimento <span className="text-destructive">*</span>
              </Label>
              <Input type="date" id="user-birthdate" required />
            </div>

            {/* gender */}
            <div className="space-y-1 w-full">
              <Label htmlFor="user-gender">
                Gênero <span className="text-destructive">*</span>
              </Label>

              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Selecione um gênero" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectItem value="male">Masculino</SelectItem>
                    <SelectItem value="female">Feminino</SelectItem>
                    <SelectItem value="other">Outros</SelectItem>
                    <SelectItem value="na">Prefiro não responder</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>

            <Button type="submit" className="rounded-3xl inline-flex items-center bg-blue-500">
              {/* <Link href="?step=2"> */}
              Próximo
              <ArrowRightIcon strokeWidth={1.5} className="ml-2 size-4" />
              {/* </Link> */}
            </Button>
          </form>
        </React.Fragment>
      )}

      {/* health information form*/}
      {step === '2' && (
        <React.Fragment>
          <form className="w-96 space-y-4 flex flex-col items-center justify-center">
            <h3 className="text-xl">Informações de Saúde</h3>
            <p className="text-foreground/65 leading-5 text-sm">
              Preencha seus dados para entendermos melhor suas necessidades.
            </p>

            <FormStep steps={4} currentStep={2} />

            {/* input weight */}
            <div className="space-y-1 w-full">
              <Label htmlFor="user-weight">
                Peso <span className="text-destructive">*</span>
              </Label>
              <Input type="number" id="user-weight" placeholder="insira seu peso" min={0} step={0.1} required />
            </div>

            {/* input height */}
            <div className="space-y-1 w-full">
              <Label htmlFor="user-height">
                Altura <span className="text-destructive">*</span>
              </Label>
              <Input
                type="number"
                id="user-height"
                placeholder="insira sua altura"
                min={0}
                step={0.1}
                max={3}
                required
              />
            </div>

            {/* input allergies */}
            <div className="space-y-1 w-full">
              <Label htmlFor="user-allergies">Tem alguma alergia?</Label>
              <RadioGroup defaultValue="no" name="user-allergies" className="flex items-center gap-2">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="yes" id="yes" />
                  <Label htmlFor="yes">Sim</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="no" id="no" />
                  <Label htmlFor="no">Não</Label>
                </div>
              </RadioGroup>
            </div>

            {/* input hospitalized */}
            <div className="space-y-1 w-full">
              <Label htmlFor="user-hospitalized">Já foi internado?</Label>
              <RadioGroup defaultValue="no" name="user-hospitalized" className="flex items-center gap-2">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="yes" id="yes" />
                  <Label htmlFor="yes">Sim</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="no" id="no" />
                  <Label htmlFor="no">Não</Label>
                </div>
              </RadioGroup>
            </div>

            {/* input surgery */}
            <div className="space-y-1 w-full">
              <Label htmlFor="user-surgery">Já realizou alguma cirurgia?</Label>
              <RadioGroup defaultValue="no" name="user-surgery" className="flex items-center gap-2">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="yes" id="yes" />
                  <Label htmlFor="yes">Sim</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="no" id="no" />
                  <Label htmlFor="no">Não</Label>
                </div>
              </RadioGroup>
            </div>

            <Button type="submit" className="rounded-3xl inline-flex items-center bg-blue-500" asChild>
              <Link href="?step=3">
                Próximo
                <ArrowRightIcon strokeWidth={1.5} className="ml-2 size-4" />
              </Link>
            </Button>
          </form>
        </React.Fragment>
      )}

      {/* emergency contact form*/}
      {step === '3' && (
        <React.Fragment>
          <form className="w-96 space-y-4 flex flex-col items-center justify-center">
            <h3 className="text-xl">Contatos de Emergência</h3>
            <p className="text-foreground/65 leading-5 text-sm">
              Preencha contatos de emergência para alguma eventualidade.
            </p>

            <FormStep steps={4} currentStep={3} />

            {/* input name */}
            <div className="space-y-1 w-full">
              <Label htmlFor="user-contact-name">
                Nome do contato <span className="text-destructive">*</span>
              </Label>
              <Input type="text" id="user-contact-name" placeholder="insira o nome completo do contato" required />
            </div>

            {/* input phone */}
            <InputPhone name="user-contact-phone" label="Telefone do contato" required />

            <Button type="submit" className="rounded-3xl inline-flex items-center bg-blue-500" asChild>
              <Link href="?step=4">
                Próximo
                <ArrowRightIcon strokeWidth={1.5} className="ml-2 size-4" />
              </Link>
            </Button>
          </form>
        </React.Fragment>
      )}

      {/* terms form*/}
      {step === '4' && (
        <React.Fragment>
          <form className="w-96 space-y-4 flex flex-col items-center justify-center">
            <h3 className="text-xl">Termos e Condições</h3>
            <p className="text-foreground/65 leading-5 text-sm">
              Por favor, leia e aceite os termos e condições antes de continuar.
            </p>

            <FormStep steps={4} currentStep={4} />

            {/* input user collection */}
            <div className="space-y-1 w-full">
              <Label htmlFor="user-data-collection">Consentimento para coleta e uso de dados</Label>
              <RadioGroup defaultValue="no" name="user-data-collection" className="space-y-1">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="accept" id="accept" />
                  <Label htmlFor="accept">Aceito</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="no-accept" id="no-accept" />
                  <Label htmlFor="no-accept">Não aceito</Label>
                </div>
              </RadioGroup>
            </div>

            {/* input user collection */}
            <div className="space-y-1 w-full">
              <Label htmlFor="user-terms">Termos de privacidade e uso</Label>
              <RadioGroup defaultValue="no" name="user-terms" className="space-y-1">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="accept" id="accept" />
                  <Label htmlFor="accept">Aceito</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="no-accept" id="no-accept" />
                  <Label htmlFor="no-accept">Não aceito</Label>
                </div>
              </RadioGroup>
            </div>

            <Button type="submit" className="rounded-3xl inline-flex items-center bg-blue-500" asChild>
              <Link href="/patient">
                Começar
                <ArrowRightIcon strokeWidth={1.5} className="ml-2 size-4" />
              </Link>
            </Button>
          </form>
        </React.Fragment>
      )}
    </main>
  )
}
