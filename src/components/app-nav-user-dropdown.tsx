'use client'

import {
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
} from '@/components/ui/dropdown-menu'
import { useSidebar } from '@/components/ui/sidebar'
import Avatar from 'boring-avatars'
import { Sparkles, BadgeCheck, CreditCard, Bell, LogOut } from 'lucide-react'
import { ThemeSwitcher } from './theme-switcher'

interface NavUserDropdownProps {
  patient: {
    name: string
    email: string
  }
}

export function NavUserDropdown({ patient }: NavUserDropdownProps) {
  const { isMobile } = useSidebar()

  return (
    <DropdownMenuContent
      className="w-[--radix-dropdown-menu-trigger-width] min-w-56 rounded-lg"
      side={isMobile ? 'bottom' : 'right'}
      align="end"
      sideOffset={4}
    >
      <DropdownMenuLabel className="p-0 font-normal">
        <div className="flex items-center gap-2 px-1 py-1.5 text-left text-sm">
          <div className="size-8">
            <Avatar name={patient.email} variant="beam" />
          </div>
          <div className="grid flex-1 text-left text-sm leading-tight">
            <span className="truncate font-semibold">{patient.name}</span>
            <span className="truncate text-xs">{patient.email}</span>
          </div>
        </div>
      </DropdownMenuLabel>
      <DropdownMenuSeparator />
      <DropdownMenuGroup>
        <DropdownMenuItem>
          <Sparkles />
          Faça o upgrade
        </DropdownMenuItem>
      </DropdownMenuGroup>
      <DropdownMenuSeparator />
      <DropdownMenuGroup>
        <DropdownMenuItem>
          <BadgeCheck />
          Conta
        </DropdownMenuItem>
        <DropdownMenuItem>
          <CreditCard />
          Cobranças
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Bell />
          Notificações
        </DropdownMenuItem>
      </DropdownMenuGroup>
      <DropdownMenuSeparator />
      <DropdownMenuGroup>
        <ThemeSwitcher />
      </DropdownMenuGroup>
      <DropdownMenuSeparator />
      <DropdownMenuItem>
        <LogOut />
        Log out
      </DropdownMenuItem>
    </DropdownMenuContent>
  )
}
