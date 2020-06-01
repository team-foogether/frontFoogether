import React from 'react';
import Styled from 'styled-components/native';
import {StackNavigationProp} from '@react-navigation/stack';
interface Props {
  navigation: NavigationProp;
}

const Container = Styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const Label = Styled.Text``;

const mainMeetings = () => {
  return (
    <Container>
      <Label>This is Meetings</Label>
      
    </Container>
  );
};

export default mainMeetings;