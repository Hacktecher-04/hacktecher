import React from "react";
import jsPDF from "jspdf";
import "jspdf-autotable";
import { Button } from "react-bootstrap";

const DocumentPage = () => {
  const reportData = [
    { id: 1, name: "John Doe", age: 22, condition: "Healthy", lastVisit: "2024-03-10" },
    { id: 2, name: "Jane Smith", age: 30, condition: "Diabetes", lastVisit: "2024-02-15" },
    { id: 3, name: "Alice Johnson", age: 28, condition: "Hypertension", lastVisit: "2024-01-22" },
    { id: 4, name: "Michael Brown", age: 35, condition: "Healthy", lastVisit: "2023-12-05" },
  ];

  const generatePDF = () => {
    const doc = new jsPDF();
    doc.setFontSize(18);
    doc.text("Patient Records Report", 14, 22);
    
    const headers = [["ID", "Name", "Age", "Condition", "Last Visit"]];
    const data = reportData.map(record => [record.id, record.name, record.age, record.condition, record.lastVisit]);
    
    doc.autoTable({ startY: 30, head: headers, body: data });
    doc.save("Patient_Records_Report.pdf");
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Download Patient Report</h2>
      <table className="table table-bordered">
        <thead className="thead-dark">
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Age</th>
            <th>Condition</th>
            <th>Last Visit</th>
          </tr>
        </thead>
        <tbody>
          {reportData.map((record) => (
            <tr key={record.id}>
              <td>{record.id}</td>
              <td>{record.name}</td>
              <td>{record.age}</td>
              <td>{record.condition}</td>
              <td>{record.lastVisit}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="text-center">
        <Button variant="primary" onClick={generatePDF}>Download Report as PDF</Button>
      </div>
    </div>
  );
};

export default DocumentPage;
