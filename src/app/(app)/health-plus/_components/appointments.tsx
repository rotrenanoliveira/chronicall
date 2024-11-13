import { Separator } from '@/components/ui/separator'
import { faker } from '@faker-js/faker'
import {
  ActivityIcon,
  AmbulanceIcon,
  ArrowUpRightIcon,
  BandageIcon,
  BrainIcon,
  DnaIcon,
  EarIcon,
  HeartPulseIcon,
  MicroscopeIcon,
  PillBottleIcon,
  StethoscopeIcon,
  SyringeIcon,
} from 'lucide-react'

const data = [
  {
    patientName: 'Ana Souza',
    doctorName: 'Dr. João Silva',
    specialty: 'Cardiologia',
    location: 'Hospital Central - Sala 203',
    notes: 'Avaliação de pressão alta',
  },
  {
    patientName: 'Carlos Oliveira',
    doctorName: 'Dra. Beatriz Mendes',
    specialty: 'Dermatologia',
    location: 'Clínica da Pele - Sala 7',
    notes: 'Consulta para tratamento de acne',
  },
  {
    patientName: 'Mariana Lima',
    doctorName: 'Dr. Paulo Vieira',
    specialty: 'Gastroenterologia',
    location: 'Centro de Gastro - Sala 4',
    notes: 'Consulta para dor abdominal crônica',
  },
  {
    patientName: 'Fernando Costa',
    doctorName: 'Dra. Carla Santos',
    specialty: 'Neurologia',
    location: 'Clínica Neuro - Sala 10',
    notes: 'Exame para enxaquecas',
  },
  {
    patientName: 'Rafael Nunes',
    doctorName: 'Dr. Henrique Torres',
    specialty: 'Psiquiatria',
    location: 'Centro de Saúde Mental - Sala 5',
    notes: 'Acompanhamento de transtorno de ansiedade',
  },
  {
    patientName: 'Julia Fernandes',
    doctorName: 'Dra. Luana Silva',
    specialty: 'Pediatria',
    location: 'Hospital Infantil - Sala 3',
    notes: 'Consulta de rotina para crescimento',
  },
  {
    patientName: 'Lucas Pereira',
    doctorName: 'Dr. Marco Farias',
    specialty: 'Urologia',
    location: 'Clínica Urológica - Sala 2',
    notes: 'Exame de próstata preventivo',
  },
  {
    patientName: 'Ana Clara Ribeiro',
    doctorName: 'Dra. Alice Almeida',
    specialty: 'Endocrinologia',
    location: 'Centro Endocrinológico - Sala 8',
    notes: 'Avaliação de tireoide',
  },
  {
    patientName: 'Pedro Santos',
    doctorName: 'Dr. Carlos Lima',
    specialty: 'Ortopedia',
    location: 'Centro Ortopédico - Sala 11',
    notes: 'Exame de dor no joelho',
  },
  {
    patientName: 'Isabela Rocha',
    doctorName: 'Dra. Mariana Figueiredo',
    specialty: 'Ginecologia',
    location: 'Clínica Feminina - Sala 12',
    notes: 'Consulta de rotina',
  },
  {
    patientName: 'Diego Almeida',
    doctorName: 'Dr. Roberto Teixeira',
    specialty: 'Pneumologia',
    location: 'Clínica Respiratória - Sala 6',
    notes: 'Exame para asma',
  },
  {
    patientName: 'Camila Costa',
    doctorName: 'Dra. Fernanda Melo',
    specialty: 'Oftalmologia',
    location: 'Clínica dos Olhos - Sala 1',
    notes: 'Exame de vista',
  },
  {
    patientName: 'Sofia Carvalho',
    doctorName: 'Dr. Eduardo Campo',
    specialty: 'Hematologia',
    location: 'Centro Hematológico - Sala 9',
    notes: 'Exame para anemia',
  },
  {
    patientName: 'Gabriel Souza',
    doctorName: 'Dra. Rafaela Nogueira',
    specialty: 'Oncologia',
    location: 'Centro Oncológico - Sala 13',
    notes: 'Consulta de acompanhamento',
  },
  {
    patientName: 'Larissa Oliveira',
    doctorName: 'Dr. Victor Lopes',
    specialty: 'Nefrologia',
    location: 'Centro de Nefrologia - Sala 14',
    notes: 'Exame de função renal',
  },
  {
    patientName: 'Felipe Martins',
    doctorName: 'Dra. Juliana Farias',
    specialty: 'Reumatologia',
    location: 'Clínica Reumática - Sala 5',
    notes: 'Consulta para dor nas articulações',
  },
  {
    patientName: 'Vanessa Batista',
    doctorName: 'Dr. Renato Barbosa',
    specialty: 'Otorrinolaringologia',
    location: 'Clínica Otorrino - Sala 4',
    notes: 'Avaliação de sinusite',
  },
  {
    patientName: 'Luiz Carvalho',
    doctorName: 'Dra. Marisa Lima',
    specialty: 'Alergologia',
    location: 'Centro de Alergias - Sala 10',
    notes: 'Teste de alergias',
  },
  {
    patientName: 'Sara Pereira',
    doctorName: 'Dr. André Ribeiro',
    specialty: 'Imunologia',
    location: 'Centro de Imunologia - Sala 7',
    notes: 'Consulta para imunidade baixa',
  },
  {
    patientName: 'Rafaela Costa',
    doctorName: 'Dr. Otávio Sousa',
    specialty: 'Geriatria',
    location: 'Centro Geriátrico - Sala 8',
    notes: 'Consulta de rotina',
  },
  {
    patientName: 'Marcos Santos',
    doctorName: 'Dra. Cristina Mendes',
    specialty: 'Proctologia',
    location: 'Clínica Procto - Sala 12',
    notes: 'Consulta para hemorroidas',
  },
  {
    patientName: 'Beatriz Rocha',
    doctorName: 'Dr. Thiago Araújo',
    specialty: 'Infectologia',
    location: 'Hospital Central - Sala 15',
    notes: 'Avaliação de infecção viral',
  },
  {
    patientName: 'Miguel Silva',
    doctorName: 'Dra. Tatiana Vasconcelos',
    specialty: 'Neurologia',
    location: 'Clínica Neuro - Sala 2',
    notes: 'Consulta para tremores',
  },
  {
    patientName: 'Ricardo Gomes',
    doctorName: 'Dr. Bruno Pereira',
    specialty: 'Psiquiatria',
    location: 'Centro de Saúde Mental - Sala 6',
    notes: 'Acompanhamento de depressão',
  },
  {
    patientName: 'Natália Ferreira',
    doctorName: 'Dra. Carla Brito',
    specialty: 'Ginecologia',
    location: 'Centro Feminino - Sala 9',
    notes: 'Consulta para exame preventivo',
  },
  {
    patientName: 'André Pinto',
    doctorName: 'Dr. Mateus Carvalho',
    specialty: 'Oftalmologia',
    location: 'Clínica de Visão - Sala 3',
    notes: 'Consulta para problema de visão',
  },
  {
    patientName: 'Lucas Ramos',
    doctorName: 'Dra. Simone Borges',
    specialty: 'Cardiologia',
    location: 'Hospital do Coração - Sala 5',
    notes: 'Exame de acompanhamento para arritmia',
  },
  {
    patientName: 'Fernanda Alves',
    doctorName: 'Dr. Ricardo Barreto',
    specialty: 'Nutrologia',
    location: 'Centro de Nutrologia - Sala 1',
    notes: 'Consulta para controle de peso',
  },
  {
    patientName: 'Daniel Gomes',
    doctorName: 'Dra. Priscila Santos',
    specialty: 'Infectologia',
    location: 'Clínica de Infectologia - Sala 11',
    notes: 'Acompanhamento para infecção',
  },
  {
    patientName: 'Juliana Nunes',
    doctorName: 'Dr. Leonardo Oliveira',
    specialty: 'Endocrinologia',
    location: 'Centro Endócrino - Sala 13',
    notes: 'Avaliação de resistência à insulina',
  },
]

