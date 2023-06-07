import ReactDOM from 'react-dom';
import { Container, Overlay } from "./styles";
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import Button from '../login/button';

export default function Modal({ isOpen, setOpen, firstTitle, firstRoute, secondTitle, secondRoute }) {
  if(!isOpen) {
    return null;
  }

  return ReactDOM.createPortal(
    <Overlay>
      <Container>
        <div onClick={() => setOpen(false)}>X</div>
        <h2>Cadastrar novo:</h2>
        <Link to={firstRoute}><Button>{firstTitle}</Button></Link>
        <Link to={secondRoute}><Button>{secondTitle}</Button></Link>
      </Container>
    </Overlay>

  , document.getElementById('modal'))
}