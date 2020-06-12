import React, {useContext} from 'react';
import {Image} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {UserContext} from '~/Context/User';
import SearchBar from '~/Components/SearchBar';
import Loading from '~/Components/Loading';

import Login from '~/Screens/Login';
import PasswordReset from '~/Screens/PasswordReset';
import Signup from '~/Screens/Signup';

import MyFeed from '~/Screens/MyFeed';
import Feeds from '~/Screens/Feeds';
import FeedListOnly from '~/Screens/FeedListOnly';
import Upload from '~/Screens/Upload';
import Profile from '~/Screens/Profile';
import CustomDrawer from '~/Screens/Drawer';
import mainProduct from './Product';
import mainSpaceShared from './SpaceShared';
import mainMeetings from './Meetings';
import mainHome from './MainHome';
import mainSearch from './Search';

import MyProd from '~/Screens/MyProd';
import MyMeet from '~/Screens/MyMeet';
import MySpace from '~/Screens/MySpace';

import MeetProgress from '~/Screens/MyMeet/MeetProgress';
import MeetLike from '~/Screens/MyMeet/MeetLike';
import MeetDone from '~/Screens/MyMeet/MeetDone';
import MeetReview from '~/Screens/MyMeet/MeetReview';
import ProdProgress from '~/Screens/MyProd/ProdProgress';
import ProdLike from '~/Screens/MyProd/ProdLike';
import ProdBuyList from '~/Screens/MyProd/ProdBuyList';
import ProdReview from '~/Screens/MyProd/ProdReview';
import SpaceProgress from '~/Screens/MySpace/SpaceProgress';
import SpaceMyShare from '~/Screens/MySpace/SpaceMyShare';
import SpaceLike from '~/Screens/MySpace/SpaceLike';
import SpaceDone from '~/Screens/MySpace/SpaceDone';
import SpaceReview from '~/Screens/MySpace/SpaceReview';
import PushPage from '~/Screens/PushPage';
import SettingPage from '~/Screens/SettingPage';
import Notification from '~/Screens/Notification';
import QuestionPage from '~/Screens/QuestionPage';
import Question from '~/Screens/QuestionPage/Question';
import MyQuestion from '~/Screens/QuestionPage/MyQuestion';
import EditProfile from '~/Screens/EditProfile';
import LoginStatus from '~/Screens/SettingPage/LoginStatus';
import ProfileDetail from '~/Screens/SettingPage/ProfileDetail';



const Stack = createStackNavigator();
const BottomTab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

//화면에 표시될 컴포넌트 중 내비게이션 해더가 필요한 컴포넌트는
// 기본적으로 스택 내비게이션으로 감싸주었다.
const LoginNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Signup" component={Signup} />
      <Stack.Screen name="PasswordReset" component={PasswordReset} />
    </Stack.Navigator>
  );
};


const MyFeedTab = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="MyFeed"
        component={MyFeed}
        options={{title: 'Foogether'}}
      />
    </Stack.Navigator>
  );
};




const FeedsTab = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Feeds"
        component={Feeds}
        options={{
          header: () => <SearchBar />,
        }}
      />
      <Stack.Screen
        name="FeedListOnly"
        component={FeedListOnly}
        options={{
          headerBackTitleVisible: false,
          title: '둘러보기',
          headerTintColor: '#292929',
        }}
      />
    </Stack.Navigator>
  );
};

const UploadTab = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Upload"
        component={Upload}
        options={{title: '사진 업로드'}}
      />
    </Stack.Navigator>
  );
};

