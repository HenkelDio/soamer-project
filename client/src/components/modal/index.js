import ReactDOM from 'react-dom';
import { Container, Overlay } from "./styles";
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import Button from '../login/button';

export default function Modal({ isOpen, setOpen }) {
  if(!isOpen) {
    return null;
  }

  return ReactDOM.createPortal(
    <Overlay>
      <Container>
        <div onClick={() => setOpen(false)}>X</div>
        <h2>Cadastrar novo:</h2>
        <Link to="/financeiro-create-receber"><Button>A RECEBER</Button></Link>
        <Link to="/financeiro-create-pagar"><Button>A PAGAR</Button></Link>
      </Container>
    </Overlay>

  , document.getElementById('modal'))
}