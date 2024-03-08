import React, { useState } from 'react';
import AddCourseModal from '../../../../CourseInfo/CourseInfo';
import CourseList from '../CourseList';

function CourseInfoPage() {
  const [showPopup, setShowPopup] = useState(false);
  const [courses, setCourses] = useState([]);

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  const handleAddCourse = (course) => {
    setCourses([...courses, course]);
    setShowPopup(false);
  };

  return (
    <div>
      <h1>Course Information</h1>
      <button onClick={togglePopup}>All Courses</button>
      {showPopup && <AddCourseModal onSubmit={handleAddCourse} />}
      <CourseList courses={courses} />
    </div>
  );
}

export default CourseInfoPage;
