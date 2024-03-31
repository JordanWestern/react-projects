import { useRef } from "react";
import Modal from "react-bootstrap/Modal";
import { Button, Form } from "react-bootstrap";
import { CalendarEvent } from "./CalendarGrid";

type Props = {
  isOpen: boolean;
  event?: CalendarEvent;
  OnAddEvent: (name: string, description: string) => void;
  OnClose: () => void;
};

export default function AddEventModal({
  isOpen,
  event,
  OnAddEvent,
  OnClose,
}: Props) {
  const eventName = useRef(event ? event.name : "");
  const eventDescription = useRef(event ? event.name : "");

  function Close() {
    OnClose();
  }

  return (
    <Modal
      show={isOpen}
      onHide={Close}
      aria-labelledby="contained-modal-title-vcenter"
      centered
      data-theme="dark"
      data-bs-theme="dark"
      className="modal"
    >
      <Modal.Header closeButton>
        <Modal.Title>Event</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3" controlId="name">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              onChange={(e) => (eventName.current = e.target.value)}
              autoFocus
              defaultValue={event?.name}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="description">
            <Form.Label>Description</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              onChange={(e) => (eventDescription.current = e.target.value)}
              defaultValue={event?.description}
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={Close}>
          Close
        </Button>
        {event === undefined && (
          <Button
            variant="primary"
            onClick={() =>
              OnAddEvent(eventName.current, eventDescription.current)
            }
          >
            Save
          </Button>
        )}
      </Modal.Footer>
    </Modal>
  );
}
