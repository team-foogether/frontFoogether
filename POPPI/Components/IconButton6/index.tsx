import React from 'react';
import Styled from 'styled-components/native';

const Container = Styled.TouchableOpacity`
  align-self: flex-end;
`;

const Icon = Styled.Image`
  width: 20px;
  height: 20px;
  opacity: 0.3;
  top: -10px;
`;


const ProfileItem = Styled.View`
`;


interface Props {
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

const IconButton6 = ({ iconName, style, onPress }: Props) => {
  const imageSource = {
    camera: require('~/Assets/Images/ic_camera.png'),
    live: require('~/Assets/Images/ic_live.png'),
    next: require('~/Assets/Images/arrow_icon.png'),
    prod: require('~/Assets/Images/restaurant.png'),
    meet: require('~/Assets/Images/location.png'),
    space: require('~/Assets/Images/calendar.png'),
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
        <ProfileItem>
        <Icon source={imageSource[iconName]} />
        </ProfileItem>
    </Container>
  );
};

export default IconButton6;


