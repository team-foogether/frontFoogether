import React from 'react';
import Styled from 'styled-components/native';
import Button from '~/Components/Button';
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

const LabelTitle = Styled.Text`
  font-size: 25px;
  text-align: center;
`;

const Label = Styled.Text`
  font-size: 20px;
  margin-top: 20px;
  text-align: center;
`;

type NavigationProp = StackNavigationProp<ProfileTabParamList, 'Profile'>

interface Props {
    navigation: NavigationProp;
}

const SuccessEmail = ({navigation}: Props) => {
    return (
        <Container>
            <LabelContainer>
                <LabelTitle>이메일 변경 성공!</LabelTitle>
                <Label>성공적으로 이메일이 변경되었습니다.</Label>
            </LabelContainer>
            <ButtonContainer>
                <Button
                    label="돌아가기"
                    style={{width: 150, height: 45, marginTop: 30}}
                    onPress={() => {navigation.navigate('ProfileDetail');}}
                />
            </ButtonContainer>
        </Container>
    );
};

export default SuccessEmail;