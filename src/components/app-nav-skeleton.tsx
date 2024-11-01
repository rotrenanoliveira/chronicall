import { SidebarMenu, SidebarMenuItem, SidebarMenuSkeleton } from '@/components/ui/sidebar'

export function NavSkeleton({ itemsLength = 5 }: { itemsLength?: number }) {
  return (
    <SidebarMenu>
      {Array.from({ length: itemsLength }).map((_, index) => (
        // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
        <SidebarMenuItem key={index}>
          <SidebarMenuSkeleton showIcon />
        </SidebarMenuItem>
      ))}
    </SidebarMenu>
  )
}
