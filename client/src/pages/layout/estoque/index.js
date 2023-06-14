import { useEffect, useState } from "react";
import { Button } from "../../../components/Button";
import Content from "../../../components/content";
import Header from "../../../components/header";
import Menu from "../../../components/menu";
import SideMenu from "../../../components/side_menu";
import { Container } from "../style";
import { ContainerEstoque } from "./style";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import Input from "../../../components/Input";
import { useMemo } from "react";
import Card from "../../../components/Card";
import { collection, query, orderBy, onSnapshot } from "firebase/firestore";
import { db } from '../../../firebase';
import Loading from "../../../components/loading";
import delay from "../../../utils/delay";

export default function Estoque() {
  const [data, setData] = useState([
    // {code:  'SO-37101', description: 'PONT INOX RED UNIVERSAL Ø 101,6mm COMPRIMENTO 125mm'}, 
    // {code:  'SO-A01C', description: 'PONT INOX CHANF AUDI A1'},
    // {code:  'SO-A02C', description: 'PONT INOX CHANF AUDI A3 HATCH OU SEDAN'}
  ])
  const [isLoading, setIsLoading] = useState(true);


  useEffect(() => {
    setIsLoading(true);
    async function handleGetEstoqueData()  {
      try {
        setIsLoading(true);
        const queryClient = await query(collection(db, 'estoque'));
        onSnapshot(queryClient, (querySnapshot) => {
          setData(querySnapshot.docs.map(doc => ({
            data: doc.data(),
          })))
        });
        await delay(1000);

      } finally {
        setIsLoading(false);
      }

    }

    handleGetEstoqueData();
  }, [])
  

  const [searchTerm, setSearchTerm] = useState('');

  const filteredData = useMemo(() => data.filter((value) => (
    value.data.description.toLowerCase().includes(searchTerm.toLowerCase()))), [data, searchTerm]);


  function handleChangeSearchTerm(e) {
    setSearchTerm(e.target.value);
  }

  return(
    <>
      <Header />
      <Container>
        <SideMenu />
        <Content>
          <ContainerEstoque>
          <Input 
          value={searchTerm}
          type="text" 
          placeholder="Pesquisar" 
          onChange={handleChangeSearchTerm}
          />
          <Link to='/estoque-create'><Button>Novo cadastro</Button></Link>
          {
            isLoading 
            ? <Loading isLoading={isLoading} />
            :
            data.map((data) => {
              return <Card
              key={data.data.code}
              firstTitle="Cód. produto"
              firstValue={data.data.code}
              secondTitle="Descrição"
              secondValue={data.data.description}
              />
            })
          }
          </ContainerEstoque>
        </Content>
        <Menu>
          <strong>estoque</strong>
          <Link to='/estoque-create'>cadastro</Link>
          <Link to='/'>entrada/saída</Link>
        </Menu>
      </Container>
    </>
  )
}