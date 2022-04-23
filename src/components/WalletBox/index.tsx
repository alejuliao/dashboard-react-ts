import { Container } from "./styles"
import dollarImg from '../../assets/dollar.svg'
import arrowUpImg from '../../assets/arrow-up.svg'
import arrowDownImg from '../../assets/arrow-down.svg'
import { useMemo } from "react";
interface IWalletBoxProps {
  title: string;
  amount: number;
  footerLabel: string;
  icon: 'dollar' | 'arrowUp' | 'arrowDown';
  color: string;
}

export function WalletBox({
  title, amount, footerLabel, icon, color
}: IWalletBoxProps) {
  const iconSelected = useMemo(() => {
    switch (icon) {
      case 'dollar':
        return dollarImg
        break;
      case 'arrowUp':
        return arrowUpImg
        break;
      case 'arrowDown':
        return arrowDownImg
        break;
      default:
        return undefined;
    }
  }, [icon])
  return (
    <Container color={color}>
      <span>{title}</span>
      <h1>{amount}</h1>
      <small>{footerLabel}</small>
      <img src={iconSelected} alt={title} />

    </Container>
  )
}