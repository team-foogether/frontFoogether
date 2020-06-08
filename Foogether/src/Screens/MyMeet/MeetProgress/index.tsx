import React, {useState} from 'react';
import {StackNavigationProp} from '@react-navigation/stack';

import Styled from 'styled-components/native';
import IconButton3 from '~/Components/IconButton3';

import Input from '~/Components/Input';
import Button from '~/Components/Button';
import Tab from '~/Components/Tab';
import { NavigationContainer } from '@react-navigation/native';

import {
  Dimensions,
  ScrollView,
  NativeSyntheticEvent,
  NativeScrollEvent,
  Image,
} from 'react-native';


const Container = Styled.View`
  flex: 1;
  align-items: center;
`;

const LabelContainer = Styled.View`
  flex-direction: row;  
  background-color: #ffffff;
  justify-content: center;
  border-bottom-width; 1px;
  border-color: #363636;
`;

const LabelTitle0 = Styled.Text`
  margin-bottom: 30px;
`;

const LabelTitle1 = Styled.Text`
  width : 100%;
  font-size: 25px;
  margin-top: 20px;
  margin-bottom: 20px;
  textAlign: center;
  

`;

const Label = Styled.Text``;

const MeetProgress = () => {
  return (
    <Container>
      <ScrollView>
          <LabelTitle0>    </LabelTitle0>
      <LabelContainer>
        <LabelTitle1>진행중인 모임</LabelTitle1>
      </LabelContainer>
      </ScrollView>
    </Container>
  );
};

export default MeetProgress;