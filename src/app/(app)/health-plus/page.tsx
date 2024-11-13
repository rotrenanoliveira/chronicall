import { getPatientFromCookie } from '@/server/data/get-patient-from-cookies'
import { SidebarInset, SidebarTrigger } from '@/components/ui/sidebar'
import { redirect } from 'next/navigation'
import { Separator } from '@/components/ui/separator'
import { Appointments } from './_components/appointments'
import { PatientsMonitor } from './_components/patients-monitor'

export default async function PatientPage() {
  const user = await getPatientFromCookie()
  const userRole = ['TI', 'médico', 'enfermeiro', 'apoio médico', 'apoio enfermeiro', 'recepcionista'][
    Math.floor(Math.random() * 6)
  ]

  if (!user) redirect('/sign-up')

  return (
    <SidebarInset>
      <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
        <div className="flex items-center gap-2 px-4">
          <SidebarTrigger className="-ml-1" />
          <Separator orientation="vertical" className="mr-2 h-4" />
          <span className="font-light text-muted-foreground capitalize">
            {userRole} - {user.name}, {new Date().toLocaleDateString('pt-BR', { dateStyle: 'long' })}
          </span>
        </div>
      </header>
      <div className="flex flex-1 flex-col xl:flex-row gap-4 p-4 pt-0">
        <div className="flex-1 grid xl:grid-cols-2 auto-rows-min gap-4 rounded-xl">
          <div className="h-fit rounded-lg col-span-2">
            <Appointments />
          </div>
        </div>

        <div className="w-96 aspect-square rounded-xlm space-y-4">
          {/* patients monitor */}
          <PatientsMonitor />
        </div>
      </div>
    </SidebarInset>
  )
}
