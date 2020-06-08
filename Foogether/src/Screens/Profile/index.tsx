import React, {useState, useContext, useLayoutEffect, useEffect} from 'react';
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

import {RandomUserDataContext} from '~/Context/RandomUserData';
import IconButton from '~/Components/IconButton';
import IconButton2 from '~/Components/IconButton2';
import IconButton3 from '~/Components/IconButton3';

import ProfileHeader from './ProfileHeader';
import ProfileBody from './ProfileBody';
import Input from '~/Components/Input';
import Button from '~/Components/Button';
import Tab from '~/Components/Tab';


const ProfileItem = Styled.View`
flex: 1;
align-items: center;

`;

const IconContainer = Styled.View`
flex-direction: row;
margin-top: 30px;
border: 0.5px;
border-color: #c4c4c4
background-color: #fcfcfc;
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
  border-color: #c4c4c4;
`;

const LabelTitle = Styled.Text`
  font-size: 20px;
  color: #363636;
  padding: 15px;
  margin-left: 8px;
  margin-top: 10px;
  margin-bottom: -20px;
`;

const NextIcon = Styled.View`
  margin-left: 340px;
  opacity: 0.4;
  margin-top: -25px;
  

  
  
`;






type NavigationProp = StackNavigationProp<ProfileTabParamList, 'Profile'>;
interface Props {
  navigation: NavigationProp;
}

const Profile = ({navigation}: Props) => {
  const {getMyFeed} = useContext(RandomUserDataContext);
  const [feedList, setFeedList] = useState<Array<IFeed>>([]);
  const imageWidth = Dimensions.get('window').width / 3;
  const tabs = [
    require('~/Assets/Images/ic_grid_image_focus.png'),
    require('~/Assets/Images/ic_tag_image.png'),
  ];

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

  useEffect(() => {
    setFeedList(getMyFeed(24));
  }, []);


  const isBottom = ({
    layoutMeasurement,
    contentOffset,
    contentSize,
  }: NativeScrollEvent) => {
    return layoutMeasurement.height + contentOffset.y >= contentSize.height;
  };

  const MyProd = ({})


  return (
    
    <ScrollView
      stickyHeaderIndices={[2]}
      onScroll={(event: NativeSyntheticEvent<NativeScrollEvent>) => {
        if (isBottom(event.nativeEvent)) {
          setFeedList([...feedList, ...getMyFeed(24)]);
        }
      }}>
      <ProfileHeader
        image="http://api.randomuser.me/portraits/women/68.jpg"
        nickname="POPPI"
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
              <LabelTitle>알림</LabelTitle>
              <NextIcon>
                <IconButton3 iconName="next" />
              </NextIcon>
            </LabelContainer>
            <LabelContainer>
              <LabelTitle>설정</LabelTitle>
              <NextIcon>
                <IconButton3 iconName="next" />
              </NextIcon>
            </LabelContainer>
            <LabelContainer>
              <LabelTitle>문의하기</LabelTitle>
              <NextIcon>
                <IconButton3 iconName="next" />
              </NextIcon>
            </LabelContainer>
            <LabelContainer>
              <LabelTitle>공지사항</LabelTitle>
              <NextIcon>
                <IconButton3 iconName="next" />
              </NextIcon>
            </LabelContainer>
        </FeedContainer>
    
    </ScrollView>
  );
};

export default Profile;