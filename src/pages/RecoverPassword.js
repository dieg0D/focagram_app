import React from 'react';
import { useNavigation } from '@react-navigation/native';
import Image from '../components/Image';
import Button from '../components/Button';
import Input from '../components/Input';

import {
  Container,
  Form,
  Line,
  Text,
  Row,
  Description,
  Title,
  VerticalSpace,
} from './styles';

const RecoverPassword = () => {
  const navigation = useNavigation();

  return (
    <Container>
      <Image />
      <Form height={'55%'}>
        <Title>Problemas para entrar ?</Title>
        <Description>
          Insira o seu email e enviaremos instruções para você voltar a acessar
          sua conta.
        </Description>
        <Input placeholder="Email" />
        <Button text="Recuperar minha conta" />
      </Form>
      <Row>
        <Line size={'44%'} />
        <Text>OU</Text>
        <Line size={'44%'} />
      </Row>
      <VerticalSpace>
        <Title onPress={() => navigation.navigate('Register')}>
          Criar nova conta
        </Title>
      </VerticalSpace>
      <Line size={'96%'} />
      <VerticalSpace>
        <Title onPress={() => navigation.navigate('Login')}>
          Voltar ao login
        </Title>
      </VerticalSpace>
    </Container>
  );
};

export default RecoverPassword;
