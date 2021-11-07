import React, { Component } from "react";
import "./index.css";
import config from "../assets/config.json";

export default class CustomCalendar extends Component {
  getDate(dayCount) {
    const { monthIndex } = this.props;
      if (dayCount <= config[monthIndex].days ) {
          return dayCount
      }
      else {
          return ''
      }
  }
  render() {
    const { monthIndex } = this.props;
    return (
      <div className="w-100 col-md-4 pr-1 pb-1 pl-0">
        <div className="month-class">
          {config[monthIndex] ? config[monthIndex].name : ""}
        </div>
        <div className="calendar-date">
          {Array.from({ length: 5 }, (v, i) => i).map((day) => {
            return (
              <div className="calendar-week">
                {Array.from({ length: 7 }, (v, i) => i + 1).map((day1) => (
                  <>
                    {day1 > 5 ? (
                      <div className="day weekend-day">
                        {this.getDate(day * 7 + day1)}
                      </div>
                    ) : (
                      <div className="day">{this.getDate(day * 7 + day1)}</div>
                    )}
                  </>
                ))}
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
