import React from 'react';
import Styled from 'styled-components/native';
import {StackNavigationProp} from '@react-navigation/stack';
import Input from '~/Components/Input';
import Button from '~/Components/Button';

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

const InputContainer = Styled.View`
  align-items: center;
`;

const LabelTitle = Styled.Text`
  font-size: 25px;
  margin-bottom: 20px;
`;

const Label = Styled.Text`
  font-size: 18px;
  margin-bottom: 4px;
`;


type NavigationProp = StackNavigationProp<ProfileTabParamList, 'Profile'>

interface Props {
    navigation: NavigationProp;
}

const CheckEmail = ({navigation}: Props) => {
    return (
        <Container>
            <LabelContainer>
                <LabelTitle>이메일 인증</LabelTitle>
                <Label>입력하신 이메일로 인증번호를 전송하였습니다.</Label>
                <Label>확인 후 인증번호를 입력해 주세요.</Label>
            </LabelContainer>
            <InputContainer>
                <Input
                    style={{width: 400, marginTop: 20}}
                    placeholder="인증번호 입력"
                />
            </InputContainer>
            <ButtonContainer>
                <Button
                    label="확인"
                    style={{width: 150, height: 45, marginTop: 30}}
                    onPress={() => {navigation.navigate('SuccessEmail');}}
                />
            </ButtonContainer>
        </Container>
    );
};

export default CheckEmail;
