import Content from "../../../../components/content";
import Header from "../../../../components/header";
import Menu from "../../../../components/menu";
import SideMenu from "../../../../components/side_menu";
import { Container } from '../../style';

export default function EntradaSaidaPage() {
  return(
    <>
    <Header />
    <Container>
      <SideMenu />
      <Content>
        
      </Content>
      <Menu>
        <strong>404</strong>
      </Menu>
    </Container>
    </>
  )
}