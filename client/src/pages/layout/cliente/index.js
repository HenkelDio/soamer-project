import { useEffect, useState } from "react";
import { Button } from "../../../components/Button";
import Content from "../../../components/content";
import Header from "../../../components/header";
import Menu from "../../../components/menu";
import SideMenu from "../../../components/side_menu";
import { Container } from "../style";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import Input from "../../../components/Input";
import { useMemo } from "react";
import { ContainerCliente } from "../estoque/style";
import Card from "./card";

export default function Cliente() {
  const [data, setData] = useState([
    {name:  'Adelson Vivaldo Siqueira Junior', phone: '41 9999-9999'},
    {name:  'Adriély Mary D. Adderio ', phone: '41 9999-9999'},
    {name:  'Alécio Gomes De Souza', phone: '41 9999-9999'},

  ])

  

  const [searchTerm, setSearchTerm] = useState('');

  const filteredData = useMemo(() => data.filter((value) => (
    value.phone.toLowerCase().includes(searchTerm.toLowerCase()))), [data, searchTerm]);

  function handleChangeSearchTerm(e) {
    setSearchTerm(e.target.value);
  }

  return(
    <>
      <Header />
      <Container>
        <SideMenu />
        <Content>
          <ContainerCliente>
          <Input 
          value={searchTerm}
          type="text" 
          placeholder="Pesquisar" 
          onChange={handleChangeSearchTerm}
          />
          <Link to='/cliente-create'><Button>Novo cadastro</Button></Link>
          {
            filteredData.map((data) => {
              return <Card
              key={data.name}
              name={data.name}
              phone={data.phone}
              />
            })
          }
          </ContainerCliente>
        </Content>
        <Menu>
          <strong>Cliente</strong>
          <Link to="/cliente-create">cadastro</Link>
        </Menu>
      </Container>
    </>
  )
}