import React, { Component } from "react";
import "./index.css";
import config from "../assets/config.json";
import { DayIndex } from "./dayconfig";

export default class CustomCalendar extends Component {
  shoudShowDate(dayCount, index) {
    const { monthIndex } = this.props;
    const firstDate = `${monthIndex}/01/${new Date().getFullYear()}`;
    const startDay = new Date(firstDate).toDateString().slice(0, 3);
    if (dayCount > 1 || DayIndex[index] === startDay) {
      return dayCount <= config[monthIndex].days;
    } else {
      return false;
    }
  }
  render() {
    const { monthIndex } = this.props;
    let dayCount = 1;
    return (
      <div className="w-100 col-md-4 pr-1 pb-1 pl-0">
        <div className="month-class">
          {config[monthIndex] ? config[monthIndex].name : ""}
        </div>
        <div className="calendar-date">
          {Array.from({ length: 6 }, (v, i) => i).map((day) => {
            return (
              <div className="calendar-week">
                {Array.from({ length: 7 }, (v, i) => i + 1).map((day1) => (
                  <>
                    {day1 > 5 ? (
                      <div className="day weekend-day">
                        {this.shoudShowDate(dayCount, day1) ? dayCount++ : ""}
                      </div>
                    ) : (
                      <div className="day">
                        {this.shoudShowDate(dayCount, day1) ? dayCount++ : ""}
                      </div>
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
