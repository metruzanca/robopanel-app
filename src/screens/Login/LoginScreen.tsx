import React, { useEffect, useState } from 'react';

import {theme} from '../../style'
import { StackScreenProps } from '@react-navigation/stack';
import { AuthStackParamList } from '../../types';

import {
  ForgotPassword,
  Gradient,
  InputField,
  Main,
  SignInButton,
  SignInText,
  Title,
  Wrapper
} from './style';

interface Props extends StackScreenProps<AuthStackParamList, 'Login'> {
  onLogin: (email:string, pass:string) => void
}

const LoginScreen: React.FC<Props> = ({ onLogin }) => {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  return (
    <Wrapper>
      <Main>
        <Title>Sign In</Title>

        <InputField
          placeholder="Username"
          value={username}
          onChange={e => setUsername(e.target.value)}
        />
        <InputField
          placeholder="Password"
          secureTextEntry={true}
          value={password}
          onChange={e => setPassword(e.target.value)}
        />

        <SignInButton onPress={onLogin}>
          <Gradient
            start={[0, 1]} end={[1, 0]}
            colors={theme.gradient.primary}
            >
            <SignInText>Sign In</SignInText>
          </Gradient>
        </SignInButton>

        <ForgotPassword>Forgot Password?</ForgotPassword>
      </Main>
    </Wrapper>
  );
}

export default LoginScreen