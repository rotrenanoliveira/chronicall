import { getPatientFromCookie } from '@/server/data/get-patient-from-cookies'
import { SidebarMenu, SidebarMenuButton, SidebarMenuItem } from '@/components/ui/sidebar'
import { DropdownMenu, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import Avatar from 'boring-avatars'
import { ChevronsUpDown } from 'lucide-react'
import { NavUserDropdown } from './app-nav-user-dropdown'

export async function NavUser() {
  const patient = await getPatientFromCookie()

  if (!patient) return null

  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <SidebarMenuButton
              size="lg"
              className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
            >
              <div className="size-8">
                <Avatar name={patient.email} variant="beam" />
              </div>
              <div className="grid flex-1 text-left text-sm leading-tight">
                <span className="truncate font-semibold">{patient?.name}</span>
                <span className="truncate text-xs">{patient?.email}</span>
              </div>
              <ChevronsUpDown className="ml-auto size-4" />
            </SidebarMenuButton>
          </DropdownMenuTrigger>
          {/* nav user dropdown */}
          <NavUserDropdown patient={patient} />
        </DropdownMenu>
      </SidebarMenuItem>
    </SidebarMenu>
  )
}
