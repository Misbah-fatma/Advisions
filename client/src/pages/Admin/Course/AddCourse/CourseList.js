import React from 'react';

function CourseList({ courses }) {
  return (
    <div>
      <h2>Course List</h2>
      <ul>
        {courses.map((course, index) => (
          <li key={index}>
            <strong>{course.courseName}</strong> - {course.courseDescription}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CourseList;
