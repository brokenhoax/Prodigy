import React, { useContext } from "react";
import styles from "../cards/Cards.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import UserContext from "../../utils/UserContext";

function CardItem(props) {
  // console.log(props);
  // Using User Context
  const user = useContext(UserContext);
  console.log("User: " + JSON.stringify(user.userData.user));

  let button;

  if (user.userData.user._id === null) {
    button = null;
  } else if (user.userData.user.favorite.includes(props.id)) {
    button = (
      <button
        className={styles.favIcon}
        onClick={() => props.handleLike(props.id)}
      >
        <FontAwesomeIcon className={styles.favIcon} icon={faHeart} size="lg" />
      </button>
    );
  } else {
    button = (
      <button
        className={styles.favIcon}
        onClick={() => props.handleLike(props.id)}
      >
        <FontAwesomeIcon
          className={styles.unfavIcon}
          icon={faHeart}
          size="lg"
        />
      </button>
    );
  }

  return (
    <>
      <li className={styles.cards__list__items}>
        <div className={props.cards__items__link} to={props.path}>
          <figure
            className={styles.cards__item__picWrap}
            data-category={props.label}
          >
            <img
              className={styles.cards__item__img}
              alt="Webinar"
              src={props.src}
            />
          </figure>
          <div className={styles.cards__item__info}>
            <h5 className={styles.cards__item__text}>{props.title}</h5>
            <h5 className={styles.cards__item__skill}>{props.skill}</h5>
            <h5 className={styles.cards__item__date}>{props.date}</h5>
            <h5 className={styles.cards__item__time}>{props.time}</h5>
            <h5 className={styles.cards__item__duration}>{props.duration}</h5>
            <h5 className={styles.cards__item__topic}>{props.topic}</h5>
            <a
              className={styles.cards__item__video}
              href={props.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              Watch Now!
            </a>
            {button}
          </div>
        </div>
      </li>
    </>
  );
}

export default CardItem;
