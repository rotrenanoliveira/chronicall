import { getPatientFromCookie } from '@/server/data/get-patient-from-cookies'
import { SidebarInset, SidebarTrigger } from '@/components/ui/sidebar'
import { redirect } from 'next/navigation'
import { Separator } from '@/components/ui/separator'
import { PatientWeight } from './_components/patient-weight'

export default async function PatientPage() {
  const patient = await getPatientFromCookie()

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
      <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
        <div className="grid auto-rows-min gap-4 md:grid-cols-3">
          <PatientWeight />
          <div className="aspect-video rounded-xl bg-muted/50" />
          <div className="aspect-video rounded-xl bg-muted/50" />
        </div>
        <div className="min-h-[100vh] flex-1 rounded-xl bg-muted/50 md:min-h-min" />
      </div>
    </SidebarInset>
  )
}
