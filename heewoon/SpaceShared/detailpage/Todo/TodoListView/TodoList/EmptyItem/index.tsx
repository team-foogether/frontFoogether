// 데이터가 없을 때 불러옴
import React from 'react';
import Styled from 'styled-components/native';

const Container = Styled.View`
    flex: 1;
   
    background-color: #ffffff;
    
`;


const Label = Styled.Text`
     color:grey;
`;
interface Props {}

const EmptyItem = ({ }: Props) => {
    return (
        <Container>
            
        </Container>
    );
};

export default EmptyItem;