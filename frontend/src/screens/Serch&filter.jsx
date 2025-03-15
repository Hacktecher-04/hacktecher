import { useState } from "react";
import { Table, Form, Container } from "react-bootstrap";

function SearchFilter() {
  const [records, setRecords] = useState([
    { id: 1, patient: "John Doe", condition: "Flu", date: "2025-03-10", doctor: "Dr. Smith" },
    { id: 2, patient: "Jane Doe", condition: "Allergy", date: "2025-03-12", doctor: "Dr. Brown" },
    { id: 3, patient: "Alice Johnson", condition: "Cold", date: "2025-03-15", doctor: "Dr. Adams" },
    { id: 4, patient: "Bob Williams", condition: "Headache", date: "2025-03-20", doctor: "Dr. Taylor" },
    { id: 5, patient: "Michael Clark", condition: "Diabetes", date: "2025-03-22", doctor: "Dr. Wilson" },
    { id: 6, patient: "Emma Watson", condition: "Asthma", date: "2025-03-25", doctor: "Dr. Carter" },
    { id: 7, patient: "Liam Johnson", condition: "Bronchitis", date: "2025-03-28", doctor: "Dr. Green" },
    { id: 8, patient: "Olivia Davis", condition: "Fracture", date: "2025-04-02", doctor: "Dr. White" },
    { id: 9, patient: "Sophia Miller", condition: "Migraine", date: "2025-04-05", doctor: "Dr. Thomas" },
    { id: 10, patient: "Ethan Wilson", condition: "Hypertension", date: "2025-04-08", doctor: "Dr. Martinez" }
  ]);
  
  const [searchTerm, setSearchTerm] = useState("");
  const [filter, setFilter] = useState("all");

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleFilter = (e) => {
    setFilter(e.target.value);
  };

  const filteredRecords = records.filter((record) => {
    return (
      (filter === "all" || record.condition.toLowerCase() === filter.toLowerCase()) &&
      (record.patient.toLowerCase().includes(searchTerm.toLowerCase()) ||
       record.condition.toLowerCase().includes(searchTerm.toLowerCase()) ||
       record.doctor.toLowerCase().includes(searchTerm.toLowerCase()) ||
       record.date.includes(searchTerm))
    );
  });

  return (
    <Container className="mt-4">
      <h2 className="text-center mb-4">Search & Filter Records</h2>
      <Form className="mb-3">
        <Form.Group className="mb-2">
          <Form.Label>Search</Form.Label>
          <Form.Control
            type="text"
            placeholder="Search by patient, condition, doctor, or date"
            value={searchTerm}
            onChange={handleSearch}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Filter by Condition</Form.Label>
          <Form.Select value={filter} onChange={handleFilter}>
            <option value="all">All Conditions</option>
            <option value="Flu">Flu</option>
            <option value="Allergy">Allergy</option>
            <option value="Cold">Cold</option>
            <option value="Headache">Headache</option>
            <option value="Diabetes">Diabetes</option>
            <option value="Asthma">Asthma</option>
            <option value="Bronchitis">Bronchitis</option>
            <option value="Fracture">Fracture</option>
            <option value="Migraine">Migraine</option>
            <option value="Hypertension">Hypertension</option>
          </Form.Select>
        </Form.Group>
      </Form>

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Patient Name</th>
            <th>Condition</th>
            <th>Date</th>
            <th>Doctor</th>
          </tr>
        </thead>
        <tbody>
          {filteredRecords.length > 0 ? (
            filteredRecords.map((record) => (
              <tr key={record.id}>
                <td>{record.id}</td>
                <td>{record.patient}</td>
                <td>{record.condition}</td>
                <td>{record.date}</td>
                <td>{record.doctor}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="5" className="text-center">No records found</td>
            </tr>
          )}
        </tbody>
      </Table>
    </Container>
  );

}

export default SearchFilter;