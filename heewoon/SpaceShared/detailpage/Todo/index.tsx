import React from 'react';
import Styled from 'styled-components/native';

import TodoListView from './TodoListView';
import AddTodo from './AddTodo';
import Header from './TodoListView/Header';
const Container = Styled.View`
    flex: 1;
`;

interface Props {}

const Todo = ({ }: Props) => {
    return (
        <Container>
            <Header
            cmtCnt={3}
            />
            <AddTodo />
            <TodoListView />
            
        </Container>
    );
};

export default Todo;