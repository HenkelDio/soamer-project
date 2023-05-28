import { ContainerInputGroup } from "./styles";

export default function InputGroup({ children, error }) {
  return (
    <ContainerInputGroup error>
      {children}
      {error ? <small>{error}</small> : <div></div>}
    </ContainerInputGroup>
  );
}