import React, {useState, useEffect} from 'react';
import Styled from 'styled-components/native';
import PeopleList from './PeopleList';

const Container = Styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const Label = Styled.Text``;

const MeetingPeople = () => {
  const [data, setData] = useState<IMovieDetail>();
  useEffect(() => {
    fetch(
      `https://yts.lt/api/v2/movie_details.json?movie_id=1&with_images=true&with_cast=true`,
    )
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        setData(json.data.movie);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);


  return  (
    <Container>
      <PeopleList
        images={[
          "http://api.randomuser.me/portraits/women/68.jpg",
          "http://api.randomuser.me/portraits/women/68.jpg",
          "http://api.randomuser.me/portraits/women/68.jpg",
        ]}
      />
      
    </Container>

) 
  
};

export default MeetingPeople;