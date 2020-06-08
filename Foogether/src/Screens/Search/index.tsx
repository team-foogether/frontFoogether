import React from 'react';
import Styled from 'styled-components/native';

import Input from '~/Components/Input';
import Button from '~/Components/Button';
const Container = Styled.View`
  

`;

const Label = Styled.Text``;

const mainSearch = () => {
  return (
    <Container>
      <Input
          style={{height: 50, marginBottom: 16, marginTop: 16}}
          placeholder="검색어를 입력해주세요"

        />
      
      <Button label="다음" style={{marginBottom: 24}} 
      
      />
    </Container>
  );
};

export default mainSearch;