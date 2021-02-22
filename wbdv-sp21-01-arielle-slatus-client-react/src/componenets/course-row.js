import React, {useState} from 'react'
import {Link} from "react-router-dom";

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

        console.log(inputTitle)
        updateCourse(newCourse)
    }


    return (
            <tr>
                <td>
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
                <td>{course.owner}</td>
                <td>{course.lastModified}</td>
                <td>
                    <i onClick={() => deleteCourse(course)} className="fas fa-trash"></i>
                    {
                        !editing &&
                        <i onClick={() => setEditing(true)} className="fas fa-edit"></i>
                    }
                    {
                        editing &&
                        <i onClick={() => saveCourse()} className="fas fa-check"></i>
                    }
                </td>
            </tr>
           )

}

export default CourseRow