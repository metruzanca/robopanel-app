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
  onResetPassword: (pass:string) => void
}

const ForgotPasswordScreen: React.FC<Props> = ({ onResetPassword }) => {
  const [username, setUsername] = useState("")
  
  return (
    <Wrapper>
      <Main>
        <Title>ForgotPassword</Title>

        <InputField
          placeholder="Username"
          value={username}
          onChange={e => setUsername(e.target.value)}
        />

        <SignInButton onPress={onResetPassword}>
          <Gradient
            start={[0, 1]} end={[1, 0]}
            colors={theme.gradient.primary}
            >
            <SignInText>Reset Password</SignInText>
          </Gradient>
        </SignInButton>

      </Main>
    </Wrapper>
  );
}

export default ForgotPasswordScreen