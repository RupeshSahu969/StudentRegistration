// src/components/CourseTypes.js
import React, { useState } from 'react';
import { v4 as uuid } from 'uuid';

const CourseTypes = () => {
  const [types, setTypes] = useState([]);
  const [name, setName] = useState('');

  const addType = () => {
    if (name.trim() === '') return;
    setTypes([...types, { id: uuid(), name }]);
    setName('');
  };

  const updateType = (id, newName) => {
    setTypes(types.map(type => type.id === id ? { ...type, name: newName } : type));
  };

  const deleteType = (id) => {
    setTypes(types.filter(t => t.id !== id));
  };

  return (
    <div>
      <h3>Course Types</h3>
      <input
        type="text"
        className="form-control mb-2"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter course type"
      />
      <button className="btn btn-primary mb-3" onClick={addType}>Add Type</button>
      <ul className="list-group">
        {types.map((type) => (
          <li className="list-group-item d-flex justify-content-between align-items-center" key={type.id}>
            <input
              className="form-control"
              value={type.name}
              onChange={(e) => updateType(type.id, e.target.value)}
            />
            <button className="btn btn-danger" onClick={() => deleteType(type.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CourseTypes;
