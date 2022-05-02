import React, { useContext } from "react";
import { useWebinar } from "../../utils/WebinarContext";
// import { useUser } from "../../utils/UserContext";
import UserContext from "../../utils/UserContext";
import styles from "./Cards.module.css";
import CardItem from "../cardItem/CardItem";
import javascript from "../../images/javascript.png";
import nodejs from "../../images/nodejs.png";
import mongodb from "../../images/mongodb.png";
import angular from "../../images/angular.jpg";
import python from "../../images/python.jpg";
import react from "../../images/react.jpg";

import axios from "axios";

const Cards = (props) => {
  let cards;

  // Using Webinar Context
  const webinarContext = useWebinar();
  const webinars = webinarContext;

  // Using User Context
  const user = useContext(UserContext);

  // Logic to Change Image
  function getImage(photo) {
    if (photo === "JavaScript") {
      return (photo = javascript);
    }

    if (photo === "React") {
      return (photo = react);
    }

    if (photo === "Python") {
      return (photo = python);
    }

    if (photo === "MongoDB") {
      return (photo = mongodb);
    }

    if (photo === "Node JS") {
      return (photo = nodejs);
    }

    if (photo === "Angular") {
      return (photo = angular);
    }
  }

  function getTime(time) {
    var res = time.substring(time.length - 8, time.length);
    var showTime = res.substring(0, 5);
    // console.log("Is this the time? " + showTime);
    return showTime;
  }

  async function handleLike(newfav) {
    console.log("Favorited: " + newfav);
    console.log("User: " + JSON.stringify(user.userData.user));
    try {
      // Save Favorite to MongoDB
      let LikeURL = `http://localhost:5000/user/update/${user.userData.user._id}`;
      const response = await axios.patch(LikeURL, {
        id: user.userData.user._id,
        favorite: newfav,
      });
      console.log("👉 Returned data:", response);
    } catch (e) {
      console.log(`😱 Axios request failed: ${e}`);
    }
    // Update User Details
    const getUserDetails = async () => {
      let token = localStorage.getItem("auth-token");
      const userRes = await axios.get(
        `http://localhost:5000/user/get/id/${user.userData.user._id}`,
        {
          headers: { "x-auth-token": token },
        }
      );
      console.log(userRes.data.data);
      user.setUserData({
        token,
        user: userRes.data.data,
      });
    };
    console.log(user);
    getUserDetails();
  }

  if (props.favorites) {
    cards = (
      <div className={styles.cards}>
        <h1 className={styles.cards__title}>{props.header}</h1>
        <div className={styles.cards__container}>
          <div className={styles.cards__wrapper}>
            <ul className={styles.cards__list}>
              {webinars
                .filter(
                  (webinar) =>
                    webinar.mainTopic.includes(props.search) &&
                    user.userData.user.favorite.includes(webinar._id)
                )
                .map((webinar) => (
                  <CardItem
                    key={webinar._id}
                    id={webinar._id}
                    favorite={webinar.favorite}
                    search={props.search}
                    handleLike={handleLike}
                    src={getImage(webinar.mainTopic)}
                    title={webinar.title}
                    skill={" Skill: " + webinar.skillLevel}
                    time={" Time: " + getTime(webinar.date.event.start)}
                    duration={" Length: " + webinar.date.duration + " minutes"}
                    topic={" Topic: " + webinar.mainTopic}
                    link={webinar.video.url}
                    label="JavaScript"
                    path="/webinars"
                  />
                ))}
            </ul>
          </div>
        </div>
      </div>
    );
  } else {
    cards = (
      <div className={styles.cards}>
        <h1 className={styles.cards__title}>{props.header}</h1>
        <div className={styles.cards__container}>
          <div className={styles.cards__wrapper}>
            <ul className={styles.cards__list}>
              {webinars
                .filter((webinar) => webinar.mainTopic.includes(props.search))
                .map((webinar) => (
                  <CardItem
                    key={webinar._id}
                    id={webinar._id}
                    favorite={webinar.favorite}
                    search={props.search}
                    handleLike={handleLike}
                    src={getImage(webinar.mainTopic)}
                    title={webinar.title}
                    skill={" Skill: " + webinar.skillLevel}
                    time={" Time: " + getTime(webinar.date.event.start)}
                    duration={" Length: " + webinar.date.duration + " minutes"}
                    topic={" Topic: " + webinar.mainTopic}
                    link={webinar.video.url}
                    label="JavaScript"
                    path="/webinars"
                  />
                ))}
            </ul>
          </div>
        </div>
      </div>
    );
  }

  return <div>{cards}</div>;
};

export default Cards;
