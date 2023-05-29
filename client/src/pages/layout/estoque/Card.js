import { CardContainer,ContainerOptions } from "./style";
import { FaEdit } from "react-icons/fa"
import { Link } from "react-router-dom/cjs/react-router-dom.min";

export default function Card(props){
  return(
    <CardContainer>
    <p><strong>Cód. produto: </strong> {props.code}</p>
    <p><strong>Descrição:</strong> {props.description}</p>
    <ContainerOptions>
    <Link to='/404' className='btnEdit'><FaEdit/></Link>
    <Link to='/404' className='btn'>ver mais</Link>
    </ContainerOptions>
  </CardContainer>
  )
}