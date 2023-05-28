import Content from "../../../components/content";
import Header from "../../../components/header";
import Menu from "../../../components/menu";
import SideMenu from "../../../components/side_menu";
import { Container } from "../style";

export default function Estoque() {
  return(
    <>
      <Header />
      <Container>
        <SideMenu />
        <Content>
          <h2>Ola</h2>
          <div>
            <p>codigo aqui</p>
          </div>
        </Content>
        <Menu />
      </Container>
    </>
  )
}