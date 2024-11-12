interface GetWeekDaysParams {
  short?: boolean
}

export function getWeekDays({ short = false }: GetWeekDaysParams = {}) {
  const formatter = new Intl.DateTimeFormat('pt-BR', { weekday: 'long' })

  const today = new Date()
  const dayOfWeek = today.getDay() // 0 (Sunday) to 6 (Saturday)

  // Calculate the date for the most recent Sunday
  const sunday = new Date(today)
  sunday.setDate(today.getDate() - dayOfWeek)

  return Array.from({ length: 7 }, (_, i) => {
    const date = new Date(sunday)
    date.setDate(sunday.getDate() + i)

    return formatter.format(date)
  }).map((weekDay) => {
    if (short) {
      return weekDay.substring(0, 3).toUpperCase()
    }
    return weekDay.substring(0, 1).toUpperCase().concat(weekDay.substring(1))
  })
}
