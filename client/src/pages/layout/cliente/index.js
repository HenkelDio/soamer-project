import Input from "../../../components/Input";
import Content from "../../../components/content";
import Header from "../../../components/header";
import SideMenu from "../../../components/side_menu";
import { Container } from "../style";

export default function ClienteCreate(){
  
return(
  <>  
<Header/>
<Container>
  <SideMenu/>
  <Content>
    <ContainerC>
    <h2>Cadastrar novo cliente</h2>
    <form>
      <Input placeholder="Nome Completo"/>
      <Input placeholder="CPF" />
      <Input placeholder="Data de nascimento" />
      <Input placeholder="Telefone"/>
      <Input placeholder="E-mail" />
      <Input placeholder="CEP" />
      <Input placeholder="Logradouro" />
      <Input placeholder="Número" />
      <Input placeholder="Complemento" />
      <Input placeholder="UF" />


    </form>
    </ClienteCreate>
  </Content>
</Container>
</>
)
}

