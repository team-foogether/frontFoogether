import React, { useState } from 'react';
import {Alert} from 'react-native';

import Styled from 'styled-components/native';

import ImagePicker from 'react-native-image-picker';
import Input from '~/Components/Input';

const Container = Styled.View`
  flex: 1;
  background-color: #FFFFFF;
  align-items: center;
  justify-content: center;
`;

const ProfileImageContainer = Styled.View`
  padding: 16px;
  margin-bottom: -16px;
`;

const ProfileImage = Styled.Image`
  border-radius: 100px;
`;


const Photo = Styled.Image`
  width: 200px;
  height: 200px;
  border-radius: 8px;
`;
const ImagePickerButton = Styled.TouchableOpacity`
  border-width: 1px;
  border-radius: 8px;
  border-color: #CCCCCC;
  padding: 8px 32px;
  margin-top: 16px;
`;

const LabelContainer = Styled.View``;

const LabelTitle = Styled.Text``;
const Label = Styled.Text``;

const App = (): JSX.Element => {
  const [imageSource, setImageSource] = useState<string|undefined>(undefined);
  const options = {
    title: 'Load Photo',
    storageOptions: {
      skipBackup: true,
      path: 'images',
    },
  };

  const showImagePicker = (): void => {

    ImagePicker.showImagePicker(options, (response) => {
      console.log('Response = ', response);

      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
        Alert.alert(response.customButton);
      } else {
        // You can also display the image using data:
        // const source = { uri: 'data:image/jpeg;base64,' + response.data };
        setImageSource(response.uri);
      }
    });
  };

  const showCamera = (): void => {
    ImagePicker.launchCamera(options, (response) => {
      if (response.error) {
        console.log('LaunchCamera Error: ', response.error);
      }
      else {
        setImageSource(response.uri);
      }
    });
  };

  const showCameraRoll = (): void => {
    ImagePicker.launchImageLibrary(options, (response) => {
      if (response.error) {
        console.log('LaunchImageLibrary Error: ', response.error);
      }
      else {
        setImageSource(response.uri);
      }
    });
  };

  return (
    <Container>
      <ProfileImageContainer>
        <ProfileImage source={{uri: "http://api.randomuser.me/portraits/women/68.jpg"}} style={{width: 100, height: 100}} />
      </ProfileImageContainer>
      {imageSource && <Photo source={{uri: imageSource}}/>}
      <ImagePickerButton onPress={showImagePicker}>
        <Label>프로필 사진 변경</Label>
      </ImagePickerButton>

      <LabelContainer>
        <Input
          style={{marginBottom: 16, marginTop: 16, paddingLeft: 100, paddingRight: 100}}
          placeholder="닉네임 변경"
        />
      </LabelContainer>
    </Container>
  );
};

export default App;