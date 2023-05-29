import styled from "styled-components";

export const CardsContainer = styled.div`
  width: 772px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;
`;

export const Card = styled.div`
  width: calc(400px - 20px);
  height: 200px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  padding: 10px;
`;

export const MajorCard = styled.div`
  display: flex;
  justify-content: center;

  width: 100%;
  height: 250px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  padding: 10px;
`;