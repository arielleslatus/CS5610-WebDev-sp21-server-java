import React from 'react'
import CourseTable from "./course-table";
import CourseGrid from "./course-grid";
import CourseEditor from "./course-editor";
import Route from "react-router-dom/es/Route";
import courseService, {findAllCourses, deleteCourse, updateCourse, findCourseById} from "../services/course-service"

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

    updateCourse = (course) => {
        courseService.updateCourse(course._id, course)
            .then(status => {
                this.setState((prevState) => {
                    let nextState = {...prevState}
                    nextState.courses = prevState.courses.map(c => {
                        if (c._id === course._id) {
                            return course
                        } else {
                            return c
                        }
                    })
                    return nextState
                })
            })
    }

    render() {
        return (
            <div>
                <h1>Course Manager</h1>
                <button onClick={this.addCourse}>Add Course</button>
                <Route path="/courses/grid">
                    <CourseGrid
                        deleteCourse={this.deleteCourse}
                        updateCourse={this.updateCourse}
                        courses={this.state.courses}/>
                </Route>
                <Route path="/courses/table">
                    <CourseTable
                        deleteCourse={this.deleteCourse}
                        updateCourse={this.updateCourse}
                        courses={this.state.courses}/>
                </Route>

            </div>

        )
    }

}

export default CourseManager