import Content from "../../../components/content";
import Header from "../../../components/header";
import Menu from "../../../components/menu";
import SideMenu from "../../../components/side_menu";
import { Container, ContainerNotFound } from "../style";
import notFound from '../../../assets/notfound.svg';

export default function NotFound() {
  return(
    <>
    <Header />
    <Container>
      <SideMenu />
      <Content>
        <ContainerNotFound>
          <h3>Puxa, essa página ainda não está pronta...</h3>
          <img src={notFound} alt="notfound" width='60%'/>
        </ContainerNotFound>
      </Content>
      <Menu>
        <strong>404</strong>
      </Menu>
    </Container>
    </>
  )
}