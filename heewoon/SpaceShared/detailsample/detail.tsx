import React,{Component} from 'react';
import Styled from 'styled-components/native';
import { ScrollView,Button, Text, View,StyleSheet,Image,FlatList,TouchableOpacity} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';


function SpaceDetail({route}) {
    const { itemId } = route.params;
    const otherParam = route.params.itemID;
    console.log("1>>>>>>>>>>>"+otherParam)
    console.log("2>>>>>>>>>>>"+ { itemId })
    console.log("3>>>>>>>>>>>"+JSON.stringify(itemId))
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text> this is Space Detail</Text>
        <Text>itemId: {JSON.stringify(itemId)}</Text>
        <Text>otherParam: {otherParam}</Text>
      </View>
    );
  }
  

  export default SpaceDetail;