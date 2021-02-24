import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import picture from './stock-pic.jpg'

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
            <div className="card text-wrap">
                <div className="card-body flex-wrap">
                    <img className="card-img-top" src={picture} alt="Card image cap"/>
                    {
                        !editing &&
                        <div>
                            <Link to={"/editor"}>
                                {course.title}
                            </Link>
                            <div></div>
                            <div></div>
                            <div></div>

                            <i onClick={() => setEditing(true)} className="fas fa-edit float-right"></i>
                        </div>


                    }
                    {
                        editing &&
                        <div>
                            <input className="form-control" onChange={(e) => setTitle(e.target.value)} value={inputTitle}/>
                            <div></div>
                            <div></div>
                            <div></div>

                            <i onClick={() => saveCourse()} className="fas fa-check float-right ats-card-icon-spacing"></i>
                            <i onClick={() => {
                                deleteCourse(course);
                                setEditing(false);
                            }} className="fas fa-trash float-right ats-card-icon-spacing"></i>


                        </div>
                    }
                </div>
            </div>
        </div>
    )
}




export default CourseCard