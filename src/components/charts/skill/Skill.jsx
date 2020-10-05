import React, { Component } from "react";
import axios from "axios";

var Chart = require("chart.js");

class Skill extends Component {
  constructor(props) {
    super(props);
    this.state = {
      skillArray: [],
      skillFrequency: {},
    };
  }

  async componentDidMount() {
    await this.genreArray();
    await this.skillFrequency();
    await this.showState();
    await this.circleChart();
  }

  // Console Logging State

  showState = () => {
    console.log(this.state);
  };

  // First, get all Main Topics (Genres)
  //https://www.tutorialspoint.com/looping-through-and-getting-frequency-of-all-the-elements-in-an-array-javascript

  async genreArray() {
    await axios
      .get("https://salty-fortress-9010-virt-b.herokuapp.com/webinar/get/all")
      .then((res) => {
        const array = res.data.data;
        const skillArray = [];
        let i = "";
        for (i = 0; i < array.length; i++) {
          skillArray.push(array[i].skillLevel);
        }
        console.log("skillArray: " + skillArray);
        this.setState({ skillArray });
      });
  }

  // Then Use For Each to Create Frequency Object

  skillFrequency = () => {
    const array = this.state.skillArray;
    const skillFrequency = {};
    array.forEach((item) => {
      if (skillFrequency[item]) {
        skillFrequency[item]++;
      } else {
        skillFrequency[item] = 1;
      }
      return skillFrequency;
    });
    this.setState({ skillFrequency });
  };

  circleChart = () => {
    var ctx = document.getElementById("chartSkill").getContext("2d");

    var testChart = new Chart(ctx, {
      type: "doughnut",
      data: {
        labels: Object.keys(this.state.skillFrequency),
        datasets: [
          {
            label: "# of Votes",
            data: Object.values(this.state.skillFrequency),
            backgroundColor: [
              "rgb(37, 31, 68)",
              "rgba(0, 80, 130)",
              "rgba(166, 100, 227)",
              "rgba(190, 175, 254)",
              "rgba(153, 102, 255, 0.2)",
              "rgba(255, 159, 64, 0.2)",
            ],
            borderColor: [
              "rgba(99, 91, 139)",
              "rgba(99, 91, 139)",
              "rgba(99, 91, 139)",
              "rgba(99, 91, 139)",
              "rgba(99, 91, 139)",
              "rgba(99, 91, 139)",
            ],
            borderWidth: this.props.borderWidth,
          },
        ],
      },
      options: {
        responsive: true,
        legend: {
          position: this.props.position,
          display: this.props.display,
        },
        gridLines: {
          display: false,
        },
        aspectRatio: this.props.aspectRatio,
        maintainAspectRatio: true,
        scales: {
          yAxes: [
            {
              ticks: {
                display: false,
              },
              gridLines: {
                display: false,
              },
            },
          ],
          xAxes: [
            {
              ticks: {
                display: false,
              },
              gridLines: {
                display: false,
              },
            },
          ],
        },
      },
    });
    return testChart;
  };

  render() {
    return (
      <div className={this.props.chart}>
        <h2 className={this.props.chartHeader}>Skill Level Mix</h2>
        <div className={this.props.skill}>
          <canvas id="chartSkill"></canvas>
        </div>
      </div>
    );
  }
}

export default Skill;
