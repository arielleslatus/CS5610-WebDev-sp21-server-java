import React from 'react'
import CourseTable from "./course-table";
import CourseGrid from "./course-grid";
import CourseEditor from "./course-editor";

class CourseManager extends React.Component {
    state = {
        courses: [
            {title: "CS5610", owner: "me", lastModified: "1/1/2021"},
            {title: "CS3200", owner: "him", lastModified: "9/1/2020"},
            {title: "CS5001", owner: "you", lastModified: "3/1/2021"},
            {title: "CS5310", owner: "her", lastModified: "5/1/2021"}
        ]
    }

    addCourse = () => {
        const newCourse = {
            title: "New Course",
            owner: "me",
            lastModified: "2/19/2021"
        }
        this.state.courses.push(newCourse)
        this.setState(this.state)
    }

    deleteCourse = (courseToDelete) => {
        const newCourses = this.state.courses.filter(course => course !== courseToDelete)
        this.setState({courses: newCourses})
    }

    render() {
        return (
            <div>
                <h1>Course Manager</h1>
                <button onClick={this.addCourse}>Add Course</button>
                <CourseTable deleteCourse={this.deleteCourse} courses={this.state.courses}/>
                <CourseGrid deleteCourse={this.deleteCourse} courses={this.state.courses}/>
                <CourseEditor/>
            </div>

        )
    }

}

export default CourseManager