import styled from "styled-components";

export const ContainerEstoque = styled.div`
  display: flex;
  flex-direction:column;
  gap: 15px;
`;

export const ContainerCliente = styled.div`
  display: flex;
  flex-direction:column;
  gap: 15px;
`;


export const CardContainer = styled.div`
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 6px;
  padding: 15px;
  font-family: 'Inter';
  margin-top: 10px;
`;

export const ContainerOptions = styled.div`
  margin-top: 10px;
  display: flex;
  align-items: start;
  gap: 10px;

  a{
    text-decoration: none;
  }

  .btn{
    font-size: 15px;
    color: ${({ theme }) => theme.colors.secondary.dark};
  }
  .btnEdit{
    font-size: 18px;
    color: black;
  }
`;

