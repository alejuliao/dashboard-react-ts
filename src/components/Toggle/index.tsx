import { useState } from "react";
import { Container, ToggleLabel, ToggleSelector } from "./styles";

interface IToggleProps {
  labelLeft: string;
  labelRight: string;
  checked: boolean;
  onChange(): void;
}
export const Toggle = ({ labelLeft, labelRight, checked, onChange }: IToggleProps) => {
  // const [online, setOnline] = useState(false)
  return (
    <Container>
      <ToggleLabel>{labelRight}</ToggleLabel>
      <ToggleSelector
        checked={checked}
        uncheckedIcon={false}
        checkedIcon={false}
        onChange={onChange} />
      <ToggleLabel>{labelLeft}</ToggleLabel>
    </Container >
  )
}