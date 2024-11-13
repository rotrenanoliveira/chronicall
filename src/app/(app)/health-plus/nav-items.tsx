import { CalendarIcon, CircleHelpIcon, ClipboardIcon, CogIcon, DollarSignIcon, UserIcon, UsersIcon } from 'lucide-react'

export const healthPlusNavItems = [
  {
    title: 'pacientes',
    url: '#',
    icon: UserIcon,
    isActive: true,
    items: [
      { title: 'lista de pacientes', url: '#' },
      { title: 'prontuários', url: '#' },
      { title: 'histórico de consultas', url: '#' },
    ],
  },
  {
    title: 'agendamentos',
    url: '#',
    icon: CalendarIcon,
    items: [
      { title: 'consultas', url: '#' },
      { title: 'exames', url: '#' },
      { title: 'procedimentos', url: '#' },
    ],
  },
  {
    title: 'relatórios',
    url: '#',
    icon: ClipboardIcon,
    items: [
      { title: 'relatório de pacientes', url: '#' },
      { title: 'estatísticas de atendimentos', url: '#' },
      { title: 'indicadores de saúde', url: '#' },
    ],
  },
  {
    title: 'gestão de equipe',
    url: '#',
    icon: UsersIcon,
    items: [
      { title: 'equipe médica', url: '#' },
      { title: 'escala de trabalho', url: '#' },
    ],
  },
  {
    title: 'financeiro',
    url: '#',
    icon: DollarSignIcon,
    items: [
      { title: 'pagamentos', url: '#' },
      { title: 'faturamento', url: '#' },
      { title: 'relatório financeiro', url: '#' },
    ],
  },
  {
    title: 'suporte ao cliente',
    url: '#',
    icon: CircleHelpIcon,
    items: [
      { title: 'chamados de suporte', url: '#' },
      { title: 'chat com paciente', url: '#' },
    ],
  },
  {
    title: 'configurações',
    url: '#',
    icon: CogIcon,
    items: [
      { title: 'configurações de sistema', url: '#' },
      { title: 'permissões de acesso', url: '#' },
    ],
  },
]
