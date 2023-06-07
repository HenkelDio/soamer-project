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
import Card from "../../../components/Card";

export default function Fornecedores() {
  const [data, setData] = useState([
    {name:  'Fornecedor1', phone: '41 9999-9999'},
    {name:  'Fornecedor2', phone: '41 9999-9999'},
    {name:  'Fornecedor3', phone: '41 9999-9999'},

  ])

  const [searchTerm, setSearchTerm] = useState('');

  const filteredData = useMemo(() => data.filter((value) => (
    value.name.toLowerCase().includes(searchTerm.toLowerCase()))), [data, searchTerm]);

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
         <Link to="/fornecedores-create"><Button>Novo cadastro</Button></Link>
          {
            filteredData.map((data) => {
              return <Card
              key={data.name}
              firstTitle="Nome"
              firstValue={data.name}
              secondTitle="Telefone"
              secondValue={data.phone}
              />
            })
          }
          </ContainerCliente>
        </Content>
        <Menu>
          <strong>Fornecedor</strong>
          <Link to="/fornecedores-create">cadastro</Link>
        </Menu>
      </Container>
    </>
  )
}