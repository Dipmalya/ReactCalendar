import React, { Component } from "react";
import moment from "moment";
import "./index.css";
import config from "../assets/config.json";
import { DayIndex } from "./dayconfig";

export default class CustomCalendar extends Component {
  shoudShowDate(dayCount, index) {
    const { monthIndex } = this.props;
    const firstDate = `${monthIndex}/01/${new Date().getFullYear()}`;
    const startDay = new Date(firstDate).toDateString().slice(0, 2);
    if (dayCount > 1 || DayIndex[index] === startDay) {
      return dayCount <= config[monthIndex].days;
    } else {
      return false;
    }
  }

  getDateString(date) {
    return new Date(date).toDateString().slice(0, 15);
  }

  findDateDiff(currentDate, endDate) {
    return moment(currentDate, 'YYYY-MM-DD').diff(moment(endDate, 'YYYY-MM-DD'), 'days');
  }

  createDate(monthIndex, dayCount) {
    let date = `${new Date().getFullYear()}-${monthIndex}-`;
    if (parseInt(dayCount) < 10) {
      date += `0${dayCount}`
    } else {
      date += `${dayCount}`
    }
    return date;
  }

  getDateClass(dayCount, index) {
    const { monthIndex, currentDate, lastDate, whiteBorders, violetBorders } = this.props;
    let classString = "";
    if (this.getDateString(`${new Date().getFullYear()}-${monthIndex}-${dayCount}`) ===
      this.getDateString(currentDate) && this.shoudShowDate(dayCount, index)) {
      classString += "current-day ";
    }
    if (this.findDateDiff(currentDate, `${new Date().getFullYear()}-${monthIndex}-${dayCount}`) > 30) {
      classString += "disable-day ";
    }
    if (this.findDateDiff(lastDate, `${new Date().getFullYear()}-${monthIndex}-${dayCount}`) < 0) {
      classString += "disable-day ";
    }
    if (violetBorders.includes(this.createDate(monthIndex, dayCount)) &&
      this.shoudShowDate(dayCount, index)) {
      classString += "border-violet ";
    }
    if (whiteBorders.includes(this.createDate(monthIndex, dayCount)) &&
      this.shoudShowDate(dayCount, index)) {
      classString += "border-white ";
    }
    if (this.getDateString(`${new Date().getFullYear()}-${monthIndex}-${dayCount}`) ===
      this.getDateString("2021-02-19")) {
      classString += "black-back ";
    }
    return classString
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
              <div key={day} className="calendar-week">
                {Array.from({ length: 7 }, (v, i) => i + 1).map((day1) => (
                  <>
                    {day1 > 5 ? (
                      <div key={day1} className={`day weekend-day ${this.getDateClass(dayCount, day1)}`}>
                        {this.shoudShowDate(dayCount, day1) ? dayCount++ : ""}
                      </div>
                    ) : (
                      <div key={day1} className={`day ${this.getDateClass(dayCount, day1)}`}>
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
