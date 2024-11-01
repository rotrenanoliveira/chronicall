import { ArchiveIcon, CalendarIcon, ClipboardListIcon } from 'lucide-react'

export const patientNavItems = [
  {
    title: 'agendamentos',
    url: '#',
    icon: CalendarIcon,
    isActive: true,
    items: [
      { title: 'consultas médicas', url: '#' },
      { title: 'histórico', url: '#' },
    ],
  },
  {
    title: 'relatórios',
    url: '#',
    icon: ClipboardListIcon,
    items: [
      { title: 'relatórios de saúde', url: '#' },
      { title: 'guia de saúde', url: '#' },
    ],
  },
  {
    title: 'serviços',
    url: '#',
    icon: ArchiveIcon,
    items: [
      { title: 'redes credenciadas', url: '#' },
      { title: 'preparatório de exames', url: '#' },
    ],
  },
]
