import React from 'react';
import Title from '../assets/images/Title.png';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import styled from 'styled-components/native';

const Container = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  padding-left: 15px;
  background: white;
`;

const Bar = styled.View`
  border-right-color: rgba(0, 0, 0, 0.3);
  border-right-width: 1px;
  height: 40px;
  margin: 0 15px;
`;

const Img = styled.Image`
  margin-top: 6px;
`;

const Logo = () => {
  return (
    <Container>
      <Icon name="camera" size={35} color={'rgba(0, 0, 0, 0.7)'} />
      <Bar />
      <Img source={Title} />
    </Container>
  );
};

export default Logo;
