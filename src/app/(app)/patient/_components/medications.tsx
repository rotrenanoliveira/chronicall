import { faker } from '@faker-js/faker'
import { PillIcon } from 'lucide-react'

const MEDICATIONS = [
  { medication_name: 'Losartana', related_condition: 'Hipertensão' },
  { medication_name: 'Metformina', related_condition: 'Diabetes Tipo 2' },
  { medication_name: 'Omeprazol', related_condition: 'Refluxo Gastroesofágico' },
  { medication_name: 'Atenolol', related_condition: 'Hipertensão' },
  { medication_name: 'Alprazolam', related_condition: 'Ansiedade' },
  { medication_name: 'Sinvastatina', related_condition: 'Colesterol Alto' },
  { medication_name: 'Lansoprazol', related_condition: 'Úlcera Estomacal' },
  { medication_name: 'Levotiroxina', related_condition: 'Hipotireoidismo' },
  { medication_name: 'Prednisona', related_condition: 'Artrite Reumatoide' },
  { medication_name: 'Clopidogrel', related_condition: 'Prevenção de AVC' },
  { medication_name: 'Insulina NPH', related_condition: 'Diabetes Tipo 1' },
  { medication_name: 'Ibuprofeno', related_condition: 'Dor Crônica' },
  { medication_name: 'Sertralina', related_condition: 'Depressão' },
  { medication_name: 'Alendronato', related_condition: 'Osteoporose' },
  { medication_name: 'Azitromicina', related_condition: 'Infecção Respiratória' },
  { medication_name: 'Cetoconazol', related_condition: 'Infecção por Fungos' },
]

const hours = ['6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20']
const minutes = ['00', '15', '30', '45']

export function Medications() {
  const medications = faker.helpers
    .arrayElements(MEDICATIONS, 7)
    .map((appointment) => ({
      ...appointment,
      date: faker.date.soon({ days: 15 }),
      time: `${faker.helpers.arrayElement(hours)}:${faker.helpers.arrayElement(minutes)} hrs`,
    }))
    .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())

  return (
    <div className="flex flex-col gap-2">
      {medications.map((medication) => {
        return (
          <div
            key={medication.medication_name}
            className="flex items-center gap-2 border rounded-lg p-2 group hover:bg-muted/25"
          >
            <div className="size-10 flex items-center justify-center rounded-3xl bg-primary/10 p-2">
              <PillIcon strokeWidth={1} className="size-8 text-primary" />
            </div>

            <div className="flex-1">
              <div className="w-full inline-flex items-center gap-1">
                <span className="text-md text-muted-foreground">{medication.related_condition} - </span>
                <span className="text-md text-foreground">{medication.medication_name}</span>
              </div>

              <span className="text-sm font-light text-muted-foreground">
                {medication.date.toLocaleDateString('pt-BR', { dateStyle: 'long' })} às {medication.time}
              </span>
            </div>
          </div>
        )
      })}
    </div>
  )
}
