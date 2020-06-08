import React, {useContext, useState, useEffect, createRef} from 'react';
import Styled from 'styled-components/native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

import MeetingInfo from './MeetingInfo';
import MeetingPeople from './MeetingPeople';
import MeetingTalk from './MeetingTalk';


import {
  StackNavigationProp,
  createStackNavigator,
} from '@react-navigation/stack';
import IconButton from '~/Components/IconButton';


const Container = Styled.View`
  
`;
const ProfileTabContainer = Styled.SafeAreaView`
  flex-direction: row;
  background-color: #FEFFFF;
`;
const Label = Styled.Text`
  marginTop: 10px;
  marginLeft:10px;
  flex-direction: row;
`;

const TabContainer = Styled.View`
  flex-direction: row;
  margin-bottom: 16px;
`;
const Stack = createStackNavigator();
const MaterailTopTab = createMaterialTopTabNavigator();



const SubMainMeeting = () => {
  
  return (
     
    <MaterailTopTab.Navigator>
      <MaterailTopTab.Screen name="정보" component={MeetingInfo} />
      <MaterailTopTab.Screen name="참여자" component={MeetingPeople} />
      <MaterailTopTab.Screen name="댓글" component={MeetingTalk} />

    </MaterailTopTab.Navigator>
  );
};

export default SubMainMeeting;