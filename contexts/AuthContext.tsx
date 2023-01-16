import { createContext, useCallback, useContext } from "react";
import { useRouter } from "next/router";
import { Box, CircularProgress } from "@mui/material";
import { signOut as logout, signIn, useSession } from "next-auth/react";
import { AUTH_LOGIN_URL } from "configs";
import { getAuthenticationToken, setAuthenticationHeader } from "services";
// import { FLEET_MANAGEMENT } from "constants/routes";
// import OverlayLoader from "theme/Loader/OverlayLoader";

interface AuthContextType {
  currentUser: any;
  signOut: () => void;
  signIn: (...args: any) => void;
}

interface AuthContextProps {
  children?: any;
}

const AuthContext = createContext({} as AuthContextType);

const AUTHENTICATION_PATH = [AUTH_LOGIN_URL];

const AuthContextProvider: React.FC<AuthContextProps> = ({ children }) => {
  const { data: session, status } = useSession();
  const loading = status === "loading";
  const router = useRouter();

  const signOut = useCallback(async () => {
    logout({ callbackUrl: "/" });
    router.replace(AUTHENTICATION_PATH[0]!);
  }, [router]);

  const prevToken = getAuthenticationToken();
  const currToken: any = session?.accessToken;

  if (currToken && prevToken !== `Bearer ${currToken}`) {
    setAuthenticationHeader(currToken);
  }

  if (loading) {
    return (
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "100vh",
        }}
      >
        <CircularProgress />
      </Box>
    );
  }
  if (
    !!process.browser &&
    !(AUTHENTICATION_PATH || "").includes(window?.location?.pathname) &&
    !session?.user &&
    !loading
  ) {
    router.replace(AUTHENTICATION_PATH[0]!);
    return null;
  }

  if (
    !!process.browser &&
    (AUTHENTICATION_PATH || "").includes(window?.location?.pathname) &&
    session &&
    session.user &&
    !loading
  ) {
    const params: { pathname: string; query?: { redirectTo: string } } = {
      pathname:
        // @ts-ignore
        "/",
    };
    router.replace(params);
    return null;
  }

  return (
    <AuthContext.Provider
      value={{
        signIn,
        signOut,
        currentUser: session?.user,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

const AuthContextConsumer = AuthContext.Consumer;

function useAuthContext(): AuthContextType {
  return useContext(AuthContext);
}

export {
  AuthContext,
  AuthContextProvider,
  AuthContextConsumer,
  useAuthContext,
};
export default AuthContext;
