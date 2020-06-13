import React, {useState, useEffect} from 'react';
import {Dimensions} from 'react-native';
import Stars from 'react-native-stars';
import Styled from 'styled-components/native';


const CatalogImage = Styled.Image``;
const Container = Styled.TouchableOpacity`
    height:122px;
    border-radius: 1px;
    borderBottomColor: grey;
    borderBottomWidth: 1px;
`;
const InfoContainer = Styled.View`
  position: absolute;
  bottom: 0;
  width: 100%;
  
  align-items: flex-start;
`;
const Label = Styled.Text`
font-size: 11px;
margin-bottom: 3px;
width:200px;
left:10px;
`;
const StarRate = Styled.View`
margin-top: 5px;


`;
const Label2 = Styled.Text`


margin-bottom: 5px;
left:10px;
`;

const Label3 = Styled.Text`

font-size: 8px;
width:200px;
left:10px;
`;
const Con1 = Styled.View`
flex-direction: row;

`;

const Con2 = Styled.View`


`;
const Con3 = Styled.View`


`;

interface Props {
    idx : number;
    title?: string;
    originTitle ?: string;
    content?: string;
    writerIdx?: number;
    local ?: string;
   
    image?: string;
    score?: number;
    boardIdx?: number;
    serviceCategory?: String;
    onPress?: (id: number) => void;
}

const ReviewCatalog = ({idx,title,originTitle,content, local,writerIdx,image, score,boardIdx,serviceCategory, onPress} :Props) => {

    useEffect(() => {
        console.log('리뷰 카탈로그으로는 들어옴');
        
      }, []);
    return (
        <Container
            activeOpacity={1}
            onPress={() => {
                if (onPress && typeof onPress === 'function') {
                    onPress(idx);
                }
            }}>
        
        <Con1>
            <Con2>
                <CatalogImage
                source={{uri: image}}
                style={{width: 150, height: 120}}
                /> 
            </Con2>
            <Con2>
                <Con3>
                    <Label>{title}</Label>
                </Con3>
                <Con3>
                    <Label3>원글 : {originTitle}</Label3>
                </Con3>
                
                <Con3>
                    <Label3>{local}</Label3>
                </Con3>
                <Con3>
                <StarRate>
                     <Stars
                         half={true}
                        display={score}
                        spacing={8}
                        count={5}
                        starSize={10}
                        fullStar= {require('~/Assets/Images/starFilled.png')}
                        emptyStar= {require('~/Assets/Images/starEmpty.png')}/>
                        </StarRate>
                </Con3>
               
        
            </Con2>
        </Con1>
        
        <InfoContainer>
            
        </InfoContainer>
        </Container>

    );
};

export default ReviewCatalog;