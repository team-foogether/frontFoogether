import React from 'react';
import Styled from 'styled-components/native';
import Button from '~/Components/Button';
import Input from '~/Components/Input';
import {StackNavigationProp} from '@react-navigation/stack';

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

type NavigationProp = StackNavigationProp<ProfileTabParamList, 'Profile'>

interface Props {
    navigation: NavigationProp;
}

const Email = ({navigation}: Props) => {
    return (
        <Container>
            <LabelContainer>
                <LabelTitle>이메일 변경</LabelTitle>
            </LabelContainer>
            <InputContainer>
            <Input
                style={{width: 400, height: 50, marginBottom: 30}}
                placeholder="이메일 입력        example) POPPI162@naver.com"
            />
            </InputContainer>
            <ButtonContainer>
                <Button
                    label="인증 메일 보내기"
                    style={{width: 150, height: 45}}
                    onPress={() => {navigation.navigate('CheckEmail');}}
                />
            </ButtonContainer>
        </Container>
    );
};

export default Email;