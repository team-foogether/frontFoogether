import React , {useState} from 'react';
import { StackNavigationProp } from '@react-navigation/stack';
import Styled from 'styled-components/native';
import LoginInfo from '~/Screens/QuestionPage/LoginInfo';
import Input from '~/Components/Input';
import Button from '~/Components/Button';
import TextInput from '~/Components/TextInput';
import { View, Picker, StyleSheet } from "react-native";
import { ScrollView } from 'react-native';


const Container = Styled.View`
  flex: 1;
  background-color: #FFFFFF;
  align-items: center;
  flex-direction: column;
`;



const LabelContainer = Styled.View`
  flex-direction: row;
  margin-top: 5px;
`;

const ButtonContainer = Styled.View`
  align-items: center;
`;

const PickerContainer = Styled.View`
  border: 1px;
  border-color: #c3c3c3;
`;

const ProfileLabel = Styled.View`
  margin-top: 20px;
  margin-left: 10px;
`;

const LabelTitle = Styled.Text`
  font-size: 20px;
  color: #4a4a4a;
`;

const LabelBox = Styled.View`
  width: 92%;
  background-color: #ffedd6;
  border-radius: 4px;
  margin-top: 10px;
  margin-left: 25px;
  margin-right: 25px;
  border: 1px;
  border-color: #FFFFFF;
`;

const Label = Styled.Text`
  font-size: 20px;
  margin-left: 10px;
  margin-top: 13px;
  border-bottom-width: 1px;
  border-color: #c3c3c3;
  margin-right: 200px;
`;

const LabelContent = Styled.Text`
  font-size: 15px;
  color: #828282;
  margin-left: 10px;
  margin-bottom: 13px;
`;


const LabelEnd = Styled.Text`
  font-size: 25px;
  textAlign: center;
`;


interface Props {
  nickname: string;
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 40,
    alignItems: "center",
    
  }
});

type NavigationProp = StackNavigationProp<ProfileTabParamList, 'Profile'>

interface Props {
  navigation: NavigationProp;
}

  const QuestionPage = ({nickname, navigation}: Props) => {
    const [selectedValue, setSelectedValue] = useState("java");

  return (
    <ScrollView>
     <Container>
      <LabelContainer>
        <LoginInfo
          nickname="POPPI"
        />
        <ProfileLabel>
          <LabelTitle>{nickname}님, 무엇이든 물어보세요!</LabelTitle>
        </ProfileLabel>
      </LabelContainer>
      <PickerContainer>
          <View style={styles.container}>
          <Picker
            selectedValue={selectedValue}
            style={{ width: 300, height: 50, marginTop: -50, textAlign: 'center'}}
            onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
          >
            <Picker.Item label="계정문의" value="계정문의" />
            <Picker.Item label="판매/구매문의" value="판매/구매문의" />
            <Picker.Item label="공간 예약 문의" value="공간 예약 문의" />
            <Picker.Item label="오류, 버그 문의" value="오류, 버그 문의" />
            <Picker.Item label="작성한 게시글 문의" value="작성한 게시글 문의" />
            <Picker.Item label="기타 문의사항" value="기타 문의사항" />
          </Picker>
        </View>
        </PickerContainer>
          <LabelBox>
             <Label>푸게더가 전합니다</Label>
               <LabelContent>{"\n"}여러분의 고민을 함께 해결해 드릴 수 있도록 늘 노력하겠습니다! {"\n"}문의에 대한 답변은 약간의 시간이 소요될 수 있습니다. {"\n"}답변은 하단에 적어주신 이메일로 발송이 됩니다. {"\n"}최대한 빠른 답변 드릴테니, 조금만 기다려 주세요♡</LabelContent>
          </LabelBox>
            <Input style={{marginBottom: 16, marginTop: 20, width: 380}} placeholder="이메일을 입력해 주세요" />
            <TextInput style={{width: 380, height: 300 }} placeholder="내용을 입력해 주세요"/>
        <Button
          label="등록하기"
          style={{width: 150, height: 45, marginTop: 30}}
          onPress={() => {navigation.navigate('Profile');}}
        />
      </Container>
    </ScrollView>
    
  );
};

export default QuestionPage;
