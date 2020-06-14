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
  top: 40px;
  margin-left: 20px;
`;

const InputContainer = Styled.View`
  margin-top: 50px;
  align-items: center;
`;

const ButtonContainer = Styled.View`
  margin-top: 20px;
  align-items: center;
`;

const LabelTitle = Styled.Text`
  font-size: 18px;  
`;

const Label = Styled.Text``;

type NavigationProp = StackNavigationProp<ProfileTabParamList, 'Profile'>

interface Props {
  navigation: NavigationProp;
}

const SetNewPw = ({navigation}: Props) => {

    return (
        <Container>
          <LabelContainer>
            <LabelTitle>새 비밀번호를 입력해 주세요.</LabelTitle>
          </LabelContainer>
          <InputContainer>
          <Input
              style={{width: 400}}
              placeholder="비밀번호 입력"
              secureTextEntry={true}
          />
          </InputContainer>
          <LabelContainer>
            <LabelTitle>비밀번호 확인을 위해 다시 한 번 입력해 주세요.</LabelTitle>
          </LabelContainer>
          <InputContainer>
          <Input
            style={{width: 400}}
            placeholder="비밀번호 확인"
            secureTextEntry={true}
          />
          </InputContainer>
          <ButtonContainer>
          <Button
            label="다음"
            style={{width: 150, height: 45}}
            onPress={()=> {navigation.navigate('ReLogin');}}
          />
          </ButtonContainer>
        </Container>
    );
};

export default SetNewPw;