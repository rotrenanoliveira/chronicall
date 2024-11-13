import { faker } from '@faker-js/faker'
import { PhoneCallIcon, SirenIcon } from 'lucide-react'
import { useMemo } from 'react'

const data = [
  { patientName: 'Ana Souza', condition: 'Câncer de pulmão' },
  { patientName: 'Carlos Oliveira', condition: 'Insuficiência cardíaca' },
  { patientName: 'Mariana Lima', condition: 'Leucemia' },
  { patientName: 'Fernando Costa', condition: 'Cirrose hepática' },
  { patientName: 'Rafael Nunes', condition: 'Doença de Alzheimer avançada' },
  { patientName: 'Julia Fernandes', condition: 'Esclerose lateral amiotrófica (ELA)' },
  { patientName: 'Lucas Pereira', condition: 'Insuficiência renal terminal' },
  { patientName: 'Ana Clara Ribeiro', condition: 'Câncer de pâncreas' },
  { patientName: 'Pedro Santos', condition: 'Doença pulmonar obstrutiva crônica (DPOC)' },
  { patientName: 'Isabela Rocha', condition: 'Hepatite C crônica' },
  { patientName: 'Diego Almeida', condition: 'Epilepsia refratária' },
  { patientName: 'Camila Costa', condition: 'Esclerose múltipla' },
  { patientName: 'Sofia Carvalho', condition: 'Anemia falciforme' },
  { patientName: 'Gabriel Souza', condition: 'Cardiomiopatia dilatada' },
  { patientName: 'Larissa Oliveira', condition: 'Lúpus eritematoso sistêmico' },
]

export function Emergency() {
  const hasEmergency = faker.helpers.arrayElement([true, false])

  if (!hasEmergency) return null

  const patients = useMemo(() => {
    const items = Math.floor(Math.random() * 5)
    const patients = faker.helpers.arrayElements(data, items === 0 ? 1 : items)

    return patients.map((patient) => ({
      ...patient,
      condition: patient.condition.length > 35 ? patient.condition.substring(0, 35).concat('...') : patient.condition,
      patientId: faker.internet.username(),
    }))
  }, [])

  return (
    <div>
      <h3>Lista de emergências</h3>
      <div className="space-y-2">
        {patients.map((patient) => {
          return (
            <div
              key={patient.patientId}
              className="flex items-center justify-between gap-2 border rounded-lg p-2 hover:border-black/25 hover:cursor-pointer"
            >
              <div className="flex items-center gap-2">
                <div className="animate-pulse size-10 flex items-center justify-center rounded-3xl bg-red-50 dark:bg-red-900 p-2">
                  <SirenIcon strokeWidth={1} className="size-8 text-red-500 dark:text-red-400" />
                </div>

                <div>
                  <p className="text-md font-light text-foreground">{patient.patientName}</p>
                  <p className="text-sm font-light text-muted-foreground text-nowrap">{patient.condition}</p>
                </div>
              </div>

              <div className="animate-pulse size-10 flex items-center justify-center rounded-3xl bg-zinc-50 dark:bg-zinc-900 p-2">
                <PhoneCallIcon strokeWidth={1} className="size-8 text-zinc-500 dark:text-zinc-400" />
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
