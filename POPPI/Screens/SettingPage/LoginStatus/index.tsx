import React, {useContext} from 'react';
import Styled from 'styled-components/native';
import LoginInfo from '~/Screens/SettingPage/LoginInfo';
import Button from '~/Components/Button';
import {UserContext} from '~/Context/User';



import Input from '~/Components/Input';
import IconButton from '~/Components/IconButton';
import Tab from '~/Components/Tab';
import { ScaleFromCenterAndroid } from '@react-navigation/stack/lib/typescript/src/TransitionConfigs/TransitionPresets';

const Container = Styled.View`
  background-color: #FFFFFF;
  flex: 1;
`;

const LabelContainer = Styled.View`
  flex-direction: row;
  alignItems: center;
  top: 50px;
  background-color: #FEFFFF;
  border-color: #d6d6d6;
  padding-left: 70px;

`;

const NicknameContainer = Styled.View`
  margin-right: 10px;
`;

const ProfileItem = Styled.View`
  flex: 1;
  align-items: center;
`;

const Label = Styled.Text``;

const BottomContainer = Styled.TouchableOpacity`
  align-items: center;
  top: 500px;
  margin-left: 50px;
  margin-right: 50px;
`;

interface Props {
    nickname: string;
}



const LoginStatus = ({nickname}: Props) => {
    const {logout} = useContext<IUserContext>(UserContext);

  return (
    <Container>
        <LabelContainer>
            <NicknameContainer>
            <LoginInfo
                nickname="POPPI"
            />
            </NicknameContainer>
         <Label>{nickname} 님으로 로그인 되어 있습니다.</Label>
      </LabelContainer>
      <BottomContainer>
        <Button onPress={() => {
            logout();
            }}
            label="로그아웃"
            style={{
                borderRadius: 4,
                backgroundColor: '#FEFFFF',
                borderWidth: 1,
                borderColor: '#D3D3D3',
                alignItems: 'center',
            }}
            color="#ff0000"
            
            />
      </BottomContainer>
    </Container>
  );
};

export default LoginStatus;