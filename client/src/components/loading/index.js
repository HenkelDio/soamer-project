import { Overlay, Container } from "./styles";
import ReactDOM from 'react-dom';

export default function Loading({ isLoading }) {
  if(!isLoading) {
    return null;
  }

  return ReactDOM.createPortal(
    <Overlay>
      <Container>
      <div class="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
      </Container>
    </Overlay>

  , document.getElementById('loading'))
}