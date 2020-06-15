import React from 'react';
import Styled from 'styled-components/native';
import {
    FlatList,
    Dimensions,
    ScrollView,
    NativeSyntheticEvent,
    NativeScrollEvent,
    Image,
  } from 'react-native';
  
const Container = Styled.View`
    height: 40px;
    justify-content: center;
    margin-top: 5px;
    margin-bottom: 5px;
    margin-left: 10px;
    
    
`;



const TLabel = Styled.Text`
    font-size: 13px;


`;

interface Props {
    cmtCnt? : number;

}

const Header = ({  cmtCnt }: Props) => {
    return (
        <Container>
            
            <TLabel>댓글 > {cmtCnt}</TLabel>

            
        </Container>
    );
};

export default Header;