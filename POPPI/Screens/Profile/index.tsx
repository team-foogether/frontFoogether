import React, {useState, useContext, useLayoutEffect, useEffect, Children} from 'react';
import {
  NativeScrollEvent,
  Image,
  Dimensions,
  NativeSyntheticEvent,
  ScrollView,
  ImageSourcePropType,
} from 'react-native';
import Styled from 'styled-components/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {DrawerActions} from '@react-navigation/native';
import {StyleSheet} from 'react-native';


import {RandomUserDataContext} from '~/Context/RandomUserData';
import IconButton from '~/Components/IconButton';
import IconButton2 from '~/Components/IconButton2';
import IconButton4 from '~/Components/IconButton4';
import IconButton5 from '~/Components/IconButton5';

import ProfileBody from './ProfileBody';
import Input from '~/Components/Input';
import Button from '~/Components/Button';
import Tab from '~/Components/Tab';

const Container = Styled.View`
  flex: 1;
  background-color: #FFFFFF;
`;

const ProfileImageContainer = Styled.View`
  padding: 16px;
  margin-bottom: -16px;
`;

const ProfileImage = Styled.Image`
  border-radius: 100px;
`;

const ProfileItem = Styled.View`
  flex: 1;
  align-items: center;
`;

const ProfileContent = Styled.View`
  flex: 1;
  padding: 16px;
  justify-content: space-around;
`;


const IconContainer = Styled.View`
flex-direction: row;
margin-top: 30px;
border: 0.5px;
border-color: #c4c4c4
background-color: #ffffff;
padding: 10px;
`;


const IconCombi1 = Styled.View`
width: 100px;
flex-direction: row;
color: #363636;
border-color: #c4c4c4;
border-width: 1px;
border-radius: 10px;
border-bottom-width: 1px;
`;

const IconCombi2 = Styled.View`
width: 100px;
flex-direction: row;
color: #363636;
border-color: #c4c4c4;
border-width: 1px;
border-radius: 10px;
border-bottom-width: 1px;
`;

const IconCombi3 = Styled.View`
width: 100px;
flex-direction: row;
color: #363636;
border-color: #c4c4c4;
border-width: 1px;
border-radius: 10px;
border-bottom-width: 1px;
`;

const FeedContainer = Styled.View`
`;

const LabelContainer = Styled.TouchableOpacity`
  border-bottom-width: 1px;
  border-color: #ebebeb;
  width: 1300px;
`;

const LabelContainers = Styled.TouchableOpacity`
  border-color: #c4c4c4;
`;

const LabelTitle = Styled.Text`
  font-size: 20px;
  margin-top: -100px;
  margin-left: 160px;
`;

const NextIcon = Styled.View`
  margin-left: 340px;
  opacity: 0.3;
  margin-top: -25px;
`;



type NavigationProp = StackNavigationProp<ProfileTabParamList, 'Profile'>;

interface Props {
  image: string;
  nickname: string;
  navigation: NavigationProp;
}


const Profile = ({image, nickname, navigation}: Props) => {
  const {getMyFeed} = useContext(RandomUserDataContext);
  const [feedList, setFeedList] = useState<Array<IFeed>>([]);
  const imageWidth = Dimensions.get('window').width / 3;

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <IconButton
          iconName="menu"
          onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
        />
      ),
    });
  }, []);

  const styles = StyleSheet.create({
    container: {
      backgroundColor: '#2c3e50',
    },
  });

  return (
    
    <Container>
    <ScrollView>
      <ProfileImageContainer>
        <ProfileImage source={{uri: "http://api.randomuser.me/portraits/women/68.jpg"}} style={{width: 100, height: 100}} />
      </ProfileImageContainer>
      <ProfileContent>
        <LabelContainers>
            <LabelTitle>POPPI 님, 안녕하세요!</LabelTitle>
        </LabelContainers>
      </ProfileContent>    
        <Button onPress={() => {navigation.navigate('EditProfile');}}
          label="프로필 편집"
          style={{
            borderRadius: 4,
            backgroundColor: '#FEFFFF',
            borderWidth: 1,
            borderColor: '#D3D3D3',
            height: 30,
            width: 200,
            marginLeft: 160,
            marginTop: -70,
          }}
          color="#292929"
        />
      <IconContainer>
          <ProfileItem>
          <IconCombi1 >
          <IconButton2 onPress={() => {navigation.navigate('MyProd');}} iconName="prod" label="판매"/>
          </IconCombi1>
          </ProfileItem>
          <ProfileItem>
          <IconCombi2>
          <IconButton2 onPress={() => {navigation.navigate('MyMeet');}} iconName="meet" label="모임"/>
          </IconCombi2>
          </ProfileItem>
          <ProfileItem>
            <IconCombi3>
         <IconButton2 onPress={() => {navigation.navigate('MySpace');}} iconName="space" label="공간"/>
         </IconCombi3>
          </ProfileItem>
        </IconContainer>

        <FeedContainer>
            <LabelContainer>
              <IconButton4 onPress={() => {navigation.navigate('PushPage');}} iconName="next" label="알람" />
            </LabelContainer>
            <LabelContainer>
              <IconButton4 onPress={() => {navigation.navigate('SettingPage');}} iconName="next" label="설정" />
            </LabelContainer>
            <LabelContainer>
              <IconButton5 onPress={() => {navigation.navigate('QuestionPage');}} iconName="next" label="문의하기"/>
            </LabelContainer>
            <LabelContainer>
              <IconButton5 onPress={() => {navigation.navigate('Notification')}} iconName="next" label="공지사항" />
            </LabelContainer>
        </FeedContainer>
    </ScrollView>
    </Container>
  );
};

export default Profile;
