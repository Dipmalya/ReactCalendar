import React from "react";
import moment from "moment";
import CustomCalendar from "./Calendar";
import { DayIndex } from "./dayconfig";

export default function Main(props) {
  const { currentDate, lastDate } = props;
  const whiteDates = [
    "2021-02-12",
    "2021-02-13",
    "2021-02-18",
    "2021-02-27",
    "2021-02-24",
    "2021-03-02",
    "2021-03-15",
    "2021-04-01",
    "2021-04-08"
  ];

  const violetDates = [
    "2021-02-21",
    "2021-02-22",
    "2021-02-23",
    "2021-02-01",
    "2021-03-01",
    "2021-03-09",
    "2021-03-10",
    "2021-03-11",
    "2021-03-12",
  ];

  function createMonthArray() {
    const endingMonth = moment(lastDate, "YYYY-MM-DD").month() + 1;
    let monthArray = [];
    let dateOfStart = moment(currentDate, "YYYY-MM-DD");
    let dateToShow = dateOfStart.subtract(30, 'days').format('YYYY-MM-DD');
    let startingMonth = moment(dateToShow, "YYYY-MM-DD").month() + 1;
    for (let index = startingMonth; index <= endingMonth; index++) {
      monthArray.push(index > 9 ? index.toString() : `0${index}`);
    }
    return monthArray;
  }

  return (
    <div className="row m-4">
      <div className="col-md-9">
        <div className="row">
          {Array.from({ length: 3 }, (v, i) => i + 1).map((week) => (
            <div key={week} className="d-flex mr-1 week-day">
              {Object.values(DayIndex).map((item, index) =>
                index < 5 ? (
                  <div key={index} className="mr-3" style={{ paddingLeft: '0.65rem' }}>{item}</div>
                ) : (
                  <div key={index} className="weekends pl-3">{item}</div>
                )
              )}
            </div>
          ))}
        </div>
        <div className="row">
          {createMonthArray().map((item, index) => (
            <CustomCalendar
              key={`calendar-${index}`}
              currentDate={currentDate}
              lastDate={lastDate}
              whiteBorders={whiteDates}
              violetBorders={violetDates}
              monthIndex={item}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
