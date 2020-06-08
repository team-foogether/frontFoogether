import React, {createContext, useState, useEffect} from 'react';
//createContext 로 데이터를 생성하고,  useState 를 활용해 저장

import AsyncStorage from '@react-native-community/async-storage';

interface Props {
  children: JSX.Element | Array<JSX.Element>;
}

// 생성함수
const TodoListContext = createContext<ITodoListContext>({
// ITodoListContext 에 들어가있는 것을 활용해서 Context를 생성할 수 있다.
  todoList: [], //초기값 문자열 배열
  addTodoList: (todo: string): void => {}, //  데이터를 추가하기 위한 함수
  removeTodoList: (index: number): void => {}, // 데이터를 삭제하기 위한 함수
});


// 프로바이더 함수 선언
const TodoListContextProvider = ({children}: Props) => {

    // 초기 선언 -> useState 를 사용해서 수정가능한 데이터로 변경한다.
  const [todoList, setTodoList] = useState<Array<string>>([]);

  //더하기 함수 정의
  const addTodoList = (todo: string): void => {
    // todo 라는 문자열 값을 받아서 저장함
    const list = [...todoList, todo];
    setTodoList(list);
    AsyncStorage.setItem('todoList', JSON.stringify(list));
  };

  //삭제 함수 정의
  const removeTodoList = (index: number): void => {
    //인덱스 값을 받고
    let list = [...todoList]; // todoList 를 복사해서 붙음
    list.splice(index, 1); // 자름
    setTodoList(list);
    AsyncStorage.setItem('todoList', JSON.stringify(list));
  };

  // 데이터 시작
  const initData = async () => {
    try {
      const list = await AsyncStorage.getItem('todoList');
      if (list !== null) {
        setTodoList(JSON.parse(list)); //list 값을 문자열 값으로 변경
      }
    } catch (e) {
        // 에러 로그 출력
      console.log(e);
    }
  };

  useEffect(() => {
    // 라이프 사이클 함수와 비슷한 역할
    initData();
  }, []);

  return (
      //프로바이더 : 데이터 제공자
      // 컨슈머 : 데이터 소비자
    <TodoListContext.Provider
      value={{
        todoList,
        addTodoList,
        removeTodoList,
      }}>
      {children}
    </TodoListContext.Provider>
  );
};

export {TodoListContextProvider, TodoListContext};