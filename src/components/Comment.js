import React from 'react';
import styled from 'styled-components/native';
import { url } from '../services/api';

const Container = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: white;
  width: 100%;
  padding: 5px 10px;
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
`;

const Description = styled.Text`
  font-size: 13px;
  line-height: 20px;
  text-align: justify;
  padding: 0 5px;
  width: 85%;
`;

const Comment = ({ username, avatar, description }) => {
  return (
    <Container>
      <Image source={{ uri: `${url}/${avatar}` }} />
      <Description>
        <Text>{`@${username}`}</Text> {description}
      </Description>
    </Container>
  );
};

export default Comment;
