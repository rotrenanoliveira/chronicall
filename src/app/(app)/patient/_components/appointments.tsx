import type { Appointment } from '@/utils/types'
import { faker } from '@faker-js/faker'
import { ArrowUpRightIcon, CalendarIcon } from 'lucide-react'

const data: Appointment[] = [
  {
    date: '2024-11-15',
    time: '10:00',
    doctorName: 'Dra. Maria Souza',
    specialty: 'Cardiologia',
    location: 'Hospital Central - Sala 203',
    notes: 'Avaliação de rotina para hipertensão',
  },
  {
    date: '2024-11-20',
    time: '14:30',
    doctorName: 'Dr. Pedro Oliveira',
    specialty: 'Dermatologia',
    location: 'Clínica da Pele - Sala 5',
    notes: 'Consulta para análise de manchas na pele',
  },
  {
    date: '2024-11-25',
    time: '09:00',
    doctorName: 'Dra. Ana Martins',
    specialty: 'Ortopedia',
    location: 'Centro de Ortopedia - Sala 12',
    notes: 'Exame de follow-up após lesão no joelho',
  },
  {
    date: '2024-12-01',
    time: '08:45',
    doctorName: 'Dr. Carlos Lima',
    specialty: 'Neurologia',
    location: 'Hospital Neurológico - Sala 102',
    notes: 'Avaliação de sintomas de enxaqueca',
  },
  {
    date: '2024-12-05',
    time: '13:00',
    doctorName: 'Dra. Beatriz Santos',
    specialty: 'Oftalmologia',
    location: 'Clínica dos Olhos - Sala 2',
    notes: 'Revisão anual da visão',
  },
  {
    date: '2024-12-10',
    time: '16:00',
    doctorName: 'Dr. João Ribeiro',
    specialty: 'Psiquiatria',
    location: 'Centro de Saúde Mental - Sala 9',
    notes: 'Acompanhamento de tratamento para ansiedade',
  },
  {
    date: '2024-12-15',
    time: '11:30',
    doctorName: 'Dra. Luana Mendes',
    specialty: 'Gastroenterologia',
    location: 'Clínica Digestiva - Sala 6',
    notes: 'Consulta sobre dor abdominal recorrente',
  },
  {
    date: '2024-12-20',
    time: '09:15',
    doctorName: 'Dr. Paulo Carvalho',
    specialty: 'Endocrinologia',
    location: 'Centro de Endocrinologia - Sala 4',
    notes: 'Controle de diabetes',
  },
  {
    date: '2025-01-05',
    time: '15:45',
    doctorName: 'Dra. Fernanda Torres',
    specialty: 'Reumatologia',
    location: 'Centro de Reumatologia - Sala 11',
    notes: 'Consulta para tratamento de artrite',
  },
  {
    date: '2025-01-10',
    time: '10:30',
    doctorName: 'Dr. Marco Silva',
    specialty: 'Urologia',
    location: 'Clínica Urológica - Sala 8',
    notes: 'Exame preventivo de próstata',
  },
  {
    date: '2025-01-15',
    time: '08:30',
    doctorName: 'Dra. Alice Almeida',
    specialty: 'Nefrologia',
    location: 'Hospital Central - Sala 105',
    notes: 'Exame de função renal',
  },
  {
    date: '2025-01-20',
    time: '14:00',
    doctorName: 'Dr. Rafael Costa',
    specialty: 'Oncologia',
    location: 'Clínica Oncológica - Sala 3',
    notes: 'Consulta de acompanhamento para nódulo',
  },
  {
    date: '2025-01-25',
    time: '11:00',
    doctorName: 'Dra. Tereza Lima',
    specialty: 'Pneumologia',
    location: 'Centro de Doenças Respiratórias - Sala 7',
    notes: 'Consulta para avaliação de tosse persistente',
  },
  {
    date: '2025-02-02',
    time: '13:15',
    doctorName: 'Dr. Henrique Lopes',
    specialty: 'Otorrinolaringologia',
    location: 'Clínica de Otorrino - Sala 15',
    notes: 'Avaliação para rinite alérgica',
  },
  {
    date: '2025-02-10',
    time: '16:45',
    doctorName: 'Dra. Carla Ferreira',
    specialty: 'Hematologia',
    location: 'Centro de Hematologia - Sala 10',
    notes: 'Exame de rotina para controle de anemia',
  },
]

const hours = ['6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20']
const minutes = ['00', '15', '30', '45']

export function Appointments() {
  const appointments = faker.helpers
    .arrayElements(data, 10)
    .map((appointment) => ({
      ...appointment,
      date: faker.date.soon({ days: 180 }),
      time: `${faker.helpers.arrayElement(hours)}:${faker.helpers.arrayElement(minutes)} hrs`,
      notes: appointment.notes.length > 40 ? appointment.notes.substring(0, 40).concat('...') : appointment.notes,
    }))
    .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())

  return (
    <div className="space-y-2">
      <h3>Próximas consultas</h3>
      {appointments.map((appointment) => {
        return (
          <div
            key={appointment.specialty}
            className="flex items-center gap-2 border rounded-lg p-2 group hover:bg-muted/50 hover:cursor-pointer"
          >
            <div className="size-10 flex items-center justify-center rounded-3xl bg-primary/10 p-2">
              <CalendarIcon strokeWidth={1} className="size-8 text-primary" />
            </div>

            <div className="flex-1 space-y-1">
              <div className="flex flex-1 flex-col lg:flex-row items-start lg:items-center justify-between lg:gap-2">
                <div className="flex flex-col lg:gap-1">
                  <span className="text-md text-foreground">{appointment.specialty}</span>

                  <div className="flex flex-col md:inline-flex md:flex-row md:items-center md:gap-1 lg:gap-2">
                    <span className="text-sm text-foreground">{appointment.doctorName}</span>
                    <span className="hidden md:inline"> - </span>
                    <span className="text-sm font-light text-muted-foreground">{appointment.location}</span>
                  </div>
                </div>

                <span className="text-sm font-light text-muted-foreground">
                  {appointment.date.toLocaleDateString('pt-BR', { dateStyle: 'long' })} às {appointment.time}
                </span>
              </div>
            </div>

            <div className="hidden md:flex size-10 items-center justify-center rounded-3xl border hover:bg-primary/10 p-2 transition-colors group-hover:bg-primary/20">
              <ArrowUpRightIcon
                strokeWidth={1}
                className="size-8 text-primary rotate-45 group-hover:rotate-0 transition-transform"
              />
            </div>
          </div>
        )
      })}
    </div>
  )
}
