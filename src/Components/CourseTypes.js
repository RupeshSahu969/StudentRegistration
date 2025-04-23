import React, { useState } from 'react';
import { v4 as uuid } from 'uuid';

const CourseTypes = ({ types, setTypes }) => {
  const [name, setName] = useState('');
  const [error, setError] = useState('');

  const addType = () => {
    if (name.trim() === '') {
      setError('Course type name cannot be empty');
      return;
    }
    
    if (types.some(type => type.name.toLowerCase() === name.toLowerCase())) {
      setError('Course type with this name already exists');
      return;
    }
    
    setTypes([...types, { id: uuid(), name }]);
    setName('');
    setError('');
  };

  const updateType = (id, newName) => {
    if (newName.trim() === '') {
      return;
    }
    
    if (types.some(type => type.id !== id && type.name.toLowerCase() === newName.toLowerCase())) {
      return;
    }
    
    setTypes(types.map(type => type.id === id ? { ...type, name: newName } : type));
  };

  const deleteType = (id) => {
    setTypes(types.filter(t => t.id !== id));
  };

  return (
    <div className="card shadow-sm">
      <div className="card-body">
        <h3 className="card-title text-center mb-4">Course Types</h3>
        
        {error && <div className="alert alert-danger">{error}</div>}
        
        <div className="d-flex flex-column flex-md-row gap-2 mb-3">
          <input
            type="text"
            className="form-control"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter course type"
            onKeyPress={(e) => e.key === 'Enter' && addType()}
          />
          <button className="btn btn-success" style={{width:"150px"}} onClick={addType}>Add Type</button>
        </div>
        
        {types.length === 0 ? (
          <div className="text-center text-muted py-3">No course types added yet</div>
        ) : (
          <ul className="list-group">
            {types.map((type) => (
              <li className="list-group-item d-flex flex-column flex-md-row justify-content-between align-items-center gap-2" key={type.id}>
                <input
                  className="form-control"
                  value={type.name}
                  onChange={(e) => updateType(type.id, e.target.value)}
                />
                <button 
                  className="btn btn-danger" 
                  onClick={() => deleteType(type.id)}
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

export default CourseTypes;