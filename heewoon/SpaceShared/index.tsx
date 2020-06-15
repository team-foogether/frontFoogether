import React,{Component} from 'react';
import Styled from 'styled-components/native';
import { ScrollView,Button, Text, View,StyleSheet,Image,FlatList,TouchableOpacity} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import PostMeeting from '~/Screens/SpaceShared/postpage';
import { NavigationContainer } from '@react-navigation/native';
import SubMainMeeting from '~/Screens/SpaceShared/detailpage';
import location from '~/Screens/SpaceShared/location';
import SpaceDetail from './detailsample/detail';
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
 { id: 5, text: '[강남] 비티에스와 함께하는 쿠킹 클래스 입니다 많은 후원 부탁드리고 많은 인원모집합니다.',
    lastdate: '2020-05-30 18:20 까지',
   imguri:'https://www.pngarts.com/files/5/BTS-PNG-Picture.png',
   peoplecnt:'남자 4/5 여자 5/5'
 },
 { id: 5, text: '[강남] 비티에스와 함께하는 쿠킹 클래스 입니다 많은 후원 부탁드리고 많은 인원모집합니다.',
    lastdate: '2020-05-30 18:20 까지',
   imguri:'https://www.pngarts.com/files/5/BTS-PNG-Picture.png',
   peoplecnt:'남자 4/5 여자 5/5'
 },
]



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
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      datacnt: [],
      idx:[],
      isLoading: true
    };
  }

componentDidMount() {
    console.log("@@@loading list");
    fetch('http://192.168.0.30:8082/meetings/1/1/sort/ALL')
      .then(response => response.json())
      .then(json => {
        console.log(">>>>>>>>>", json);
        this.setState({ data: json.data });
        this.setState({ datacnt: json.len });
        this.setState({ idx: json.data.idx });
      })
      .catch(error => console.error(error))
      .finally(() => {
        this.setState({ isLoading: false });
      });
      console.log("@@@finish load list");
  }

  
  renderItem = ({ item }) => {
    const {navigation} =this.props;
    console.log('item >>>>> ' + item.title);
    return (
      <View style={styles.container2}>
              <View style={styles.imgbox}>

              <Image style={{flex:0.8, borderTopLeftRadius:20, borderTopRightRadius:20,}}source={{uri:item.imgUrl }}/>

             </View>
             <View style={{flex: 0.5, flexDirection:'row', justifyContent: 'space-between'}}>
             <Text > 남자 : {item.manNum}/{item.manMax} 여자 : {item.femNum} /{item.femMax} </Text> 
             <Text > {item.endDate}  </Text>
              </View>
             <View style={{flex: 1}}>
                  <View style={styles.infobox}>
                  <Text style={{width: 250,margin:10}} ellipsizeMode='tail' numberOfLines={2}> {item.title} </Text>  
                  <StyleButton onPress={() => {navigation.navigate('Detailpage', { itemId: item.idx },
                     ) }}>
                    
                    <Text style={{textAlign:'center',}} >참여하기</Text>
                  </StyleButton> 
                </View>
              </View>
        </View>

    )
  }

  render() {
    const {navigation} =this.props;
      return (

      <View style={styles.container}>

         <View style={styles.excontainer}>
         
          </View>
         <View style={styles.totoalsortbar}>
          <Text>총 : {this.state.datacnt}개 </Text>
         </View> 
        
        <FlatList 
        style={styles.container}
        data={this.state.data}
        renderItem={this.renderItem}
        keyExtractor={({ id }, index) => id}
        />
         <TouchableOpacity onPress={() => {navigation.navigate('PostMeeting', { idx: this.state.idx });}} style={styles.fab}>
          <Text style={styles.fabIcon}>+</Text>
          console.log(this.state.idx)
        </TouchableOpacity>
        
       </View>
    );
  }
}


// function SpaceDetail({route}) {
//   const { itemId } = route.params;
//   const otherParam = route.params.itemID;
//   return (
//     <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
//       <Text> this is Space Detail</Text>
//       <Text>itemId: {JSON.stringify(itemId)}</Text>
//       <Text>otherParam: {otherParam}</Text>
//     </View>
//   );
// }

const SpaceStack = createStackNavigator();

const mainSpaceShared=()=> {
  return (
    <SpaceStack.Navigator>
      <SpaceStack.Screen name="장소대여" component={App} />
      <SpaceStack.Screen name="PostMeeting" component={PostMeeting}
        options={{title: '디테일이 살아있음'}}/>
      {/* <SpaceStack.Screen name="Detailpage" component={SpaceDetail} */}
      <SpaceStack.Screen name="Detailpage" component={SubMainMeeting}
        options={{title: '살아있음'}}
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
    height: 30,
    marginLeft: 10,
    marginTop: 5,
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
  fab: {
    position: 'absolute',
    width: 56,
    height: 56,
    alignItems: 'center',
    justifyContent: 'center',
    right: 20,
    bottom: 20,
    backgroundColor: '#03A9F4',
    borderRadius: 30,
    elevation: 8
  },
  fabIcon: {
    fontSize: 40,
    color: 'white'
  },
});
  