const ProfileTab = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Profile"
        component={Profile}
        options={{title: 'Profile'}}
      />
      <Stack.Screen
          name="MyProd"
          component={MyProd}
          options={{title: 'Product'}}
        />
        <Stack.Screen
          name="MyMeet"
          component={MyMeet}
          options={{title: '모임'}}
        />
         <Stack.Screen
          name="MySpace"
          component={MySpace}
          options={{title: 'SpaceShared'}}
        />
        <Stack.Screen
          name="MProgress"
          component={MeetProgress} 
          options={{title: '진행중인 모임'}}
        />
        <Stack.Screen
          name="MLike"
          component={MeetLike}
          options={{title: '찜한 모임'}}
        />

        <Stack.Screen
          name="MDone"
          component={MeetDone}
          options={{title: '완료된 모임'}}
        />
        <Stack.Screen
          name="MReview"
          component={MeetReview}
          options={{title: '모임 후기'}}
        />
        <Stack.Screen
          name="PProgress"
          component={ProdProgress}
          options={{title: '나의 판매글'}}
        />
        <Stack.Screen
          name="PLike"
          component={ProdLike}
          options={{title: '나의 찜목록'}}
        />
        <Stack.Screen
          name="PBuyList"
          component={ProdBuyList}
          options={{title: '나의 구매 목록'}}
        />
        <Stack.Screen
          name="PReview"
          component={ProdReview}
          options={{title: '구매 후기'}}
        />
         <Stack.Screen
          name="SProgress"
          component={SpaceProgress}
          options={{title: '예약한 공간'}}
        />
         <Stack.Screen
          name="SMyShare"
          component={SpaceMyShare}
          options={{title: '내가 공유한 공간'}}
        />
         <Stack.Screen
          name="SLike"
          component={SpaceLike}
          options={{title: '나의 찜한 공간'}}
        />
         <Stack.Screen
          name="SDone"
          component={SpaceDone}
          options={{title: '완료된 공간'}}
        />
         <Stack.Screen
          name="SReview"
          component={SpaceReview}
          options={{title: '공간 후기'}}
        />
        <Stack.Screen
          name="PushPage"
          component={PushPage}
          options={{title: '알림'}}
        />
        <Stack.Screen
          name="SettingPage"
          component={SettingPage}
          options={{title: '설정'}}
        />
         <Stack.Screen
          name="QuestionPage"
          component={QuestionPage}
          options={{title: '문의하기'}}
        />
         <Stack.Screen
          name="Question"
          component={Question}
          options={{title: '문의하기'}}
        />
         <Stack.Screen
          name="MyQuestion"
          component={MyQuestion}
          options={{title: '내 문의글'}}
        />
        <Stack.Screen
          name="Notification"
          component={Notification}
          options={{title: '공지사항'}}
        />
        <Stack.Screen
          name="EditProfile"
          component={EditProfile}
          options={{title: '프로필 편집'}}
        />
        <Stack.Screen
          name="LoginStatus"
          component={LoginStatus}
          options={{title: '로그인 정보'}}
        />
        <Stack.Screen
          name="ProfileDetail"
          component={ProfileDetail}
          options={{title: '내 계정 설정'}}
        />
    </Stack.Navigator>
  );
};



//메인내비게이션이 될 탭 내비게이션을 다음과 같이 설정하였다.

const MainTabs = () => {
  return (
    <BottomTab.Navigator tabBarOptions={{showLabel: false}}>
      
      <BottomTab.Screen
        name="Product"
        component={mainProduct}
        options={{
          tabBarIcon: ({color, focused}) => (
           
            <Image
              source={
                focused
                ? require('~/Assets/Images/Tabs/ic_favorite.png')
                : require('~/Assets/Images/Tabs/ic_favorite_outline.png')
              }
            />
          ),
        }}
      />
      <BottomTab.Screen
        name="mainSpaceShared"
        component={mainSpaceShared}
        options={{
          tabBarLabel: 'Third',
          tabBarIcon: ({color, focused}) => (
            <Image
              source={
                focused
                ? require('~/Assets/Images/Tabs/ic_favorite.png')
                : require('~/Assets/Images/Tabs/ic_favorite_outline.png')
              }
            />
          ),
        }}
      />

      <BottomTab.Screen
        name="mainHome"
        component={mainHome}
        options={{
          tabBarIcon: ({color, focused}) => (
            <Image
              source={
                focused
                  ? require('~/Assets/Images/Tabs/ic_home.png')
                  : require('~/Assets/Images/Tabs/ic_home_outline.png')
              }
            />
          ),
        }}
      />
      <BottomTab.Screen
         name="mainMeetings"
         component={mainMeetings}
        options={{
          tabBarIcon: ({color, focused}) => (
            <Image
              source={
                focused
                  ? require('~/Assets/Images/Tabs/ic_favorite.png')
                  : require('~/Assets/Images/Tabs/ic_favorite_outline.png')
              }
            />
          ),
        }}
      />
      <BottomTab.Screen
        name="Profile"
        component={ProfileTab}
        options={{
          tabBarIcon: ({color, focused}) => (
            <Image
              source={
                focused
                  ? require('~/Assets/Images/Tabs/ic_profile.png')
                  : require('~/Assets/Images/Tabs/ic_profile_outline.png')
              }
            />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
};

const MainNavigator = () => {
  return (
      // 드로어를 오른쪽으로 표시하기 위해 right 로 설정
      //타입은 슬라이딩
      //
    <Drawer.Navigator
      drawerPosition="right"
      drawerType="slide"
      drawerContent={(props) => <CustomDrawer props={props} />}>
      <Drawer.Screen name="MainTabs" component={MainTabs} />
    </Drawer.Navigator>
  );
};


export default () => {
  const {isLoading, userInfo} = useContext<IUserContext>(UserContext);

  if (isLoading === false) {
    return <Loading />;
  }

  return (
    <NavigationContainer>
      {userInfo ? <MainNavigator /> : <LoginNavigator />}
    </NavigationContainer>
  );
};