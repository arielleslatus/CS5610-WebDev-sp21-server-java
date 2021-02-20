import React from 'react'
import CourseRow from "./course-row";

class CourseTable extends React.Component{

    constructor(props) {
        super(props)

    }




    render() {

            return (
                <div>
                    <h2>Course Table</h2>
                    <table className="table">
                        <tbody>
                        {
                            this.props.courses.map(course =>
                                                       <CourseRow
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

