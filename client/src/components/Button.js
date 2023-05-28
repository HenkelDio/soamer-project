import styled from "styled-components";

export const Button = styled.button`
  border: none;
  width: 135px;
  height: 28px;
  background-color: ${({ theme }) => theme.colors.primary.main};
  color: #ffff;
  font-family: 'Inter';
  border-radius: 6px;
  cursor: pointer;
`;