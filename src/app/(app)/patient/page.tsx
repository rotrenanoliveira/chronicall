import { getPatientFromCookie } from '@/server/data/get-patient-from-cookies'
import { SidebarInset, SidebarTrigger } from '@/components/ui/sidebar'
import { redirect } from 'next/navigation'
import { Separator } from '@/components/ui/separator'
import { Calendar } from './_components/calendar'
import { Appointments } from './_components/appointments'
import { Hypertension } from './_components/hypertension'
import { Diabetes } from './_components/diabetes'
import { faker } from '@faker-js/faker'

export default async function PatientPage() {
  const patient = await getPatientFromCookie()
  const disease = faker.helpers.arrayElement(['diabetes', 'hypertension'])

  if (!patient) redirect('/sign-up')

  return (
    <SidebarInset>
      <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
        <div className="flex items-center gap-2 px-4">
          <SidebarTrigger className="-ml-1" />
          <Separator orientation="vertical" className="mr-2 h-4" />
          <span className="font-light text-muted-foreground">
            {patient.name}, {new Date().toLocaleDateString('pt-BR', { dateStyle: 'long' })}
          </span>
        </div>
      </header>
      <div className="flex flex-1 flex-col md:flex-row gap-4 p-4 pt-0">
        <div className="flex-1 grid md:grid-cols-2 auto-rows-min gap-4 rounded-xl">
          {disease === 'diabetes' && <Diabetes />}
          {disease === 'hypertension' && <Hypertension />}

          <div className="h-screen rounded-lg bg-muted/50 col-span-2" />
        </div>

        <div className="w-96 aspect-square rounded-xlm space-y-4">
          {/* calendar */}
          <Calendar />
          {/* appointments */}
          <Appointments />
        </div>
      </div>
    </SidebarInset>
  )
}
