import React from 'react';
import Styled from 'styled-components/native';

const Container = Styled.TouchableOpacity`
  padding: 8px;
`;
const Icon = Styled.Image`
  width: 30px;
  height: 30px;
  margin-right: 110px;
  margin-top: -5px;
  
`;


const Label = Styled.Text`
  color: #363636;
  font-size: 20px;
  margin-left: 40px;

`;

const LabelContainer = Styled.View`
  flex-direction: row;
`;

const ProfileItem = Styled.View`
  flex: 1;
  align-items: center;
`;


interface Props {
  label?: string;
  iconName:
    | 'camera'
    | 'live'
    | 'next'
    | 'prod'
    | 'meet'
    | 'space'
    | 'send'
    | 'dotMenu'
    | 'favorite'
    | 'comment'
    | 'bookmark'
    | 'menu';
  style?: object;
  onPress?: () => void;
}

const IconButton2 = ({ iconName, style, label, onPress }: Props) => {
  const imageSource = {
    camera: require('~/Assets/Images/ic_camera.png'),
    live: require('~/Assets/Images/ic_live.png'),
    next: require('~/Assets/Images/arrow_icon.png'),
    prod: require('~/Assets/Images/Restau_icon.png'),
    meet: require('~/Assets/Images/placeIcon.png'),
    space: require('~/Assets/Images/calendar_icon.png'),
    send: require('~/Assets/Images/ic_send.png'),
    dotMenu: require('~/Assets/Images/ic_dot_menu.png'),
    favorite: require('~/Assets/Images/Tabs/ic_favorite_outline.png'),
    comment: require('~/Assets/Images/ic_comment.png'),
    bookmark: require('~/Assets/Images/ic_bookmark.png'),
    menu: require('~/Assets/Images/ic_menu.png'),
  };

  return (
    <Container
      style={style}
      onPress={() => {
        if (onPress && typeof onPress === 'function') {
          onPress();
        }
      }}>
      <LabelContainer>
        <Label>{label}</Label>
        <ProfileItem>
        <Icon source={imageSource[iconName]} />
        </ProfileItem>
        <ProfileItem>
        </ProfileItem>
        </LabelContainer>
    </Container>
  );
};

export default IconButton2;


