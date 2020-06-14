import React, {useContext} from 'react';
import { UserContext } from '~/Context/User';
import Styled from 'styled-components/native';
import Button from '~/Components/Button';
import { StackNavigationProp } from '@react-navigation/stack';

const Container = Styled.View`
  flex: 1;
  background-color: #ffffff;
`;

const LabelContainer = Styled.View`
  top: 50px;
`;

const ButtonContainer = Styled.View`
  margin-top: 100px;
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


const ReLogin = () => {
    const {logout} = useContext<IUserContext>(UserContext);

    return (
        <Container>
            <LabelContainer>
                <LabelTitle>비밀번호 변경 완료!</LabelTitle>
                <Label>새 비밀번호로 로그인해 주세요.</Label>
            </LabelContainer>
            <ButtonContainer>
            <Button
              label="확인"
              style={{width: 150, height: 45}}
              onPress={() => {
                logout(); }}
        />
        </ButtonContainer>
        </Container>
    );
};

export default ReLogin;