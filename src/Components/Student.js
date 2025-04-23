import React, { useState } from 'react';
import { v4 as uuid } from 'uuid';

const Student = ({ offerings }) => {
  const [registrations, setRegistrations] = useState([]);
  const [selectedOffering, setSelectedOffering] = useState('');
  const [studentName, setStudentName] = useState('');
  const [error, setError] = useState('');

  const registerStudent = () => {
    if (!selectedOffering) {
      setError('Please select a course offering');
      return;
    }
    
    if (studentName.trim() === '') {
      setError('Student name cannot be empty');
      return;
    }
    
    setRegistrations([...registrations, {
      id: uuid(),
      offeringId: selectedOffering,
      student: studentName.trim()
    }]);
    
    setStudentName('');
    setError('');
  };

  return (
    <div className="card shadow-sm">
      <div className="card-body">
        <h3 className="card-title text-center mb-4">Student Registrations</h3>
        
        {error && <div className="alert alert-danger">{error}</div>}
        
        <div className="mb-3">
          <select 
            className="form-control mb-2" 
            onChange={(e) => setSelectedOffering(e.target.value)} 
            value={selectedOffering}
          >
            <option value="">Select Course Offering</option>
            {offerings.map(o => (
              <option key={o.id} value={o.id}>{o.name}</option>
            ))}
          </select>
          
          <div className="d-flex flex-column flex-md-row gap-2">
            <input
              type="text"
              className="form-control"
              placeholder="Student Name"
              value={studentName}
              onChange={(e) => setStudentName(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && registerStudent()}
            />
            <button 
              className="btn btn-primary" 
              onClick={registerStudent}
            >
              Register
            </button>
          </div>
        </div>
        
        {selectedOffering ? (
          <div>
            <h5 className="text-center mb-3">
              Students for: {
                offerings.find(o => o.id === selectedOffering)?.name || 'Selected Offering'
              }
            </h5>
            
            {registrations.filter(r => r.offeringId === selectedOffering).length === 0 ? (
              <div className="text-center text-muted py-3">No students registered yet</div>
            ) : (
              <ul className="list-group">
                {registrations
                  .filter(r => r.offeringId === selectedOffering)
                  .map(r => (
                    <li className="list-group-item d-flex justify-content-between align-items-center" key={r.id}>
                      {r.student}
                      <button 
                        className="btn btn-sm btn-outline-danger"
                        onClick={() => setRegistrations(registrations.filter(reg => reg.id !== r.id))}
                      >
                        Remove
                      </button>
                    </li>
                  ))}
              </ul>
            )}
          </div>
        ) : (
          <div className="text-center text-muted py-3">Select a course offering to view registrations</div>
        )}
      </div>
    </div>
  );
};

export default Student;