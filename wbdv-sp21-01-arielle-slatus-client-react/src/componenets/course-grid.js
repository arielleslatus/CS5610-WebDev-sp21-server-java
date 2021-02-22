import React from 'react'
import CourseCard from "./course-card";
import { Link } from "react-router-dom";
import CourseRow from "./course-row";

const CourseGrid = ({courses, deleteCourse, updateCourse}) =>
    <div>
        <h2>Course Grid</h2>
        <Link to="/courses/table">
            <i className="fas fa-list float-right"></i>

        </Link>


        <div className="row">
        {
            courses.map(course => <CourseCard
                    course={course}
                    deleteCourse={deleteCourse}
                    updateCourse={updateCourse}
                    title={course.title}
                    owner={course.owner}
                    lastModified={course.lastModified}
            />)
        }
        </div>
    </div>

export default CourseGrid