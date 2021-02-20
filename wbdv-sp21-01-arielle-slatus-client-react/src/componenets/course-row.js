import React from 'react'
import {Link} from "react-router-dom";

const CourseRow = ({course,
                       deleteCourse,
                       title="Unknown",
                       owner="Unknown",
                       lastModified="Unknown"
                    }) => {

    return (
            <tr>
                <td>
                    <Link to={"/editor"}>
                        {course.title}
                    </Link>
                </td>
                <td>{course.owner}</td>
                <td>{course.lastModified}</td>
                <td>
                    <i onClick={() => deleteCourse(course)} className="fas fa-trash"></i>
                    <i className="fas fa-edit"></i>
                    <i className="fas fa-check"></i>
                </td>
            </tr>
           )

}

export default CourseRow