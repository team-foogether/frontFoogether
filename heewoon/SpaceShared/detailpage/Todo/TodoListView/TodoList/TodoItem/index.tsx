import React from 'react';
import Styled from 'styled-components/native';
import {
    FlatList,
    Dimensions,
    ScrollView,
    NativeSyntheticEvent,
    NativeScrollEvent,
    Image,
  } from 'react-native';
  import AddTodo from '~/Screens/MainHome/Todo/AddTodo';
  import ReplayCmt from '~/Screens/MainHome/Todo/ReplayCmt';
// 이 컴포넌트는 부모 컴포넌트로 부터, 할 일 데이터 하나
// (text:string)를 전달 받아 화면에 표시한다.
const Container = Styled.View`
    flex-direction: row;
    background-color: #FFF;
    padding: 5px 5px;
    border-width: 1px;
    border-color:grey;
   
`;
const TodoContainer = Styled.View`
flex-direction: row;
margin-right: 5px;
`;
const ProfileImageContainer = Styled.View`
flex-direction: row;
  
`;
const ProfileImage = Styled.Image`
margin-top:8px;
  border-radius: 100px;
  width: 20px;
  height: 20px;
`;
const MTodoContainer = Styled.View`
flex-direction: row;
margin-right: 5px;    
`;

const ProTodoContainer = Styled.View`

margin-top:6px;
margin-left: 3px;
margin-bottom: 3px;

`;


const CC2 = Styled.View`

margin-top:6px;
margin-left: 3px;
margin-bottom: 3px;

`;
const Label = Styled.Text`

width: 266px;
margin-left: 8px;

`;

const TimeLabel = Styled.Text`
font-size: 7px;
margin-left: 8px;
`;
const DeleteButton = Styled.TouchableOpacity``;
const Icon = Styled.Image`
    width: 20px;
    height: 20px;
    
`;

interface Props {
    idx?:number;
    prefix? : number;
    text: string; // 문자열 전달 받음
    onDelete: () => void; // 삭제 함수도 전달 받음
    images?: string;
    nickname?: string;
    date?:string;
}

const TodoItem = ({prefix, nickname,text, onDelete,images,date } : Props) => {
    return (

        <Container>
            <ScrollView>
            
            <TodoContainer>
            <ProTodoContainer>
            
                  {prefix === 0 ? <Icon source={require('~/Assets/Images/remove.png')} style={{width: 20,
                     height: 20}} /> : <></>}

            <ProfileImageContainer>
                <ProfileImage source={{uri: images}} style={{width: 50,
                     height: 50}} />
               
                
            </ProfileImageContainer> 
           
            </ProTodoContainer> 
            <ProTodoContainer>
                
                <Label>{text}</Label>
                <TimeLabel>{date}</TimeLabel>
                 <ReplayCmt />
               
                 
                 
            </ProTodoContainer>
                <DeleteButton onPress={onDelete}>
                    <MTodoContainer >
                        <Icon source={require('~/Assets/Images/XIcon.png')}style={{width: 14,
                     height: 14}} />
                    </MTodoContainer>
                   
                </DeleteButton>
                
           
           
           
               
            </TodoContainer>
            
            </ScrollView>
        </Container>
    );
};

export default TodoItem;