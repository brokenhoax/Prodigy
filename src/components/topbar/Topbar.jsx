import React, { useContext } from "react";
// import { useHistory } from "react-router-dom";
import UserContext from "../../utils/UserContext";
import { HashRouter as Router, Link } from "react-router-dom";
import styles from "./Topbar.module.css";
import "../../App.css";

const AuthOptions = () => {
  const { userData, setUserData } = useContext(UserContext);
  // const history = useHistory();
  console.log(userData);
  // const register = () => history.push("/register");
  // const login = () => history.push("/login");
  const logout = () => {
    setUserData({
      token: undefined,
      user: {
        favorite: [],
        registered: [],
        completedVideo: [],
        passedQuiz: [],
        _id: 0,
        firstname: "John",
        lastname: "Doe",
        email: "",
        displayname: "John Doe",
        password: "",
        role: "Virtuoso",
        userCreated: "",
      },
    });
    localStorage.setItem("auth-token", "");
  };

  return (
    <div className={styles.topbar}>
      <div className={styles.authOptions}>
        {userData.user._id ? (
          <Router>
            <button onClick={logout} className={styles.topbar}>
              <Link to="/login" className={styles.option}>
                {" "}
                Logout{" "}
              </Link>
            </button>
          </Router>
        ) : (
          <Router>
            <nav className={styles.topbar}>
              <Link to="/register" className={styles.option}>
                {" "}
                Register{" "}
              </Link>
              <Link to="/login" className={styles.option}>
                {" "}
                Login{" "}
              </Link>
            </nav>
          </Router>
        )}
      </div>
    </div>
  );
};

export default AuthOptions;
