interface Props {
  selectedMonth: number;
  onSelectedChanged: (val: number) => void;
}

export default function MonthSlider({
  selectedMonth,
  onSelectedChanged,
}: Props) {
  return (
    <>
      <label htmlFor="months" className="form-label">
        {Month[selectedMonth]}
      </label>
      <input
        type="range"
        className="form-range slider"
        id="months"
        min="0"
        max="11"
        step="1"
        defaultValue={selectedMonth}
        onChange={(e) => onSelectedChanged(e.currentTarget.valueAsNumber)}
      ></input>
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
