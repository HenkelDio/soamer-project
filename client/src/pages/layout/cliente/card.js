
import { FaEdit } from "react-icons/fa"
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { CardContainer, ContainerOptions } from "../estoque/style";

export default function Card(props){
  return(
    <CardContainer>
    <p><strong>Nome Completo: </strong> {props.name}</p>
    <p><strong>Telefone:</strong> {props.phone}</p>
    <ContainerOptions>
    <Link to='/404' className='btnEdit'><FaEdit/></Link>
    <Link to='/404' className='btn'>ver mais</Link>
    </ContainerOptions>
  </CardContainer>
  )
}