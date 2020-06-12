import React, {Component} from 'react';
import Styled from 'styled-components/native';
import {StyleSheet} from 'react-native';



import Button from '~/Components/Button';
import IconButton from '~/Components/IconButton';
import IconButton5 from '~/Components/IconButton5';
import { TouchableOpacityBase } from 'react-native';
import { CurrentRenderContext } from '@react-navigation/native';

const Container = Styled.View`
  flex-direction: row;
`;

const Label = Styled.Text`
  margin-top: 20px;
  margin-bottom: 16px;
  font-size: 20px;
  color: #4a4a4a;
`;



interface Props {
  nickname: string;
}

const styles = StyleSheet.create({
    container: {
      backgroundColor: '#2c3e50',
    },
  });



const LoginInfo = ({nickname}: Props) => {
  
  return (
    <Container>
            <Label>{nickname}</Label>
    </Container>
  );
};

export default LoginInfo;