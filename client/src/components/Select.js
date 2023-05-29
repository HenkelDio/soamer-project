import styled from "styled-components";

export default styled.select`
  width: 100%;
  border: 2px solid transparent;
  background-color: #E0E0E0;
  border-radius: 6px;
  padding: 8px 10px;
  outline: none;
  transition: 0.2s;
  
  :focus {
    border: 2px solid ${({ theme }) => theme.colors.secondary.dark};
  }
`;