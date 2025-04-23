import React, { useState } from 'react';
import { v4 as uuid } from 'uuid';

const DataOfferings = () => {
  const [courseTypes, setCourseTypes] = useState([]);
  const [courses, setCourses] = useState([]);
  const [offerings, setOfferings] = useState([]);
  const [selectedType, setSelectedType] = useState('');
  const [selectedCourse, setSelectedCourse] = useState('');

  const addOffering = () => {
    if (!selectedType || !selectedCourse) return;
    const type = courseTypes.find(t => t.id === selectedType);
    const course = courses.find(c => c.id === selectedCourse);
    setOfferings([...offerings, {
      id: uuid(),
      typeId: selectedType,
      courseId: selectedCourse,
      name: `${type.name} - ${course.name}`
    }]);
  };

  const deleteOffering = (id) => {
    setOfferings(offerings.filter(o => o.id !== id));
  };

  return (
    <div>
      <h3>Course Offerings</h3>

      <select className="form-control mb-2" onChange={(e) => setSelectedType(e.target.value)} value={selectedType}>
        <option value="">Select Course Type</option>
        {courseTypes.map(type => <option key={type.id} value={type.id}>{type.name}</option>)}
      </select>

      <select className="form-control mb-2" onChange={(e) => setSelectedCourse(e.target.value)} value={selectedCourse}>
        <option value="">Select Course</option>
        {courses.map(course => <option key={course.id} value={course.id}>{course.name}</option>)}
      </select>

      <button className="btn btn-primary mb-3" onClick={addOffering}>Add Offering</button>

      <ul className="list-group">
        {offerings.map(off => (
          <li className="list-group-item d-flex justify-content-between align-items-center" key={off.id}>
            {off.name}
            <button className="btn btn-danger" onClick={() => deleteOffering(off.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DataOfferings;
