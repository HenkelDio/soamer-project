import { ContainerSideMenu } from "../side_menu/style";
import { Container } from "./style";

export default function Menu({ children }) {
  return(
    <ContainerSideMenu>
      <div className='dividerVertical'></div>
    <Container>
      {children}
    </Container>
    </ContainerSideMenu>
  )
}