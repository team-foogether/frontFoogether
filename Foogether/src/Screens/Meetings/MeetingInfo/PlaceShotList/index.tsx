import React from 'react';
import {FlatList, Dimensions} from 'react-native';
import Styled from 'styled-components/native';

const Container = Styled.View`
  margin-bottom: 1px;
`;
const Title = Styled.Text`
  font-size: 13px;
  color: #FFFFFF;
  font-weight: bold;
  padding: 24px 16px 8px 16px;
`;
const ScreenShotImage = Styled.Image``;

interface Props {
  images: Array<string>;
}

const PlaceShotList = ({images}: Props) => {
  return (
    <Container>
      <FlatList
        horizontal={true}
        pagingEnabled={true}
        data={images}
        keyExtractor={(item, index) => {
          return `placeShotList-${index}`;
        }}
        renderItem={({item, index}) => (
          <ScreenShotImage
            source={{uri: item}}
            style={{width: Dimensions.get('window').width, height: 200}}
          />
        )}
      />
    </Container>
  );
};

export default PlaceShotList;