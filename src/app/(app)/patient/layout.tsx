import { NavItems } from '@/components/app-nav-items'
import { AppSidebar } from '@/components/app-sidebar'
import { SidebarProvider } from '@/components/ui/sidebar'
import { patientNavItems } from './nav-items'

export default function PatientLayout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <AppSidebar navItems={<NavItems navTitle="Serviços oferecidos" items={patientNavItems} />} />

      {children}
    </SidebarProvider>
  )
}
