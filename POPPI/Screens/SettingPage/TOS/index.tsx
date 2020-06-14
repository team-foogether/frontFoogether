import React from 'react';
import Styled from 'styled-components/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { ScrollView } from 'react-native';

const Container = Styled.View`
  flex: 1;
  background-color: #ffffff;
`;

const LabelContainer = Styled.View`
  top: 40px;
  margin-left: 10px;
  margin-right: 10px;
  margin-bottom: 25px;
`;

const LabelTitle = Styled.Text`
font-size: 25px;
font-weight: bold;
margin-bottom: 20px;
`;

const LabelTop = Styled.Text`
  font-size: 23px;
  margin-bottom: 10px;
`;

const Label = Styled.Text`
  font-size: 20px;
`;

const LabelContent = Styled.Text`
  font-size: 16px;
`;

type NavigationProp = StackNavigationProp<ProfileTabParamList, 'Profile'>

interface Props {
    navigation: NavigationProp;
}

const TOS = ({navigation}: Props) => {
    return(
        <ScrollView>
            <Container>
                <LabelContainer>
                    <LabelTitle>이용 약관</LabelTitle>
                    <LabelTop>제 1 장 총칙</LabelTop>
                    <Label>제 1조(목적)</Label>
                    <LabelContent>본 약관은 서비스 이용자가 Foogether 주식회사 (이하 "회사" 라 합니다.) 이 제공하는 온라인상의 인터넷 서비스 (이하 "서비스" 라고 하며, 접속 가능한 유, 무선 담라기의 조율와는 상관 없이 이용 가능한 "회사" 가 제공하는 모든 "서비스"를 의미합니다. 이하 같습니다.) 에 회원으로 가입하고 이를 이용함에 있어 회사와 회원 (본 약관에 동의하고 회원 등록을 완료한 서비스 이용자를 말합니다. 이하 "회원"이라고 합니다.)의 권리, 의무 및 책임 사항을 규정함을 목적으로 합니다.</LabelContent>
                </LabelContainer>
                <LabelContainer>
                    <Label>제 2 조 (약관의 명시, 효력 및 개정)</Label>
                    <LabelContent>가. 회사는 이 약관의 내용을 회원이 쉽게 알 수 있도록 서비스 초기 화면에 게시합니다.</LabelContent>
                    <LabelContent>나. 회사는 온라인 디지털콘텐츠산업 발전법, 전자상거래 등에서의 소비자보호에 관한 법률, 약관의 규제에 관한 법률, 소비자기본법 등 관련법을 위배하지 않는 범위에서 이 약관을 개정할 수 있습니다.</LabelContent>
                    <LabelContent>다. 회사가 약관을 개정할 경우에는 기존약관과 개정약관 및 개정약관의 적용일자를 개정사유를 명시하여 현행약관과 함꼐 그 적용일자 일십오(15)일 전부터 적용일 이후 상당한 기간 동안, 개정 내용이 회원에게 불리한 경우에는 그 적용일자 삼십(30)일 전부터 적용일 이후 상당한 기간 동안 각각 이를 서비스 홈페이지 화면에 게시하거나, E-mail 또는 기타 방법으로 회원에게 통지합니다.</LabelContent>
                    <LabelContent>라. 회사가 전항에 따라 회원에게 통지하면서 공지, 고지일로부터 개정약관 시행일 7일 후까지 거부의사를 표시하지 아니하면 승인한 것으로 본다는 뜻을 명확하게 고지하였음에도 의사표시가 없는 경우에는 변경된 약관을 승인한 것으로 봅니다. 회원이 개정약관에 동의하지 않을 경우 회원은 제 7조 제 (다) 항의 규정에 따라 이용계약을 해지할 수 있습니다.</LabelContent>
                    <LabelContent>마. 회원은 회사가 제공하는 서비스를 이용함에 있어서 전자상거래등에서의 소비자보호에관한법률(예시: 공급서, 표시광고, 반품, 배송 등 통신판매에 관한 규정), 전자거래기본법(예시: 소비자보호에 관한 규정), 소비자기본법(예시: 사업자의 의무에 관한 규정), 표시광고의공정화에관한법률(예시: 물품상세섦여에 관련한 표시, 기재사항), 정보통신망이용촉진및정보보호등에관한법률(예시: 개인정보보호에 관한 규정) 등 관련법령을 준수하여야 하며, 이 약관의 규정을 들어 관련법령 위반에 대한 면책을 주장할 수 없습니다.</LabelContent>
                </LabelContainer>
                <LabelContainer>
                    <Label>제 3 조 (용어의 정의)</Label>
                    <LabelContent>가. 이 약관에서 사용하는 용어의 정의는 다음과 같습니다.</LabelContent>
                    <LabelContent>1. 회원: 이 약관을 승인하고 회사와 서비스 이용계약을 체결한 자를 말합니다. 회원은 개인회원과 사업자회원으로 구분됩니다.</LabelContent>
                    <LabelContent>2. 아이디(ID): 회원의 식별과 서비스 이용을 위하여 회원이 설정하고 회사가 승인한 문자나 숫자의 조합을 말합니다.</LabelContent>
                    <LabelContent>3. 비밀번호: 회원의 동일성 확인과 회원정보의 보호를 위하여 회원이 설정하고 회사가 승인한 문자나 숫자의 조합을 말합니다.</LabelContent>
                    <LabelContent>4. 서비스: 구현되는 단말기(PC, TV, 휴대형단말기 등의 각종 유무선 장치를 포함)와 상관없이 회원이 이용할 수 있는 회사의 서비스를 이용합니다.</LabelContent>
                    <LabelContent>5. 신용도: 회원간 물품거래서비스 이용과 관련하여 회사가 정한 평가기준에 따라 회원에게 부여하는 신용점수 및 등급과 거래 상대방이 부여하는 거래만족도 및 기타 서비스를 말합니다.</LabelContent>
                </LabelContainer>
            </Container>
        </ScrollView>
    );
};

export default TOS;