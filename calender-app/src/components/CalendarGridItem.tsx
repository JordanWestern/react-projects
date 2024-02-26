import Card from "react-bootstrap/Card";
import { Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

type Props = {
  day: number;
};

export default function CalendarGridItem({ day }: Props) {
  return (
    <Card bg="dark" text="light">
      <Card.Header>{day}</Card.Header>
      <Card.Body className="calendar-grid-item">
        <Button className="circle-btn" variant="primary">
          <FontAwesomeIcon icon={faPlus} />
        </Button>
      </Card.Body>
    </Card>
  );
}
