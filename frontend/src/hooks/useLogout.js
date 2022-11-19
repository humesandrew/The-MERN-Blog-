import { useAuthContext } from "./useAuthContext";

export const useLogout = () => {
  // taking dispatch from our AuthContext so we can change the global state //
  const { dispatch } = useAuthContext();

  const logout = () => {
    localStorage.removeItem("user");

    // we defined this dispatch type in our AuthContext (case"LOGOUT" return user: null)//
    dispatch({ type: "LOGOUT" });
  };

  return { logout };
};
