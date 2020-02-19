import React from 'react';
import styled from 'styled-components/native';

const InputText = styled.TextInput`
  border: 1px solid #ddd;
  background: #fafafa;
  width: 80%;
  font-size: 20px;
  padding-left: 15px;
`;
const Input = ({ ...rest }) => <InputText {...rest} />;

export default Input;
