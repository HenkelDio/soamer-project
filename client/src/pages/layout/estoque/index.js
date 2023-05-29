import { useState } from "react";
import { Button } from "../../../components/Button";
import Content from "../../../components/content";
import Header from "../../../components/header";
import Menu from "../../../components/menu";
import SideMenu from "../../../components/side_menu";
import { Container } from "../style";
import Card from "./Card";
import { ContainerEstoque } from "./style";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

export default function Estoque() {
  const [data, setData] = useState([
    {code:  'SO-37101', description: 'PONT INOX RED UNIVERSAL Ø 101,6mm COMPRIMENTO 125mm'}, 
    {code:  'SO-A01C', description: 'PONT INOX CHANF AUDI A1'},
    {code:  'SO-A02C', description: 'PONT INOX CHANF AUDI A3 HATCH OU SEDAN'}
  ])

  return(
    <>
      <Header />
      <Container>
        <SideMenu />
        <Content>
          <ContainerEstoque>
          <input type="text" placeholder="Pesquisar" />
          <Button>Novo cadastro</Button>
          {
            data.map((data) => {
              return <Card
              code={data.code}
              description={data.description}
              />
            })
          }
          </ContainerEstoque>
        </Content>
        <Menu>
          <strong>estoque</strong>
          <Link to='/'>cadastro</Link>
          <Link to='/'>entrada/saída</Link>
        </Menu>
      </Container>
    </>
  )
}