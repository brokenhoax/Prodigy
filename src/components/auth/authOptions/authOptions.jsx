import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import UserContext from "../../../utils/UserContext";

const AuthOptions = () => {
  const { userData, setUserData } = useContext(UserContext);
  const history = useHistory();

  const register = () => history.push("/register");
  const login = () => history.push("/profile");
  const logout = () => {
    setUserData({
      token: undefined,
      user: undefined,
    });
    localStorage.setItem("auth-token", "");
  };

  return (
    <div className="auth-options">
      {userData.user ? (
        <button onClick={logout}>Log Out</button>
      ) : (
        <>
          <button onClick={register}>Register</button>
          <button onClick={login}>Log In</button>
        </>
      )}
    </div>
  );
};

export default AuthOptions;
