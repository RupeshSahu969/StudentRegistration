import React, { useState } from 'react';
import { v4 as uuid } from 'uuid';

const Student = () => {
  const [offerings, setOfferings] = useState([]);
  const [registrations, setRegistrations] = useState([]);
  const [selectedOffering, setSelectedOffering] = useState('');
  const [studentName, setStudentName] = useState('');

  const registerStudent = () => {
    if (!selectedOffering || studentName.trim() === '') return;
    setRegistrations([...registrations, {
      id: uuid(),
      offeringId: selectedOffering,
      student: studentName
    }]);
    setStudentName('');
  };

  return (
    <div>
      <h3>Student Registrations</h3>

      <select className="form-control mb-2" onChange={(e) => setSelectedOffering(e.target.value)} value={selectedOffering}>
        <option value="">Select Offering</option>
        {offerings.map(o => <option key={o.id} value={o.id}>{o.name}</option>)}
      </select>

      <input
        type="text"
        className="form-control mb-2"
        placeholder="Student Name"
        value={studentName}
        onChange={(e) => setStudentName(e.target.value)}
      />

      <button className="btn btn-primary mb-3" onClick={registerStudent}>Register</button>

      <ul className="list-group">
        {registrations
          .filter(r => r.offeringId === selectedOffering)
          .map(r => (
            <li className="list-group-item" key={r.id}>{r.student}</li>
          ))}
      </ul>
    </div>
  );
};

export default Student;
