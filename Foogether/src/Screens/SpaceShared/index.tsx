import React,{Component} from 'react';
import Styled from 'styled-components/native';
import { ScrollView,Button, Text, View,StyleSheet,Image,FlatList} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import PostMeeting from '~/Screens/SpaceShared/detail';
import Geocoder from 'react-native-geocoding';
import Geolocation from 'react-native-geolocation-service';
import {StackNavigationProp} from '@react-navigation/stack';
import IconButton31 from '~/Components/IconButton31';
import IconButton from '~/Components/IconButton';


const rows = [
  { id: 0, text: '[역삼] 트와이스와 함께하는 쿠킹 클래스 입니다 많은 후원 부탁드리고 많은 인원모집합니다.',
    lastdate: '2020-07-30 08:20 까지',
   imguri:'http://rgo4.com/files/attach/images/2676751/551/411/006/887356128639e4ed0436a2c8aeda88d5.png',
   peoplecnt:'남자 1/5 여자 5/5' },
  { id: 8, text: '[덕소] 아이유와 함께하는 쿠킹 클래스 입니다 많은 후원 부탁드리고 많은 인원모집합니다.',
    lastdate: '2020-06-30 18:20 까지',
   imguri:'http://www.city.kr/files/attach/images/238/915/843/010/3fc1407db289cb8e394dc4e49b8f9ee7.png',
   peoplecnt:'남자 2/5 여자 5/5' },
  { id: 5, text: '[강남] 비티에스와 함께하는 쿠킹 클래스 입니다 많은 후원 부탁드리고 많은 인원모집합니다.',
    lastdate: '2020-05-30 18:20 까지',
   imguri:'https://www.pngarts.com/files/5/BTS-PNG-Picture.png',
   peoplecnt:'남자 4/5 여자 5/5'
 },
]

const extractKey = ({ id }) => id

const Container = Styled.View`
  
`;


const MeetingItem = Styled.View`
position: absolute;
margin-top:500px;
align-self: flex-end;
justify-content: flex-end;
  
`;
const StyleButton = Styled.TouchableOpacity`
  width: 20%;
  height: 100%;
  border-bottom-right-radius: 20px;
  justifyContent: center;
  alignItems: center;
  flexDirection: row;
  background-color: orange;
  
`;
export default class App extends Component {

  renderItem = ({ item }) => {
    return (
      <View style={styles.container2}>
              <View style={styles.imgbox}>
             
              <Image style={{flex:1, borderTopLeftRadius:20, borderTopRightRadius:20,}}source={{uri:item.imguri }}/>
                
             </View>
             <View style={{flex: 0.5, flexDirection:'row', justifyContent: 'space-between'}}>
             <Text >  {item.peoplecnt}</Text> 
             <Text >{item.lastdate}  </Text>
              </View>
             <View style={{flex: 1}}>
                  <View style={styles.infobox}>
                  <Text style={{width: 250,margin:10}} ellipsizeMode='tail' numberOfLines={2}> {item.text} </Text>  
                  <StyleButton>
                    <Text style={{textAlign:'center',}} >참여하기</Text>
                  </StyleButton> 
                </View>
              </View>
        </View>
       
    )
  }

  render() {
    return (
      
      <FlatList
        ListHeaderComponent={
        <>
         <View style={styles.excontainer} />
         <View style={styles.excontainer}/>
        
         <View style={styles.totoalsortbar}>
                <Text>총 :~~~~ </Text>
         </View> 
        </>}
        style={styles.container}
        data={rows}
        renderItem={this.renderItem}
        keyExtractor={extractKey}
        ListFooterComponent={
          <>
           <IconButton31
        iconName="add"

        onPress={() => {navigation.navigate('PostMeeting');}}
         /></>
        }/>
       
    );
  }
}


function SpaceDetail({route}) {
  const { itemId } = route.params;
  const { otherParam } = route.params;
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text> this is Space Detail</Text>
      <Text>itemId: {JSON.stringify(itemId)}</Text>
      <Text>otherParam: {JSON.stringify(otherParam)}</Text>
    </View>
  );
}

const SpaceStack = createStackNavigator();

function mainSpaceShared() {
  return (
    <SpaceStack.Navigator>
      <SpaceStack.Screen name="장소대여" component={App} />
      <SpaceStack.Screen
        name="Details"
        component={SpaceDetail}
        options={{title: '디테일이 살아있음'}}
      />
    </SpaceStack.Navigator>
  );
}


export default mainSpaceShared;


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  boxSmall: {
    width: 200,
    height: 200,
    marginBottom: 10,
    marginRight: 10,
    backgroundColor: 'skyblue',
  },
  boxLarge: {
    width: 300,
    height: 300,
    marginBottom: 10,
    marginRight: 10,
    backgroundColor: 'steelblue',
  },
  excontainer: {
    height: 40,   
    borderWidth: 2,
  },
  totoalsortbar: {
    height: 40,   
    borderWidth: 1,

  },
  container2: {
    height: 250,
    borderRadius:20,
    borderWidth: 2,
    margin: 5
  },
  layout: {
    flex: 3,
    backgroundColor: 'rgba(0,0,0,0.05)',
  },
  box: {
    width: 50, height: 50,
    backgroundColor: 'steelblue',
    margin: 5,
  },
  box2: {
    width: 250,height: 50,
    backgroundColor: 'steelblue',
    margin: 5,
  },
  imgbox: {
    flex: 4, 
    backgroundColor: 'powderblue',
    borderTopRightRadius:20,
    borderTopLeftRadius:20 
  },
  infobox: {
     flex:1,flexDirection: 'row',
     justifyContent: 'space-between',
     alignItems:'center',
     backgroundColor: 'yellow',
     borderBottomLeftRadius: 20,
     borderBottomRightRadius: 20,
  },
});
  