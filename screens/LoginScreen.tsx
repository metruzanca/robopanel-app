import * as React from 'react';
import styled from 'styled-components/native';
import { LinearGradient } from 'expo-linear-gradient';

import {Text, theme} from '../style'

export default function LoginScreen() {
  return (
    <Wrapper>
      <Main>
        <Title>Sign In</Title>
        <InputField type="text" placeholder="Username" />
        <InputField type="password" placeholder="Password" />

        <SignInButton
          onPress={() => console.log("Logged in")}
          >
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

// TODO figure out boxshadows

const Wrapper = styled.View`
  background-color:#f4ebf6;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`

const Main = styled.View`
  display: flex;
  align-items: center;

  background-color: #ffffff;
  width: 400px;
  height: 400px;
  margin: 112px auto;
  border-radius: 20px;
  /* box-shadow: 0px 11px 35px 2px rgba(0, 0, 0, 0.14); */
  /* font-family: "Ubuntu", sans-serif; */

  @media (max-width: 600px) {
    border-radius: 0;
  }
`

const Title = styled(Text)`
  text-align: center;
  padding-top: 40px;
  color: #8c55aa;
  font-weight: bold;
  font-size: 23px;
  margin-bottom: 50px;
`

const InputField = styled.TextInput`
  font-weight: 700;
  font-size: 14px;
  letter-spacing: 1px;
  color: ${theme.fg.text};
  text-align: center;

  width: 76%;
  background: rgba(136, 126, 126, 0.04);
  padding: 10px 20px;
  border: 2px solid rgba(0, 0, 0, 0.02);
  border-radius: 20px;
  margin-bottom: 27px;
  /* TODO fix this */
  &:focus {
    border: 2px solid rgba(0, 0, 0, 0.18);
  }
`

const SignInText = styled(Text)`
  color: #fff;
`

const Gradient = styled(LinearGradient)`
  border-radius: 80px;
  padding: 10px 40px;
`

// probably better to make it a button
const SignInButton = styled.TouchableOpacity`
  /* cursor: pointer; */
  font-size: 13px;
  text-align: center;
  text-decoration: none;

  border: 0;
  border-radius: 80px;

  width: 40%;
  /* margin-left: 46px; */
  margin-bottom: 10px;
  /* box-shadow: 0 0 20px 1px rgba(0, 0, 0, 0.04); */
  /* text-shadow: 0px 0px 3px rgba(117, 117, 117, 0.12); */
`

const ForgotPassword = styled(Text)`
  /* text-shadow: 0px 0px 3px rgba(117, 117, 117, 0.12); */
  color: #c097c7;
  padding-top: 10px;
`
