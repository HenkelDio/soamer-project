import Content from "../../../../components/content";
import Header from "../../../../components/header";
import Menu from "../../../../components/menu";
import SideMenu from "../../../../components/side_menu";
import { Container } from "../../style";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import Input from "../../../../components/Input";
import Select from "../../../../components/Select";
import Button from "../../../../components/login/button";
import { ContainerCreate } from "../../../../components/CreateFormStyles";
import { useState } from "react";
import Modal from "../../../../components/modal";

export default function FinanceiroCreateAPagar() {


  return(
    <>



      <Header />
      <Container>
        <SideMenu />
        <Content>

          <ContainerCreate>
            <Link to="/financeiro">{'<'} Voltar</Link>
            <h2>Cadastrar novo título a pagar</h2>
            <form>
              <Input type="date"/>
              <Input placeholder="Descrição"/>
              <Input placeholder="Forma de pagamento"/>
              <div>
                <Input placeholder="Preço" type="number"/>
                <Input placeholder="Peso bruto (Kg)" type="number" />
                <Input placeholder="Quantidade" type="number"/> 
                <Input placeholder="Estoque mínimo" type="number"/>
              </div>
              <Button>Salvar</Button>
            </form>
          </ContainerCreate>

        </Content>
        <Menu>
          <strong>estoque</strong>
          <Link to='/'>cadastro</Link>
          <Link to='/404'>entrada/saída</Link>
        </Menu>
      </Container>
    </>
  )
}