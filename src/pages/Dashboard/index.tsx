import React, { useMemo, useState } from 'react'
import { ContentHeader } from '../../components/ContentHeader'
import { SelectInput } from '../../components/SelectInput'
import { Container } from './styles'
import gains from '../../repositories/gains'
import expenses from '../../repositories/expenses'
import listOfMonths from '../../utils/months'

export const Dashboard: React.FC = () => {
  const [monthSelected, setMonthSelected] = useState<number>(new Date().getMonth() + 1);
  const [yearSelected, setYearSelected] = useState<number>(new Date().getFullYear());
  const years = useMemo(() => {
    let uniqueYears: number[] = [];
    [...expenses, ...gains].forEach(item => {
      const date = new Date(item.date)
      const year = date.getFullYear()

      if (!uniqueYears.includes(year)) {
        uniqueYears.push(year)
        uniqueYears.sort()

        setYearSelected(year)
      }
    });
    return uniqueYears.map(year => {
      return {
        value: year,
        label: year,
      }
    })
  }, [])
  const months = useMemo(() => {
    return listOfMonths.map((month, index) => {
      return {
        value: index + 1,
        label: month,
      }
    })

  }, [])
  const handleMonthSelected = (month: string) => {
    try {
      const parseMonth = Number(month)
      setMonthSelected(parseMonth)
    } catch (error) {
      throw new Error('invalid month value. Is accept 1 - 12')
    }
  }
  const handleYearSelected = (year: string) => {
    try {
      const parseYear = Number(year)
      setYearSelected(parseYear)
    } catch (error) {
      throw new Error('invalid year value. Is accept integer numbers')
    }
  }
  return (
    <Container>
      <ContentHeader title='Dashboard' lineColor='#f1bc4b'>
        <SelectInput
          options={months}
          onChange={(e) => handleMonthSelected(e.target.value)}
          defaultValue={monthSelected} />
        <SelectInput
          options={years}
          onChange={(e) => handleYearSelected(e.target.value)}
          defaultValue={yearSelected} />
      </ContentHeader>
    </Container>
  )
}
// export function Dashboard() {
//   return (
//     <h1>Dashboard</h1>
//   )
// }