import { Link } from "react-router-dom/cjs/react-router-dom.min";
import Content from "../../../components/content";
import Header from "../../../components/header";
import Menu from "../../../components/menu";
import SideMenu from "../../../components/side_menu";
import {Button} from '../../../components/Button';
import { Container } from "../style";
import { ContainerFinanceiro, FormDate, Card } from "./style";
import TableAReceber from "./table_a_receber";
import TableAPagar from "./table_a_pagar";
import { useState } from "react";

export default function Financeiro() {
  const [changePage, setChangePage] = useState('pagar');

  console.log(changePage);

  return(
    <>
    <Header />
    <Container>
      <SideMenu />
      <Content>
        <ContainerFinanceiro>

          <FormDate>
            <p>de</p>
            <input type="date"/>
            <p>até</p>
            <input type="date" />
          </FormDate>

          <Button>Cadastrar novo título</Button>

          <div className="options">
          <Button
           onClick={() => setChangePage('pagar')}
           deactivated={changePage === 'receber' ? true : false}
          > 
              Contas a pagar
          </Button>

          <Button 
          onClick={() => setChangePage('receber')}
          deactivated={changePage === 'pagar' ? true : false}
          > 
              Contas a receber
          </Button>
          </div>

          <Card>
            {
              changePage === 'pagar' && <TableAReceber />
            }
            {
              changePage === 'receber' && <TableAPagar />
            }
          </Card>

        </ContainerFinanceiro>
      </Content>
      <Menu>
        <strong>financeiro</strong>
        <Link to='/'>histórico</Link>
        <Link to='/'>relatórios</Link>
      </Menu>
    </Container>
    </>
  )
}