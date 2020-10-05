import React, { Component } from "react";
import axios from "axios";

// Example Class Chart.js Component:

var Chart = require("chart.js");

class Genre extends Component {
  constructor(props) {
    super(props);
    this.state = {
      genreArray: [],
      topicFrequency: {},
      aspectRatio: "",
    };
  }

  async componentDidMount() {
    await this.genreArray();
    await this.genreFrequency();
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
        const genreArray = [];
        let i = "";
        for (i = 0; i < array.length; i++) {
          genreArray.push(array[i].mainTopic);
        }
        console.log("GenreArray: " + genreArray);
        this.setState({ genreArray });
      });
  }

  // Then Use For Each to Create Frequency Object

  genreFrequency = () => {
    const array = this.state.genreArray;
    const topicFrequency = {};
    array.forEach((item) => {
      if (topicFrequency[item]) {
        topicFrequency[item]++;
      } else {
        topicFrequency[item] = 1;
      }
      return topicFrequency;
    });
    this.setState({ topicFrequency });
  };

  circleChart = () => {
    var ctx = document.getElementById("chartGenre").getContext("2d");

    var testChart = new Chart(ctx, {
      type: "doughnut",
      data: {
        // Then use "Object.Keys" and "Object.Values" to populate Labels and Data:
        labels: Object.keys(this.state.topicFrequency),
        datasets: [
          {
            label: "# of Votes",
            data: Object.values(this.state.topicFrequency),
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
        <h2 className={this.props.chartHeader}>Top Genres</h2>
        <div className={this.props.genre}>
          <canvas id="chartGenre"></canvas>
        </div>
      </div>
    );
  }
}

export default Genre;

/////////////////////////////////////////////////////////////////
// // Example Functional Chart.js Component:

// Don't forget to use:
// import React, { useState } from 'react';
// import { Doughnut } from 'react-chartjs-2';

// const Genre = () => {

//     // Set Data

//     const [genreData, setGenreData] = useState({

//         labels: ['JavaScript', 'Python', 'Ruby', 'CSS', 'React', 'Swift'],
//         datasets: [{
//             label: '# of Votes',
//             data: [12, 19, 3, 7, 2, 3],
//             backgroundColor: [
//                 'rgba(62, 71, 84)',
//                 'rgba(95, 130, 217)',
//                 'rgba(166, 100, 227)',
//                 'rgba(190, 175, 254)',
//                 'rgba(153, 102, 255, 0.2)',
//                 'rgba(255, 159, 64, 0.2)'
//             ],
//             borderColor: [
//                 'rgba(255, 99, 132, 1)',
//                 'rgba(54, 162, 235, 1)',
//                 'rgba(255, 206, 86, 1)',
//                 'rgba(75, 192, 192, 1)',
//                 'rgba(153, 102, 255, 1)',
//                 'rgba(255, 159, 64, 1)'
//             ],
//             borderWidth: 0
//         }]

//     });

//     // Set Options

//     const [genreOptions, setGenreOptions] = useState({

//         options: {
//             responsive: true,
//             legend: {
//                 position: 'right',
//             },
//             gridLines: {
//                 display: false,
//             },
//             maintainAspectRatio: false  ,
//             scales: {
//                 yAxes: [{
//                     ticks: {
//                         display: false,
//                     },
//                     gridLines: {
//                         display: false,
//                     }
//                 }],
//                 xAxes: [{
//                     ticks: {
//                         display: false,
//                     },
//                     gridLines: {
//                         display: false,
//                     }
//                 }]
//             }
//         }
//     });

//     // Return Chart

//     return (

//         <div className="chart">
//             <h2 className="chart-header">Top Genres</h2>
//             <div className="genre">
//             <Doughnut
//                 data={genreData}
//                 options={{
//                     legend: {
//                         position: 'right',
//                     }
//                 }}
//             />
//             </div>
//         </div>

//     );

// }

// export default Genre;
