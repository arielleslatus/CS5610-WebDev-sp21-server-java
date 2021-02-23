import React from 'react'
import CourseRow from "./course-row";
import { Link } from "react-router-dom";
import '../course-list.template.client.css'
import '../style.css'
import {findCourseById} from "../services/course-service";


class CourseTable extends React.Component{

    constructor(props) {
        super(props)
    }






    render() {
        return (
            <div className="ats-list-area" >
                {
                    this.props.courses.map(course => <CourseRow
                        key={course._id}
                        course={course}
                        deleteCourse={this.props.deleteCourse}
                        updateCourse={this.props.updateCourse}
                        title={course.title}
                        owner={course.owner}
                        lastModified={course.lastModified}
                    />)
                }
            </div>


        )

    }
}

export default CourseTable

