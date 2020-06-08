import React, {useState, useContext, useLayoutEffect, useEffect} from 'react';
import Styled from 'styled-components/native';
import DatePicker from 'react-native-date-picker';
import Input from '~/Components/Input';
import Button from '~/Components/Button';
import Tab from '~/Components/Tab';

import {
  Dimensions,
  ScrollView,
  NativeSyntheticEvent,
  NativeScrollEvent,
  Image,
} from 'react-native';
const Container = Styled.View`
  flex: 1;
 
`;


const FormContainer = Styled.View`
  flex: 1;
  width: 100%;
  align-items: center;
  padding: 32px;
`;
const Label = Styled.Text`
  marginTop: 10px;
  marginLeft:10px;
  flex-direction: row;
`;

const LabelContainer = Styled.View`
  flex-direction: row;
`;


const ProductItem = Styled.View`
`;
const PostMeeting = () => {

  const [date, setDate] = useState(new Date());
  return (
    <Container>
       <ScrollView>
      <Input
          style={{marginTop:0, height:50}}
          placeholder={'제목'}
        />

        <LabelContainer>
          <ProductItem>
          <Label>
          모임위치
        </Label>
          </ProductItem>
          <ProductItem>
          <Input
          style={{marginTop:10,marginLeft:10, width:260}}
          placeholder={'위치를 입력해주세요'}
        />
          </ProductItem>
          
        </LabelContainer>
        
        <Label>
          날짜 시간 설정
        </Label>
        <DatePicker
          date={date}
          onDateChange={setDate}
          
          />

      <LabelContainer>
          <ProductItem>
          <Label>인원수 설정</Label>
          </ProductItem>
          <ProductItem>
          <Input
          style={{marginTop:10,marginLeft:10, width:100}}
          placeholder={'남자인원'}
        />
          </ProductItem>
          <ProductItem>
          <Input
          style={{marginTop:10,marginLeft:10, width:100}}
          placeholder={'여자인원'}
        />
          </ProductItem>
        </LabelContainer>

        <Input
          style={{marginTop:20, height:160}}
          multiline={true}
        />
        <Button label="등록" style={{marginTop: 10}} />
        </ScrollView>
    </Container>
    
  );
};

export default PostMeeting;