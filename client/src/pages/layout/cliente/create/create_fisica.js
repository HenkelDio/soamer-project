import { Link } from "react-router-dom/cjs/react-router-dom.min";
import Header from "../../../../components/header";
import { ContainerCreate } from "../../../../components/CreateFormStyles";
import Input from "../../../../components/Input";
import Content from "../../../../components/content";
import SideMenu from "../../../../components/side_menu";
import Menu from "../../../../components/menu";
import { Container } from "../../style";
import Button from "../../../../components/login/button";

export default function ClienteCreateFisica() {

  return (
    <>
      <Header/>
      <Container>
        <SideMenu />
        <Content>
          <ContainerCreate>
            <Link to="/cliente">{'<'} Voltar</Link>
            <h2>Cadastrar novo cliente pessoa física</h2>
            <form>
              <Input placeholder="Nome Completo" />
              <Input placeholder="CPF" />
              <Input placeholder="Data de nascimento" />
              <Input placeholder="Telefone" />
              <Input placeholder="E-mail" />
              <Input placeholder="CEP" />
              <Input placeholder="Logradouro" />
              <Input placeholder="Número" />
              <Input placeholder="Complemento" />
              <Input placeholder="UF" />
              <Button>Salvar</Button>
            </form>
          </ContainerCreate>
        </Content>
        <Menu>
          <strong>Pessoa física</strong>
          <Link to='/cliente-create-juridica'>cadastro pessoa jurídica</Link>
        </Menu>
      </Container>
    </>
  )
}

