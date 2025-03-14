import { useState } from "react";
import { Button, Modal, Form } from "react-bootstrap";

export default function Appointments() {
  const [appointments, setAppointments] = useState([
    { id: 1, name: "John Doe", date: "2025-03-15", time: "10:00 AM", doctor: "Dr. Smith" },
    { id: 2, name: "Jane Doe", date: "2025-03-16", time: "11:00 AM", doctor: "Dr. Brown" },
  ]);

  const [show, setShow] = useState(false);
  const [newAppointment, setNewAppointment] = useState({ name: "", date: "", time: "", doctor: "" });

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  const handleChange = (e) => {
    setNewAppointment({ ...newAppointment, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setAppointments([...appointments, { id: appointments.length + 1, ...newAppointment }]);
    setNewAppointment({ name: "", date: "", time: "", doctor: "" });
    handleClose();
  };

  const handleRemove = (id) => {
    setAppointments(appointments.filter(appointment => appointment.id !== id));
  };

  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">Appointments</h2>
      <Button variant="primary" onClick={handleShow} className="mb-3">
        Book New Appointment
      </Button>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>#</th>
            <th>Patient Name</th>
            <th>Date</th>
            <th>Time</th>
            <th>Doctor</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {appointments.map((appointment) => (
            <tr key={appointment.id}>
              <td>{appointment.id}</td>
              <td>{appointment.name}</td>
              <td>{appointment.date}</td>
              <td>{appointment.time}</td>
              <td>{appointment.doctor}</td>
              <td>
                <Button variant="danger" onClick={() => handleRemove(appointment.id)}>Remove</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Modal for Booking New Appointment */}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Book New Appointment</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>Patient Name</Form.Label>
              <Form.Control type="text" name="name" value={newAppointment.name} onChange={handleChange} required />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Date</Form.Label>
              <Form.Control type="date" name="date" value={newAppointment.date} onChange={handleChange} required />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Time</Form.Label>
              <Form.Control type="time" name="time" value={newAppointment.time} onChange={handleChange} required />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Doctor</Form.Label>
              <Form.Control type="text" name="doctor" value={newAppointment.doctor} onChange={handleChange} required />
            </Form.Group>
            <Button variant="primary" type="submit">
              Book Appointment
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
}
