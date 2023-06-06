import styled from "styled-components";

export const Overlay = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Container = styled.div`
  position: relative;
  min-width: 400px;
  padding: 20px;
  border-radius: 6px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.25);

  background-color: white;
  font-family: 'Inter';

  display: flex;
  flex-direction: column;

  a {
    button {
      width: 100%;
      height: 50px;
      cursor: pointer;

      font-family: 'Inter';
      font-weight: bold;
    }
  }

  div {
    position: absolute;
    right: -10px;
    top: -10px;

    background-color: #F69191;
    color: white;
    padding: 5px 10px;
    border-radius: 50px;
    cursor: pointer;
    user-select: none;
    
  }

`;