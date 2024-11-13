import { NavItems } from '@/components/app-nav-items'
import { AppSidebar } from './_components/sidebar'
import { SidebarProvider } from '@/components/ui/sidebar'
import { healthPlusNavItems } from './nav-items'

export default function PatientLayout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <AppSidebar navItems={<NavItems navTitle="Serviços oferecidos" items={healthPlusNavItems} />} />

      {children}
    </SidebarProvider>
  )
}
