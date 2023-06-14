import { useState } from "react";
import Content from "../../../../components/content";
import Header from "../../../../components/header";
import Menu from "../../../../components/menu";
import SideMenu from "../../../../components/side_menu";
import { Container } from '../../style';
import TableEntrada from "../create/table_entrada";
import { Card } from "../style";

export default function EntradaSaidaPage() {
  const [changePage, setChangePage] = useState('entrada')
  return(
    <>
    <Header />
    <Container>
      <SideMenu />
      <Content>
        <Card>
        {
              changePage === 'entrada' && <TableEntrada />
            }

        </Card>
      </Content>
      <Menu>
        <strong>404</strong>
      </Menu>
    </Container>
    </>
  )
}