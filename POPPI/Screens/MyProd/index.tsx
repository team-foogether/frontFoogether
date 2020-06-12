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



const MyProd = ({navigation}: Props) => {

  return (
    <Container>
    <FeedContainer>
            <LabelContainer  onPress={() => {navigation.navigate('PProgress');}}>
              <LabelTitle>나의 판매글</LabelTitle>
              <NextIcon>
              <IconButton3 onPress={() => {navigation.navigate('PProgress');}} iconName="next" />
              </NextIcon>
            </LabelContainer>
            <LabelContainer onPress={() => {navigation.navigate('PLike');}}> 
              <LabelTitle>나의 찜목록</LabelTitle>
              <NextIcon>
                <IconButton3 onPress={() => {navigation.navigate('PLike');}} iconName="next"/>
                </NextIcon>
            </LabelContainer>
            <LabelContainer onPress={() => {navigation.navigate('PBuyList');}}>
              <LabelTitle>나의 구매 목록</LabelTitle>
              <NextIcon>
                <IconButton3 onPress={() => {navigation.navigate('PBuyList');}} iconName="next" />
                </NextIcon>
            </LabelContainer>
            <LabelContainer onPress={() => {navigation.navigate('PReview');}}>
              <LabelTitle>구매 후기</LabelTitle>
              <NextIcon>
                <IconButton3 onPress={() => {navigation.navigate('PReview');}} iconName="next" />
                </NextIcon>
            </LabelContainer>
        </FeedContainer>
        </Container>
  );
};

export default MyProd;