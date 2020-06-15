import React, { useState } from 'react';
import Styled from 'styled-components/native';
import AddButton from './AddButton';
import TodoInput from './TodoInput';

const Label = Styled.Text`
  color: #000000;
  font-size: 11px;
`;

const C1 = Styled.View`
  flex-direction: row;
  padding: 8px 16px;
  
  
`;
const C2 = Styled.View`
  flex-direction: row;
  align-items: center;
`;
interface Props {}

const AddTodo = ({  }: Props) => {
  const [showInput, setShowInput] = useState<boolean>(false);
  return (
    <C1>
       
       <Label >댓글 작성 </Label>
       
      <AddButton onPress={() => setShowInput(true)} />
      {showInput && <TodoInput hideTodoInput={() => setShowInput(false)} />}
      
    </C1>
  );
};
export default AddTodo;