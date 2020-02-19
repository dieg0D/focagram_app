import React, { useState, useEffect } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';
import { FlatList } from 'react-native';
import { indexPost } from '../services/Post';
import CreatePost from './CreatePost';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Post from './Post';
import Create from '../components/Create';
import Logo from '../components/Logo';
import Card from '../components/Card';

const Stack = createStackNavigator();

const StackNavigator = ({ navigation }) => (
  <Stack.Navigator initialRouteName="Home">
    <Stack.Screen
      name="Home"
      component={Home}
      options={{
        headerTitle: false,
        headerLeft: () => <Logo />,
        headerRight: () => <Create />,
      }}
    />
    <Stack.Screen
      name="CreatePost"
      component={CreatePost}
      options={{
        headerTitle: 'Criar Publicação',
        headerTitleAlign: 'center',
      }}
    />
    <Stack.Screen
      name="Post"
      component={Post}
      options={{
        headerTitleAlign: 'center',
        headerRight: () => <Icon name="dots-vertical" size={30} />,
      }}
    />
  </Stack.Navigator>
);

const Home = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    indexPost()
      .then(res => setPosts(res.data))
      .catch(err => console.log(err));
  }, []);

  return (
    <FlatList
      data={posts}
      renderItem={({ item }) => (
        <Card
          id={item?.id}
          picture={item?.picture_url}
          description={item?.description}
          username={item?.user?.username}
          avatar={item?.user?.avatar_url}
        />
      )}
      keyExtractor={item => item.id}
    />
  );
};

export default StackNavigator;
