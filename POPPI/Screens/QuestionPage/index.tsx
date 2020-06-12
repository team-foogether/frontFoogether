import React, {useContext, useState, useEffect, createRef} from 'react';
import Styled from 'styled-components/native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

import Question from './Question';
import MyQuestion from './MyQuestion';

import {
  StackNavigationProp,
  createStackNavigator,
} from '@react-navigation/stack';


const Container = Styled.View``;

const ProfileTabContainer = Styled.SafeAreaView`
  flex-direction: row;
  background-color: #c3c3c3;
`;

const Label = Styled.Text`
  margin-top: 10px;
  margin-left: 10px;
  flex-direction: row;
`;

const TabContainer = Styled.View`
  flex-direction: row;
  margin-bottom: 16px;
`;

const Stack = createStackNavigator();
const MaterialTopTab = createMaterialTopTabNavigator();

const QuestionPage = () => {

  return (
    
    <MaterialTopTab.Navigator>
      <MaterialTopTab.Screen name="문의하기" component={Question} />
      <MaterialTopTab.Screen name="내 문의글" component={MyQuestion} />
    </MaterialTopTab.Navigator>
  )
}

export default QuestionPage;