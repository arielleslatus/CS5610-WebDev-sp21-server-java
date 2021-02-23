import React, {useState} from 'react'
import {Link} from 'react-router-dom'

const CourseCard = ({course,
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
        <div className="col-4 ats-card">
            <div className="card ">
                <div className="card-body">
                    {
                        !editing &&
                        <div>
                            <Link to={"/editor"}>
                                {course.title}
                            </Link>
                            <div></div>
                            <div></div>
                            <div></div>

                            <i onClick={() => setEditing(true)} className="fas fa-edit"></i>
                        </div>


                    }
                    {
                        editing &&
                        <div>
                            <input onChange={(e) => setTitle(e.target.value)} value={inputTitle}/>
                            <div></div>
                            <div></div>
                            <div></div>

                            <i onClick={() => saveCourse()} className="fas fa-check"></i>
                            <i onClick={() => {
                                deleteCourse(course);
                                setEditing(false);
                            }} className="fas fa-trash"></i>


                        </div>
                    }
                </div>
            </div>
        </div>
    )
}




export default CourseCard