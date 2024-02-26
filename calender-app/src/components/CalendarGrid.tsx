import CalendarGridItem from "./CalendarGridItem";
import Slider from "./Slider";
import { useState } from "react";

export default function CalendarGrid() {
  let date = new Date();

  const [currentMonth, setMonth] = useState(date.getMonth());
  const [currentYear, setYear] = useState(date.getFullYear());

  let daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();

  let daysArray = Array.from(new Array(daysInMonth), (x, i) => i + 1);

  return (
    <>
      <h6 className="display-6">
        {Month[currentMonth]} {currentYear}
      </h6>
      <div className="container slider">
        <Slider
          title="Month"
          selected={currentMonth}
          min={0}
          max={11}
          onSelectedChanged={setMonth}
        />
      </div>
      <div className="container slider">
        <Slider
          title="Year"
          selected={currentYear}
          min={date.getFullYear()}
          max={date.getFullYear() + 5}
          onSelectedChanged={setYear}
        />
      </div>
      <div className="calender-grid flex-container">
        {daysArray.map((day) => (
          <CalendarGridItem day={day} />
        ))}
      </div>
    </>
  );
}

enum Month {
  January,
  February,
  March,
  April,
  May,
  June,
  July,
  August,
  September,
  October,
  November,
  December,
}
