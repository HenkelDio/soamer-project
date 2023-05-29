import { Link } from "react-router-dom/cjs/react-router-dom.min";
import Content from "../../../components/content";
import Header from "../../../components/header";
import Menu from "../../../components/menu";
import SideMenu from "../../../components/side_menu";
import { Container } from "../style";
import { CardsContainer, Card, MajorCard } from "./style";

export default function Home() {
  return(
    <>
    <Header />
    <Container>
      <SideMenu />
      <Content>
        <CardsContainer>
          <Card></Card>
          <Card></Card>
          <MajorCard></MajorCard>
          <Card></Card>
          <Card></Card>
        </CardsContainer>
      </Content>
      <Menu>
        <strong>dashboards</strong>
        <Link to='/'>financeiro</Link>
        <Link to='/'>estoque</Link>
      </Menu>
    </Container>
    </>
  )
}