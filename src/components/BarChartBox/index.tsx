import { Container, LegendContainer, LegendStyle, SideLeft, SideRight } from "./styles"
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  Cell,
  Tooltip,

} from 'recharts'
import { formatCurrency } from '../../utils/formatCurrency'
interface IBarChartProps {
  title: string;
  data: {
    name: string;
    amount: number;
    percent: number;
    color: string;
  }[],
}

export function BarChartBox({
  title, data
}: IBarChartProps) {
  return (

    <Container>
      <SideLeft>
        <h2>{title}</h2>
        <LegendContainer>
          {
            data.map((indicator) => (

              <LegendStyle key={indicator.name} color={indicator.color}>
                <div>{indicator.percent}</div>
                <span>{indicator.name}</span>
              </LegendStyle>
            ))
          }


        </LegendContainer>
      </SideLeft>
      <SideRight>
        <ResponsiveContainer>
          <BarChart data={data}>
            <Bar dataKey='amount' name="Valor">
              {data.map((indicator) => (
                <Cell key={indicator.name} fill={indicator.color} />
              ))}
            </Bar>
            <Tooltip
              cursor={{ fill: 'none' }}
              formatter={(value: any) => formatCurrency(Number(value))}
            />
          </BarChart>
        </ResponsiveContainer>
      </SideRight>
    </Container>
  )
}