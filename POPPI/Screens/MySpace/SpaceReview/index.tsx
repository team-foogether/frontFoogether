import React from 'react';
import Styled from 'styled-components/native';

const Container = Styled.View`
  flex: 1;
  background-color: #ffffff;
  justify-content: center;
  align-items: center;
`;

const LabelContainer = Styled.View`
  flex-direction: row;
`;

const ProfileItem = Styled.View`
  flex: 1;
  align-items: center;
`;

import Input from '~/Components/Input';
import IconButton from '~/Components/IconButton';
import Tab from '~/Components/Tab';

const Label = Styled.Text``;

const SpaceReview = () => {
  return (
    <Container>
      <Label>This is SReview</Label>
    </Container>
  );
};

export default SpaceReview;