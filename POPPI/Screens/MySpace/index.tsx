import React, {useState} from 'react';
import {StackNavigationProp} from '@react-navigation/stack';

import Styled from 'styled-components/native';
import IconButton3 from '~/Components/IconButton3';

import Input from '~/Components/Input';
import Button from '~/Components/Button';
import Tab from '~/Components/Tab';
import { NavigationContainer } from '@react-navigation/native';


const Container = Styled.View`
  flex: 1;
  background-color: #ffffff;
`;


const FeedContainer = Styled.View`
`;

const LabelContainer = Styled.TouchableOpacity`
  border-bottom-width: 1px;
  border-color: #e3e3e3;
`;

const LabelTitle = Styled.Text`
  margin-top: 20px;
  margin-left: 20px;
  font-size: 20px;
  color: #5c5c5c;
  border-color: #b0b0b0
  
`;


const NextIcon = Styled.View`
  margin-left: 345px;
  margin-bottom: -15px;
  margin-top: -25px;
  opacity: 0.3;
`;



type NavigationProp = StackNavigationProp<ProfileTabParamList, 'Profile'>;
interface Props {
  navigation: NavigationProp;
}



const MySpace = ({navigation}: Props) => {

  return (
    <Container>
      <FeedContainer>
            <LabelContainer  onPress={() => {navigation.navigate('SProgress');}}>
              <LabelTitle>예약된 공간</LabelTitle>
              <NextIcon>
              <IconButton3 onPress={() => {navigation.navigate('SProgress');}} iconName="next" />
              </NextIcon>
            </LabelContainer>
            <LabelContainer onPress={() => {navigation.navigate('SMyShare');}}> 
              <LabelTitle>내가 공유한 공간</LabelTitle>
              <NextIcon>
                <IconButton3 onPress={() => {navigation.navigate('SMyShare');}} iconName="next"/>
                </NextIcon>
            </LabelContainer>
            <LabelContainer onPress={() => {navigation.navigate('SLike');}}>
              <LabelTitle>나의 찜한 공간</LabelTitle>
              <NextIcon>
                <IconButton3 onPress={() => {navigation.navigate('SLike');}} iconName="next" />
                </NextIcon>
            </LabelContainer>
            <LabelContainer onPress={() => {navigation.navigate('SDone');}}>
              <LabelTitle>완료된 공간</LabelTitle>
              <NextIcon>
                <IconButton3 onPress={() => {navigation.navigate('SDone');}} iconName="next" />
                </NextIcon>
            </LabelContainer>
            <LabelContainer onPress={() => {navigation.navigate('SReview');}}>
              <LabelTitle>공간 후기</LabelTitle>
              <NextIcon>
                <IconButton3 onPress={() => {navigation.navigate('SReview');}} iconName="next" />
                </NextIcon>
            </LabelContainer>
        </FeedContainer>
      </Container>
  );
};

export default MySpace;