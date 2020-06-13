import React from 'react';
import Styled from 'styled-components/native';
import {StackNavigationProp} from '@react-navigation/stack';
import Input from '~/Components/Input';
import Button from '~/Components/Button';


const Container = Styled.View`
  flex: 1;

`;

const LabelContainer = Styled.View`
  left: 20px;
  margin-top: 50px;
`;

const InputContainer = Styled.View`
  align-items: center;
`;

const LabelTitle = Styled.Text`
  font-size: 23px;
  margin-bottom: 16px;
  left: 15px;
`;

const Label = Styled.Text`
  font-size: 17px;
  left: 20px;
  color: #636363;
`;

const ButtonContainer = Styled.View`
  align-items: center;
`;

type NavigationProp = StackNavigationProp<ProfileTabParamList, 'Profile'>;

interface Props {
    navigation: NavigationProp;
}

const ChangePassword = ({navigation}: Props) => {

    return (
        <Container>
            <LabelContainer>
                <LabelTitle>비밀번호 확인</LabelTitle>
                <Label>안전한 비밀번호 변경을 위해{"\n"}현재 비밀번호를 입력해 주세요.</Label>
            </LabelContainer>
            <InputContainer>
            <Input style={{marginBottom: 16, marginTop: 20, width: 400, }} secureTextEntry={true} placeholder="비밀번호 입력" />
            </InputContainer>
            <ButtonContainer>
                <Button
                    label="다음"
                    style={{width: 150, height: 45}}   
                    onPress={() => {navigation.navigate('SetNewPw');}}             
                />
            </ButtonContainer>
        </Container>
    )

}

export default ChangePassword