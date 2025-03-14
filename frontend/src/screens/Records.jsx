import { useState } from "react";
import { Table, Button, Modal, Form } from "react-bootstrap";
function Records() {
  const [records, setRecords] = useState([
    { id: 1, patient: "John Doe", condition: "Flu", date: "2025-03-10", doctor: "Dr. Smith" },
    { id: 2, patient: "Jane Doe", condition: "Allergy", date: "2025-03-12", doctor: "Dr. Brown" },
  ]);
  
  const [show, setShow] = useState(false);
  const [newRecord, setNewRecord] = useState({ patient: "", condition: "", date: "", doctor: "" });

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  const handleChange = (e) => {
    setNewRecord({ ...newRecord, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setRecords([...records, { id: records.length + 1, ...newRecord }]);
    setNewRecord({ patient: "", condition: "", date: "", doctor: "" });
    handleClose();
  };

  const handleRemove = (id) => {
    setRecords(records.filter(record => record.id !== id));
  };

  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">Medical Records</h2>
      <Button variant="primary" onClick={handleShow} className="mb-3">
        Add New Record
      </Button>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Patient Name</th>
            <th>Condition</th>
            <th>Date</th>
            <th>Doctor</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {records.map((record) => (
            <tr key={record.id}>
              <td>{record.id}</td>
              <td>{record.patient}</td>
              <td>{record.condition}</td>
              <td>{record.date}</td>
              <td>{record.doctor}</td>
              <td>
                <Button variant="danger" onClick={() => handleRemove(record.id)}>Remove</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      {/* Modal for Adding New Record */}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add New Record</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>Patient Name</Form.Label>
              <Form.Control type="text" name="patient" value={newRecord.patient} onChange={handleChange} required />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Condition</Form.Label>
              <Form.Control type="text" name="condition" value={newRecord.condition} onChange={handleChange} required />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Date</Form.Label>
              <Form.Control type="date" name="date" value={newRecord.date} onChange={handleChange} required />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Doctor</Form.Label>
              <Form.Control type="text" name="doctor" value={newRecord.doctor} onChange={handleChange} required />
            </Form.Group>
            <Button variant="primary" type="submit">
              Add Record
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default Records;