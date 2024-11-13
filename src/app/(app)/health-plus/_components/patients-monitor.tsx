import { cn } from '@/lib/utils'
import { faker } from '@faker-js/faker'
import { ActivityIcon } from 'lucide-react'

type PatientMonitor = {
  patientName: string
  condition: string
  healthStatus: 'Estável' | 'Crítico' | 'Instável'
  notes: string
}

const data: PatientMonitor[] = [
  {
    patientName: 'Ana Souza',
    condition: 'Hipertensão grave',
    healthStatus: 'Estável',
    notes: 'Monitorar pressão arterial regularmente; risco de complicações cardíacas.',
  },
  {
    patientName: 'Carlos Oliveira',
    condition: 'Diabetes tipo 2',
    healthStatus: 'Instável',
    notes: 'Níveis de glicose descontrolados; avaliação de dosagem de insulina.',
  },
  {
    patientName: 'Mariana Lima',
    condition: 'Insuficiência renal crônica',
    healthStatus: 'Estável',
    notes: 'Em diálise; acompanhar sinais de infecção e níveis de creatinina.',
  },
  {
    patientName: 'Fernando Costa',
    condition: 'Enfisema pulmonar',
    healthStatus: 'Instável',
    notes: 'Apresenta falta de ar frequente; oxigenoterapia contínua.',
  },
  {
    patientName: 'Rafael Nunes',
    condition: 'Depressão severa',
    healthStatus: 'Estável',
    notes: 'Monitoramento psiquiátrico contínuo; avaliação do humor e sono.',
  },
  {
    patientName: 'Julia Fernandes',
    condition: 'Asma crônica',
    healthStatus: 'Instável',
    notes: 'Uso frequente de inalador; risco de crise asmática; atenção ao clima.',
  },
  {
    patientName: 'Lucas Pereira',
    condition: 'Insuficiência cardíaca',
    healthStatus: 'Crítico',
    notes: 'Internado na UTI; monitorar função cardíaca e sinais de melhora.',
  },
  {
    patientName: 'Ana Clara Ribeiro',
    condition: 'Câncer de mama',
    healthStatus: 'Estável',
    notes: 'Em quimioterapia; observar efeitos colaterais e sinais de infecção.',
  },
  {
    patientName: 'Pedro Santos',
    condition: 'Doença pulmonar obstrutiva crônica (DPOC)',
    healthStatus: 'Instável',
    notes: 'Internado com dificuldades respiratórias; suporte ventilatório necessário.',
  },
  {
    patientName: 'Isabela Rocha',
    condition: 'Hipotireoidismo',
    healthStatus: 'Estável',
    notes: 'Em tratamento hormonal; acompanhamento mensal dos níveis de TSH.',
  },
  {
    patientName: 'Diego Almeida',
    condition: 'Epilepsia',
    healthStatus: 'Instável',
    notes: 'Convulsões frequentes; ajustar medicamentos antiepilépticos.',
  },
  {
    patientName: 'Camila Costa',
    condition: 'Esclerose múltipla',
    healthStatus: 'Estável',
    notes: 'Monitoramento de sintomas neurológicos; verificação mensal de mobilidade.',
  },
  {
    patientName: 'Sofia Carvalho',
    condition: 'Anemia falciforme',
    healthStatus: 'Instável',
    notes: 'Internada para controle de dor e transfusão de sangue.',
  },
  {
    patientName: 'Gabriel Souza',
    condition: 'Hepatite C',
    healthStatus: 'Estável',
    notes: 'Em tratamento antiviral; monitoramento de função hepática.',
  },
  {
    patientName: 'Larissa Oliveira',
    condition: 'Osteoporose',
    healthStatus: 'Instável',
    notes: 'Queda recente; avaliação de fraturas e controle da dor.',
  },
]

export function PatientsMonitor() {
  const patients = faker.helpers
    .arrayElements(data, 5)
    .map((patient) => ({
      ...patient,
      notes: patient.notes.length > 40 ? patient.notes.substring(0, 40).concat('...') : patient.notes,
    }))
    .sort((a) => (a.healthStatus === 'Estável' ? 1 : -1))

  return (
    <div className="w-full space-y-2">
      <h3>Monitoramento de pacientes</h3>
      {patients.map((patient) => {
        return (
          <div
            key={patient.patientName}
            className="flex items-center gap-2 border rounded-lg p-2 group hover:cursor-pointer hover:border-black/25"
          >
            <div
              className={cn(
                'size-10 flex items-center justify-center rounded-3xl p-1',
                patient.healthStatus === 'Estável' ? 'bg-blue-50 dark:bg-blue-900' : 'bg-red-50 dark:bg-red-900',
              )}
            >
              <ActivityIcon
                strokeWidth={1.15}
                className={cn(
                  'size-8 text-red-500 dark:text-red-400',
                  patient.healthStatus === 'Estável'
                    ? 'text-blue-500 dark:text-blue-400'
                    : 'text-red-500 dark:text-red-400',
                )}
              />
            </div>

            <div>
              <p className="text-sm text-foreground">
                <span className="font-medium">Paciente: </span> {patient.patientName}
              </p>
              <p className="text-sm text-foreground">
                {patient.condition} - {patient.healthStatus}
              </p>

              <p className="text-sm font-light text-muted-foreground text-nowrap">{patient.notes}</p>
            </div>
          </div>
        )
      })}
    </div>
  )
}
