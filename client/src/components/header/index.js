import logo from '../../assets/logo.svg';
import { Container } from './style';

export default function Header() {
  return(
    <Container>
      <img src={logo} alt="logo"></img> 
    </Container>
  )
}