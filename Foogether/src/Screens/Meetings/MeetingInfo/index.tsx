import React from 'react';
import Styled from 'styled-components/native';
import {RouteProp} from '@react-navigation/native';
import PlaceShotList from './PlaceShotList';
import HeaderMInfo from './HeaderMInfo';
import IconButton from '~/Components/IconButton';
import {TodoListContextProvider} from '~/Context/TodoListContext';
import Todo from '~/Screens/MainHome/Todo';

import {
  Image,
  Dimensions,
  NativeSyntheticEvent,
  NativeScrollEvent,
  ScrollView,
} from 'react-native';


const Container = Styled.View`
`;

const Liked = Styled.TouchableOpacity`
  flex-direction: row;
  left: 270px;
`;

const Liked2 = Styled.View`
margin-top : 5px;
  flex-direction: row;
`;
const Label = Styled.Text`
margin-top : 2px;
font-size: 10px;
`;

const MeetingInfo = () => {
  return (
    <Container>
      <ScrollView>
      <PlaceShotList
        images={[
          "http://api.randomuser.me/portraits/women/68.jpg",
          "http://api.randomuser.me/portraits/women/68.jpg",
          "http://api.randomuser.me/portraits/women/68.jpg",
        ]}
      />
      <Liked>
        <Liked2>
        <Label>좋아요</Label>
          </Liked2>
          <Liked2>
          <Image
              source={
                require('~/Assets/Images/Tabs/ic_favorite_outline.png')
                ? require('~/Assets/Images/Tabs/ic_favorite.png')
                : require('~/Assets/Images/Tabs/ic_favorite_outline.png')
              }
            />
          </Liked2>
     
      </Liked>
      
      <HeaderMInfo deadline={"2020-06-20"} deadtime={2}
      title={"강남역에서 육회 만드실분"}
      content={"요번주 토요일에 강남역에서 육회만 드실 분        구해요"}
      space={"서울시 강남구 논현동"}
      />


<TodoListContextProvider>
      <Container>
        <Todo />
      </Container>
    </TodoListContextProvider>
    </ScrollView>

    </Container>
  );
};

export default MeetingInfo;