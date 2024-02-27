import CalendarGridItem from "./CalendarGridItem";
import Slider from "./Slider";
import { useState } from "react";

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

function GetDaysInMonth(year: number, month: number) {
  let daysInMonth = new Date(year, month + 1, 0).getDate();
  return Array.from(new Array(daysInMonth), (x, i) => i + 1);
}

export default function CalendarGrid() {
  let currentDate = new Date();

  const [currentMonth, setMonth] = useState(currentDate.getMonth());
  const [currentYear, setYear] = useState(currentDate.getFullYear());

  let daysArray = GetDaysInMonth(currentYear, currentMonth);

  return (
    <>
      <h6 className="display-6">
        {Month[currentMonth]} {currentYear}
      </h6>
      <div className="container slider-container">
        <Slider
          title="Month"
          selected={currentMonth}
          min={0}
          max={11}
          onSelectedChanged={setMonth}
        />
        <Slider
          title="Year"
          selected={currentYear}
          min={currentDate.getFullYear()}
          max={currentDate.getFullYear() + 5}
          onSelectedChanged={setYear}
        />
      </div>
      <div className="calender-grid flex-container">
        {daysArray.map((day) => (
          <CalendarGridItem date={new Date(currentYear, currentMonth, day)} />
        ))}
      </div>
    </>
  );
}
