import React from 'react';
import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation } from '@react-navigation/native';
import { TouchableWithoutFeedback } from 'react-native';
import { url } from '../services/api';
const Container = styled.View`
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-top: 15px;
`;

const Header = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: white;
  width: 100%;
  padding: 5px 10px;
`;

const Row = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;

const Image = styled.Image`
  border: 1px solid #ddd;
  border-radius: 50px;
  width: 45px;
  height: 45px;
`;

const Text = styled.Text`
  font-size: 15px;
  font-weight: bold;
  padding-left: 5px;
`;

const Picture = styled.Image`
  width: 100%;
  height: 300px;
`;

const Footer = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: white;
  width: 100%;
  padding: 10px;
`;
const Description = styled.Text`
  font-size: 13px;
  line-height: 20px;
`;

const Card = ({ id, picture, description, username, avatar }) => {
  const navigation = useNavigation();

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        navigation.navigate('Post', {
          id: id,
        });
      }}>
      <Container>
        <Header>
          <Row>
            <Image source={{ uri: `${url}/${avatar}` }} />
            <Text>@{username}</Text>
          </Row>
          <Icon name="dots-vertical" size={30} />
        </Header>
        <Picture source={{ uri: `${url}/${picture}` }} />
        <Footer>
          <Description>
            <Text>@{username}</Text>
            {'  '}
            {description.length > 150
              ? description.substring(0, 150) + ' ...'
              : description}
          </Description>
        </Footer>
      </Container>
    </TouchableWithoutFeedback>
  );
};

export default Card;
