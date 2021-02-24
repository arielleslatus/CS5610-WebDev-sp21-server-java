import React from 'react'
import {Link} from "react-router-dom";
import '../style.css'


const SubNavBarGrid = () =>
    <thead className=" row container-xxl ats-sticky-list-bar">
        <tr className="row container-lg flex-nowrap ats-align-center-horizontal">

            <th className="col-xs-11 col-sm-11 col-md-9">Recent Documents</th>
            <th className="col-2 d-none d-md-block">Owned by me</th>
            <th className="col-xs-1 col-sm-1">
                <i class="fas fa-sort-alpha-up-alt ats-icon-spacing float-left"></i>
                <i class="fas fa-folder ats-icon-spacing float-left"></i>
                <Link to="/courses/table">
                    <i className="fas fa-list float-left"></i>

                </Link>
            </th>
        </tr>
    </thead>

export default SubNavBarGrid