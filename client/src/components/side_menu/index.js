import { Link } from 'react-router-dom';
import { Container, ContainerSideMenu, Divider, HomeContainer, List } from './style';
import { AiFillHome } from 'react-icons/ai';
import { FaBoxOpen, FaCashRegister } from 'react-icons/fa';
import { MdPeopleAlt, MdOutlineLocationCity } from 'react-icons/md';

export default function SideMenu() {
 
  return(
    <ContainerSideMenu>
    <Container>
      <Link to="/home">
        <HomeContainer 
        >
        <AiFillHome /> <p>Início</p>
        </HomeContainer>
      </Link>
      <Divider />
      <p>Seus módulos</p>
      <ul>
      <Link to="/estoque">
        <List><FaBoxOpen /><p>Estoque</p></List>
      </Link>
      <Link to="/financeiro">
        <List><FaCashRegister /><p>Financeiro</p></List>
      </Link>
      <Link to="/cliente">
        <List><MdPeopleAlt /><p>Cliente</p></List>
      </Link>
      <Link to="/404">
        <List><MdOutlineLocationCity /><p>Fornecedores</p></List>
      </Link>
      </ul>
    </Container>
    <div className='dividerVertical'></div>
    </ContainerSideMenu>
  )
}