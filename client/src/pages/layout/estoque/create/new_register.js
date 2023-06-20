import { Link, useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { ContainerCreate } from "../../../../components/CreateFormStyles";
import Content from "../../../../components/content";
import Header from "../../../../components/header";
import SideMenu from "../../../../components/side_menu";
import { Container } from "../../style";
import Select from "../../../../components/Select";
import Input from "../../../../components/Input";
import Menu from "../../../../components/menu";
import Button from "../../../../components/login/button";
import { collection, query, setDoc, onSnapshot, doc } from "firebase/firestore";
import { db } from '../../../../firebase';
import { useEffect, useState } from "react";
import delay from "../../../../utils/delay";
import Loading from "../../../../components/loading";

export default function NewRegister() {
  const [items, setItems] = useState([]);
  const [loading, setIsLoading] = useState();
  const [item, setItem] = useState();
  const [type, setType] = useState();
  const [date, setDate] = useState();
  const [amount, setAmount] = useState();

  const history = useHistory();

  useEffect(() => {
    setIsLoading(true);
    async function handleGetEstoqueData()  {
      try {
        setIsLoading(true);
        const queryClient = await query(collection(db, 'estoque'));
        onSnapshot(queryClient, (querySnapshot) => {
          setItems(querySnapshot.docs.map(doc => ({
            item: doc.data(),
          })))
        });
        await delay(1000);

      } finally {
        setIsLoading(false);
      }

    }

    handleGetEstoqueData();
  }, [])


  async function handleCreateRegister(e) {
    e.preventDefault();
    await setDoc(doc(db, 'registro', item), {
      item: item,
      type: type,
      amount: amount,
      data: date,
    })
    history.push('/estoque-entrada-saida')
  }

  function handleItem(e) {
    setItem(e.target.value);
  }

  function handleType(e) {
    setType(e.target.value);
  } 

  function handleAmount(e) {
    setAmount(e.target.value);
  }

  function handleDate(e) {
    setDate(e.target.value);
  }

  return (
    <>
      <Header />
      <Container>
        <SideMenu />
        <Content>

          <ContainerCreate>
            <Link to="/estoque-entrada-saida">{'<'} Voltar</Link>
            <h2>Novo registro</h2>
            <form onSubmit={e => handleCreateRegister(e)}>

              {
                loading && <Loading isLoading={loading} />
              }

              <Select onChange={e => handleItem(e)}>
                <option disabled selected>Selecione o item</option>
                {
                  items.map((item) => {
                    return <option value={item.item.description}>{item.item.description}</option>
                  })
                }
              </Select>
              <div>
                <Select onChange={e => handleType(e)}>
                  <option disabled selected>Tipo</option>
                  <option value="entrada">ENTRADA</option>
                  <option value="saida">SAÍDA</option>
                </Select>
                <Input
                  onChange={e => handleAmount(e)}
                  placeholder="Quantidade"
                  type="number" />
                <Input
                  onChange={(e => handleDate(e))}
                  placeholder="Data"
                  type="text" 
                  onFocus={e => e.target.type = 'date'}
                  onBlur={e => e.target.type = 'text'}
                  />
              </div>
              <Button>Salvar</Button>
            </form>
          </ContainerCreate>

        </Content>
        <Menu>
          <strong>Novo registro</strong>
        </Menu>
      </Container>
    </>
  )
}