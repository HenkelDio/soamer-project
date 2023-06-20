import styled from "styled-components";

export const ContainerEstoque = styled.div`
  display: flex;
 flex-direction:column;
  gap: 15px;

	b {
		font-size: 20px;
		font-family: 'Inter';
		color: #3d3d3d;
	}
`;

export const ContainerCliente = styled.div`
  display: flex;
  flex-direction:column;
  gap: 15px;
`;

export const Card = styled.div`
		font-family: 'Inter';
    margin-top: 20px;
		font-size: 12px;

		b {
			font-size: 20px;
			color: #3d3d3d;
		}

    table {
			border:1px solid #b3adad;
			border-collapse:collapse;
			padding:0px;
      margin-top: 20px;
		}

		.item{
			min-width: 500px;
		}

		table th {
			border:1px solid #b3adad;
			padding:5px 30px;
			background: #f0f0f0;
			color: #313030;
		}
		table td {
			border:1px solid #b3adad;
			text-align:center;
			padding:20px 10px;
			background: #ffffff;
			color: #313030;
		}

`;

export const ContainerTable = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;

	.options {
		display: flex;
		flex-direction: row;
		gap: 7px;
	}
`;



