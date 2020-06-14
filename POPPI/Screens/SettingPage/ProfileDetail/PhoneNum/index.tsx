import React from 'react';
import Styled from 'styled-components/native'
import {StackNavigationProp} from '@react-navigation/stack';
import Button from '~/Components/Button';
import Input from '~/Components/Input';

const Container = Styled.View`  
  flex: 1;
  background-color: #ffffff;
`;

const LabelContainer = Styled.View`
  margin-top: 50px;
  margin-left: 20px;
`;

const InputContainer = Styled.View`
  margin-left: 10px;
`;

const InputContainer1 = Styled.View`
  align-items: center;
`;

const ButtonContainer = Styled.View`
  align-items: flex-end;
  margin-right: 20px;
`;

const LabelTitle = Styled.Text`
  font-size: 20px;
`;

type NavigationProp = StackNavigationProp<ProfileTabParamList, 'Profile'>

interface Props {
    navigation: NavigationProp;
}

const PhoneNum = ({navigation}: Props) => {
    return (
        <Container>
            <LabelContainer>
                <LabelTitle>전화번호 수정</LabelTitle>
            </LabelContainer>
            <InputContainer>
            <Input
                style={{width: 270, marginTop: 10}}
                placeholder="전화번호 입력 (- 없이)"
            />
            </InputContainer>
            <ButtonContainer>
            <Button
                label="인증 요청"
                style={{width: 100, height: 40, marginTop: -40}}
            />
            </ButtonContainer>
            <InputContainer1>
            <Input
                style={{width: 400, marginTop: 30}}
                placeholder="인증번호 입력"
            />
            <Button
                label="다음"
                style={{width: 150, height: 45, marginTop: 20}}
                onPress={() => {navigation.navigate('SuccessPn');}}
            />
            </InputContainer1>
        </Container>

    );
};

export default PhoneNum;