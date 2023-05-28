import styled from "styled-components";

export const Container = styled.button`
    margin: 15px auto;
    height: 40px;

    width: 150px;

    border: none;
    border-radius: 10px;

    background-color: ${({ theme }) => theme.colors.secondary.main};
    
    font-family: Karla;
    font-weight: bold;
    font-size: 16px;
    cursor: pointer;  

    :hover {
      background-color: ${({ theme }) => theme.colors.secondary.dark};
    }

`;