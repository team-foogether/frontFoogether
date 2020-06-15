import React from 'react';
import Styled from 'styled-components/native';
import {TodoListContextProvider} from '~/Context/TodoListContext';


import Todo from '~/Screens/MainHome/Todo';

const Container = Styled.View`
  flex: 1;
  background-color: #EEE;
`;


const Label = Styled.Text``;

const MeetingTalk = () => {
  return (
    <TodoListContextProvider>
      <Container>
        <Todo />
      </Container>
    </TodoListContextProvider>
  );
};

export default MeetingTalk;


