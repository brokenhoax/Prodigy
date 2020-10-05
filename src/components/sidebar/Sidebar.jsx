import React, { Component } from "react";
import CountHours from "../charts/countHours/CountHours";
import CountWebinars from "../charts/countWebinars/CountWebinars";
import Genre from "../charts/genre/Genre";
import Skill from "../charts/skill/Skill";
import Presenter from "../charts/presenter/Presenter";
import styles from "./Sidebar.module.css";
import axios from "axios";

class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      display: false,
      position: "right",
      webinarArray: [],
      sumHours: "",
      sumWebinars: "",
      borderWidth: 0,
      aspectRatio: 3,
    };
  }

  async componentDidMount() {
    await this.webinarArray();
    await this.sumHours();
    await this.sumWebinars();
  }

  async webinarArray() {
    await axios
      .get("https://salty-fortress-9010-virt-b.herokuapp.com/webinar/get/all")
      .then((res) => {
        const totalHours = res.data.data;
        const webinarArray = [];
        let i = "";
        for (i = 0; i < totalHours.length; i++) {
          webinarArray.push(totalHours[i].date.duration);
        }
        console.log("webArray: " + webinarArray);
        this.setState({ webinarArray, totalHours });
      });
  }

  sumHours() {
    let newArray = this.state.webinarArray;
    console.log("sumHoursArray: " + newArray);
    let sumMinutes = 0;
    for (let n of newArray) sumMinutes += n;
    let sumHours = sumMinutes / 60;
    console.log("Webinar Duration Sum: " + sumHours);
    this.setState({ sumHours });
  }

  sumWebinars() {
    let newArray = this.state.webinarArray;
    console.log("sumWebinarsArray: " + newArray);
    let sumWebinars = newArray.length;
    console.log("sumWebinarArray: " + sumWebinars);
    this.setState({ sumWebinars });
  }

  render() {
    return (
      <div className={styles.sideContainer}>
        <CountWebinars
          chart={styles.chart}
          chartHeader={styles.chartHeader}
          totalWeb={styles.totalWeb}
          webinars={styles.webinars}
          sumWebinars={this.state.sumWebinars}
        />
        <CountHours
          chart={styles.chart}
          chartHeader={styles.chartHeader}
          totalHours={styles.totalHours}
          hours={styles.hours}
          sumHours={this.state.sumHours}
        />
        <Genre
          chart={styles.chart}
          chartHeader={styles.chartHeader}
          genre={styles.genre}
          display={this.state.display}
          position={this.state.position}
          borderWidth={this.state.borderWidth}
          aspectRatio={this.state.aspectRatio}
        />
        <Skill
          chart={styles.chart}
          chartHeader={styles.chartHeader}
          skill={styles.skill}
          borderWidth={this.state.borderWidth}
          aspectRatio={this.state.aspectRatio}
        />
        <Presenter
          chart={styles.chart}
          chartHeader={styles.chartHeader}
          presenter={styles.presenter}
          display={this.state.display}
          position={this.state.position}
          borderWidth={this.state.borderWidth}
          aspectRatio={this.state.aspectRatio}
        />
      </div>
    );
  }
}

export default Sidebar;
