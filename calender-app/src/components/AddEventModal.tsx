import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import { Button } from "react-bootstrap";

type Props = {
  isOpen: boolean;
  OnAddEvent: (name: string) => void;
  OnClose: () => void;
};

export default function AddEventModal({ isOpen, OnAddEvent, OnClose }: Props) {
  const [eventName, setEventName] = useState("");

  function Close() {
    setEventName("");
    OnClose();
  }

  return (
    <Modal
      show={isOpen}
      onHide={OnClose}
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Add Event</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <input
          type="text"
          value={eventName}
          onChange={(e) => setEventName(e.target.value)}
          placeholder="Event Name"
        />
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={Close}>
          Close
        </Button>
        <Button
          variant="primary"
          onClick={() => {
            OnAddEvent(eventName);
            setEventName("");
            Close();
          }}
        >
          Add Event
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
