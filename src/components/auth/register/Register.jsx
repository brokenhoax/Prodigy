import React, { useState, useContext } from "react";
import styles from "./Register.module.css";
import UserContext from "../../../utils/UserContext";
import { useHistory } from "react-router-dom";
import "../../../App.css";
import axios from "axios";

const Register = () => {
  const [firstname, setFirstName] = useState();
  const [lastname, setLastName] = useState();
  const [role, setRole] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [passwordCheck, setPasswordCheck] = useState();
  const [displayname, setDisplayName] = useState();

  const { setUserData } = useContext(UserContext);
  const history = useHistory();

  const submit = async (e) => {
    e.preventDefault();
    const newUser = {
      firstname,
      lastname,
      role,
      email,
      password,
      passwordCheck,
      displayname,
    };
    console.log(newUser);
    await axios.post(
      "https://frozen-woodland-47284.herokuapp.com/register",
      newUser
    );
    const loginRes = await axios.post(
      "https://frozen-woodland-47284.herokuapp.com/user/login",
      {
        email,
        password,
      }
    );
    setUserData({
      token: loginRes.data.token,
      user: loginRes.data.user,
    });
    localStorage.setItem("auth-token", loginRes.data.token);
    history.push("/");
  };

  return (
    <div className="main">
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <h2 className={styles.header}>Register</h2>
          <form className={styles.form} onSubmit={submit}>
            <label htmlFor="register-first-name">First Name</label>
            <input
              id="register-first-name"
              type="text"
              onChange={(e) => setFirstName(e.target.value)}
            />
            <label htmlFor="register-last-name">Last Name</label>
            <input
              id="register-last-name"
              type="text"
              onChange={(e) => setLastName(e.target.value)}
            />
            <label htmlFor="register-email">Email</label>
            <input
              id="register-email"
              type="email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <label htmlFor="register-email">Password</label>
            <input
              id="register-password"
              type="password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <input
              type="password"
              placeholder="Verify Password"
              onChange={(e) => setPasswordCheck(e.target.value)}
            />
            <label htmlFor="register-display-name">Display Name</label>
            <input
              id="register-display-name"
              type="text"
              onChange={(e) => setDisplayName(e.target.value)}
            />
            <label htmlFor="register-role">Role</label>
            <select
              id="register-role"
              type="text"
              onChange={(e) => setRole(e.target.value)}
            >
              <option value="--">--</option>
              <option value="Prodigy">Prodigy</option>
              <option value="Virtuoso">Virtuoso</option>
            </select>
            <input type="submit" value="Register" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
