import React, { Component } from "react";
import styles from "./CreateWebinar.module.css";
import "../../App.css";
import axios from "axios";

// Forms Video on YouTube:
// https://www.youtube.com/watch?v=7Vo_VCcWupQ

class CreateWebinar extends Component {
  state = {
    title: "",
    description: "",
    timezone: "",
    year: "",
    month: "",
    day: "",
    webinarDuration: 0,
    eventTitle: "",
    eventStart: "",
    eventEnd: "",
    hosts: [],
    mainTopic: "Topic",
    skillLevel: "",
    videoUrl: "",
    videoTitle: "",
    videoDescription: "",
    introduction: false,
    lecture: false,
    lab: false,
    review: false,
    bonus: false,
    created_by: {},
  };
  postNewWebinar = async (data) => {
    try {
      const res = await axios.post(
        "https://salty-fortress-9010-virt-b.herokuapp.com/webinar/create",
        data,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log(res.data);
    } catch (err) {
      console.log(err);
    }
  };
  onSubmit = (e) => {
    e.preventDefault();
    let data = {
      title: this.state.title,
      description: this.state.description,
      date: {
        timezone: this.state.timezone,
        date: this.state.year + "-" + this.state.month + "-" + this.state.day,
        duration: this.state.webinarDuration,
        event: {
          title: this.state.eventTitle,
          start: this.state.eventStart,
          end: this.state.eventEnd,
        },
      },

      mainTopic: this.state.mainTopic,
      skillLevel: this.state.skillLevel,
      video: {
        url: this.state.videoUrl,
        title: this.state.videoTitle,
        description: this.state.videoDescription,
      },
      tags: {
        introduction: this.state.introduction,
        lecture: this.state.lecture,
        lab: this.state.lab,
        review: this.state.review,
        bonus: this.state.bonus,
      },
    };
    this.postNewWebinar(data);
  };

  trueFalseRadio = (e) => {
    const target = e.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    this.setState({ [name]: value });
  };

  handleInputChange = (event) => {
    const {
      target: { name, value },
    } = event;
    if (name === "webinarDuration") {
      this.setState({ [name]: parseInt(value) });
    } else {
      this.setState({ [name]: value });
    }
  };

  render() {
    let day = [
      "--",
      "01",
      "02",
      "03",
      "04",
      "05",
      "06",
      "07",
      "08",
      "09",
      "10",
      "11",
      "12",
      "13",
      "14",
      "15",
      "16",
      "17",
      "18",
      "19",
      "20",
      "21",
      "22",
      "23",
      "24",
      "25",
      "26",
      "27",
      "28",
      "29",
      "30",
      "31",
    ];
    let dayOptions =
      day.length > 0 &&
      day.map((num, i) => {
        return (
          <option key={i} value={num}>
            {num}
          </option>
        );
      });
    let month = [
      "--",
      "01",
      "02",
      "03",
      "04",
      "05",
      "06",
      "07",
      "08",
      "09",
      "10",
      "11",
      "12",
    ];
    let monthOptions =
      month.length > 0 &&
      month.map((num, i) => {
        return (
          <option key={i} value={num}>
            {num}
          </option>
        );
      });
    let year = ["--", "2020", "2021", "2022", "2023", "2024"];
    let yearOptions =
      year.length > 0 &&
      year.map((num, i) => {
        return (
          <option key={i} value={num}>
            {num}
          </option>
        );
      });
    let dur = [0, 15, 30, 45, 60, 75, 90, 105, 120];
    let durOptions =
      dur.length > 0 &&
      dur.map((num, i) => {
        return (
          <option key={i} value={num}>
            {num}
          </option>
        );
      });

    return (
      <form className="main">
        <div className={styles.createContainer}>
          <div className={styles.header}>Create Your Webinar</div>
          <div className={styles.textBoxes}>
            <div>
              <div className={`${styles.label} ${styles.test}`}>
                * Indicates Required Field
              </div>
              <label className={styles.important}>Title</label>
              <section>
                <input
                  name="title"
                  className={styles.textBox}
                  id={styles.title}
                  value={this.state.title}
                  onChange={this.handleInputChange}
                />
              </section>
            </div>
            <div>
              <label className={styles.important}>Description</label>
              <section className={styles.description}>
                <input
                  name="description"
                  className={styles.textBox}
                  id={styles.description}
                  value={this.state.description}
                  onChange={this.handleInputChange}
                />
              </section>
            </div>
            <div>
              <label className={styles.important}>Short Title</label>
              <section className={styles.eventTitle}>
                <input
                  name="eventTitle"
                  className={styles.textBox}
                  id={styles.eventTitle}
                  value={this.state.eventTitle}
                  onChange={this.handleInputChange}
                />
              </section>
            </div>
            <div>
              <label className={styles.important}>Event Start</label>
              <section className={styles.eventStart}>
                <input
                  name="eventStart"
                  className={styles.textBox}
                  id={styles.eventStart}
                  value={this.state.eventStart}
                  onChange={this.handleInputChange}
                />
              </section>
            </div>
            <div>
              <label className={styles.important}>Event End</label>
              <section className={styles.eventEnd}>
                <input
                  name="eventEnd"
                  className={styles.textBox}
                  id={styles.eventEnd}
                  value={this.state.eventEnd}
                  onChange={this.handleInputChange}
                />
              </section>
            </div>
            <label className={styles.important}>Video URL</label>
            <section className={styles.videoURL}>
              <input
                name="videoUrl"
                className={styles.textBox}
                id={styles.videoURL}
                value={this.state.videoUrl}
                onChange={this.handleInputChange}
              />
            </section>
            <label className={styles.important}>Video Title</label>
            <section className={styles.videoTitle}>
              <input
                name="videoTitle"
                className={styles.textBox}
                id={styles.videoTitle}
                value={this.state.videoTitle}
                onChange={this.handleInputChange}
              />
            </section>
            <label className={styles.important}>Video Description</label>
            <section className={styles.videoDescription}>
              <input
                name="videoDescription"
                className={styles.textBox}
                id={styles.videoDescription}
                value={this.state.videoDescription}
                onChange={this.handleInputChange}
              />
            </section>
            <div className={styles.dropDowns}>
              <div>
                <label className={styles.important}>Main Topic</label>
                <section className={styles.mainTopic}>
                  <select
                    name="mainTopic"
                    className={styles.dropDown}
                    id={styles.mainTopic}
                    value={this.state.mainTopic}
                    onChange={this.handleInputChange}
                  >
                    <option value="--">--</option>
                    <option value="JavaScript">JavaScript</option>
                    <option value="Python"> Python</option>
                    <option value="Angular"> Angular</option>
                    <option value="React"> React</option>
                    <option value="Node JS"> Node JS</option>
                    <option value="MongoDB"> MongoDB</option>
                  </select>
                </section>
              </div>
              <div>
                <label className={styles.important}>Skill Level</label>
                <section className={styles.skillLevel}>
                  <select
                    name="skillLevel"
                    className={styles.dropDown}
                    id={styles.skillLevel}
                    value={this.state.skillLevel}
                    onChange={this.handleInputChange}
                  >
                    <option value="--">--</option>
                    <option value="Beginner">Beginner</option>
                    <option value="Intermediate"> Intermediate</option>
                    <option value="Advanced"> Advanced</option>
                  </select>
                </section>
              </div>
              <div>
                <label className={styles.important}>Day</label>
                <section className={styles.day}>
                  <select
                    name="day"
                    className={styles.dropDown}
                    id={styles.day}
                    value={this.state.day}
                    onChange={this.handleInputChange}
                  >
                    {dayOptions}
                  </select>
                </section>
              </div>
              <div>
                <label className={styles.important}>Month</label>
                <section className={styles.day}>
                  <select
                    name="month"
                    className={styles.dropDown}
                    id={styles.month}
                    value={this.state.month}
                    onChange={this.handleInputChange}
                  >
                    {monthOptions}
                  </select>
                </section>
              </div>
              <div>
                <label className={styles.important}>Year</label>
                <section className={styles.day}>
                  <select
                    name="year"
                    className={styles.dropDown}
                    id={styles.year}
                    value={this.state.year}
                    onChange={this.handleInputChange}
                  >
                    {yearOptions}
                  </select>
                </section>
              </div>
              <div>
                <label className={styles.important}>Time Zone</label>
                <section className={styles.timeZone}>
                  <select
                    name="timezone"
                    className={styles.dropDown}
                    id={styles.timeZone}
                    value={this.state.timezone}
                    onChange={this.handleInputChange}
                  >
                    <option value="--">--</option>
                    <option value="CDT">CDT</option>
                    <option value="MDT"> MDT</option>
                    <option value="MST"> MST</option>
                    <option value="PDT"> PDT</option>
                    <option value="AKDT"> AKDT</option>
                    <option value="HDT"> HDT</option>
                  </select>
                </section>
              </div>
              <div>
                <label className={styles.important}>
                  Duration (In Minutes)
                </label>
                <section className={styles.duration}>
                  <select
                    name="webinarDuration"
                    className={styles.dropDown}
                    id={styles.webinarDuration}
                    value={this.state.webinarDuration}
                    onChange={this.handleInputChange}
                  >
                    {durOptions}
                  </select>
                </section>
              </div>
            </div>
            <div className={styles.tagHeader}>Tags</div>
            <div className={styles.tagContainer}>
              <label className={styles.checkBox}>
                Introduction
                <input
                  type="checkbox"
                  name="introduction"
                  value={this.state.introduction}
                  className={styles.tag}
                  onChange={this.trueFalseRadio}
                />
                <span className={styles.checkmark}></span>
              </label>
              <label className={styles.checkBox}>
                Lecture
                <input
                  type="checkbox"
                  name="lecture"
                  value={this.state.lecture}
                  className={styles.tag}
                  onChange={this.trueFalseRadio}
                />
                <span className={styles.checkmark}></span>
              </label>
              <label className={styles.checkBox}>
                Lab
                <input
                  type="checkbox"
                  name="lab"
                  value={this.state.lab}
                  className={styles.tag}
                  onChange={this.trueFalseRadio}
                />
                <span className={styles.checkmark}></span>
              </label>
              <label className={styles.checkBox}>
                Review
                <input
                  type="checkbox"
                  name="review"
                  value={this.state.review}
                  className={styles.tag}
                  onChange={this.trueFalseRadio}
                />
                <span className={styles.checkmark}></span>
              </label>
              <label className={styles.checkBox}>
                Bonus
                <input
                  type="checkbox"
                  name="bonus"
                  value={this.state.bonus}
                  className={styles.tag}
                  onChange={this.trueFalseRadio}
                />
                <span className={styles.checkmark}></span>
              </label>
            </div>
            <div className={styles.buddy}>
              <button className={styles.myBud} onClick={this.onSubmit}>
                Submit
              </button>
            </div>
          </div>
        </div>
      </form>
    );
  }
}

export default CreateWebinar;
