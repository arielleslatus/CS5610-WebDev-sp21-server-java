import React, {useState} from 'react'
import {Link} from "react-router-dom";
import '../course-list.template.client.css'
import '../style.css'

const CourseRow = ({course,
                       deleteCourse,
                       updateCourse,
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


    return (
        <tr className="row container-lg ats-list-item">
            <td className="col-xs-11 col-sm-11 col-md-7">
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
            <td className="col-2 d-none d-md-block">{course.owner}</td>
            <td className="col-2 d-none d-md-block">{course.lastModified}</td>
            <td className="col-xs-1 col-sm-1">
                <i onClick={() => deleteCourse(course)} className="fas fa-trash ats-icon-spacing"></i>

                {
                    !editing &&
                    <i onClick={() => setEditing(true)} className="fas fa-edit ats-icon-spacing"></i>
                }
                {
                    editing &&
                    <div>
                        <i onClick={() => saveCourse()} className="fas fa-check ats-icon-spacing"></i>
                    </div>
                }
            </td>
        </tr>
    )

}

export default CourseRow