import React, { useEffect, useState, useContext } from 'react';
import { ActivityIndicator } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { showPost } from '../services/Post';
import { showUser } from '../services/User';
import { FlatList } from 'react-native';
import { AuthContext } from '../AuthContext';
import cable from '../services/ActionCable';
import Comment from '../components/Comment';
import PostTop from '../components/Post';
import CreateComment from '../components/CreateComment';
import styled from 'styled-components/native';

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const Post = ({ navigation }) => {
  const route = useRoute();
  const authcontext = useContext(AuthContext);

  const [post, setPost] = useState({});
  const [comment, setComment] = useState([]);
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState({});

  useEffect(() => {
    showPost(route.params.id)
      .then(res => {
        setPost(res.data);
        setComment(res.data?.comments);
        setLoading(false);
        cable.subscriptions.create(
          {
            channel: 'CommentChannel',
            post_id: res.data.id,
          },
          {
            received: data => {
              console.log(data.content);
              setComment(data.content);
            },
          }
        );
        showUser(authcontext.data?.user_id)
          .then(resp => {
            console.log(resp.data);
            setUser(resp.data);
          })
          .catch(err => console.log(err));
        navigation.setOptions({
          title: `@${res.data?.user?.username}`,
        });
      })
      .catch(err => console.log(err));
  }, [route, navigation, authcontext.data]);

  return loading ? (
    <Container>
      <ActivityIndicator />
    </Container>
  ) : (
    <Container>
      <FlatList
        ListHeaderComponent={<PostTop post={post} />}
        data={comment}
        renderItem={({ item }) => (
          <Comment
            username={item?.author?.username}
            avatar={item?.author?.avatar_url}
            description={item?.description}
          />
        )}
        keyExtractor={item => item.id}
      />
      <CreateComment avatar={user?.avatar} post_id={post.id} />
    </Container>
  );
};

export default Post;
