import Content from "../../../../components/content";
import Header from "../../../../components/header";
import Menu from "../../../../components/menu";
import SideMenu from "../../../../components/side_menu";
import { Container } from "../../style";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import Input from "../../../../components/Input";
import Select from "../../../../components/Select";
import Button from "../../../../components/login/button";
import { ContainerCreate } from "../../../../components/CreateFormStyles";
import { useEffect, useState } from "react";
import { collection, query, orderBy, onSnapshot, doc, setDoc } from "firebase/firestore";
import { db } from '../../../../firebase';
import { useHistory } from 'react-router-dom'; 

export default function EstoqueCreate() {

    const [description, setDescription] = useState('');
    const [codigo, setCodigo] = useState('');
    const [modelo, setModelo] = useState('');
    const [preco, setPreco] = useState('');
    const [precoBruto, setPrecoBruto] = useState('');
    const [quantidade, setQuantidade] = useState('');
    const [estoqueMinimo, setEstoqueMinimo] = useState('');
    const [industry, setIndustry] = useState('');

    const history = useHistory();

  function handleChangeDescription(e){
    setDescription(e.target.value)
  }

  function handleChangeCodigo(e){
    setCodigo(e.target.value)
  }

  function handleChangeModelo(e){
    setModelo(e.target.value)
  }

  function handleChangePreco(e){
    setPreco(e.target.value)
  }

  function handleChangePrecoBruto(e){
    setPrecoBruto(e.target.value)
  }

  function handleChangeQuantidade(e){
    setQuantidade(e.target.value)
  }

  function handleChangeEstoqueMinimo(e){
    setEstoqueMinimo(e.target.value)
  }

  function handleChangeIndustry(e) {
    setIndustry(prevState => prevState = e.target.value);
  }

  async function handleCreateItem(e)  {
    e.preventDefault();
    await setDoc(doc(db, 'estoque', codigo), {
      code: codigo,
      description: description,
      model: modelo,
      price: preco,
      gross_weight: precoBruto,
      amount: quantidade,
      min_stock: estoqueMinimo,
      industry: industry
    })
    history.push('/estoque')
  }

  return(
    <>
      <Header />
      <Container>
        <SideMenu />
        <Content>

          <ContainerCreate>
            <Link to="/estoque">{'<'} Voltar</Link>
            <h2>Cadastrar novo item</h2>
            <form onSubmit={e => handleCreateItem(e)}>
              <Input
                onChange={e => handleChangeCodigo(e)}
                placeholder="Código"/>
              <Input 
                onChange={e => handleChangeDescription(e)}
                placeholder="Descrição"/>
              <Input
                onChange={e => handleChangeModelo(e)}
                placeholder="Modelo"/>
              <Select onChange={e => handleChangeIndustry(e)}>
                <option disabled selected>Indústria</option>
                <option value="SOAMER PONTEIRAS AUTOMOTIVAS">SOAMER PONTEIRAS AUTOMOTIVAS</option>
              <option value="GM CONCESSIONÁRIAS">GM CONCESSIONÁRIAS</option>
              </Select>
              <div>
                <Input
                  onChange={e => handleChangePreco(e)}
                  placeholder="Preço" 
                  type="number"/>
                <Input
                  onChange={e => handleChangePrecoBruto(e)}
                  placeholder="Peso bruto (Kg)"
                  type="number" />
                <Input 
                  onChange={e => handleChangeQuantidade(e)}
                  placeholder="Quantidade" 
                  type="number"/> 
                <Input
                onChange={e => handleChangeEstoqueMinimo(e)}
                placeholder="Estoque mínimo" 
                type="number"/>
              </div>
              <Button>Salvar</Button>
            </form>
          </ContainerCreate>

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