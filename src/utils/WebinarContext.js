import React, { useState, createContext, useEffect, useContext } from "react";
import axios from "axios";

export const WebinarContext = createContext();

export function useWebinar() {
  return useContext(WebinarContext);
}

export const WebinarProvider = ({ children }) => {
  const [webinars, setWebinars] = useState([
    {
      date: {
        event: {
          title: "This Webinar Da Bomb!",
          start: "2020-12-8T09:00:00",
          end: "2020-12-8T10:00:00",
        },
        date: "2020-12-8",
        duration: 60,
      },
      video: {
        viewed_by: [],
        url: "https://www.youtube.com/watch?v=yPYZpwSpKmA",
        title: "Get Educated!",
        description: "A really interesting video!",
      },
      quiz: {
        questions: [],
      },
      tags: {
        educational: true,
        networking: true,
        finance: true,
        marketing: false,
        engineering: false,
      },
      hosts: ["5f5eab5cb441a11880065890"],
      id: "5f5eab5cb441a1188006588f",
      title: "This Webinar Da Bomb!",
      description: "This is a really awesome Webinar!!!",
      mainTopic: "React",
      skillLevel: "Advanced",
      created_by: "5f5eab5cb441a11880065890",
    },
  ]);

  // console.log(`Current value of Webinar State: ${JSON.stringify(webinars)}`);

  useEffect((webinars) => {
    axios
      .get("https://salty-fortress-9010-virt-b.herokuapp.com/webinar/get/all")
      .then((res) => {
        const results = res.data.data;
        // console.log(`Results of Axios Call: ${JSON.stringify(results)}`);
        setWebinars(results);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  // console.log(`Updated value of Webinar State: ${JSON.stringify(webinars)}`);

  return (
    <WebinarContext.Provider value={webinars}>
      {children}
    </WebinarContext.Provider>
  );
};
