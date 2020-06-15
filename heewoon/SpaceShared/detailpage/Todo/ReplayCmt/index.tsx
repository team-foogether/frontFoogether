import React, { useState } from 'react';
import Styled from 'styled-components/native';
import ReplayCmtButton from './ReplayCmtButton';
import TodoInput from './ReplayCmtInput';

const Label = Styled.Text`
  color: #000000;
  font-size:6px;
`;

const C1 = Styled.View`
  
  flex-direction: row;
  padding: 8px 16px;
  
  
`;

interface Props {}

const ReplayCmt = ({  }: Props) => {
  const [showInput, setShowInput] = useState<boolean>(false);
  return (
    <C1>
       
       <Label >답글작성 </Label>
       
      <ReplayCmtButton onPress={() => setShowInput(true)} />
      {showInput && <TodoInput hideTodoInput={() => setShowInput(false)} />}
      
    </C1>
  );
};
export default ReplayCmt;