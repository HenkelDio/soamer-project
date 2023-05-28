import styled, { css } from 'styled-components';

export default styled.input`
    height: 40px;
    width: 100%;
    border-radius: 15px;
    border: none;

    font-family: Karla;
    font-size: 16px;

    padding: 0px 10px;

    background-color: #D9D9D9;
    outline: none;


    ::placeholder {
      color: black;
    }

    :hover {
      background-color: #bfbfbf;
    }

    ${({ theme, error }) => error && css`
    border: 2px solid ${theme.colors.danger.main};

    &:focus {
      border: 2px solid ${theme.colors.danger.main};
    }
  `};
`;