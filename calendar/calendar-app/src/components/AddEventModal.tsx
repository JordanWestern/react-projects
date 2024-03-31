import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import { Button, Form } from "react-bootstrap";

type Props = {
  isOpen: boolean;
  OnAddEvent: (name: string, description: string) => void;
  OnClose: () => void;
};

export default function AddEventModal({ isOpen, OnAddEvent, OnClose }: Props) {
  const [eventName, setEventName] = useState("");
  const [eventDescription, setEventDescription] = useState("");

  function Close() {
    setEventName("");
    setEventDescription("");
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
              placeholder="name"
              onChange={(e) => setEventName(e.target.value)}
              autoFocus
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="description">
            <Form.Label>Description</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              onChange={(e) => setEventDescription(e.target.value)}
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={Close}>
          Close
        </Button>
        <Button
          variant="primary"
          onClick={() => OnAddEvent(eventName, eventDescription)}
        >
          Save
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
