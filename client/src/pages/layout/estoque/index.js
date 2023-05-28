import Content from "../../../components/content";
import Header from "../../../components/header";
import Menu from "../../../components/menu";
import SideMenu from "../../../components/side_menu";
import { Container } from "../style";

export default function Estoque() {
  return(
    <>
      <Header />
      <Container>
        <SideMenu />
        <Content>
          <h2>Estoque</h2>
          <button>Novo cadastro</button>
          <div>
            <table>
              <tr>
                <td>Cód. Produto</td>
                <td>Descrição</td>
              </tr>
              <tr>
                <td>SO-37101</td>
                <td>PONT INOX RED UNIVERSAL Ø 101,6mm COMPRIMENTO 125mm</td>
              </tr>
              <tr>
                <td>SO-A01C</td>
                <td>PONT INOX CHANF AUDI A1</td>
              </tr>
              <tr>
                <td>SO-A02C</td>
                <td>PONT INOX CHANF AUDI A3 HATCH OU SEDAN</td>
              </tr>
              <tr>
                <td>SO-A03A</td>
                <td>PONT INOX CHANF AUDI A4 AVANT ATÉ 2016</td>
              </tr>
            </table>
          </div>
          <div>
            <h3>Descrição detalhada</h3>
            <table>
              <tr>
                <td>Cód. Produto</td>
                <td>Descrição</td>
              </tr>
              <tr>
                <td>SO-37101</td>
                <td>PONT INOX RED UNIVERSAL Ø 101,6mm COMPRIMENTO 125mm</td>
              </tr>
            </table>
            <table>
            <tr>
              <td>Modelo</td>
                <td>Industria</td>
                <td>Preço</td>
                <td>Peso Bruto (Kg)</td>
                <td>Estoque</td>
                <td>Estoque Mín</td>
                <td>Local Estoque</td>
                <td>Info</td>
              </tr>
              <tr>
                <td>BOCAL REDONDO Ø 101,6mm</td>
                <td>SOAMER PONTEIRAS AUTOMOTIVAS</td>
                <td>R$ 222,87</td>
                <td>0,64</td>
                <td>0</td>
                <td>0</td>
                <td>-</td>
                <td>CHANFRADA</td>
              </tr>
            </table>
          </div>
        </Content>
        <Menu />
      </Container>
    </>
  )
}