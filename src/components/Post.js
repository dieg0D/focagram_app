import React from 'react';
import { url } from '../services/api';
import styled from 'styled-components/native';

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
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: white;
  width: 100%;
  padding: 10px;
  border: 1px solid #ddd;
`;

const Description = styled.Text`
  font-size: 13px;
  line-height: 20px;
  text-align: justify;
`;

const Post = ({ post }) => {
  return (
    <>
      <Picture source={{ uri: `${url}/${post?.picture_url}` }} />
      <Footer>
        <Description>
          <Text>{`@${post?.user?.username}`}</Text>
          {'  '}
          {post?.description}
        </Description>
      </Footer>
    </>
  );
};

export default Post;