const hours = ['6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20']
const minutes = ['00', '15', '30', '45']
const icons = [
  ActivityIcon,
  AmbulanceIcon,
  BandageIcon,
  BrainIcon,
  DnaIcon,
  EarIcon,
  HeartPulseIcon,
  MicroscopeIcon,
  PillBottleIcon,
  StethoscopeIcon,
  SyringeIcon,
]

export function Appointments() {
  const appointments = faker.helpers
    .arrayElements(data, 15)
    .map((appointment) => ({
      ...appointment,
      date: faker.date.soon({ days: 2 }),
      time: `${faker.helpers.arrayElement(hours)}:${faker.helpers.arrayElement(minutes)} hrs`,
      notes: appointment.notes.length > 30 ? appointment.notes.substring(0, 30).concat('...') : appointment.notes,
      patientId: faker.internet.username(),
      icon: faker.helpers.arrayElement(icons),
    }))
    .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())

  return (
    <div className="space-y-2">
      <h3>Lista dos agendamentos de consultas</h3>
      {appointments.map((appointment) => {
        return (
          <div
            key={appointment.patientId}
            className="flex items-center gap-2 border rounded-lg p-2 group hover:bg-muted/50 hover:cursor-pointer"
          >
            <div className="size-10 flex items-center justify-center rounded-3xl bg-blue-50 dark:bg-blue-900 p-2">
              <appointment.icon strokeWidth={1.15} className="size-8 text-blue-500 dark:text-blue-400" />
            </div>

            <div className="flex-1 space-y-1">
              <div className="flex flex-1 flex-col lg:flex-row items-start lg:items-center justify-between lg:gap-2">
                <div className="flex flex-col lg:gap-1">
                  <div className="2xl:flex 2xl:items-center 2xl:gap-2">
                    <p className="text-sm text-foreground">
                      <span className="font-medium">Paciente: </span> {appointment.patientName}
                    </p>
                    <Separator
                      orientation="vertical"
                      className="hidden 2xl:block h-5 rotate-12 bg-black/25 dark:bg-white/25"
                    />
                    <p className="text-sm text-foreground">
                      {appointment.specialty} - {appointment.doctorName}
                    </p>
                  </div>

                  <div className="2xl:flex 2xl:items-center 2xl:gap-2">
                    <p className="text-sm font-light text-muted-foreground">
                      <span className="font-medium">Local: </span>
                      {appointment.location}
                    </p>
                    <Separator
                      orientation="vertical"
                      className="hidden 2xl:block h-5 rotate-12 bg-black/25 dark:bg-white/25"
                    />
                    <p className="text-sm font-light text-muted-foreground">
                      <span className="font-medium">Notas: </span>
                      {appointment.notes}
                    </p>
                  </div>
                </div>

                <span className="text-sm font-light text-muted-foreground">
                  <span className="font-medium">Data: </span>
                  {appointment.date.toLocaleDateString('pt-BR', { dateStyle: 'long' })} às {appointment.time}
                </span>
              </div>
            </div>

            <div className="hidden md:flex size-10 self-end items-center justify-center rounded-3xl border hover:bg-primary/10 p-2 transition-colors group-hover:bg-primary/20 delay-500">
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
