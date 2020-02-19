import React from 'react';
import { useNavigation } from '@react-navigation/native';
import Image from '../components/Image';
import Button from '../components/Button';
import Input from '../components/Input';
import { Container, Form, Text, RowText, Link } from './styles';

const SignIn = () => {
  const navigation = useNavigation();

  return (
    <Container>
      <Image />
      <Form height={'75%'}>
        <Input placeholder="Nome completo" />
        <Input placeholder="Nome de usuário" />
        <Input placeholder="Email" />
        <Input placeholder="Senha" secureTextEntry />
        <Input placeholder="Confirmar senha" secureTextEntry />
        <Button text="Entrar" />
      </Form>
      <RowText>
        <Text>Tem uma conta ?</Text>
        <Link onPress={() => navigation.navigate('Login')}>Conecte-se</Link>
      </RowText>
    </Container>
  );
};

export default SignIn;
