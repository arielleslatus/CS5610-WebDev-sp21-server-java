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
        <div className="col-4">
            <div className="card">
                <div className="card-body">
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
                    <p className="card-text">Some quick example text to build on the card title and
                        make up the bulk of the card's content.</p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                    <i onClick={() => deleteCourse(course)} className="fas fa-trash"></i>

                    {
                        !editing &&
                        <i onClick={() => setEditing(true)} className="fas fa-edit"></i>
                    }
                    {
                        editing &&
                        <i onClick={() => saveCourse()} className="fas fa-check"></i>
                    }



                </div>
            </div>
        </div>
    )
}




export default CourseCard