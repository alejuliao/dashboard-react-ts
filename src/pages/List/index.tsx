import React, { useMemo, useState, useEffect } from 'react'
import { ContentHeader } from '../../components/ContentHeader'
import { SelectInput } from '../../components/SelectInput'
import { HistoryFinanceCard } from '../../components/HistoryFinanceCard'
import { Container, Content, Filters } from './styles'
import { matchRoutes, useParams } from 'react-router-dom'
import gains from '../../repositories/gains'
import expenses from '../../repositories/expenses'
import { formatCurrency } from '../../utils/formatCurrency'
import { formatDate } from '../../utils/formatDate'
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
  const [monthSelected, setMonthSelected] = useState<string>(String(new Date().getMonth() + 1))
  const [yearSelected, setYearSelected] = useState<string>(String(new Date().getFullYear()))
  const [selectedFrequency, setSelectedFrequency] = useState(['recorrente', 'eventual'])

  const { type } = useParams()
  // console.log(type)
  const titles = useMemo(() => {
    return type === 'entry-balance' ? { title: 'Entradas', lineColor: '#f7931b' } : { title: 'Saídas', lineColor: '#e44' }
  }, [type]);

  const months = [
    { value: 1, label: 'Janeiro' },
    { value: 2, label: 'Fevereiro' },
    { value: 3, label: 'março' },
    { value: 4, label: 'abril' },
    { value: 5, label: 'maio' },
    { value: 6, label: 'junho' },
    { value: 7, label: 'julho' },
    { value: 8, label: 'agosto' },
    { value: 9, label: 'setembro' },
    { value: 10, label: 'Outubro' },
    { value: 11, label: 'Novembro' },
    { value: 12, label: 'Dezembro' },
  ]
  const years = [
    { value: 2019, label: 2019 },
    { value: 2020, label: 2020 },
    { value: 2021, label: 2021 },
    { value: 2022, label: 2022 },
  ]


  const listData = useMemo(() => {
    return type === 'entry-balance' ? gains : expenses;
  }, [type])
  // const years = useMemo(() => {
  //   let uniqueYears: number[] = [];

  //   listData.forEach(item => {
  //     const date = new Date(item.date)
  //     const year = date.getFullYear()

  //     if (!uniqueYears.includes(year)) {
  //       uniqueYears.push(year)
  //     }
  //   });
  //   return uniqueYears.map(year => {
  //     return {
  //       value: year,
  //       label: year,
  //     }
  //   })
  // }, [listData])
  // const months = useMemo(() => {
  //   return listOfMonths.map((month, index) => {
  //     return {
  //       value: index + 1,
  //       label: month,
  //     }
  //   })

  // }, [])
  const handleFrequencyClick = (frequency: string) => {
    const alreadySelected = selectedFrequency.findIndex(item => item === frequency);

    if (alreadySelected >= 0) {
      const filtered = selectedFrequency.filter(item => item !== frequency)
      setSelectedFrequency(filtered)
    } else {
      setSelectedFrequency((prev) => [...prev, frequency])
    }
  }
  useEffect(() => {
    const filteredData = listData.filter(item => {
      const date = new Date(item.date)
      const month = String(date.getMonth() + 1)
      const year = String(date.getFullYear())

      return month === monthSelected && year === yearSelected && selectedFrequency.includes(item.frequency);
    })
    const formattedData = filteredData.map((item, index) => {
      return {
        // Id: index,
        description: item.description,
        amountFormatted: formatCurrency(Number(item.amount)),
        frequency: item.frequency,
        dateFormatted: formatDate(item.date),
        tagColor: item.frequency === 'recorrente' ? '#4e41f0' : '#e44'
      }
    })
    setData(formattedData)
  }, [listData, monthSelected, yearSelected, selectedFrequency]);
  return (
    <Container>
      <ContentHeader title={titles.title} lineColor={titles.lineColor}>
        <SelectInput options={months} onChange={(e) => setMonthSelected(e.target.value)} defaultValue={monthSelected} />
        <SelectInput options={years} onChange={(e) => setYearSelected(e.target.value)} defaultValue={yearSelected} />
      </ContentHeader>
      <Filters>
        <button type='button' className={`tag-filter tag-filter-recurrent
          ${selectedFrequency.includes('recorrente') && 'tag-actived'}
        `}
          onClick={() => handleFrequencyClick('recorrente')}
        >
          Recorrentes
        </button>
        <button type='button' className={`tag-filter tag-filter-eventual
          ${selectedFrequency.includes('eventual') && 'tag-actived'}
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
