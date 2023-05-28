import styled from "styled-components";


export const Container = styled.div`
  width: 1200px;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  
  margin: 80px auto;
`;  

export const SectionImage = styled.div`
  text-align: center;
  font-family: Karla;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.primary.main};
  
  img {
    width: 94%;
  }
`;

export const SectionLoginForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 5px;

  font-family: Karla;
  text-align: center;

  padding: 20px;
  background-color: #fff;
  box-shadow: 2px 2px 3px 2px #ccc;
  border-radius: 10px;

  height: 400px;
  width: 320px;

  


  /* Change the white to any color */
  input:-webkit-autofill,
  textarea:-webkit-autofill,
  select:-webkit-autofill {
    -webkit-box-shadow: 0 0 0 1000px #D9D9D9 inset !important;
    -webkit-text-fill-color: black !important;
  }

  p {
    margin-bottom: 10px;
  }

  a {
      color: black;

      :hover {
        color: ${({ theme }) => theme.colors.secondary.dark};
      }
    }

`;