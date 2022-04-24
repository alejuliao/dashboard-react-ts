import { SelectInput } from "../SelectInput";
import { Container, Controllers, TitleContainer } from "./styles";

interface IContentHeaderProps {
  title: string | undefined;
  lineColor?: any;
  children: JSX.Element | JSX.Element[];
}
export function ContentHeader({ title, lineColor, children }: IContentHeaderProps) {

  return (
    <Container >
      <TitleContainer lineColor={lineColor}>
        <h1>{title}</h1>
      </TitleContainer>
      <Controllers>
        {children}
      </Controllers>
    </Container>
  )
}