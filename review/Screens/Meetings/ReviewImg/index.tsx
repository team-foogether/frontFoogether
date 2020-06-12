import React from 'react';
import {FlatList} from 'react-native';
import Styled from 'styled-components/native';
import {
    Dimensions,
    ScrollView,
    NativeSyntheticEvent,
    NativeScrollEvent,
    Image,
  } from 'react-native';

const Container = Styled.View`
    alignItems:center;
`;


const ImgContainer = Styled.View`
    padding: 0px 4px;
    border-radius: 20px;
`;
const ReviewImage = Styled.Image`
`;
const SubInfoContainer = Styled.View`
`;

const LabelTitle = Styled.Text`
    alignItems:center;
    background-color: #FFFFFF;
    width: 300px;
`;

interface Props{
    image?: string;
    title ?: string;
}

const ReviewImg = ({image, title} : Props) => {

    return (
        <Container>
          <ImgContainer>
            <ReviewImage
              source={{uri: image}}
              style={{width: 300, height: 100}}
            />
            <SubInfoContainer>
          
             <LabelTitle>{title}</LabelTitle>
            </SubInfoContainer>
          </ImgContainer>
          
        </Container>
    );
};

export default ReviewImg;
