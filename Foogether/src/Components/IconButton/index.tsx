import React from 'react';
import Styled from 'styled-components/native';

const Container = Styled.TouchableOpacity`
  padding: 8px;
`;
const Icon = Styled.Image`
   width: 20px;
   height: 20px;
`;

interface Props {
  iconName:
  | 'add'
  | 'search'
  | 'geo'
  | 'camera'
  | 'live'
  | 'send'
  | 'dotMenu'
  | 'favorite'
  | 'comment'
  | 'bookmark'
  | 'menu'
  
  style?: object;
  onPress?: () => void;
}

const IconButton = ({ iconName, style, onPress }: Props) => {
  const imageSource = {
    add : require('~/Assets/Images/add.png'),
    search : require('~/Assets/Images/search.png'),
    geo : require('~/Assets/Images/gps.png'),
    camera: require('~/Assets/Images/ic_camera.png'),
    live: require('~/Assets/Images/ic_live.png'),
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
      <Icon source={imageSource[iconName]} />
    </Container>
  );
};

export default IconButton;