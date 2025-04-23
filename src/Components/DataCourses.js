import React, { useState } from 'react';
import { v4 as uuid } from 'uuid';

const DataCourses = () => {
  const [courses, setCourses] = useState([]);
  const [name, setName] = useState('');

  const addCourse = () => {
    if (name.trim() === '') return;
    setCourses([...courses, { id: uuid(), name }]);
    setName('');
  };

  const updateCourse = (id, newName) => {
    setCourses(courses.map(course => course.id === id ? { ...course, name: newName } : course));
  };

  const deleteCourse = (id) => {
    setCourses(courses.filter(c => c.id !== id));
  };

  return (
    <div>
      <h3>Courses</h3>
      <input
        type="text"
        className="form-control mb-2"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter course name"
      />
      <button className="btn btn-primary mb-3" onClick={addCourse}>Add Course</button>
      <ul className="list-group">
        {courses.map((course) => (
          <li className="list-group-item d-flex justify-content-between align-items-center" key={course.id}>
            <input
              className="form-control"
              value={course.name}
              onChange={(e) => updateCourse(course.id, e.target.value)}
            />
            <button className="btn btn-danger" onClick={() => deleteCourse(course.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DataCourses;
