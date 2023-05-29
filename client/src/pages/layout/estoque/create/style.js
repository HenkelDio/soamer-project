import styled from "styled-components";

export const ContainerCreateEstoque = styled.div`
  font-family: 'Inter';


  a {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.secondary.dark};
    font-weight: bold;
    font-size: 18px;
  }

  h2 {
    margin-bottom: 15px;
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 10px;

    div {
      display: flex;
      flex-direction: row;
      gap: 10px;
    }
  }

`;