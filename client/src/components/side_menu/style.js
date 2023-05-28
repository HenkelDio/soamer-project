import styled, { css } from "styled-components";

export const Container = styled.div`
  width: 200px;
  margin-right:30px;

  p {
    font-family: 'Inter', sans-serif;  
    font-weight: bold;
  }

  a {
    color: black;
    text-decoration: none;
    font-family: 'Inter', sans-serif;
  }

  ul {
    margin-top: 10px;
    padding-left: 20px;

  }
`;

export const List = styled.li`
      list-style: none;
      padding: 10px;
      ${({ theme, activated }) => activated && css`
        background-color: ${({ theme }) => theme.colors.secondary.main};
      `};

      margin-bottom: 5px;
      border-radius: 4px;
      display: flex;
      align-items: center;
      transition: 0.2s;

      p {
        font-size: 15px;
        margin-left: 10px;
        font-weight: 500;
      }

      :hover{
        background-color: ${({ theme }) => theme.colors.secondary.main};
      }
`;

export const HomeContainer = styled.div`
  ${({ theme, activated }) => activated && css`
        background-color: ${({ theme }) => theme.colors.secondary.main};
      `};
  
  padding: 10px;
  border-radius: 4px;

  display: flex;
  align-items: center;

  p {
    font-weight: 500;
    font-size: 20px;
    margin-left: 5px;
  }
`;

export const Divider = styled.div`
  background-color: #1D2431;
  height: 2px; 
  margin-top: 10px;
  margin-bottom: 10px;
`;