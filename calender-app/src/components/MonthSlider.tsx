interface Props {
  title: string;
  selected: number;
  min: number;
  max: number;
  onSelectedChanged: (val: number) => void;
}

export default function MonthSlider({
  title,
  selected,
  min,
  max,
  onSelectedChanged,
}: Props) {
  return (
    <>
      <label htmlFor="slider" className="form-label">
        {title}
      </label>
      <input
        type="range"
        className="form-range"
        id="slider"
        min={min}
        max={max}
        step="1"
        defaultValue={selected}
        onChange={(e) => onSelectedChanged(e.currentTarget.valueAsNumber)}
      ></input>
    </>
  );
}
