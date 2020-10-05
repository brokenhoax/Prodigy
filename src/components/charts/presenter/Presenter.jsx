import React, { Component } from "react";
import axios from "axios";

var Chart = require("chart.js");

class Presenter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      presenterArray: [],
      presenterFrequency: {},
    };
  }

  async componentDidMount() {
    await this.presenterArray();
    await this.presenterFrequency();
    // await this.mapNamesToIDs();
    await this.showState();
    await this.circleChart();
  }

  // Console Logging State

  showState = () => {
    console.log(this.state);
  };

  // First, get all Main Topics (Genres)
  //https://www.tutorialspoint.com/looping-through-and-getting-frequency-of-all-the-elements-in-an-array-javascript

  async presenterArray() {
    await axios
      .get("https://salty-fortress-9010-virt-b.herokuapp.com/webinar/get/all")
      .then((res) => {
        const array = res.data.data;
        const fullArray = [];
        let i = "";
        for (i = 0; i < array.length; i++) {
          fullArray.push(array[i].hosts);
        }
        let presenterArray = new Set(fullArray);
        console.log("presenterArray: " + presenterArray);
        this.setState({ presenterArray });
      });
  }

  // Then Use For Each to Create Frequency Object

  presenterFrequency = () => {
    const array = this.state.presenterArray;
    const presenterFrequency = {};
    array.forEach((item) => {
      if (presenterFrequency[item]) {
        presenterFrequency[item]++;
      } else {
        presenterFrequency[item] = 1;
      }
      return presenterFrequency;
    });
    console.log("WHATH!" + presenterFrequency);
    this.setState({ presenterFrequency });
  };

  circleChart = () => {
    var ctx = document.getElementById("chartPresenter").getContext("2d");

    var testChart = new Chart(ctx, {
      type: "bar",
      data: {
        labels: Object.keys(this.state.presenterFrequency),
        datasets: [
          {
            label: "",
            data: Object.values(this.state.presenterFrequency),
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
                beginAtZero: true,
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
                display: this.props.displayTicks,
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
        <h2 className={this.props.chartHeader}>Top Presenter</h2>
        <div className={this.props.presenter}>
          <canvas id="chartPresenter"></canvas>
        </div>
      </div>
    );
  }
}

export default Presenter;
