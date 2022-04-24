import React, { useMemo, useState } from 'react'
import { ContentHeader } from '../../components/ContentHeader'
import { SelectInput } from '../../components/SelectInput'
import { Container, Content } from './styles'
import gains from '../../repositories/gains'
import expenses from '../../repositories/expenses'
import listOfMonths from '../../utils/months'
import { WalletBox } from '../../components/WalletBox'
import { MessageBox } from '../../components/MessageBox'
import happyImg from '../../assets/happy.svg'
import sadImg from '../../assets/sad.svg'
import grinningImg from '../../assets/grinning.svg'

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
  const totalExpenses = useMemo(() => {
    let total: number = 0;
    expenses.forEach(item => {
      const date = new Date(item.date)
      const year = date.getFullYear();
      const month = date.getMonth() + 1;

      if (month === monthSelected && year === yearSelected) {
        try {
          total += Number(item.amount)
        } catch {
          throw new Error('Invald amount! Amount must be number')
        }
      }
    })
    return total;

  }, [monthSelected, yearSelected])
  const totalGains = useMemo(() => {
    let total: number = 0;
    gains.forEach(item => {
      const date = new Date(item.date)
      const year = date.getFullYear();
      const month = date.getMonth() + 1;

      if (month === monthSelected && year === yearSelected) {
        try {
          total += Number(item.amount)
        } catch {
          throw new Error('Invald amount! Amount must be number')
        }
      }
    })
    return total;

  }, [monthSelected, yearSelected])
  const totalBalance = useMemo(() => {
    return totalGains - totalExpenses

  }, [totalGains, totalExpenses])
  const message = useMemo(() => {
    if (totalBalance < 0) {
      return {
        title: "Que triste!",
        description: 'Sua carteira está negativa, gastou de mais',
        footerText: 'Verifique seus gastos e corte o que for desnecessário',
        icon: sadImg
      }
    } else if (totalBalance === 0) {
      return {
        title: "Ufffaaaa!",
        description: 'Neste mês, você gastou exatamento o que ganho',
        footerText: 'Cuidado, tente poupar mais',
        icon: grinningImg
      }
    } else {
      return {
        title: "Muito bem!",
        description: 'Sua carteira está positiva.',
        footerText: 'Continue assim. considere investir o seu saldo',
        icon: happyImg
      }
    }
  }, [totalBalance])
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
      <Content>
        <WalletBox
          title="saldo"
          color='#4e41f0'
          amount={totalBalance}
          footerLabel="atualozad com base nas entradas e saidas"
          icon='dollar'
        />
        <WalletBox
          title="entradas"
          color='#f7931b'
          amount={totalGains}
          footerLabel="atualozad com base nas entradas e saidas"
          icon='arrowUp'
        />
        <WalletBox
          title="saida"
          color='#e44'
          amount={totalExpenses}
          footerLabel="atualozad com base nas entradas e saidas"
          icon='arrowDown'
        />
        <MessageBox
          title={message.title}
          description={message.description}
          footerText={message.footerText}
          icon={message.icon}

        />
      </Content>
    </Container>
  )
}
