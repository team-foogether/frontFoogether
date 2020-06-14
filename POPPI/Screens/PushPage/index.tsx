import React, {useContext, useState, useEffect, createRef} from 'react';
import {
  Dimensions,
  NativeSyntheticEvent,
  NativeScrollEvent,
  ScrollView,
} from 'react-native';

import Styled from 'styled-components/native';

import {RandomUserDataContext} from '~/Context/RandomUserData';
import Tab from '~/Components/Tab';
import NotificationList from './PushList';

const ProfileTabContainer = Styled.SafeAreaView`
  flex-direction: row;
  background-color: #FEFFFF;
`;

const TabContainer = Styled.View`
  width: 100%;
  background-color: #ffffff;
  height: ${Dimensions.get('window').height}px;
`;

interface Props {}

const PushPage = ({}: Props) => {
  const {getMyFeed} = useContext(RandomUserDataContext);
  const [followingList, setFollowingList] = useState<Array<IFeed>>([]);
  const [myNotifications, setMyNotifications] = useState<Array<IFeed>>([]);
  const [tabIndex, setTabIndex] = useState<number>(1);
  const width = Dimensions.get('window').width;

  useEffect(() => {
    setFollowingList(getMyFeed(8));
  }, []);

  return (
    <TabContainer>
      <ScrollView
        
        contentOffset={{x: width, y: 0}}>
        <NotificationList
          id={0}
          width={width}
          data={followingList}
        />
      </ScrollView>
    </TabContainer>
  );
};

export default PushPage;