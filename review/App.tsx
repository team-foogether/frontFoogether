import React from 'react';
import {StatusBar} from 'react-native';

import Navigator from '~/Screens/Navigator';
import {UserContextProvider} from '~/Context/User';
import {RandomUserDataProvider} from '~/Context/RandomUserData';

interface Props {}

const App = ({}: Props) => {
  return (
      // 상태바의 색깔을 조절하기 위해 StatusBar 를 사용함
      
    <RandomUserDataProvider cache={true}>
      <UserContextProvider>
        <StatusBar barStyle="default" /> 
        <Navigator />
      </UserContextProvider>
    </RandomUserDataProvider>
  );
};
export default App;