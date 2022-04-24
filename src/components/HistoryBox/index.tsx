import { Container, ChartContainer, Header, LegendContainer, Legend } from "./styles";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  CartesianGrid,
  Tooltip
} from 'recharts'
import { formatCurrency } from '../../utils/formatCurrency'

interface IHistoryBoxProps {
  data: {
    month: string;
    amountEntry: number;
    amountOutput: number;
  }[],
  lineColorAmountEntry: string;
  lineColorAmountOutput: string;
}
export function HistoryBox({ data, lineColorAmountEntry, lineColorAmountOutput }: IHistoryBoxProps) {
  return (
    <Container>
      <Header>
        <h2>Historico de Saldo</h2>
        <LegendContainer>
          <Legend color={lineColorAmountEntry}>
            <div></div>
            <span>Entradas</span>
          </Legend>
          <Legend color={lineColorAmountOutput}>
            <div></div>
            <span>Saídas</span>
          </Legend>
        </LegendContainer>
      </Header>
      <ChartContainer>

        <ResponsiveContainer>
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" stroke="#cecece" />
            <XAxis dataKey="month" stroke="#cecece" />
            <Tooltip formatter={(value) => formatCurrency(Number(value))} />
            <Line
              type="monotone"
              dataKey="amountEntry"
              name="Entradas"
              stroke={lineColorAmountEntry}
              strokeWidth={5}
              dot={{ r: 5 }}
              activeDot={{ r: 8 }}
            />
            <Line
              type="monotone"
              dataKey="amountOutput"
              name="Saídas"
              stroke={lineColorAmountOutput}
              strokeWidth={5}
              dot={{ r: 5 }}
              activeDot={{ r: 8 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </ChartContainer>
    </Container>
  )
}