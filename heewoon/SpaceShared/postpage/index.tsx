import React, {useState,} from 'react';
import Styled from 'styled-components/native';
import DatePicker from 'react-native-date-picker';
import { ScrollView, Text, View,
  StyleSheet,Image,TouchableOpacity,Alert} from 'react-native';
import Input from '~/Components/Input';
import Button from '~/Components/Button';
import App from '~/Screens/SpaceShared/postpage/camera';
import ImagePicker from 'react-native-image-picker';




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
const Photo = Styled.Image`
  width: 200px;
  height: 200px;
  border-radius: 8px;
`;
const ImagePickerButton = Styled.TouchableOpacity`
  border-width: 1px;
  border-radius: 8px;
  border-color: #CCCCCC;
  padding: 8px 32px;
  margin-top: 16px;
`;

const ProductItem = Styled.View`
`;





const PostMeeting = ({navigation,route}) => {
  const { idx} = route.params;

  const [date, setDate] = useState(new Date());
  return (
    <Container>
       <ScrollView>
      <App></App>

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
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center',marginTop:10}}>
        <DatePicker
          date={date}
          onDateChange={setDate}
          
          />
        </View>
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
          placeholder={'내용'}
        />
        <Button label="등록" style={{marginTop: 10}} onPress={() => {navigation.navigate('Detailpage',{itemId:idx});}} />
        </ScrollView>
    </Container>
    
  );
};

export default PostMeeting;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }, 
   fab: {
    position: 'absolute',
    width: 56,
    height: 56,
    alignItems: 'center',
    justifyContent: 'center',
    right: 20,
    bottom: 20,
    backgroundColor: '#03A9F4',
    borderRadius: 30,
    elevation: 8
  },
  fabIcon: {
    fontSize: 40,
    color: 'white'
  },
});