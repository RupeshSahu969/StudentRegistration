import React, { useState } from "react";
import CourseTypes from "./Components/CourseTypes";
import DataCourses from "./Components/DataCourses";
import DataOfferings from "./Components/DataOfferings";
import Student from "./Components/Student";
import { Container, Row, Col, Nav, NavItem, NavLink } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

const App = () => {
  const [activeTab, setActiveTab] = useState("1");
  const [courseTypes, setCourseTypes] = useState([]);
  const [courses, setCourses] = useState([]);
  const [offerings, setOfferings] = useState([]);

  const toggle = (tab) => {
    if (activeTab !== tab) setActiveTab(tab);
  };

  return (
    <Container className="my-5">
      <h1 className="text-center mb-4">Course Portal</h1>

      <Nav tabs className="mb-4 justify-content-center">
        <NavItem>
          <NavLink
            className={activeTab === "1" ? "active" : ""}
            onClick={() => toggle("1")}
          >
            Course Types
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={activeTab === "2" ? "active" : ""}
            onClick={() => toggle("2")}
          >
            Courses
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={activeTab === "3" ? "active" : ""}
            onClick={() => toggle("3")}
          >
            Course Offerings
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={activeTab === "4" ? "active" : ""}
            onClick={() => toggle("4")}
          >
            Student Registrations
          </NavLink>
        </NavItem>
      </Nav>

      <Row className="justify-content-center">
        <Col md="10" lg="8">
          {activeTab === "1" && (
            <CourseTypes types={courseTypes} setTypes={setCourseTypes} />
          )}
          {activeTab === "2" && (
            <DataCourses courses={courses} setCourses={setCourses} />
          )}
          {activeTab === "3" && (
            <DataOfferings
              courseTypes={courseTypes}
              courses={courses}
              offerings={offerings}
              setOfferings={setOfferings}
            />
          )}
          {activeTab === "4" && <Student offerings={offerings} />}
        </Col>
      </Row>
    </Container>
  );
};

export default App;
