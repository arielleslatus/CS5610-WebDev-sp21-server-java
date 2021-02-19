import React from 'react'
import CourseRow from "./course-row";

class CourseTable extends React.Component{


    addCourse = () => {
        const newCourse = {
            title: "New Course",
            owner: "me",
            lastModified: "2/19/2021"
        }
        this.state.courses.push(newCourse)
        this.setState(this.state)
    }

    render() {

            return (
                <div>
                    <h2>Course Table</h2>
                    <button onClick={this.addCourse}>Add Course</button>
                    <table className="table">
                        {
                            this.state.courses.map(course =>
                                                 <CourseRow course={course}/>)
                        }
                    </table>
                </div>

            )

    }
}

export default CourseTable

