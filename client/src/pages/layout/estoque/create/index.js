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

export default function EstoqueCreate() {

    const [name, setName] = useState('');
    const [codigo, setCodigo] = useState('');
    const [modelo, setModelo] = useState('');
    const [preco, setPreco] = useState('');
    const [precoBruto, setPrecoBruto] = useState('');
    const [quantidade, setQuantidade] = useState('');
    const [estoqueMinimo, setEstoqueMinimo] = useState('');

  useEffect(() => {
    function handleLocalStorage(){
      localStorage.setItem('nome','alexia')
    }
    handleLocalStorage();
  }, [])

  function handleChangeName(e){
    setName(e.target.value)
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

  function handleShowInformation(e){
    e.preventDefault();

    const data = ({
      name,
      codigo,
      modelo,
      preco,
      precoBruto,
      quantidade,
      estoqueMinimo
    })

    const code = JSON.stringify(data.codigo);
    const toString = JSON.stringify(data);

    localStorage.setItem('item', toString)
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
            <form onSubmit={e => handleShowInformation(e)}>
              <Input
                onChange={e => handleChangeCodigo(e)}
                placeholder="Código"/>
              <Input 
                onChange={e => handleChangeName(e)}
                placeholder="Nome"/>
              <Input
                onChange={e => handleChangeModelo(e)}
                placeholder="Modelo"/>
              <Select>
                <option disabled hidden>Indústria</option>
                <option>SOAMER PONTEIRAS AUTOMOTIVAS</option>
                <option>GM CONCESSIONÁRIAS</option>
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