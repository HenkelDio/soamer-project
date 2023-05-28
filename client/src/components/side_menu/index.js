import { Link } from 'react-router-dom';
import { Container, Divider, HomeContainer, List } from './style';
import { AiFillHome } from 'react-icons/ai';
import { FaBoxOpen, FaCashRegister } from 'react-icons/fa';
import { MdPeopleAlt, MdOutlineLocationCity } from 'react-icons/md';
import { useState } from 'react';

export default function SideMenu() {
  const [activated, setActivated] = useState(false);

  return(
    <Container>
      <Link to="/home">
        <HomeContainer>
        <AiFillHome /> <p>Início</p>
        </HomeContainer>
      </Link>
      <Divider />
      <p>Seus módulos</p>
      <ul>
        <List activated={activated} onClick={() => setActivated(true)}><FaBoxOpen /><Link to="/estoque">Estoque</Link></List>
        <List activated={activated}><FaCashRegister /><Link to="/home">Financeiro</Link></List>
        <List activated={activated}><MdPeopleAlt /><Link to="/home">Cliente</Link></List>
        <List activated={activated}><MdOutlineLocationCity /><Link to="/home">Fornecedores</Link></List>
      </ul>
    </Container>
  )
}