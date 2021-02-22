import React from 'react'
import CourseRow from "./course-row";
import { Link } from "react-router-dom";
import '../course-list.template.client.css'
import '../style.css'


class CourseTable extends React.Component{

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <table className="table ats-fill ats-page-body" >
                <thead className=" row container-xxl ats-sticky-list-bar">
                    <tr className="col-2"></tr>
                    <tr className="row container-lg">
                        <th className="col-xs-11 col-sm-11 col-md-7">Title</th>
                        <th className="col-2 d-none d-md-block">Owned by</th>
                        <th className="col-2 d-none d-md-block">Last Modified</th>
                        <th className="col-xs-1 col-sm-1">
                            <Link to="/courses/grid">
                                <i className="fas fa-table float-right"></i>
                            </Link>
                        </th>
                    </tr>
                </thead>
                <tbody className="ats-table">
                    <div className="ats-list-area" >
                        {
                            this.props.courses.map(course => <CourseRow
                                course={course}
                                deleteCourse={this.props.deleteCourse}
                                updateCourse={this.props.updateCourse}
                                title={course.title}
                                owner={course.owner}
                                lastModified={course.lastModified}
                            />)
                        }
                    </div>

                <i className="fas fa-plus-circle fa-3x float-right ats-floating-plus-icon"></i>
                </tbody>
            </table>

        )

    }
}

export default CourseTable

