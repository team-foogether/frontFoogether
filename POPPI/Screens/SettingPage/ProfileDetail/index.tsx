import React from 'react';
import Styled from 'styled-components/native';
import IconButton6 from '~/Components/IconButton6';
import {StackNavigationProp} from '@react-navigation/stack';



const Container = Styled.View`
  flex: 1;
  background-color: #FFFFFF;
`;

const LabelContainer = Styled.TouchableOpacity`
  flex-direction: row;
  border: 1px;
  border-color: #ebebeb;
  top: 35px;
  padding: 6px;
  margin-bottom: 5px;
`;

const ButtonController = Styled.TouchableOpacity`
  flex-direction: row;
  left: 316px;
`;

const ButtonController1 = Styled.TouchableOpacity`
  flex-direction: row;
  align-content: flex-end;
`;

const ButtonController2 = Styled.TouchableOpacity`
  flex-direction: row;
  left: 315px;
`;

const ButtonController3 = Styled.TouchableOpacity`
  flex-direction: row;
  left: 292px;
`;

const Label = Styled.Text`
  font-size: 18px;
  margin-top: 10px;
  margin-bottom: 10px;
  left: 15px;
`;

const Label1 = Styled.Text`
  font-size: 18px;
  margin-top: 10px;
  margin-bottom: 10px;
  left: 15px;
  color: #ff0000;
`;

const SubLabelContainer = Styled.View`
  flex: 1;
  top: 10px;
  left: 15px;
`;

const SubLabel = Styled.Text`
  align-self: flex-end;
  font-size: 13px;
  color: #b5b3b3;
  top: 10px;
  right: 35px;
`;

type NavigationProp = StackNavigationProp<ProfileTabParamList, 'Profile'>;

interface Props {
  navigation: NavigationProp;
}


const ProfileDetail = ({navigation}: Props) => {
  return (
    <Container>

        <LabelContainer>
            <Label>연락처</Label>
            <SubLabelContainer>
                <SubLabel>010-9508-2490</SubLabel>
            </SubLabelContainer>
        <ButtonController1>
            <IconButton6 iconName="next" />
        </ButtonController1>
        </LabelContainer>

        <LabelContainer>
            <Label>이메일</Label>
            <SubLabelContainer>
                <SubLabel>wlswhr160@naver.com</SubLabel>
            </SubLabelContainer>
        <ButtonController1>
            <IconButton6 iconName="next" />
        </ButtonController1>
        </LabelContainer>

        <LabelContainer>
            <Label>SNS 연동</Label>
            <ButtonController2>
                <IconButton6 iconName="next" />
            </ButtonController2>
        </LabelContainer>

        <Label></Label>

        <LabelContainer onPress={() => {navigation.navigate('ChangePassword');}}>
            <Label>비밀번호 변경</Label>
        <ButtonController3>
            <IconButton6 onPress={() => {navigation.navigate('ChangePassword');}} iconName="next" />
        </ButtonController3>
        </LabelContainer>

        <LabelContainer onPress={() => {navigation.navigate('Withdrawal');}}>
            <Label1>회원 탈퇴</Label1>
            <ButtonController >
                <IconButton6 onPress={() => {navigation.navigate('Withdrawal');}} iconName="next" />
            </ButtonController>
        </LabelContainer>
            

    </Container>
  );
};

export default ProfileDetail;