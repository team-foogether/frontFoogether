import React from 'react';
import Styled from 'styled-components/native';
import {StackNavigationProp} from '@react-navigation/stack';
import Input from '~/Components/Input';
import Button from '~/Components/Button';

const Container = Styled.View`
  flex: 1;
`;

const LabelContainer = Styled.View``;

const LabelTitle = Styled.Text``;

const Label = Styled.Text``;

type NavigationProp = StackNavigationProp<ProfileTabParamList, 'Profile'>

const SetNewPw = () => {

    return (
        <Container>
        </Container>
    );
};

export default SetNewPw;