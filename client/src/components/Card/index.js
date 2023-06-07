import { FaEdit } from "react-icons/fa"
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { CardContainer, ContainerOptions } from "./style";

export default function Card({
  firstTitle, firstValue,
  secondTitle, secondValue
}){
  return(
    <CardContainer>
    <p><strong>{firstTitle}: </strong> {firstValue}</p>
    <p><strong>{secondTitle}:</strong> {secondValue}</p>
    <ContainerOptions>
    <Link to='/404' className='btnEdit'><FaEdit/></Link>
    <Link to='/404' className='btn'>ver mais</Link>
    </ContainerOptions>
  </CardContainer>
  )
}