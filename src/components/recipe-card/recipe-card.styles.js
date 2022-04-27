import styled from '@emotion/styled';

export const Card = styled.div`
  border: 1px solid #00000010;
  background-color: white;
  cursor: pointer;
  box-shadow: 0 3px 10px rgb(0 0 0 / 20%);
  flex-grow: 1;
  border-radius: 5px;
  max-width: 300px;
  &:hover {
    box-shadow: rgb(0 0 0 / 8%) 0 3px 10px 0;
    border-color: #1EA7FD50;
    transform: translate3d(0, -3px, 0);
  }
`;

export const CardTitle = styled.span`
  padding: 1rem;
  display: block;
  font-size: 2rem;
`;

export const CardTag = styled.div`
  padding: 0.5rem;
  background-color: hotpink;
  border-radius: 25px;
  max-width: 33%;
  text-align: center;
  flex-grow: 1;
  font-size: 0.7rem;
  box-shadow: 1px 1px 2px rgb(0 0 0 / 45%);
  &:hover {
    box-shadow: 2px 2px 5px rgb(0 0 0 / 45%);
  }
`;

export const CardDescription = styled.div`
  padding: 1rem;
`;

export const CardTagContainer = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: row;
  column-gap: 5px;
`;