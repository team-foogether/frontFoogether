import React, {useState, useEffect} from 'react';
import Styled from 'styled-components/native';
import {FlatList} from 'react-native';
// import axios from 'axios';
//import RNFetchBlob from 'react-native-fetch-blob';
import ReviewCatalog from '~/Components/ReviewCatalog';
import {
  Dimensions,
  ScrollView,
  Image,
} from 'react-native';

const Container = Styled.View`

`;

const Label = Styled.Text`
  margin-top: 15px;
  margin-bottom: 15px;
`;

const Label2 = Styled.Text`
margin-top:4px;
borderBottomColor: grey;
borderBottomWidth: 1px;
height:40px;  
  
`;
const Title = Styled.View`
  alignItems:center;
  
  width: ${Dimensions.get('window').width}px;
  border-width: 1px;
`;

interface Props {
  url?: Array<IReview>;
  onPress?: (id: number) => void;
}
const MainReview = ({url, onPress}: Props) => {
    const [data, setData] = useState<Array<IReview>>([]); 
  // const [data, setData] = useState<Array<IMeeting>>([]);
    // setData(url);
  
  useEffect(() => {
  //   console.log('MainReview 안으로는 들어옴');
  //   // axios.get("http://localhost:8088/review/1/1/MEETING:8088")
  //   //  .then(function (response) {
        
  //   //     console.log(response);
  //   //     // setData(json.data);
  //   //   })
  //   //   .catch(function (error) {
  //   //     console.log(error);
  //   //   });
  //   // }, []);
  
  //   // RNFetchBlob.config({
  //   //     trusty: false
  //   //   })
     fetch("http://192.168.0.27:8088/review/1/1/MEETING")
      .then((response) => response.json())
      .then((json) => {
        console.log('리뷰 데이터 가져옴');
        console.log(json);
        setData(json.data);
      })
      .catch((error) => {
        console.log(error);
        console.log(error.stack);
      });
  }, []);



  return (
    <ScrollView>
    <Container>
      <Title>
        <Label>내가 작성한 모임 후기</Label>
      </Title>
      <Label2>총 2건</Label2>
      <FlatList
        horizontal={false}
        pagingEnabled={true}
        data={url}
        keyExtractor={(item, index) => {
          return `bigScreen-${index}`;
        }}
        renderItem={({item, index}) => (
          <ReviewCatalog
            idx={(item as IReview).idx}
            title= {(item as IReview).title}
            local= {(item as IReview).local}
            originTitle = { (item as IReview).originTitle}
            content= {(item as IReview).content}
   
            image ={(item as IReview).image}
            writerIdx= {(item as IReview).writerIdx}
            score= {(item as IReview).score}
            boardIdx={(item as IReview).boardIdx}
            serviceCategory= {(item as IReview).serviceCategory}

            
          />
        )}
      />
      
    </Container>
    </ScrollView>
  );
};

export default MainReview;