import React from 'react'
import CourseTable from "./course-table";
import CourseGrid from "./course-grid";

class CourseManager extends React.Component {
    state = {
        courses: [
            {title: "CS5610", owner: "me", lastModified: "1/1/2021"},
            {title: "CS3200", owner: "him", lastModified: "9/1/2020"},
            {title: "CS5001", owner: "you", lastModified: "3/1/2021"},
            {title: "CS5310", owner: "her", lastModified: "5/1/2021"}
        ]
    }
    render() {
        return (
            <div>
                <h1>Course Manager</h1>
                <CourseTable courses={this.state.courses}/>
                <CourseGrid />
            </div>

        )
    }

}

export default CourseManager