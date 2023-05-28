import { Link } from 'react-router-dom';
import { Container, Divider, HomeContainer, List } from './style';
import { AiFillHome } from 'react-icons/ai';
import { FaBoxOpen, FaCashRegister } from 'react-icons/fa';
import { MdPeopleAlt, MdOutlineLocationCity } from 'react-icons/md';
import { useEffect, useState } from 'react';

export default function SideMenu() {
 
  return(
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
      <Link to="/home">
        <List><FaCashRegister /><p>Financeiro</p></List>
      </Link>
      <Link to="/home">
        <List><MdPeopleAlt /><p>Cliente</p></List>
      </Link>
      <Link to="/home">
        <List><MdOutlineLocationCity /><p>Fornecedores</p></List>
      </Link>
      </ul>
    </Container>
  )
}