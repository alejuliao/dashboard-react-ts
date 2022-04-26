import React, { useMemo, useState, useEffect } from 'react'

import { ContentHeader } from '../../components/ContentHeader'
import { SelectInput } from '../../components/SelectInput'
import { HistoryFinanceCard } from '../../components/HistoryFinanceCard'

import gains from '../../repositories/gains'
import expenses from '../../repositories/expenses'
import { formatCurrency } from '../../utils/formatCurrency'
import { formatDate } from '../../utils/formatDate'

import {
  Container,
  Content,
  Filters
} from './styles'
import { useParams } from 'react-router-dom'
import listOfMonths from '../../utils/months'
interface IRouteParams {
  params: {
    type: string;
  }
}
interface IData {
  id: string;
  description: string;
  amountFormatted: string;
  frequency: string;
  dateFormatted: string;
  tagColor: string;
}
export const List: React.FC<IRouteParams> = () => {
  const [data, setData] = useState<IData[]>([])
  const [monthSelected, setMonthSelected] = useState<number>(new Date().getMonth() + 1);
  const [yearSelected, setYearSelected] = useState<number>(new Date().getFullYear());
  const [frequencyFilterSelected, setFrequencyFilterSelected] = useState(['recorrente', 'eventual'])

  const { type } = useParams()

  const pageData = useMemo(() => {
    return type === 'entry-balance' ?
      { title: 'Entradas', lineColor: '#4e41f0', data: gains }
      :
      { title: 'Saídas', lineColor: '#e44', data: expenses }
  }, [])
  // const months = [
  //   { value: 1, label: 'Janeiro' },
  //   { value: 2, label: 'Fevereiro' },
  //   { value: 3, label: 'março' },
  //   { value: 4, label: 'abril' },
  //   { value: 5, label: 'maio' },
  //   { value: 6, label: 'junho' },
  //   { value: 7, label: 'julho' },
  //   { value: 8, label: 'agosto' },
  //   { value: 9, label: 'setembro' },
  //   { value: 10, label: 'Outubro' },
  //   { value: 11, label: 'Novembro' },
  //   { value: 12, label: 'Dezembro' },
  // ]
  // const years = [
  //   { value: 2019, label: 2019 },
  //   { value: 2020, label: 2020 },
  //   { value: 2021, label: 2021 },
  //   { value: 2022, label: 2022 },
  // ]



  const years = useMemo(() => {
    let uniqueYears: number[] = [];
    const { data } = pageData;
    data.forEach(item => {
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
  }, [data])
  const months = useMemo(() => {
    return listOfMonths.map((month, index) => {
      return {
        value: index + 1,
        label: month,
      }
    })

  }, [])
  const handleFrequencyClick = (frequency: string) => {
    const alreadySelected = frequencyFilterSelected.findIndex(item => item === frequency);

    if (alreadySelected >= 0) {
      const filtered = frequencyFilterSelected.filter(item => item !== frequency)
      setFrequencyFilterSelected(filtered)
    } else {
      setFrequencyFilterSelected((prev) => [...prev, frequency])
    }
  }
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
  useEffect(() => {
    const { data } = pageData

    const filteredData = data.filter(item => {
      const date = new Date(item.date)
      const month = date.getMonth() + 1
      const year = date.getFullYear()

      return month === monthSelected && year === yearSelected && frequencyFilterSelected.includes(item.frequency);
    }, [])
    const formattedData = filteredData.map((item, index) => {
      return {
        id: String(index),
        description: item.description,
        amountFormatted: formatCurrency(Number(item.amount)),
        frequency: item.frequency,
        dateFormatted: formatDate(item.date),
        tagColor: item.frequency === 'recorrente' ? '#4e41f0' : '#e44'
      }
    })
    setData(formattedData)
  }, [pageData, monthSelected, yearSelected, frequencyFilterSelected]);
  return (
    <Container>
      <ContentHeader
        title={pageData.title}
        lineColor={pageData.lineColor}>
        <SelectInput
          options={months}
          onChange={(e) => handleMonthSelected(e.target.value)}
          defaultValue={monthSelected} />
        <SelectInput
          options={years}
          onChange={(e) => handleYearSelected(e.target.value)}
          defaultValue={yearSelected} />
      </ContentHeader>
      <Filters>
        <button
          type='button'
          className={`tag-filter tag-filter-recurrent
          ${frequencyFilterSelected.includes('recorrente') && 'tag-actived'}
        `}
          onClick={() => handleFrequencyClick('recorrente')}
        >
          Recorrentes
        </button>
        <button
          type='button'
          className={`tag-filter tag-filter-eventual
          ${frequencyFilterSelected.includes('eventual') && 'tag-actived'}
        `}
          onClick={() => handleFrequencyClick('eventual')}
        >
          Eventuais
        </button>
      </Filters>
      <Content>
        {data.map((item, index) => (

          <HistoryFinanceCard
            key={index}
            tagColor={item.tagColor}
            title={item.description}
            subtitle={item.dateFormatted}
            amount={item.amountFormatted}
          />
        ))
        }


      </Content>
    </Container>
  )
}
