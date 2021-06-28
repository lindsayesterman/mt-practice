import React, { Component } from "react";
import "./Graph.css";
import { motion } from "framer-motion";
import BackBtn from "../BackBtn/BackBtn";
import { Bar, Line, Pie, Bubble,  Scatter } from "react-chartjs-2";
import f1 from "../img/faceOne.svg";
import f2 from "../img/faceTwo.svg";
import f3 from "../img/faceThree.svg";
import f4 from "../img/faceFour.svg";
import f5 from "../img/faceFive.svg";

export default class Graph extends Component {
  constructor(props) {
    super(props);
    this.state = {
      graphData: {},
      timeRange: "",
    };
  }

  componentDidMount() {
    this.getGraphData();
  }

  handleTimeRangeClicked = (e) => {
    this.setState({
      timeRange: e.target.value,
    });
    console.log(e.target.value);
  };

  getGraphData = () => {
    //ajax call here
    let weekLabels = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    let numData = [1, 3, 3, 4, 5, 5, 2, 1, 3, 5, 3, 4, 2, 3, 4];
    this.setState({
      graphData: {
        labels: weekLabels,
        datasets: [
          {
            label: "Mood",
            data: numData,
            backgroundColor: [
              "#7FBEF9",
              "#BBDDFB",
              "#FFE457",
              "#FFD954",
              "#F8C144",
            ],
          },
        ],
      },
    });
  };

  render() {
    return (
      <>
        <BackBtn></BackBtn>
        <div className="graph">
          <div className="statContainer">
            <h1>Your mood over time with Shimmer:)</h1>
            <div className="statBox">
              <h3>Your most common stats</h3>
              <div className="boxInsideStatBox">
                <p>
                  <b>Mood: </b> Happy
                </p>
                <br />
                <p>
                  <b>Tags: </b> School, Work, Food
                </p>
              </div>
            </div>
            <div className="buttonContainer">
              <button
                value="week"
                onClick={this.handleTimeRangeClicked}
                className="week"
              >
                Week
              </button>
              <button
                value="month"
                onClick={this.handleTimeRangeClicked}
                className="month"
              >
                Month
              </button>
              <button
                value="year"
                onClick={this.handleTimeRangeClicked}
                className="year"
              >
                Year
              </button>
            </div>
          </div>
          {/* <div className="graphColOfFaces">
            <img alt="cartoon face" src={f5}></img>
            <img alt="cartoon face" src={f4}></img>
            <img alt="cartoon face" src={f3}></img>
            <img alt="cartoon face" src={f2}></img>
            <img alt="cartoon face" src={f1}></img>
          </div> */}
          <div className="graphHolder">
              <Line
                className="chartedData"
                data={this.state.graphData}
                options={{
                  title: {
                    display: true,
                    text: "Mood over time with Shimmer",
                    fontSize: 25,
                  },
                  legend: {
                    display: true,
                    position: "right",
                  },
                }}
              ></Line>
          </div>
        </div>
      </>
    );
  }
}
