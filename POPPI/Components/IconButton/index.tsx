import React from 'react';
import Styled from 'styled-components/native';

const Container = Styled.TouchableOpacity`
  padding: 8px;
`;
const Icon = Styled.Image`
  width: 30px;
  height: 30px;
`;

const Label = Styled.Text`
  color: #363636;
  font-size: 1px;
`;

interface Props {
  label?: string;
  iconName:
    | 'camera'
    | 'live'
    | 'next'
    | 'send'
    | 'favorite'
    | 'comment'
    | 'bookmark'
    | 'menu';
  style?: object;
  onPress?: () => void;
}

const IconButton = ({ iconName, style, label, onPress }: Props) => {
  const imageSource = {
    camera: require('~/Assets/Images/ic_camera.png'),
    live: require('~/Assets/Images/ic_live.png'),
    next: require('~/Assets/Images/arrow_icon.png'),
    send: require('~/Assets/Images/ic_send.png'),
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
      <Icon source={imageSource[iconName]} />
      <Label>{label}</Label>
    </Container>
  );
};

export default IconButton;

