import React from 'react';
import Styled from 'styled-components/native';

const Container = Styled.SafeAreaView`

align-self: flex-end;
`;
// position: absolute;
//     bottom: 0;
//     align-self: center;
//     // 
const ButtonContainer = Styled.TouchableOpacity`
    box-shadow: 4px 4px 8px #999; 
`;

const Icon = Styled.Image`
width:30px;
height:30px;

`;

interface Props {
    onPress?: () => void;
}
// 
const AddButton = ({onPress}: Props) => {
    return (
        <Container>
            <ButtonContainer onPress={onPress}>
            
            <Icon source={require('~/Assets/Images/comment.png')} />
            
            </ButtonContainer>
        </Container>
    );
};
export default AddButton;