import { useContext, useState } from "react";
import AuthContent from "../components/Auth/AuthContent";
import { login } from "../util/auth";
import LoadingOverlay from "../components/ui/LoadingOverlay";
import { Alert } from "react-native";
import { AuthContext } from "../store/auth-context";

function LoginScreen() {
  const authCtx = useContext(AuthContext);
  const [isAuthenticating, setIsAuthentication] =
    useState(false);
  async function loginHandler({
    email,
    password,
  }) {
    setIsAuthentication(true);
    try {
      const token = await login(email, password);
      authCtx.authenticate(token);
    } catch (error) {
      Alert.alert(
        "Authentication failed",
        "로그인에 실패했습니다. 이메일 또는 비밀번호를 확인해주세요."
      );
      setIsAuthentication(false);
    }
  }
  if (isAuthenticating) {
    return <LoadingOverlay message="Login..." />;
  }
  return (
    <AuthContent
      isLogin
      onAuthenticate={loginHandler}
    />
  );
}

export default LoginScreen;
