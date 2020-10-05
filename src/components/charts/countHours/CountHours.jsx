import React from "react";

const CountHours = (props) => {
  return (
    <div className={props.chart}>
      <h2 className={props.chartHeader}>Total Hours</h2>
      <div className={props.hours}>
        <p className={props.hours}>{props.sumHours}</p>
      </div>
    </div>
  );
};

export default CountHours;
