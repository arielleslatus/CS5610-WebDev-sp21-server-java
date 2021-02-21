import React from 'react'
import CourseTable from "./course-table";
import CourseGrid from "./course-grid";
import CourseEditor from "./course-editor";
import Route from "react-router-dom/es/Route";
import courseService, {findAllCourses, deleteCourse} from "../services/course-service"

class CourseManager extends React.Component {
    state = {
        courses: []
    }


    componentDidMount() {
        courseService.findAllCourses()
            .then(courses => this.setState({courses}))
    }

    addCourse = () => {
        const newCourse = {
            title: "New Course",
            owner: "me",
            lastModified: "2/19/2021"
        }
        courseService.createCourse(newCourse)
            .then(actualCourse => {
                this.state.courses.push(actualCourse)
                this.setState(this.state)
            })
    }


    deleteCourse = (courseToDelete) => {
        courseService.deleteCourse(courseToDelete._id)
            .then(status => {
                this.setState((prevState) => ({
                    courses: prevState.courses.filter(course => course._id !== courseToDelete._id)
                }))
            })
    }

    render() {
        return (
            <div>
                <h1>Course Manager</h1>
                <button onClick={this.addCourse}>Add Course</button>
                <Route path="/courses/grid">
                    <CourseGrid deleteCourse={this.deleteCourse} courses={this.state.courses}/>
                </Route>
                <Route path="/courses/table">
                    <CourseTable deleteCourse={this.deleteCourse} courses={this.state.courses}/>
                </Route>

            </div>

        )
    }

}

export default CourseManager