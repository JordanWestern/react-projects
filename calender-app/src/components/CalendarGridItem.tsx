type Props = {
  day: number;
};

export default function CalendarGridItem({ day }: Props) {
  return <button className="calendar-grid-item">{day}</button>;
}
