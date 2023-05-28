import styled, { css } from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const ContainerInputGroup = styled.div`
   & + & {
  margin-top: 16px;
 }

 small {
  margin-top: 8px;
  display: block;
  ${({ theme, error }) => error && css`
    color: ${theme.colors.danger.main};
 `};
 }
`;