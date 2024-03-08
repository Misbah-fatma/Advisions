import { Button, Typography } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { Modal, Form } from "react-bootstrap";
import axios from "axios";
import Toast_Comp from "../../../../../components/Toast/Toast_Comp";
import Spinner_comp from "../../../../../components/Spinner/Spinner_comp";
import "./AddCourseModal.css";
import { useDispatch } from "react-redux";
// import { fetchCourseInfo } from "../../../../../Redux/course/courseAction";
import CourseList from "../CourseList";

const AddCourseModal = ({onSubmit}) => {
  const [show, setShow] = useState(false);
  const [lgShow, setLgShow] = useState(false);
  const [courseThumbnail, setCourseThumbnail] = useState("");
  const [courseDescription, setCourseDescription] = useState("");
  const [courseName, setCourseName] = useState("");
  const [imgLabel, setImgLabel] = useState("Choose photo");
  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState(false);
  const [users, setUsers] = useState([])
  const handleClose = () => setShow(false);
  const handleShow = () => {setShow(true)};
  const [courses, setCourses] = useState([]);



 

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ courseName, courseDescription, courseThumbnail });
    setCourseName('');
    setCourseDescription('');
    setCourseThumbnail(null);
  };



  
  return (
    <div>
      <Button color="primary" variant="contained" onClick={handleShow}>
        Add Course
      </Button>

      <Toast_Comp
        setToast={setToast}
        renderToast={toast}
        msg="Course Uploaded Successfully"
      />

      <Modal
        size="lg"
        show={lgShow}
        onHide={() => setLgShow(false)}
        aria-labelledby="example-modal-sizes-title-lg"
        show={show}
        onHide={handleClose}
      >
        <Modal.Header closeButton>
          <Modal.Title>
            <Typography color="textSecondary" variant="h4">
            <CourseList courses={courses} />
            </Typography>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {loading && <Spinner_comp />}

          <Form onSubmit={handleSubmit}>
            <Form.Group>
              <Form.Label>Course Name</Form.Label>
              <Form.Control
                required
                onChange={(e) => setCourseName(e.target.value)}
                value={courseName}
                type="text"
                placeholder="Enter course name"
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Course Description</Form.Label>

              <Form.Control
                required
                onChange={(e) => setCourseDescription(e.target.value)}
                value={courseDescription}
                as="textarea"
                rows={3}
                placeholder="Enter course Description"
              />
            </Form.Group>
            <Form.Group className="input__file">
              <label>Course Thumbnail</label>
              <br />
              <Form.File
                required
                type="file"
                filename="img"
                onChange={(e) => setCourseThumbnail(e.target.files[0])}
                id="custom-file"
                custom
                label={imgLabel ? `${imgLabel}` : "Choose photo"}
              />
            </Form.Group>
            <Button type="submit" color="primary" variant="contained">
              Submit
            </Button>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button color="secondary" variant="contained" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default AddCourseModal;
