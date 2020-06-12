import React, {useContext, useLayoutEffect, useEffect} from 'react';
import Styled from 'styled-components/native';
import {FlatList} from 'react-native';
import ReviewCatalog from '~/Components/ReviewCatalog';
import MainReview from './MainReview';
import {
  Dimensions,
  ScrollView,
  Image,
} from 'react-native';

const str = [
        {
            "idx": 1,
            "title": "좋은 모임이었어요~~ 나중에 또 봬요",
            "originTitle": "불고기 만드실 분 찾아요~",
            "content": "모임장님 정말 친절하시고 나중에도 같이 모이고 싶습니다",
            "writerIdx": 1,
            "score": 5.0,
            "local": "분당구 백현동",
            "price" : 20000,
            "boardIdx": 1,
            "image": "https://recipe1.ezmember.co.kr/cache/recipe/2019/03/03/11baafbe81803965b17c3ab42a5992cb1.jpg",
            "serviceCategory": "MEETING"
        },
        {
            "idx": 2,
            "title": "맛있는 떡볶이를 먹을 수 있어서 좋았어요~",
            "originTitle": "강남에서 떡복이 만드실 분~",
            "content": "최고에요~~",
            "writerIdx": 1,
            "score": 4.5,
            "local": "강남구 논현동",
            "price" : 20000,
            "boardIdx": 2,
            "image": "https://recipe1.ezmember.co.kr/cache/recipe/2016/10/07/f43063e718c49d85ddce4880e4a41fcd1.jpg",
            "serviceCategory": "MEETING"
        }


]
const Container = Styled.View`

`;



const Label = Styled.Text`
  margin-top: 15px;
  margin-bottom: 15px;
`;
const Title = Styled.View`
  alignItems:center;
  width: ${Dimensions.get('window').width}px;
  border-width: 1px;
`;


const mainProduct = () => {
  
  

  useEffect(() => {
    
  }, []);

  return (
    <ScrollView>
    <Container>
      
      <MainReview url={str} />
    </Container>
    </ScrollView>
  );
};

export default mainProduct;