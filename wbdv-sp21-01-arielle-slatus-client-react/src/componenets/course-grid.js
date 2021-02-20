import React from 'react'
import CourseCard from "./course-card";
import { Link } from "react-router-dom";

const CourseGrid = ({courses}) =>
    <div>
        <h2>Course Grid</h2>
        <Link to="/courses/table">
            <i className="fas fa-list float-right"></i>

        </Link>


        <div className="row">
        {
            courses.map(course =>
                <CourseCard course={course}/>
            )
        }
        </div>
    </div>

export default CourseGrid