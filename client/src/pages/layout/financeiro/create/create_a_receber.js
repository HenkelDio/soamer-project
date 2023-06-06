import Content from "../../../../components/content";
import Header from "../../../../components/header";
import Menu from "../../../../components/menu";
import SideMenu from "../../../../components/side_menu";
import { Container } from "../../style";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import Input from "../../../../components/Input";
import Button from "../../../../components/login/button";
import { ContainerCreate } from "../../../../components/CreateFormStyles";

export default function FinanceiroCreateAReceber() {
  return(
    <>
      <Header />
      <Container>
        <SideMenu />
        <Content>
          <ContainerCreate>
            <Link to="/financeiro">{'<'} Voltar</Link>
            <h2>Cadastrar novo título a receber</h2>
            <form>
              <Input type="text" placeholder="Data" onFocus={(e) => e.target.type='date'} onBlur={(e) => e.target.type='text'}/>
              <Input placeholder="Descrição"/>
              <Input placeholder="Forma de pagamento"/>
              <div>
                <Input placeholder="R$ Valor do título" type="number"/>
                <Input placeholder="R$ Valor da nota" type="number"/>
              </div>
              <Button>Salvar</Button>
            </form>
          </ContainerCreate>
        </Content>
        <Menu>
          <strong>novo título a receber</strong>
          <Link to='/financeiro-create-pagar'>cadastrar a pagar</Link>
          <Link to='/404'>entrada/saída</Link>
        </Menu>
      </Container>
    </>
  )
}