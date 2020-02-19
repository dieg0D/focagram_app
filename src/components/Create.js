import React from 'react';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import styled from 'styled-components/native';

const Container = styled.TouchableOpacity`
  padding: 0 15px;
  background: white;
`;

const Create = () => {
  const navigation = useNavigation();

  return (
    <Container onPress={() => navigation.navigate('CreatePost')}>
      <Icon name="image-plus" size={35} color={'rgba(0, 0, 0, 0.7)'} />
    </Container>
  );
};

export default Create;
