import React from 'react'
import CourseTable from "./course-table";
import CourseGrid from "./course-grid";
import CourseEditor from "./course-editor";
import Route from "react-router-dom/es/Route";
import courseService, {findAllCourses, deleteCourse, updateCourse, findCourseById} from "../services/course-service"
import '../course-list.template.client.css'
import '../style.css'


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
            <div className="container-xxl">
                <div class="ats-sticky-nav-bar">
                    <div className="row">
                        <div className="col-1">
                            <i className="fas fa-bars fa-2x"></i>
                        </div>
                        <div className="col-2  d-none d-lg-block ats-vertical-align">
                            Course Manager
                        </div>
                        <div className="col-8">
                            <input type="text" className="form-control"
                                   placeholder="New Course Title"/>
                        </div>
                        <div>
                            <i onClick={this.addCourse} className="fas fa-plus fa-2x"></i>
                        </div>
                    </div>
                </div>


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