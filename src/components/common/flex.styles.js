import styled from '@emotion/styled';

export const FlexContainer = styled.div`
  display: flex;
`;

export const FlexRowContainer = styled.div({
  display: 'flex',
  flexDirection: 'row',
  rowGap: '10px',
  columnGap: '20px',
  margin: '20px 0px',
});

export const FlexColumnContainer = styled.div`
  display: flex;
  flex-direction: column;
`;