import styled from '@emotion/styled';

export const Card = styled.div`
  padding: 2rem;
  border: 1px solid black;
  background-color: white;
  cursor: pointer;
  box-shadow: 2px 2px 5px rgb(0 0 0 / 45%);
  flex-grow: 1;
`;

export const CardTitle = styled.span`
  display: block;
  font-size: 2.5rem;
`;

export const CardTag = styled.div`
  padding: 0.5rem;
  background-color: hotpink;
  border-radius: 25px;
  max-width: 10%;
  text-align: center;
`;
