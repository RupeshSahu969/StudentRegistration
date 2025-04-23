import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import CourseTypes from './Components/CourseTypes';
import Courses from './Components/DataCourses';
import CourseOfferings from './Components/DataOfferings';
import StudentRegistrations from './Components/Student';
import DataCourses from './Components/DataCourses';
import DataOfferings from './Components/DataOfferings';
import Student from './Components/Student';

const App = () => {
  return (
    <>
      <div className="container mt-4">
        <nav className="navbar navbar-expand-lg navbar-light bg-light mb-4">
          <ul className="navbar-nav">
            <li className="nav-item"><Link className="nav-link" to="/course-types">Course Types</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/courses">Courses</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/course-offerings">Course Offerings</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/registrations">Student Registrations</Link></li>
          </ul>
        </nav>
        </div>
  
        <Routes>
      

      
        <Route path="/course-types" element={<CourseTypes />} />
        <Route path="/courses" element={<DataCourses />} />
        <Route path="/course-offerings" element={<DataOfferings />} />
        <Route path="/registrations" element={<Student />} />
      
    
  </Routes>
    </>
   
  );
};

export default App;
