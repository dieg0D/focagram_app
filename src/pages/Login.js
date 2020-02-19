import React, { useState, useContext } from 'react';
import { useNavigation } from '@react-navigation/native';
import { AuthContext } from '../AuthContext';
import Image from '../components/Image';
import Button from '../components/Button';
import Input from '../components/Input';
import { Container, Form, Line, Text, Row, RowText, Link } from './styles';

const Login = () => {
  const authcontext = useContext(AuthContext);
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <Container>
      <Image />
      <Form height={'60%'}>
        <Input
          placeholder="Email"
          keyboardType="email-address"
          autoCapitalize="none"
          value={email}
          onChangeText={text => setEmail(text)}
        />
        <Input
          placeholder="Senha"
          secureTextEntry
          autoCapitalize="none"
          value={password}
          onChangeText={text => setPassword(text)}
          returnKeyType="send"
          onSubmitEditing={() => authcontext.login(email, password)}
        />
        <Button
          text="Entrar"
          onPress={() => authcontext.login(email, password)}
        />
      </Form>
      <Row>
        <Line size={'44%'} />
        <Text>OU</Text>
        <Line size={'44%'} />
      </Row>
      <Container>
        <Link onPress={() => navigation.navigate('RecoverPassword')}>
          Esqueceu a senha ? {}
        </Link>
        <RowText>
          <Text>Não tem uma conta ?</Text>
          <Link onPress={() => navigation.navigate('Register')}>
            Cadastre-se
          </Link>
        </RowText>
      </Container>
    </Container>
  );
};

export default Login;
