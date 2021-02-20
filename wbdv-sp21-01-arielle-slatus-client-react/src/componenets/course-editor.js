import React from 'react'
import {Link} from "react-router-dom";

const CourseEditor = ({history}) => {
    return(
        <div>
            <Link to={"/courses"}>
                <i className="fas fa-arrow-left"></i>
            </Link>
            <span onClick={() => history.goBack()}>Go Back</span>
            <h1>Course Editor</h1>
        </div>
    )

}

export default CourseEditor