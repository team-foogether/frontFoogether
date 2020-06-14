import React from 'react';
import Styled from 'styled-components/native';
import { StackNavigationProp } from '@react-navigation/stack';
import Button from '~/Components/Button';
import { NavigationContainer } from '@react-navigation/native';

const Container = Styled.View`
  flex: 1;
  background-color: #ffffff;
`;

const LabelContainer = Styled.View`
  margin-top: 50px;
  margin-left: 20px;
`;

const ButtonContainer = Styled.View`
  align-items: center;
`;

const LabelTitle = Styled.Text`
  font-size: 25px;
  margin-bottom: 16px;
`;

const Label = Styled.Text`
  font-size: 20px;
  margin-bottom: 4px;
`;


type NavigationProp = StackNavigationProp<ProfileTabParamList, 'Profile'>

interface Props {
    navigation: NavigationProp;
}

const SetAuth = ({navigation}: Props) => {
    return (
        <Container>
            <LabelContainer>
                <LabelTitle>위치, 사진 등의 권한 설정하기</LabelTitle>
                <Label>휴대전화의</Label>
                <Label>[ 설정 > 애플리케이션 > Foogether > 권한 ] 에서</Label>
                <Label>위치, 카메라 권한에 엑세스 해주세요.</Label>
            </LabelContainer>
            <ButtonContainer>
            <Button
                label="확인"
                style={{width: 150, height: 45, marginTop: 30}}
                onPress={() => {navigation.navigate('SettingPage');}}
            />
            </ButtonContainer>
        </Container>
    );
};

export default SetAuth;