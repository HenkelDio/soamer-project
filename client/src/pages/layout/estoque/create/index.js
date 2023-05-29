import Content from "../../../../components/content";
import Header from "../../../../components/header";
import Menu from "../../../../components/menu";
import SideMenu from "../../../../components/side_menu";
import { Container } from "../../style";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { ContainerCreateEstoque } from "./style";
import Input from "../../../../components/Input";
import Select from "../../../../components/Select";
import Button from "../../../../components/login/button";

export default function EstoqueCreate() {
  return(
    <>
      <Header />
      <Container>
        <SideMenu />
        <Content>

          <ContainerCreateEstoque>
            <Link to="/estoque">{'<'} Voltar</Link>
            <h2>Cadastrar novo item</h2>
            <form>
              <Input placeholder="Código"/>
              <Input placeholder="Nome"/>
              <Input placeholder="Modelo"/>
              <Select>
                <option value='' disabled selected hidden>Indústria</option>
                <option>SOAMER PONTEIRAS AUTOMOTIVAS</option>
                <option>GM CONCESSIONÁRIAS</option>
              </Select>
              <div>
                <Input placeholder="Preço" type="number"/>
                <Input placeholder="Peso bruto (Kg)" type="number" />
                <Input placeholder="Quantidade" type="number"/> 
                <Input placeholder="Estoque mínimo" type="number"/>
              </div>
              <Button>Salvar</Button>
            </form>
          </ContainerCreateEstoque>

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