// ****** ORIGINAL ******
import { createContext } from "react";

export default createContext(null);

// ****** SECOND ******
// import React from "react";
// const UserContext = React.createContext();

// export default UserContext;

// ****** THIRD ******
// import React, { useState, createContext, useEffect, useContext } from "react";
// import axios from "axios";

// export const UserContext = createContext();

// export function useUser() {
//   return useContext(UserContext);
// }

// export const UserProvider = ({ children }) => {
//   const [user, setUser] = useState([{}]);

//   console.log(`Current value of User State: ${JSON.stringify(user)}`);

//   useEffect((webinars) => {
//     const checkLoggedIn = async () => {
//       let token = localStorage.getItem("auth-token");
//       if (token === null) {
//         localStorage.setItem("auth-token", "");
//         token = "";
//         console.log(userData);
//       }
//       const tokenResponse = await axios.post(
//         "https://frozen-woodland-47284.herokuapp.com/user/isTokenValid",
//         null,
//         { headers: { "x-auth-token": token } }
//       );
//       if (tokenResponse.data) {
//         const userRes = await axios.get(
//           "https://frozen-woodland-47284.herokuapp.com/users/",
//           {
//             headers: { "x-auth-token": token },
//           }
//         );
//         setUser({
//           token,
//           user: userRes.data,
//         });
//         console.log(userData);
//         console.log(userRes.data);
//       }
//     };

//     // getUser();
//     checkLoggedIn();

//     console.log(userData);
//   }, []);

//   // console.log(`Updated value of Webinar State: ${JSON.stringify(webinars)}`);

//   return <UserContext.Provider value={user}>{children}</UserContext.Provider>;
// };
