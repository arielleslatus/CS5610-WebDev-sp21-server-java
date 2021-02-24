import React, {useState} from 'react'
import {Link} from "react-router-dom";
import '../course-list.template.client.css'
import '../style.css'

const CourseRow = ({course,
                       deleteCourse,
                       updateCourse,
                       setCurrentCourse,
                       title="Unknown",
                       owner="Unknown",
                       lastModified="Unknown"
                    }) => {

    const [editing, setEditing] = useState(false)
    const [inputTitle, setTitle] = useState(course.title)

    const saveCourse = () => {
        setEditing(false)
        const newCourse = {
            ...course,
            title: inputTitle
        }
        updateCourse(newCourse)
    }

    const doDelete = (course) => {
        deleteCourse(course)
        setEditing(false)
        console.log(inputTitle)
    }




    return (
        <tr className="row container-lg ats-list-item  flex-nowrap">
            <td scope="col" className="col-lx-6 col-lg-6 col-md-7 col-sm-7 col-xs-11">
                <i className="fas fa-folder ats-icon-spacing"></i>
                {
                    !editing &&
                    <Link to={"/editor"}>
                        {course.title}
                    </Link>
                }
                {
                    editing &&
                    <input
                        onChange={(e) => setTitle(e.target.value)}
                        value={inputTitle}/>
                }
            </td>
            <td scope="col" className="col-xl-3 col-lg-3 col-md-4 col-sm-4 d-none d-sm-table-cell">{course.owner}</td>
            <td scope="col" className="col-xl-2 col-lg-2 d-none d-lg-table-cell">{course.lastModified}</td>
            <td scope="col" className="col-xl-1 col-lg-1 col-md-1 col-sm-1 col-xs-1 float-left flex-nowrap">

                {
                    !editing &&
                    <i onClick={() => setEditing(true)} className="fas fa-edit ats-icon-spacing"></i>
                }
                {
                    editing &&
                    <div>
                        <i onClick={() => saveCourse()} className="fas fa-check ats-icon-spacing"></i>
                        <i onClick={() => doDelete(course)} className="fas fa-trash ats-icon-spacing"></i>

                    </div>
                }
            </td>
        </tr>
    )

}

export default CourseRow