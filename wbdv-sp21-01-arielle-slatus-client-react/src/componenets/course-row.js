import React from 'react'

const CourseRow = ({course,
                       title="Unknown",
                       owner="Unknown",
                       lastModified="Unknown"
                    }) => {

    return (
            <tr>
                <td>{course.title}</td>
                <td>{course.owner}</td>
                <td>{course.lastModified}</td>
                <td>
                    <i className="fas fa-trash"></i>
                    <i className="fas fa-edit"></i>
                    <i className="fas fa-check"></i>
                </td>
            </tr>
           )

}

export default CourseRow