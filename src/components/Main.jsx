import React from "react";
import CustomCalendar from "./Calendar";

export default function Main() {
  return (
    <div className="row m-4">
      <div className="col-md-9">
        <div className="row">
          {["1", "2", "3", "4", "5", "6", "7", "8", "9"].map((item, index) => (
            <CustomCalendar monthIndex={item} />
          ))}
        </div>
      </div>
    </div>
  );
}
