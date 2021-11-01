import React from "react";
import CustomCalendar from "./Calendar";

export default function Main() {
  return (
    <div className="row m-4">
      {["01", "02", "03", "04", "05", "06", "07", "08", "09"].map((item, index) => (
        <CustomCalendar
          key={`cal-${index}`}
          classProp={"pr-1 pb-1"}
          value={new Date(`${item}/01/2021`)}
        />
      ))}
    </div>
  );
}
