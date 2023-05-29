import styled from "styled-components";

export const ContainerFinanceiro = styled.div`

  .options{
    display: flex;
    flex-direction: row;
    gap: 10px;
  }
`;

export const FormDate = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
  margin-bottom: 20px;

  font-family: 'Inter';

  input[type=date] {
    font-family: 'Inter';
    padding: 8px;
    border-radius: 6px;
    border: 1px solid black;
  }
`;

export const Card = styled.div`
    font-family: 'Inter';
    margin-top: 20px;

    table {
			border:1px solid #b3adad;
			border-collapse:collapse;
			padding:5px;
      margin-top: 20px;


      .valueNegative {
        color: red;
      }

      .valuePositive{
        color: green;
      }
		}
		table th {
			border:1px solid #b3adad;
			padding:5px 50px;
			background: #f0f0f0;
			color: #313030;
		}
		table td {
			border:1px solid #b3adad;
			text-align:center;
			padding:5px;
			background: #ffffff;
			color: #313030;
		}
`;