import React from 'react';
import Styled from 'styled-components/native';


const Container = Styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const Label = Styled.Text``;

const mainSearch = () => {
  return (
    <Container>
      <Label>검색창 들어가야 할곳</Label>
      
    </Container>
  );
};

export default mainSearch;