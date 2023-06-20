import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 800px;

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.secondary.dark};
    font-weight: bold;
    font-size: 18px;
  }

  h2 {
    margin-bottom: 15px;
    font-family: 'Inter';
  }
`;