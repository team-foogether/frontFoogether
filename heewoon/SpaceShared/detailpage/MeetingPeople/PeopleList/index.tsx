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

`;
const Textt = Styled.Text`
  font-size: 11px;
  color: black;
  font-weight: bold;
  left : 10px;
 
`;
const CastContainer = Styled.View`
width: ${Dimensions.get('window').width}px;
 flex-direction: row;
 
`;

const LaCon = Styled.View`
margin-top: 10px;
flex-direction: row;
margin-bottom: 10px;
`;

const TexCon = Styled.View`
 left : 10px;


`;

const CastImage = Styled.Image`
border-radius:59px;
`;
const LabelName = Styled.Text`

  left: 10px;
  
  color: grey;
  font-size: 12px;
  font-weight: bold;
  
`;
interface Props {
    images: Array<string>;
}

const PeopleList = ({images}: Props) => {
  return (
    <Container>
      <FlatList
        horizontal={false}
        pagingEnabled={true}
        data={images}
        keyExtractor={(item, index) => {
          return `castList-${index}`;
        }}
        renderItem={({item, index}) => (
          <CastContainer>
              <LaCon>
            <CastImage
              source={{uri: item}}
              style={{width: 80, height: 80}}
            />
            </LaCon>
            <TexCon>
            <LaCon>
            <LabelName>멀캠학생</LabelName>
            </LaCon>
            <LaCon>
            <Textt>여자</Textt>
            </LaCon>
            </TexCon>
          </CastContainer>
        )}
      />
    </Container>
  );
};

export default PeopleList;