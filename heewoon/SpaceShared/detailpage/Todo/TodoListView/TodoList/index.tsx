import React, {useContext} from 'react';
import {FlatList} from 'react-native'; // 리액트의 리스트 뷰
import Styled from 'styled-components/native';

import {TodoListContext} from '~/Context/TodoListContext';

import EmptyItem from './EmptyItem';
import TodoItem from './TodoItem';


const Container = Styled(FlatList) `

`;

interface Props {}

const TodoList = ({  } : Props) => {
    const { todoList, removeTodoList} = useContext<ITodoListContext>(
        // useContext 함수를 불러와 사용하고자 하는 Context 를 초기 값을 세팅하고
        // TodoListContext안에서 사용하고자하는 todoList의 변수와 removeTodo 함수를 불러왔다.
        TodoListContext
        );
        return (
          <Container
            data={todoList}
            keyExtractor={(item, index) => {
              return `todo-${index}`;
            }}
            ListEmptyComponent={<EmptyItem />}
            renderItem={({ item, index }) => (
              <TodoItem
                text={item as string}
                date="2020년 6월 4일 16:20"
                nickname="멀캠학생"
                images="http://api.randomuser.me/portraits/women/68.jpg"
                onDelete={() => removeTodoList(index)}
              />
            )}
            contentContainerStyle={todoList.length === 0 && { flex: 1 }}
          />
        );
};

export default TodoList;