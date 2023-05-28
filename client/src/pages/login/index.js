import { Container, SectionImage, SectionLoginForm } from "./style"
import group from '../../assets/group.svg';
import FormGroup from "../../components/login/FormGroup";
import Button from "../../components/button";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

export default function LoginPage() {
  return(
    <Container>
      <SectionImage>
        <h1>SOAMER <br></br> ERP</h1>
        <img src={group} alt="group"/>
      </SectionImage>
      <SectionLoginForm>
          <h2>Faça o login</h2>
          <p>Você está a um clique de <br></br>uma gestão.</p>
          <FormGroup />
            <Link to="/home">
            <Button>
              Entrar
            </Button>
            </Link>          
          <a href="/login">Esqueceu sua senha?</a>
          <a href="/login">Sobre o software</a>     
      </SectionLoginForm>
    </Container>
  )
}