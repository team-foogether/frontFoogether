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
font-size: 17px;
margin-top: 15px;
margin-bottom: 15px;
margin-left: 40px;
color: #757578;
`;



interface Props {
  nickname: string;
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
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