import React, { useState } from 'react';
import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';
import { url } from '../services/api';
import { createComment } from '../services/Comment';

const Container = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: white;
  width: 100%;
  padding: 5px 5px;
  border-top-color: #ddd;
  border-top-width: 1px;
`;

const Image = styled.Image`
  border: 1px solid #ddd;
  border-radius: 50px;
  width: 45px;
  height: 45px;
`;

const Input = styled.TextInput`
  border: 1px solid #ddd;
  border-radius: 50px;
  background: #fafafa;
  width: 62%;
  font-size: 12px;
  padding-left: 15px;
  height: 70%;
`;

const Button = styled(RectButton)`
  background: #3897f0;
  padding: 10px 5px;
  width: 20%;
  border-radius: 12px;
`;

const Text = styled.Text`
  color: white;
  text-align: center;
  font-weight: bold;
  font-size: 12px;
`;

const CreateComment = ({ avatar, post_id }) => {
  const [comment, SetComment] = useState('');

  const create = () => {
    createComment(comment, post_id).then(() => SetComment(''));
  };

  return (
    <Container>
      <Image source={{ uri: `${url}/${avatar}` }} />
      <Input
        placeholder="Adicione um comentário..."
        value={comment}
        onChangeText={text => SetComment(text)}
        returnKeyType="send"
        onSubmitEditing={() => create()}
      />
      <Button onPress={() => create()}>
        <Text>Publicar</Text>
      </Button>
    </Container>
  );
};

export default CreateComment;
