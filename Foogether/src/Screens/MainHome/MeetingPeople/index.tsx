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
  


  return  (
    <Container>
      <PeopleList
        images={[
          "http://api.randomuser.me/portraits/women/60.jpg",
          "http://api.randomuser.me/portraits/women/68.jpg",
          "http://api.randomuser.me/portraits/women/58.jpg",
        ]}
      />
      
    </Container>

) 
  
};

export default MeetingPeople;