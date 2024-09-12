import { useContext, useState } from "react";
import AuthContent from "../components/Auth/AuthContent";
import { createUser } from "../util/auth";
import LoadingOverlay from "./../components/ui/LoadingOverlay";
import { Alert } from "react-native";
import { AuthContext } from "../store/auth-context";

function SignupScreen() {
  const [isAuthenticating, setIsAuthentication] =
    useState(false);
  const authCtx = useContext(AuthContext);
  async function signupHandler({
    email,
    password,
  }) {
    setIsAuthentication(true);
    try {
      const token = await createUser(
        email,
        password
      );
      authCtx.authenticate(token);
    } catch (error) {
      Alert.alert(
        "SignUp failed",
        "회원가입에 실패했습니다. 이메일 또는 비밀번호를 확인해주세요."
      );
      setIsAuthentication(false);
    }
  }
  if (isAuthenticating) {
    return (
      <LoadingOverlay message="Creating user..." />
    );
  }
  return (
    <AuthContent onAuthenticate={signupHandler} />
  );
}

export default SignupScreen;
