import styled from 'styled-components/native';
import { Platform } from 'react-native';

export const Container = styled.KeyboardAvoidingView.attrs({
  enabled: Platform.OS === 'ios',
  behavior: 'padding',
})`
  flex: 1;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 50px 5px;
  background: white;
`;

export const Form = styled.View`
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  background: white;
  width: 100%;
  height: ${props => props.height};
`;

export const Line = styled.View`
  border-bottom-color: #ddd;
  border-bottom-width: 1px;
  height: 1px;
  width: ${props => props.size};
`;

export const Text = styled.Text`
  font-size: 20px;
  text-align: center;
  color: rgba(0, 0, 0, 0.7);
`;

export const Title = styled.Text`
  font-size: 20px;
  text-align: center;
  padding: 0 15px;
  color: rgba(0, 0, 0, 0.7);
  font-weight: bold;
`;

export const Description = styled.Text`
  font-size: 18px;
  text-align: center;
  padding: 0 15px;
  color: #999;
`;

export const Row = styled.View`
  flex-direction: row;
  justify-content: space-around;
  width: 95%;
  align-items: center;
`;

export const RowText = styled.View`
  flex-direction: row;
  justify-content: center;
  width: 100%;
  align-items: center;
  margin-top: 25px;
`;

export const Link = styled.Text`
  font-size: 20px;
  text-align: center;
  color: #3897f0;
  padding: 0 10px;
`;

export const VerticalSpace = styled.View`
  padding: 30px 0;
`;
