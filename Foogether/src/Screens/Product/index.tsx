import React from 'react';
import Styled from 'styled-components/native';
import {Picker} from '@react-native-community/picker';

const Container = Styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const Label = Styled.Text``;

const mainProduct = () => {
  return (
    <Container>
      <Label>This is Product</Label>
      
    </Container>
  );
};

export default mainProduct;