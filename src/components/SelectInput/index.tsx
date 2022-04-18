import React from "react";
import { Container } from "./styles";
interface ISelectInputProps {
  options: {
    value: string,
    label: string
  }[],
}
export function SelectInput({ options }: ISelectInputProps) {
  return (
    <Container>
      <select>
        {
          options.map(option => (
            <option value={option.value} key={option.value}>{option.label}</option>
          ))
        }
      </select>

    </Container>
  )
}