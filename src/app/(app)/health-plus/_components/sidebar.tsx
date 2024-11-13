import React from 'react'

import { Sidebar, SidebarContent, SidebarFooter, SidebarHeader, SidebarRail } from '@/components/ui/sidebar'
import { BriefcaseMedicalIcon } from 'lucide-react'
import { NavUser } from '@/components/app-nav-user'
import { NavSkeleton } from '@/components/app-nav-skeleton'

import { Space_Grotesk } from 'next/font/google'
import { cn } from '@/lib/utils'

const spaceGrotesk = Space_Grotesk({ weight: '300', subsets: ['latin'], display: 'swap' })

interface AppSidebarProps {
  navItems: React.JSX.Element
}

export function AppSidebar({ navItems }: AppSidebarProps) {
  return (
    <Sidebar>
      {/* header */}
      <SidebarHeader>
        <div className="flex items-center gap-2">
          <div className="size-10 rounded-lg p-1">
            <BriefcaseMedicalIcon strokeWidth={1.15} className="size-8 text-destructive md:text-red-400" />
          </div>
          <h1 className={cn(spaceGrotesk.className, 'text-2xl font-bold')}>health+</h1>
        </div>
      </SidebarHeader>
      {/* content */}
      <SidebarContent>{navItems}</SidebarContent>
      <SidebarFooter>
        <React.Suspense fallback={<NavSkeleton />}>
          <NavUser />
        </React.Suspense>
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
