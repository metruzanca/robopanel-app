import styled from "styled-components/native"
import { LinearGradient } from "expo-linear-gradient"
import { theme, Text } from "../../style"

// TODO figure out boxshadows
// TODO Fix small responsiveness issue on really small screens (width)

export const Wrapper = styled.View`
  background-color:#f4ebf6;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const Main = styled.View`
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

export const Title = styled(Text)`
  text-align: center;
  padding-top: 40px;
  color: #8c55aa;
  font-weight: bold;
  font-size: 23px;
  margin-bottom: 50px;
`

export const InputField = styled.TextInput`
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

export const SignInText = styled(Text)`
  color: #fff;
`

export const Gradient = styled(LinearGradient)`
  border-radius: 80px;
  padding: 10px 40px;
`

// probably better to make it a button
export const SignInButton = styled.TouchableOpacity`
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

export const ForgotPassword = styled(Text)`
  /* text-shadow: 0px 0px 3px rgba(117, 117, 117, 0.12); */
  color: #c097c7;
  padding-top: 10px;
`
