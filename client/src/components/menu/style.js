import styled from "styled-components";

export const Container = styled.div`
  width: 200px;
  font-family: 'Inter';
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-left: 15px;

  strong {
    font-size: 17px;
    color: ${({ theme }) => theme.colors.secondary.dark};
  }

  a {
    color: #B3B3B3;
    text-decoration: none;
  }
`;