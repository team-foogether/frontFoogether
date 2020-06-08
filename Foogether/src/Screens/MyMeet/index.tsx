import React, {useState} from 'react';
import {StackNavigationProp} from '@react-navigation/stack';

import Styled from 'styled-components/native';
import IconButton3 from '~/Components/IconButton3';

import Input from '~/Components/Input';
import Button from '~/Components/Button';
import Tab from '~/Components/Tab';
import { NavigationContainer } from '@react-navigation/native';

const MyMeetTabContaienr = Styled.View`
  flex-direction: row;
  background-color: #F5F5F5;
  `;
  

const Container = Styled.View`
flex: 1;
justify-content: center;
align-items: center;
`;

const FeedContainer = Styled.View`
`;

const LabelContainer = Styled.TouchableOpacity`
  border-bottom-width: 1px;
  border-color: #b0b0b0;
`;

const LabelTitle = Styled.Text`
  margin-top: 20px;
  margin-left: 20px;
  font-size: 20px;
  color: #5c5c5c;
  border-color: #b0b0b0;
  
`;


const NextIcon = Styled.View`
  margin-left: 345px;
  margin-bottom: -15px;
  margin-top: -25px;
  opacity: 0.5;
`;


type NavigationProp = StackNavigationProp<ProfileTabParamList, 'Profile'>;
interface Props {
  navigation: NavigationProp;
}



const MyMeet = ({navigation}: Props) => {

  return (
    <FeedContainer>
            <LabelContainer  onPress={() => {navigation.navigate('MProgress');}}>
              <LabelTitle>진행중인 모임</LabelTitle>
              <NextIcon>
              <IconButton3 onPress={() => {navigation.navigate('MProgress');}} iconName="next" />
              </NextIcon>
            </LabelContainer>
            <LabelContainer onPress={() => {navigation.navigate('MLike');}}> 
              <LabelTitle>찜한 모임</LabelTitle>
              <NextIcon>
                <IconButton3 onPress={() => {navigation.navigate('MLike');}} iconName="next"/>
                </NextIcon>
            </LabelContainer>
            <LabelContainer onPress={() => {navigation.navigate('MDone');}}>
              <LabelTitle>완료된 모임</LabelTitle>
              <NextIcon>
                <IconButton3 onPress={() => {navigation.navigate('MDone');}} iconName="next" />
                </NextIcon>
            </LabelContainer>
            <LabelContainer onPress={() => {navigation.navigate('MReview');}}>
              <LabelTitle>모임 후기</LabelTitle>
              <NextIcon>
                <IconButton3 onPress={() => {navigation.navigate('MReview');}} iconName="next" />
                </NextIcon>
            </LabelContainer>
        </FeedContainer>
  );
};

export default MyMeet;