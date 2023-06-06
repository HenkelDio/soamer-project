import { ReactDOM } from "react";

export default function Modal() {
  return ReactDOM.createPortal(
    <Overlay>
      <Container>
        <h1>Ola, mundo!</h1>
      </Container>
    </Overlay>

  , document.getElementById('modal'))
}