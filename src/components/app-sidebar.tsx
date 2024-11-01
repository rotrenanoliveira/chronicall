import React from 'react'
import Image from 'next/image'

import { Sidebar, SidebarContent, SidebarFooter, SidebarHeader, SidebarRail } from '@/components/ui/sidebar'
import { NavSkeleton } from './app-nav-skeleton'
import { NavUser } from './app-nav-user'

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
            <Image src="/chronicall.png" alt="" width={32} height={32} />
          </div>
          <h1 className="text-xl font-bold">chronicall</h1>
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
