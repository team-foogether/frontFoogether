import React, {useContext, useState, useEffect, createRef} from 'react';
import Styled from 'styled-components/native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {YellowBox, ScrollView,Button, Text, View,StyleSheet,Image,FlatList,TouchableOpacity} from 'react-native';

import MeetingInfo from './MeetingInfo';
import MeetingPeople from './MeetingPeople';
import MeetingTalk from './MeetingTalk';
import {
  createStackNavigator,
} from '@react-navigation/stack';



YellowBox.ignoreWarnings([
	'VirtualizedLists should never be nested', // TODO: Remove when fixed
]);

const Stack = createStackNavigator();
const MaterailTopTab = createMaterialTopTabNavigator();




function SubMainMeeting ({route}) {
  const { itemId} = route.params;
  const { idx} = route.params;
  const[detail, setDetail]=useState([]);
  // console.log("1>>>>>>>>>>>"+otherParam)
  console.log("from mian page >>>>>>>>>>>"+ JSON.stringify(itemId))
  console.log("from post page >>>>>>>>>>>"+ JSON.stringify(idx))
  let s=JSON.stringify(itemId)
  console.log("모임넘버 : "+s)
  let way ='http://192.168.0.30:8082/meetings/'
  way=way+s
  useEffect(()=>{
      fetch(way,{
    method: 'GET',
    headers: {
      Authorization: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJmb29nZXRoZXIiLCJ1c2VySWR4IjoxLCJleHAiOjE1OTQ3MTY3MTN9.guWu6YMv7trj16HuQez5a4HDFddhB-fU4QDzEcS7y8U',
    }})
      .then(response => response.json())
      .then(({data})=>setDetail(data))
  },[]);
   console.log("@@@@@@@@@@@@@@"+JSON.stringify(detail));
 
  return (
    
    <MaterailTopTab.Navigator>
      <MaterailTopTab.Screen name="정보" component={MeetingInfo} />
      <MaterailTopTab.Screen name="참여자" component={MeetingPeople} />
      <MaterailTopTab.Screen name="댓글" component={MeetingTalk} />

    </MaterailTopTab.Navigator>
  );
};

export default SubMainMeeting;