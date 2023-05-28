import { Button } from "../../../components/Button";
import Content from "../../../components/content";
import Header from "../../../components/header";
import Menu from "../../../components/menu";
import SideMenu from "../../../components/side_menu";
import { Container } from "../style";
import { Card } from "./style";
import { FaEdit } from "react-icons/fa"
import { Link } from "react-router-dom/cjs/react-router-dom.min";


export default function Estoque() {
  return(
    <>
      <Header />
      <Container>
        <SideMenu />
        <Content>
          <Button>Novo cadastro</Button>
          <Card>
            <p><strong>Cód. produto: </strong>8084450</p>
            <p><strong>Descrição:</strong> PONT INOX RED UNIVERSAL Ø 101,6mm COMPRIMENTO 125mm</p>
            <Link to='/'><FaEdit/></Link>
            <Link>ver mais</Link>
          </Card>
        </Content>
        <Menu />
      </Container>
    </>
  )
}