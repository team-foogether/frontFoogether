import React from 'react';
import Styled from 'styled-components/native';

import onPress from '~/Components/Button';

const Container = Styled.View`
  
`;
const MeetingContainer = Styled.View`
  padding: 16px;
`;

const MeetingContent = Styled.View`
  
flex-direction: row;
`;
const LabelContainer = Styled.View`
  flex-direction: row;
  
`;

const MeetingItem = Styled.View`
  margin-left: 10px;
   flex-direction: row;
   marginTop : 5px;
`;

const LLabel = Styled.Text`
  font-size: 12px;
  margin-left: 10px;
  margin-right: 20px;
  font-weight: bold;
`;

const Label = Styled.Text`
  font-size: 11px;
  margin-right: 20px;
  
`;
const LabelTitle = Styled.Text`
  font-weight: 300;
`;
interface Props {
  deadtime?:number;
  deadline?: string;
  title?: string;
  content?: string;
  space?: string;
}

const HeaderMInfo = ({deadtime, deadline, title, content,space}: Props) => {
  return (
    <Container>
      <MeetingContent>
        <MeetingItem>
          <LabelContainer>
          <LLabel>마감 날짜</LLabel>
          </LabelContainer>
          <LabelContainer>
          <Label>{deadline}</Label>
          </LabelContainer>
          <LabelContainer>
          <Label>({deadtime} 일 남음)</Label>
          </LabelContainer>
        </MeetingItem>
        
      </MeetingContent>
      <MeetingContent>
        <MeetingItem>
          <LabelContainer>
          <LLabel>제목</LLabel>
          </LabelContainer>
          <LabelContainer>
          <Label>{title}</Label>
          </LabelContainer>
          
        </MeetingItem>
        
      </MeetingContent>

      <MeetingContent>
        <MeetingItem>
          
          <LLabel>내용</LLabel>

        </MeetingItem>
        <MeetingItem>
        <Label>{content}</Label>
        </MeetingItem>
      </MeetingContent>

      <MeetingContent>
      <MeetingItem>
          <LLabel>장소</LLabel>

        <Label>{space}</Label>
        </MeetingItem>
      </MeetingContent>
    </Container>
  );
};

export default HeaderMInfo;