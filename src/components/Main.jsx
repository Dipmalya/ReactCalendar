import React from "react";
import CustomCalendar from "./Calendar";
import { DayIndex } from "./dayconfig";

export default function Main() {
  const whiteDates = [
    "2021-02-12",
    "2021-02-13",
    "2021-02-18",
    "2021-02-27",
    "2021-02-24",
    "2021-03-02",
    "2021-03-15",
    "2021-04-08"
  ];
  const violetDates = [
    "2021-02-21",
    "2021-02-22",
    "2021-02-23",
    "2021-02-01",
    "2021-03-09",
    "2021-03-10",
    "2021-03-11",
    "2021-03-12",
  ]
  return (
    <div className="row m-4">
      <div className="col-md-9">
        <div className="row">
          {Array.from({ length: 3 }, (v, i) => i + 1).map((week) => (
            <div className="d-flex mr-1 week-day">
              {Object.values(DayIndex).map((item, index) =>
                index < 5 ? (
                  <div className="mr-3" style={{paddingLeft: '0.65rem'}}>{item}</div>
                ) : (
                  <div className="weekends pl-3">{item}</div>
                )
              )}
            </div>
          ))}
        </div>
        <div className="row">
          {["01", "02", "03", "04", "05", "06", "07", "08", "09"].map((item, index) => (
            <CustomCalendar
            currentDate="2021-02-27"
            lastDate="2021-09-12"
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
