import React, { useState } from 'react';
import { v4 as uuid } from 'uuid';

const DataCourses = ({ courses, setCourses }) => {
  const [name, setName] = useState('');
  const [error, setError] = useState('');

  const addCourse = () => {
    if (name.trim() === '') {
      setError('Course name cannot be empty');
      return;
    }
    
    if (courses.some(course => course.name.toLowerCase() === name.toLowerCase())) {
      setError('Course with this name already exists');
      return;
    }
    
    setCourses([...courses, { id: uuid(), name }]);
    setName('');
    setError('');
  };

  const updateCourse = (id, newName) => {
    if (newName.trim() === '') {
      return;
    }
    
    if (courses.some(course => course.id !== id && course.name.toLowerCase() === newName.toLowerCase())) {
      return;
    }
    
    setCourses(courses.map(course => course.id === id ? { ...course, name: newName } : course));
  };

  const deleteCourse = (id) => {
    setCourses(courses.filter(c => c.id !== id));
  };

  return (
    <div className="card shadow-sm">
      <div className="card-body">
        <h3 className="card-title text-center mb-4">Courses</h3>
        
        {error && <div className="alert alert-danger">{error}</div>}
        
        <div className="d-flex flex-column flex-md-row gap-2 mb-3">
          <input
            type="text"
            className="form-control"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter course name"
            onKeyPress={(e) => e.key === 'Enter' && addCourse()}
          />
          <button className="btn btn-primary" style={{width:"150px",justifyContent:"center"}} onClick={addCourse}>Add Course</button>
        </div>
        
        {courses.length === 0 ? (
          <div className="text-center text-muted py-3">No courses added yet</div>
        ) : (
          <ul className="list-group">
            {courses.map((course) => (
              <li className="list-group-item d-flex flex-column flex-md-row justify-content-between align-items-center gap-2" key={course.id}>
                <input
                  className="form-control"
                  value={course.name}
                  onChange={(e) => updateCourse(course.id, e.target.value)}
                />
                <button 
                  className="btn btn-danger" 
                  onClick={() => deleteCourse(course.id)}
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

export default DataCourses;