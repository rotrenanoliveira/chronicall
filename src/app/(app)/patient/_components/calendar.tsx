'use client'

import { getWeekDays } from '@/utils/get-week-days'
import { useMemo, useState } from 'react'
import dayjs from 'dayjs'
import { cn } from '@/lib/utils'

interface CalendarWeek {
  week: number
  days: Array<{
    date: dayjs.Dayjs
  }>
}

type CalendarWeeks = CalendarWeek[]

export function Calendar() {
  const weekDays = getWeekDays({ short: true })
  console.log(weekDays)

  const [currentDate, setCurrentDate] = useState(() => {
    return dayjs().set('date', 1)
  })

  const calendarWeeks = useMemo(() => {
    const daysInMonthArray = Array.from({
      length: currentDate.daysInMonth(),
    }).map((_, i) => {
      return currentDate.set('date', i + 1)
    })

    const firstWeekDay = currentDate.get('day')

    const previousMonthFillArray = Array.from({
      length: firstWeekDay,
    })
      .map((_, i) => {
        return currentDate.subtract(i + 1, 'day')
      })
      .reverse()

    const lastDayInCurrentMonth = currentDate.set('date', currentDate.daysInMonth())
    const lastWeekDay = lastDayInCurrentMonth.get('day')

    const nextMonthFillArray = Array.from({
      length: 7 - (lastWeekDay + 1),
    }).map((_, i) => {
      return lastDayInCurrentMonth.add(i + 1, 'day')
    })

    const calendarDays = [
      ...previousMonthFillArray.map((date) => {
        return { date }
      }),
      ...daysInMonthArray.map((date) => {
        return {
          date,
        }
      }),
      ...nextMonthFillArray.map((date) => {
        return { date }
      }),
    ]

    const calendarWeeks = calendarDays.reduce<CalendarWeeks>((weeks, _, i, original) => {
      const isNewWeek = i % 7 === 0

      if (isNewWeek) {
        weeks.push({
          week: i / 7 + 1,
          days: original.slice(i, i + 7),
        })
      }

      return weeks
    }, [])

    return calendarWeeks
  }, [currentDate])

  return (
    <div className="w-full bg-muted/50 rounded-lg p-4">
      <table className="w-full border-spacing-1 table-fixed">
        <thead>
          <tr>
            {weekDays.map((weekDay) => {
              return (
                <th className="font-light text-sm text-muted-foreground" key={weekDay}>
                  {weekDay}.
                </th>
              )
            })}
          </tr>
        </thead>

        <tbody>
          {calendarWeeks.map(({ week, days }) => {
            return (
              <tr key={week} className="">
                {days.map(({ date }) => {
                  const isToday = dayjs().isSame(date, 'day')

                  return (
                    <td className="box-border w-full" key={date.toString()}>
                      <span
                        className={cn(
                          'leading-3 text-center aspect-square w-full flex items-center justify-center rounded-md',
                          isToday && 'bg-primary/10 text-primary',
                        )}
                      >
                        {date.format('D')}
                      </span>
                    </td>
                  )
                })}
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}
