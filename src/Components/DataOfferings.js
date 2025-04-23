import React, { useState } from 'react';
import { v4 as uuid } from 'uuid';

const DataOfferings = ({ courseTypes, courses, offerings, setOfferings }) => {
  const [selectedType, setSelectedType] = useState('');
  const [selectedCourse, setSelectedCourse] = useState('');
  const [error, setError] = useState('');

  const addOffering = () => {
    if (!selectedType || !selectedCourse) {
      setError('Please select both course type and course');
      return;
    }
    
    const type = courseTypes.find(t => t.id === selectedType);
    const course = courses.find(c => c.id === selectedCourse);
    
    if (offerings.some(o => o.typeId === selectedType && o.courseId === selectedCourse)) {
      setError('This course offering already exists');
      return;
    }
    
    setOfferings([...offerings, {
      id: uuid(),
      typeId: selectedType,
      courseId: selectedCourse,
      name: `${type.name} - ${course.name}`
    }]);
    
    setSelectedType('');
    setSelectedCourse('');
    setError('');
  };

  const deleteOffering = (id) => {
    setOfferings(offerings.filter(o => o.id !== id));
  };

  return (
    <div className="card shadow-sm">
      <div className="card-body">
        <h3 className="card-title text-center mb-4">Course Offerings</h3>
        
        {error && <div className="alert alert-danger">{error}</div>}
        
        <div className="row g-2 mb-3">
          <div className="col-md-6">
            <select 
              className="form-control" 
              onChange={(e) => setSelectedType(e.target.value)} 
              value={selectedType}
            >
              <option value="">Select Course Type</option>
              {courseTypes.map(type => (
                <option key={type.id} value={type.id}>{type.name}</option>
              ))}
            </select>
          </div>
          <div className="col-md-6">
            <select 
              className="form-control" 
              onChange={(e) => setSelectedCourse(e.target.value)} 
              value={selectedCourse}
            >
              <option value="">Select Course</option>
              {courses.map(course => (
                <option key={course.id} value={course.id}>{course.name}</option>
              ))}
            </select>
          </div>
        </div>
        
        <div className="d-flex justify-content-center">
  <button className="btn btn-success mb-3" style={{ width: "150px" }} onClick={addOffering}>
    Add Offering
  </button>
</div>

        
        {offerings.length === 0 ? (
          <div className="text-center text-muted py-3">No course offerings added yet</div>
        ) : (
          <ul className="list-group">
            {offerings.map(off => (
              <li className="list-group-item d-flex justify-content-between align-items-center" key={off.id}>
                <span>{off.name}</span>
                <button 
                  className="btn btn-danger" 
                  onClick={() => deleteOffering(off.id)}
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default DataOfferings;