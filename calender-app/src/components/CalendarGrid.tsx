import CalendarGridItem from "./CalendarGridItem";

function ChunkArray(array: any[], chunkSize: number): any[][] {
  const chunkedArray: any[][] = [];

  while (array.length > 0) {
    chunkedArray.push(array.splice(0, chunkSize));
  }

  return chunkedArray;
}

export default function CalendarGrid() {
  let date = new Date();

  let daysInMonth =
    new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate() - 1;

  let daysArray = Array.from(new Array(daysInMonth), (x, i) => i + 1);

  return (
    <>
      <div className="calender-container flex-container">
        <div className="calender-container-inner">
          {daysArray.map((day) => (
            <CalendarGridItem day={day} />
          ))}
        </div>
      </div>
    </>
  );
}
