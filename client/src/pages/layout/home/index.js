import Content from "../../../components/content";
import Header from "../../../components/header";
import Menu from "../../../components/menu";
import SideMenu from "../../../components/side_menu";
import { Container } from "../style";

export default function Home() {
  return(
    <>
    <Header />
    <Container>
      <SideMenu />
      <Content>
        <h2>Home</h2>
      </Content>
      <Menu />
    </Container>
    </>
  )
}