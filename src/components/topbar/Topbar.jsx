import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import UserContext from "../../utils/UserContext";
import styles from "./Topbar.module.css";
import "../../App.css";

const AuthOptions = () => {
  const { userData, setUserData } = useContext(UserContext);
  const history = useHistory();

  const register = () => history.push("/register");
  const login = () => history.push("/login");
  const logout = () => {
    setUserData({
      token: undefined,
      user: undefined,
    });
    localStorage.setItem("auth-token", "");
  };

  return (
    <div className={styles.topbar}>
      <div className={styles.authOptions}>
        {userData.user ? (
          <button className={styles.logOut} onClick={logout}>
            Log Out
          </button>
        ) : (
          <>
            <button className={styles.register} onClick={register}>
              Register
            </button>
            <button className={styles.logIn} onClick={login}>
              Log In
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default AuthOptions;
