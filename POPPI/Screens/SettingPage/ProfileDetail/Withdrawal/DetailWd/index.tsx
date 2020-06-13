import React, {useState, useContext} from 'react';
import { UserContext } from '~/Context/User';
import Styled from 'styled-components/native';
import { View, Picker, StyleSheet } from 'react-native';
import Button from '~/Components/Button';

import { MaterialDialog } from 'react-native-material-dialog';

const Container = Styled.View`
  flex: 1;
  align-items: center;
  background-color: #ffffff;
`;

const LabelContainer = Styled.View`
  margin-bottom: 16px;
`;

const PickerContainer = Styled.View`
  align-items: center;
  justify-content: center;
  top: 60px;
  border: 1px;
  border-color: #c3c3c3;
`;

const ButtonContainer = Styled.View`
  top: 130px;
`;

const LabelTitle = Styled.Text`
  font-size: 20px;
  top: 30px;
  right: 30px;
  margin-bottom: 10px;
`;

const Label = Styled.Text`
  font-size: 20px;
  top: 50px;
`;

const LabelContent = Styled.Text`
  top: 30px;
  right: 30px;
  font-size: 12px;
  color: #ed9200;
`;

const Text = Styled.Text``;

const styles = StyleSheet.create({
    container: {
        paddingTop: 40,
        alignItems: "center",
    }
});




const DetailWd = () => {
    const [selectedValue, setSelectedValue] = useState("java");
    const {logout} = useContext<IUserContext>(UserContext);


    
    return (
        <Container>
            <LabelContainer>
                <LabelTitle>비록 지금은 떠나시더라도,{"\n"}생각 나면 언제든지 찾아와 주세요. </LabelTitle>
                <LabelTitle>Foogether, 늘 여기에 있답니다.</LabelTitle>
                <LabelContent>※ 계정을 삭제하시면 모든 활동 정보가 삭제되는 점을 유의해 주세요.</LabelContent>
            </LabelContainer>
            <LabelContainer>
                <Label>Foogether를 사용하면서 어떤 생각을 하셨나요?</Label>
            </LabelContainer>
            <PickerContainer>
                <View style={styles.container}/>
                <Picker
                    selectedValue={selectedValue}
                    style={{ width: 300, height: 50, top: -50, marginBottom: -55, textAlign: 'center'}}
                    onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
                >
                    <Picker.Item label="선택해 주세요" value="" />
                    <Picker.Item label="사용이 너무 어려워요" value="사용어려움" />
                    <Picker.Item label="사기성을 보이는 사람이 많아요" value="사기성" />
                    <Picker.Item label="바빠서 어플을 사용 할 시간이 없어요" value="바쁨" />
                    <Picker.Item label="저에게 유익하지가 않아요" value="유익하지않음" />
                    <Picker.Item label="기타 다른 이유가 있어요" value="기타" />
                </Picker>
            </PickerContainer>
            <ButtonContainer>
                <Button
                    label="회원 탈퇴"
                    style={{marginBottom: 24, width: 150, height: 45, color: '#c3c3c3'}}
                    onPress={() => {
                        logout(); }}
                />
            </ButtonContainer>

        </Container>
    );
};

export default DetailWd;