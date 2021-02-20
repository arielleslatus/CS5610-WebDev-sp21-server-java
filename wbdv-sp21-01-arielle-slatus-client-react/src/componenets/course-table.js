import React from 'react'
import CourseRow from "./course-row";
import { Link } from "react-router-dom";

class CourseTable extends React.Component{

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <h2>Course Table</h2>
                <Link to="/courses/grid">
                    <i className="fas fa-table float-right"></i>
                </Link>
                <table className="table">
                    <tbody>
                    {
                        this.props.courses.map(course => <CourseRow
                            course={course}
                            deleteCourse={this.props.deleteCourse}
                            title={course.title}
                            owner={course.owner}
                            lastModified={course.lastModified}
                        />)
                    }
                    </tbody>
                </table>
            </div>

        )

    }
}

export default CourseTable

