import { useEffect, useState } from "react";
import Content from "../../../../components/content";
import Header from "../../../../components/header";
import Menu from "../../../../components/menu";
import SideMenu from "../../../../components/side_menu";
import { Container } from '../../style';
import TableEntrada from "../create/table_entrada";
import { Card, ContainerTable } from "../style";
import { Button } from '../../../../components/Button';
import TableSaida from "../create/table_saida";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import delay from "../../../../utils/delay";
import { collection, query, orderBy, onSnapshot, doc, setDoc } from "firebase/firestore";
import { db } from '../../../../firebase';
import Loading from "../../../../components/loading";

export default function EntradaSaidaPage() {
  const [changePage, setChangePage] = useState('entrada');
  const [items, setItems] = useState([]);
  const [loading, setIsLoading] = useState();
  const [data, setData] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    async function handleGetEstoqueData()  {
      try {
        setIsLoading(true);
        const queryEstoque = query(collection(db, 'estoque'));
        onSnapshot(queryEstoque, (querySnapshot) => {
          setItems(querySnapshot.docs.map(doc => ({
            item: doc.data(),
          })))
        });
        
        const queryRegistro = query(collection(db, 'registro'));
        onSnapshot(queryRegistro, (querySnapshot) => {
          setData(querySnapshot.docs.map(doc => ({
            data: doc.data()
          })))
        })
        await delay(1000);

      } finally {
        setIsLoading(false);
      }

    }

    handleGetEstoqueData();
  }, [])



  function formatToEntryDataType(value) {
    if(value.data.type === 'entrada') {
      return value;
    }
  }

  function formatToExitDataType(value) {
    if(value.data.type === 'saida') {
      return value;
    }
  }

  const entryDataType = data.filter(formatToEntryDataType);

  const exitDataType = data.filter(formatToExitDataType);

  return (
    <>
      <Header />
      <Container>
        <SideMenu />
        <Content>
            <Link to="/estoque">{'<'} Voltar</Link>
            <h2>Entrada / Saída</h2>
          <ContainerTable>
            <div className="options">
              <Button
                onClick={() => setChangePage(prevState => prevState = 'entrada')}
                deactivated={changePage === 'entrada' ? false : true}
              >Entradas</Button>
              <Button
                onClick={() => setChangePage(prevState => prevState = 'saida')}
                deactivated={changePage === 'saida' ? false : true}
              >Saídas</Button>
            </div>
            <Link to="/estoque-novo-registro">
            <Button>Novo registro</Button>
            </Link>
          </ContainerTable>
          <Card>
            {
              loading && <Loading isLoading={loading} />
            }
            {
              changePage === 'entrada' && <TableEntrada entryDataType={entryDataType}/>
            }

            {
              changePage === 'saida' && <TableSaida exitDataType={exitDataType}/>
            }

          </Card>
        </Content>
        <Menu>
          <strong>entrada/saída</strong>
          <Link to='/estoque'>voltar</Link>
        </Menu>
      </Container>
    </>
  )
}