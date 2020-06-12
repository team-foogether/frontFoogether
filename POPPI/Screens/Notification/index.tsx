import React from 'react';
import Styled from 'styled-components/native';

const Container = Styled.View`
  flex: 1;
  background-color: #FFFFFF;
`;

const LabelContainer = Styled.TouchableOpacity`
  padding: 25px;
  margin-top: 16px;
  margin-left: 10px;
  margin-right: 10px;
  background-color: #f7f7f7;
  border-radius: 4px;
`;

const ProfileItem = Styled.View`
  flex: 1;
  align-items: center;
`;

const Label = Styled.Text`
`;

import Input from '~/Components/Input';
import IconButton from '~/Components/IconButton';
import Tab from '~/Components/Tab';


const Notification = () => {
  return (
    <Container>
      <LabelContainer>
        <Label>06/11(목) 클라이언트 v.2.5.0 업데이트 안내</Label>
      </LabelContainer>
      <LabelContainer>
        <Label>06/05(금) 악의적인 사용자 제재 안내</Label>
      </LabelContainer>

    </Container>
  );
};

export default Notification;