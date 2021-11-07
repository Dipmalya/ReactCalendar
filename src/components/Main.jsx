import React from "react";
import CustomCalendar from "./Calendar";
import { DayIndex } from "./dayconfig";

export default function Main() {
  return (
    <div className="row m-4">
      <div className="col-md-9">
        <div className="row">
          {Array.from({ length: 3 }, (v, i) => i + 1).map((week) => (
            <div className="d-flex mr-1 week-day">
              {Object.values(DayIndex).map((item, index) =>
                index < 5 ? (
                  <div className="mr-3" style={{paddingLeft: '0.2rem'}}>{item}</div>
                ) : (
                  <div className="weekends pl-2">{item}</div>
                )
              )}
            </div>
          ))}
        </div>
        <div className="row">
          {["1", "2", "3", "4", "5", "6", "7", "8", "9"].map((item, index) => (
            <CustomCalendar monthIndex={item} />
          ))}
        </div>
      </div>
    </div>
  );
}
