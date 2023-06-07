import { Link } from "react-router-dom/cjs/react-router-dom.min";
import Header from "../../../../components/header";
import { ContainerCreate } from "../../../../components/CreateFormStyles";
import Input from "../../../../components/Input";
import Content from "../../../../components/content";
import SideMenu from "../../../../components/side_menu";
import Menu from "../../../../components/menu";
import { Container } from "../../style";
import Button from "../../../../components/login/button";

export default function ClienteCreateJuridica() {

  return (
    <>
      <Header/>
      <Container>
        <SideMenu />
        <Content>
          <ContainerCreate>
            <Link to="/cliente">{'<'} Voltar</Link>
            <h2>Cadastrar novo cliente pessoa jurídica</h2>
            <form>
              <Input placeholder="Razão social" />
              <Input placeholder="CNPJ" />  
              <Input placeholder="Telefone" />
              <Input placeholder="Contato" />
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
          <strong>Pessoa jurídica</strong>
          <Link to='/cliente-create-fisica'>cadastro pessoa física</Link>
        </Menu>
      </Container>
    </>
  )
}

