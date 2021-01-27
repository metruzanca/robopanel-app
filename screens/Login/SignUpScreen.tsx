import React, { useState } from 'react';

import {theme} from '../../style'
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList } from '../../types';

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

interface Props extends StackScreenProps<RootStackParamList, 'ForgotPassword'> {
  onSignUp: (email:string, pass:string) => void
}

const SignUpScreen: React.FC<Props> = ({ onSignUp }) => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  return (
    <Wrapper>
      <Main>
        <Title>ForgotPassword</Title>

        <InputField
          placeholder="Email"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <InputField
          placeholder="Password"
          secureTextEntry={true}
          value={password}
          onChange={e => setPassword(e.target.value)}
        />

        <SignInButton onPress={onSignUp}>
          <Gradient
            start={[0, 1]} end={[1, 0]}
            colors={theme.gradient.primary}
            >
            <SignInText>Sign Up</SignInText>
          </Gradient>
        </SignInButton>

      </Main>
    </Wrapper>
  );
}

export default SignUpScreen