import React, { useState, createContext, useEffect, useContext } from "react";
import axios from "axios";

export const UserContext = createContext();

export function useUser() {
  return useContext(UserContext);
}

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({
    logged: false,
    userdata: {
      favorite: [],
      registered: [],
      completedVideo: [],
      passedQuiz: [],
      _id: "5f5eab5cb441a11880065891",
      firstname: "",
      lastname: "",
      email: "theo-was-here@testmail.com",
      password: "password",
      role: "",
      userCreated: "",
    },
  });

  console.log(`Current value of User State: ${JSON.stringify(user)}`);

  useEffect(() => {
    axios
      .get(
        `https://salty-fortress-9010-virt-b.herokuapp.com/user/get/verify/${user.userdata.email}/${user.userdata.password}`
      )
      .then((res) => {
        const results = res.data.data;
        console.log(`Results of Axios Call: ${JSON.stringify(results)}`);
        setUser({ logged: true, userdata: results });
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  console.log(`Updated value of User State: ${JSON.stringify(user)}`);

  return (
    <UserContext.Provider value={[user, setUser]}>
      {children}
    </UserContext.Provider>
  );
};
