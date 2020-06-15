import React from 'react';
import Styled from 'styled-components/native';


import TodoList from './TodoList';

const Container = Styled.SafeAreaView`
    flex: 1;

`;

interface Props {}

const TodoListView = ({  }: Props) => {
    return (
        <Container>
            
            <TodoList />
        </Container>
    );
};

export default TodoListView;