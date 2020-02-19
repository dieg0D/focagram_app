import React from 'react';
import styled from 'styled-components/native';

import { RectButton } from 'react-native-gesture-handler';

const Btn = styled(RectButton)`
  background: #3897f0;
  padding: 10px;
  width: 80%;
  border-radius: 5px;
  margin-top: 10px;
`;

const BtnText = styled.Text`
  color: white;
  text-align: center;
  font-weight: bold;
  font-size: 20px;
`;

const Button = ({ text, ...rest }) => {
  return (
    <Btn {...rest}>
      <BtnText>{text}</BtnText>
    </Btn>
  );
};

export default Button;
